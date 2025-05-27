import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiTon,
  SiScala,
  SiTelegram,
  SiBitcoin,
  SiEthereum,
  SiSolidity,
  SiOpenai,
  SiLangchain,
  SiDocker,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const projects = [
  {
    key: "legalDocuments",
    tech: [SiPython, SiSolidity, SiOpenai, SiLangchain],
  },
  {
    key: "blockchainDFA",
    tech: [SiScala, SiPostgresql],
  },
  {
    key: "tonAppChain",
    tech: [SiGo, SiTon, SiNodedotjs, SiDocker, SiMongodb, SiPostgresql],
  },
  {
    key: "tonArena",
    tech: [SiPython, SiReact, SiTypescript, SiTon, SiDocker, SiMongodb],
  },
  {
    key: "blockchainExplorer",
    tech: [SiNodedotjs, SiReact, SiTypescript],
  },
  {
    key: "custodialWallet",
    tech: [SiScala, SiPython, SiTelegram, SiBitcoin, SiEthereum],
  },
  {
    key: "luckyShot",
    tech: [SiGo, SiReact, SiTypescript, SiTon, SiTelegram, SiDocker],
  },
];

const experience = [
  {
    key: "sberbank",
  },
  {
    key: "techfrens",
  },
  {
    key: "tonAppChain",
  },
  {
    key: "openMobile",
  },
  {
    key: "mts",
  },
];

const education = [
  {
    key: "masters",
  },
  {
    key: "bachelors",
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type TabType = "projects" | "experience" | "education";

export const Experience = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  const renderContent = () => {
    const content = {
      projects: (
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="border border-blue-100 rounded-lg p-4 hover:shadow-md transition-shadow bg-gradient-to-br from-white to-blue-50"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-900">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {t(`projects.${project.key}.description`)}
                  </p>
                  <div className="flex gap-3 mb-3">
                    {project.tech.map((Icon, i) => (
                      <Icon key={i} className="w-5 h-5 text-blue-500" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ),
      experience: (
        <div className="grid grid-cols-1 gap-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.key}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="border border-blue-100 rounded-lg p-4 bg-gradient-to-br from-white to-blue-50"
            >
              <h3 className="text-lg font-semibold mb-1 text-blue-900">
                {t(`experience.${job.key}.title`)}
              </h3>
              <p className="text-sm text-blue-600 mb-2">
                {t(`experience.${job.key}.company`)}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                {t(`experience.${job.key}.period`)}
              </p>
              <p className="text-sm text-gray-600">
                {t(`experience.${job.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      ),
      education: (
        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.key}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="border border-blue-100 rounded-lg p-4 bg-gradient-to-br from-white to-blue-50"
            >
              <h3 className="text-lg font-semibold mb-1 text-blue-900">
                {t(`education.${edu.key}.degree`)}
              </h3>
              <p className="text-sm text-blue-600 mb-2">
                {t(`education.${edu.key}.school`)}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                {t(`education.${edu.key}.period`)}
              </p>
              <p className="text-sm text-gray-600">
                {t(`education.${edu.key}.focus`)}
              </p>
            </motion.div>
          ))}
        </div>
      ),
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="h-full"
        >
          {content[activeTab]}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-white rounded-lg shadow-sm p-4 md:p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100"
    >
      <div className="flex flex-wrap gap-4 md:gap-8 border-b border-blue-100 mb-4 md:mb-6">
        {[
          { id: "projects", label: t("tabs.featuredProjects") },
          { id: "experience", label: t("tabs.workExperience") },
          { id: "education", label: t("tabs.education") },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`pb-2 md:pb-4 text-sm font-medium transition-colors relative ${
              activeTab === tab.id
                ? "text-blue-900"
                : "text-blue-600 hover:text-blue-900"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
              />
            )}
          </button>
        ))}
      </div>
      <div className="h-[400px] md:h-[500px] overflow-y-auto pr-2">{renderContent()}</div>
    </motion.div>
  );
};
