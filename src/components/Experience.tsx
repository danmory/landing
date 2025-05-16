import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Experience = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "React", level: "expert", color: "from-accent to-accent2" },
    { name: "TypeScript", level: "advanced", color: "from-accent2 to-accent3" },
    { name: "Node.js", level: "advanced", color: "from-accent3 to-accent" },
    { name: "Solidity", level: "intermediate", color: "from-accent to-accent2" },
    { name: "Python", level: "intermediate", color: "from-accent2 to-accent3" },
    { name: "AWS", level: "intermediate", color: "from-accent3 to-accent" },
  ];

  const projects: Project[] = [
    {
      title: "DeFi Platform",
      description:
        "A decentralized finance platform built with Solidity and React",
      image: "/projects/defi.jpg",
      link: "#",
    },
    {
      title: "AI Chatbot",
      description: "An AI-powered chatbot using Python and TensorFlow",
      image: "/projects/ai.jpg",
      link: "#",
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
  };

  return (
    <section className="min-h-screen bg-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t("experience.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              {t("experience.skills")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-primary rounded-lg p-4 h-32 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">
                        {t(`experience.skillLevels.${skill.level}`)}
                      </span>
                    </div>
                    <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full`} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent2/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              {t("experience.projects")}
            </h3>
            <Slider {...settings}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-4"
                >
                  <div className="bg-primary rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        className="inline-flex items-center text-accent hover:text-accent2 transition-colors"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
