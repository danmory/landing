import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiSolidity,
} from "react-icons/si";
import { useState } from "react";

const projects = [
  {
    title: "DeFi Protocol",
    description: "A decentralized finance protocol for automated market making",
    tech: [SiSolidity, SiReact, SiTypescript],
    demo: "https://demo.defi-protocol.com",
    repo: "https://github.com/username/defi-protocol",
  },
  {
    title: "AI Trading Bot",
    description:
      "Machine learning powered trading bot for cryptocurrency markets",
    tech: [SiPython, SiReact, SiTypescript],
    demo: "https://demo.ai-trading.com",
    repo: "https://github.com/username/ai-trading",
  },
  {
    title: "Blockchain Explorer",
    description:
      "Real-time blockchain data visualization and analytics platform",
    tech: [SiNodedotjs, SiReact, SiTypescript],
    demo: "https://demo.blockchain-explorer.com",
    repo: "https://github.com/username/blockchain-explorer",
  },
];

const experience = [
  {
    title: "Senior Fullstack Developer",
    company: "Fintech Solutions Inc.",
    period: "2021 - Present",
    description:
      "Leading development of blockchain-based financial applications",
  },
  {
    title: "Fullstack Developer",
    company: "AI Innovations Ltd",
    period: "2019 - 2021",
    description: "Developed machine learning solutions for financial markets",
  },
];

const education = [
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    period: "2017 - 2019",
    focus: "Artificial Intelligence & Blockchain",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "State University",
    period: "2013 - 2017",
    focus: "Software Engineering",
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type TabType = "projects" | "experience" | "education";

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  const renderContent = () => {
    const content = {
      projects: (
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {project.description}
                  </p>
                  <div className="flex gap-3 mb-3">
                    {project.tech.map((Icon, i) => (
                      <Icon key={i} className="w-5 h-5 text-blue-500" />
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-900 transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-900 transition-colors"
                  >
                    Repo
                  </a>
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
              key={job.title}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="border border-blue-100 rounded-lg p-4 bg-gradient-to-br from-white to-blue-50"
            >
              <h3 className="text-lg font-semibold mb-1 text-blue-900">
                {job.title}
              </h3>
              <p className="text-sm text-blue-600 mb-2">{job.company}</p>
              <p className="text-sm text-gray-500 mb-2">{job.period}</p>
              <p className="text-sm text-gray-600">{job.description}</p>
            </motion.div>
          ))}
        </div>
      ),
      education: (
        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="border border-blue-100 rounded-lg p-4 bg-gradient-to-br from-white to-blue-50"
            >
              <h3 className="text-lg font-semibold mb-1 text-blue-900">
                {edu.degree}
              </h3>
              <p className="text-sm text-blue-600 mb-2">{edu.school}</p>
              <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
              <p className="text-sm text-gray-600">{edu.focus}</p>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 flex items-center">
      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - About & Contact */}
          <div className="col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* About Section */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white rounded-lg shadow-sm p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100"
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 animate-pulse"></div>
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/128";
                      }}
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-center text-blue-900">
                    Your Name
                  </h1>
                  <p className="text-blue-600 text-sm text-center">
                    Fullstack Developer
                  </p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Expert Blockchain & Backend Engineer with deep expertise in AI
                  integration. Specializing in DeFi protocols, smart contracts,
                  and high-performance distributed systems. Delivers scalable,
                  production-ready solutions with full ownership from concept to
                  deployment.
                </p>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white rounded-lg shadow-sm p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-900">
                  Get in Touch
                </h2>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-900 transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-900 transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-900 transition-colors"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Tabs */}
          <div className="col-span-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-lg shadow-sm p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-100"
            >
              <div className="flex space-x-8 border-b border-blue-100 mb-6">
                {[
                  { id: "projects", label: "Featured Projects" },
                  { id: "experience", label: "Work Experience" },
                  { id: "education", label: "Education" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`pb-4 text-sm font-medium transition-colors relative ${
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
              <div className="h-[500px] overflow-y-auto pr-2">
                {renderContent()}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
