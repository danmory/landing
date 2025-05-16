import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  titleKey: string;
  descriptionKey: string;
}

interface Education {
  degree: string;
  university: string;
  period: string;
  description: string;
  degreeKey: string;
  descriptionKey: string;
}

interface Company {
  name: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  roleKey: string;
  descriptionKey: string;
  achievementsKeys: string[];
}

const ExperienceEducation = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: t('experienceEducation.projects.aiAnalytics.title'),
      description: t('experienceEducation.projects.aiAnalytics.description'),
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "https://github.com/username/project",
      titleKey: "aiAnalytics.title",
      descriptionKey: "aiAnalytics.description"
    },
    {
      title: t('experienceEducation.projects.cloudMigration.title'),
      description: t('experienceEducation.projects.cloudMigration.description'),
      technologies: ["AWS", "Terraform", "Python", "Docker"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      link: "https://github.com/username/project",
      titleKey: "cloudMigration.title",
      descriptionKey: "cloudMigration.description"
    }
  ];

  const education: Education[] = [
    {
      degree: t('experienceEducation.educationDetails.masters.degree'),
      university: t('education.innopolis'),
      period: "2018-2022",
      description: t('experienceEducation.educationDetails.masters.description'),
      degreeKey: "masters.degree",
      descriptionKey: "masters.description"
    },
    {
      degree: t('experienceEducation.educationDetails.bachelors.degree'),
      university: t('education.mipt'),
      period: "2022-2024",
      description: t('experienceEducation.educationDetails.bachelors.description'),
      degreeKey: "bachelors.degree",
      descriptionKey: "bachelors.description"
    }
  ];

  const companies: Company[] = [
    {
      name: "Google",
      role: t('experienceEducation.companies.google.role'),
      period: "2020 - Present",
      description: t('experienceEducation.companies.google.description'),
      achievements: [
        t('experienceEducation.companies.google.achievements.microservices'),
        t('experienceEducation.companies.google.achievements.teamLead'),
        t('experienceEducation.companies.google.achievements.performance')
      ],
      roleKey: "google.role",
      descriptionKey: "google.description",
      achievementsKeys: ["microservices", "teamLead", "performance"]
    },
    {
      name: "Microsoft",
      role: t('experienceEducation.companies.microsoft.role'),
      period: "2018 - 2020",
      description: t('experienceEducation.companies.microsoft.description'),
      achievements: [
        t('experienceEducation.companies.microsoft.achievements.cloudSolutions'),
        t('experienceEducation.companies.microsoft.achievements.cicd'),
        t('experienceEducation.companies.microsoft.achievements.database')
      ],
      roleKey: "microsoft.role",
      descriptionKey: "microsoft.description",
      achievementsKeys: ["cloudSolutions", "cicd", "database"]
    }
  ];

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-lg h-[400px]"
    >
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-200 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            {t('experienceEducation.viewProject')} →
          </a>
        )}
      </div>
    </motion.div>
  );

  const ProjectsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  };

  const EducationTimeline = () => {
    return (
      <div className="relative py-8">
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-accent transform -translate-x-1/2" />
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative mb-12 ${
              index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'
            } md:w-1/2`}
          >
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2" />
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-accent">{edu.university}</p>
              <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const CompaniesList = () => {
    return (
      <div className="space-y-8">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{company.role}</h3>
                <p className="text-accent">{company.name}</p>
                <p className="text-gray-400 text-sm">{company.period}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{company.description}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {company.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-12">
        {t('experienceEducation.experience')}
      </h2>
      
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8">
          {t('experienceEducation.featuredProjects')}
        </h3>
        <ProjectsSlider />
      </section>

      <section className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8">
          {t('experienceEducation.education')}
        </h3>
        <EducationTimeline />
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white mb-8">
          {t('experienceEducation.workExperience')}
        </h3>
        <CompaniesList />
      </section>
    </div>
  );
};

export default ExperienceEducation; 