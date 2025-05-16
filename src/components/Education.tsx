import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  specialization: string;
}

const Education = () => {
  const { t } = useTranslation();

  const education: Education[] = [
    {
      school: t("education.innopolis"),
      degree: t("education.bachelor"),
      period: "2018-2022",
      gpa: "3.8/4.0",
      specialization: "Computer Science",
    },
    {
      school: t("education.mipt"),
      degree: t("education.master"),
      period: "2022-2024",
      gpa: "4.0/4.0",
      specialization: "Applied Mathematics and Physics",
    },
  ];

  return (
    <section className="min-h-screen bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t("education.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-secondary rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent">
                {edu.school}
              </h3>
              <p className="text-lg mb-4">{edu.degree}</p>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-medium">{t("education.period")}:</span>{" "}
                  {edu.period}
                </p>
                <p>
                  <span className="font-medium">{t("education.gpa")}:</span>{" "}
                  {edu.gpa}
                </p>
                <p>
                  <span className="font-medium">
                    {t("education.specialization")}:
                  </span>{" "}
                  {edu.specialization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
