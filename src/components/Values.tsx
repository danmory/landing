import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/quote-slider.css";

interface Quote {
  text: string;
  author: string;
  source: string;
}

interface Value {
  name: string;
  description: string;
  importance: number;
}

const Values = () => {
  const { t } = useTranslation();

  const quotes: Quote[] = [
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
      source: "Management Consultant",
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      source: "Apple Co-founder",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      source: "Apple Co-founder",
    },
  ];

  const values: Value[] = [
    {
      name: "Integrity",
      description: "Always acting with honesty and strong moral principles",
      importance: 95,
    },
    {
      name: "Continuous Learning",
      description: "Constantly seeking knowledge and self-improvement",
      importance: 90,
    },
    {
      name: "Discipline",
      description: "Maintaining focus and consistency in all endeavors",
      importance: 85,
    },
    {
      name: "Innovation",
      description: "Embracing change and creative problem-solving",
      importance: 80,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "quote-slider",
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
        >
          {t("values.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Quotes Section */}
          <div className="relative">
            <Slider {...settings}>
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="quote-card">
                    <blockquote>"{quote.text}"</blockquote>
                    <div className="author">
                      <div className="author-info">
                        <p className="author-name">{quote.author}</p>
                        <p className="author-title">{quote.source}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent-light">
              {t("values.coreValues")}
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 group hover:bg-gradient-to-r hover:from-accent/5 hover:to-accent2/5 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold text-accent-light">
                      {value.name}
                    </h4>
                    <span className="text-sm text-accent-light/70">
                      {t(`values.importanceLevels.${getImportanceLevel(value.importance)}`)}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{value.description}</p>
                  <div className="h-1 w-full bg-gray-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${value.importance}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-accent to-accent2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const getImportanceLevel = (importance: number): string => {
  if (importance >= 90) return "critical";
  if (importance >= 80) return "high";
  if (importance >= 70) return "medium";
  return "low";
};

export default Values;
