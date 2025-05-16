import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Skill {
  name: string;
  icon: string;
  nameKey: string;
}

const SkillsCarousel = () => {
  const { t } = useTranslation();

  const skills: Skill[] = [
    { name: t('skills.react'), icon: "⚛️", nameKey: "react" },
    { name: t('skills.typescript'), icon: "📘", nameKey: "typescript" },
    { name: t('skills.nodejs'), icon: "🟢", nameKey: "nodejs" },
    { name: t('skills.python'), icon: "🐍", nameKey: "python" },
    { name: t('skills.aws'), icon: "☁️", nameKey: "aws" },
    { name: t('skills.docker'), icon: "🐳", nameKey: "docker" },
    { name: t('skills.graphql'), icon: "📊", nameKey: "graphql" },
    { name: t('skills.mongodb'), icon: "🍃", nameKey: "mongodb" }
  ];

  const SkillCard = ({ skill }: { skill: Skill }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg"
      >
        <span className="text-4xl mb-2">{skill.icon}</span>
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      </motion.div>
    );
  };

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 2) % (skills.length * 200));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-12">{t('skills.title')}</h2>
      <div className="relative overflow-hidden">
        <div className="flex space-x-6">
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              style={{
                x: position + index * 200,
              }}
              className="w-[200px] flex-shrink-0"
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel; 