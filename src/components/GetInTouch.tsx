import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useTranslation } from "react-i18next";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const GetInTouch = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-white rounded-lg shadow-sm p-4 md:p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-blue-900">
        {t("contact.title")}
      </h2>
      <div className="flex justify-center space-x-4 md:space-x-6">
        <a
          href="https://github.com/danmory"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-900 transition-colors"
        >
          <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="https://linkedin.com/in/danila-moriakov-492989227"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-900 transition-colors"
        >
          <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="https://t.me/danmory"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-900 transition-colors"
        >
          <FaTelegram className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="https://leetcode.com/danmory"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-900 transition-colors"
        >
          <SiLeetcode className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </motion.div>
  );
};
