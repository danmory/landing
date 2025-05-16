import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Value {
  title: string;
  description: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

interface Interest {
  title: string;
  description: string;
  image: string;
  titleKey: string;
  descriptionKey: string;
}

const CompanyValues = () => {
  const { t } = useTranslation();

  const values: Value[] = [
    {
      title: t('companyValues.innovation'),
      description: t('companyValues.innovationDesc'),
      icon: "💡",
      titleKey: "innovation",
      descriptionKey: "innovationDesc"
    },
    {
      title: t('companyValues.excellence'),
      description: t('companyValues.excellenceDesc'),
      icon: "⭐",
      titleKey: "excellence",
      descriptionKey: "excellenceDesc"
    },
    {
      title: t('companyValues.collaboration'),
      description: t('companyValues.collaborationDesc'),
      icon: "🤝",
      titleKey: "collaboration",
      descriptionKey: "collaborationDesc"
    },
    {
      title: t('companyValues.integrity'),
      description: t('companyValues.integrityDesc'),
      icon: "🔒",
      titleKey: "integrity",
      descriptionKey: "integrityDesc"
    }
  ];

  const interests: Interest[] = [
    {
      title: t('interests.aiAndML'),
      description: t('interests.aiDescription'),
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      titleKey: "aiAndML",
      descriptionKey: "aiDescription"
    },
    {
      title: t('interests.cloudComputing'),
      description: t('interests.cloudDescription'),
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      titleKey: "cloudComputing",
      descriptionKey: "cloudDescription"
    },
    {
      title: t('interests.cybersecurity'),
      description: t('interests.securityDescription'),
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      titleKey: "cybersecurity",
      descriptionKey: "securityDescription"
    }
  ];

  const ValueCard = ({ value }: { value: Value }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg p-6"
    >
      <span className="text-4xl mb-4 block">{value.icon}</span>
      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
      <p className="text-gray-300">{value.description}</p>
    </motion.div>
  );

  const InterestCard = ({ interest }: { interest: Interest }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-lg h-[300px]"
    >
      <img
        src={interest.image}
        alt={interest.title}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{interest.title}</h3>
        <p className="text-gray-200">{interest.description}</p>
      </div>
    </motion.div>
  );

  const ValuesCarousel = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition((prev) => (prev - 1) % (values.length * 300));
      }, 50);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex flex-col space-y-6">
          {[...values, ...values].map((value, index) => (
            <motion.div
              key={index}
              style={{
                y: position + index * 300,
              }}
              className="flex-shrink-0"
            >
              <ValueCard value={value} />
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const InterestsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % interests.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + interests.length) % interests.length);
    };

    return (
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {interests.map((interest, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <InterestCard interest={interest} />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">
            {t('companyValues.areasOfFocus')}
          </h2>
          <InterestsSlider />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">
            {t('companyValues.myValues')}
          </h2>
          <ValuesCarousel />
        </div>
      </div>
    </div>
  );
};

export default CompanyValues; 