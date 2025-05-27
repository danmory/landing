import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import meImage from "../assets/me.jpg";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-white rounded-lg shadow-sm p-4 md:p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100"
    >
      <div className="flex flex-col items-center mb-4 md:mb-6">
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-3 md:mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 animate-pulse"></div>
          <img
            src={meImage}
            alt="Profile"
            className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-center text-blue-900">
          {t("about.name")}
        </h1>
        <p className="text-blue-600 text-xs md:text-sm text-center">{t("about.title")}</p>
      </div>
      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
        {t("about.description")}
      </p>
    </motion.div>
  );
};
