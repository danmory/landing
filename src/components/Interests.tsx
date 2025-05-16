import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Interest {
  title: string;
  description: string;
  icon: string;
  images?: string[];
}

const Interests = () => {
  const { t } = useTranslation();

  const interests: Interest[] = [
    {
      title: t("interests.boxing"),
      description: t("interests.boxingDesc"),
      icon: "🥊",
      images: ["/interests/boxing1.jpg", "/interests/boxing2.jpg"],
    },
    {
      title: t("interests.philosophy"),
      description: t("interests.philosophyDesc"),
      icon: "📚",
      images: ["/interests/philosophy1.jpg", "/interests/philosophy2.jpg"],
    },
    {
      title: t("interests.languages"),
      description: t("interests.languagesDesc"),
      icon: "🌍",
      images: ["/interests/languages1.jpg", "/interests/languages2.jpg"],
    },
    {
      title: t("interests.speaking"),
      description: t("interests.speakingDesc"),
      icon: "🎤",
      images: ["/interests/speaking1.jpg", "/interests/speaking2.jpg"],
    },
  ];

  return (
    <section className="min-h-screen bg-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t("interests.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-primary rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{interest.icon}</span>
                  <h3 className="text-2xl font-semibold">{interest.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{interest.description}</p>
                {interest.images && (
                  <div className="grid grid-cols-2 gap-4">
                    {interest.images.map((image, imgIndex) => (
                      <motion.img
                        key={imgIndex}
                        src={image}
                        alt={`${interest.title} ${imgIndex + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
