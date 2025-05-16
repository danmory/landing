import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t("hero.title")}
          </h1>
          <h2 className="text-2xl md:text-3xl text-accent mb-6">
            {t("hero.subtitle")}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            {t("hero.description")}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent2 transition-colors"
          >
            {t("hero.cta")}
          </motion.button>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
