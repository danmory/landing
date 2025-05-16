import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Hero Section
      "hero.title": "Full Stack Developer",
      "hero.subtitle": "Fintech x Blockchain x AI",
      "hero.description": "Specializing in Smart Contracts, Backend, and Frontend Development",
      "hero.cta": "Get in Touch",

      // Experience Section
      "experience.title": "Professional Experience",
      "experience.skills": "Skills",
      "experience.projects": "Projects",
      "experience.skillLevels": {
        "beginner": "Beginner",
        "intermediate": "Intermediate",
        "advanced": "Advanced",
        "expert": "Expert"
      },

      // Education Section
      "education.title": "Education",
      "education.innopolis": "Innopolis University",
      "education.mipt": "MIPT",
      "education.bachelor": "Bachelor's Degree in Computer Science",
      "education.master": "Master's Degree in Applied Mathematics and Physics",
      "education.period": "Period",
      "education.gpa": "GPA",
      "education.specialization": "Specialization",

      // Interests Section
      "interests.title": "Personal Interests",
      "interests.boxing": "Boxing",
      "interests.boxingDesc": "Passionate about boxing and maintaining physical fitness",
      "interests.philosophy": "Philosophy",
      "interests.philosophyDesc": "Deep interest in philosophical discussions and critical thinking",
      "interests.languages": "Languages",
      "interests.languagesDesc": "Fluent in English and learning Arabic",
      "interests.speaking": "Public Speaking",
      "interests.speakingDesc": "Regular participation in public speaking events and conferences",
      "interests.aiAndML": "AI & Machine Learning",
      "interests.aiDescription": "Exploring the frontiers of artificial intelligence to solve complex problems",
      "interests.cloudComputing": "Cloud Computing",
      "interests.cloudDescription": "Building scalable and resilient cloud infrastructure",
      "interests.cybersecurity": "Cybersecurity",
      "interests.securityDescription": "Protecting digital assets with cutting-edge security solutions",

      // Values Section
      "values.title": "Life Values",
      "values.quotes": "Inspirational Quotes",
      "values.importance": "Importance",

      // Contact Section
      "contact.title": "Get in Touch",
      "contact.message": "Send me a message",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.messagePlaceholder": "Your message",
      "contact.getInTouch": "Get in Touch",
      "contact.description": "Feel free to reach out for collaborations or just a friendly hello",
      "contact.phone": "Phone",
      "contact.location": "Location",
      "contact.address": "123 Tech Street, Silicon Valley, CA",
      "contact.social": {
        "email": "Email",
        "linkedin": "LinkedIn",
        "github": "GitHub"
      },

      // Company Values Section
      "companyValues.areasOfFocus": "Areas of Focus",
      "companyValues.myValues": "My Values",
      "companyValues.innovation": "Innovation",
      "companyValues.innovationDesc": "Pushing boundaries and embracing new technologies to create better solutions",
      "companyValues.excellence": "Excellence",
      "companyValues.excellenceDesc": "Delivering the highest quality in everything I do",
      "companyValues.collaboration": "Collaboration",
      "companyValues.collaborationDesc": "Working together to achieve extraordinary results",
      "companyValues.integrity": "Integrity",
      "companyValues.integrityDesc": "Building trust through honest and ethical practices",

      // Experience Education Section
      "experienceEducation.experience": "Experience",
      "experienceEducation.featuredProjects": "Featured Projects",
      "experienceEducation.education": "Education",
      "experienceEducation.workExperience": "Work Experience",
      "experienceEducation.viewProject": "View Project",
      "experienceEducation.projects": {
        "aiAnalytics": {
          "title": "AI-Powered Analytics Platform",
          "description": "Built a real-time analytics platform using machine learning for predictive insights"
        },
        "cloudMigration": {
          "title": "Cloud Migration Tool",
          "description": "Developed an automated tool for seamless cloud infrastructure migration"
        }
      },
      "experienceEducation.educationDetails": {
        "masters": {
          "degree": "Master of Computer Science",
          "description": "Specialized in Artificial Intelligence and Machine Learning"
        },
        "bachelors": {
          "degree": "Bachelor of Science in Computer Science",
          "description": "Focus on Software Engineering and Data Structures"
        }
      },
      "experienceEducation.companies": {
        "google": {
          "role": "Senior Software Engineer",
          "description": "Leading development of enterprise solutions",
          "achievements": {
            "microservices": "Architected and implemented microservices infrastructure",
            "teamLead": "Led team of 5 developers",
            "performance": "Improved system performance by 40%"
          }
        },
        "microsoft": {
          "role": "Software Engineer",
          "description": "Full-stack development for cloud services",
          "achievements": {
            "cloudSolutions": "Developed scalable cloud solutions",
            "cicd": "Implemented CI/CD pipelines",
            "database": "Optimized database performance"
          }
        }
      },
      // Skills Section
      "skills.title": "My Expertise",
      "skills.react": "React",
      "skills.typescript": "TypeScript",
      "skills.nodejs": "Node.js",
      "skills.python": "Python",
      "skills.aws": "AWS",
      "skills.docker": "Docker",
      "skills.graphql": "GraphQL",
      "skills.mongodb": "MongoDB"
    },
  },
  ru: {
    translation: {
      // Hero Section
      "hero.title": "Full Stack Разработчик",
      "hero.subtitle": "Fintech x Blockchain x AI",
      "hero.description": "Специализация: Смарт-контракты, Бэкенд и Фронтенд разработка",
      "hero.cta": "Связаться",

      // Experience Section
      "experience.title": "Профессиональный Опыт",
      "experience.skills": "Навыки",
      "experience.projects": "Проекты",
      "experience.skillLevels": {
        "beginner": "Начинающий",
        "intermediate": "Средний",
        "advanced": "Продвинутый",
        "expert": "Эксперт"
      },

      // Education Section
      "education.title": "Образование",
      "education.innopolis": "Университет Иннополис",
      "education.mipt": "МФТИ",
      "education.bachelor": "Бакалавр компьютерных наук",
      "education.master": "Магистр прикладной математики и физики",
      "education.period": "Период",
      "education.gpa": "Средний балл",
      "education.specialization": "Специализация",

      // Interests Section
      "interests.title": "Личные Интересы",
      "interests.boxing": "Бокс",
      "interests.boxingDesc": "Увлечен боксом и поддержанием физической формы",
      "interests.philosophy": "Философия",
      "interests.philosophyDesc": "Глубокий интерес к философским дискуссиям и критическому мышлению",
      "interests.languages": "Языки",
      "interests.languagesDesc": "Свободно владею английским и изучаю арабский",
      "interests.speaking": "Публичные Выступления",
      "interests.speakingDesc": "Регулярное участие в публичных выступлениях и конференциях",
      "interests.aiAndML": "ИИ и Машинное Обучение",
      "interests.aiDescription": "Исследование границ искусственного интеллекта для решения сложных проблем",
      "interests.cloudComputing": "Облачные Вычисления",
      "interests.cloudDescription": "Создание масштабируемой и устойчивой облачной инфраструктуры",
      "interests.cybersecurity": "Кибербезопасность",
      "interests.securityDescription": "Защита цифровых активов с помощью передовых решений безопасности",

      // Values Section
      "values.title": "Жизненные Ценности",
      "values.quotes": "Вдохновляющие Цитаты",
      "values.importance": "Важность",

      // Contact Section
      "contact.title": "Связаться",
      "contact.message": "Отправить сообщение",
      "contact.name": "Имя",
      "contact.email": "Email",
      "contact.messagePlaceholder": "Ваше сообщение",
      "contact.getInTouch": "Связаться",
      "contact.description": "Не стесняйтесь обращаться для сотрудничества или просто поздороваться",
      "contact.phone": "Телефон",
      "contact.location": "Адрес",
      "contact.address": "ул. Технологическая, 123, Силиконовая Долина, Калифорния",
      "contact.social": {
        "email": "Email",
        "linkedin": "LinkedIn",
        "github": "GitHub"
      },

      // Company Values Section
      "companyValues.areasOfFocus": "Направления",
      "companyValues.myValues": "Мои ценности",
      "companyValues.innovation": "Инновации",
      "companyValues.innovationDesc": "Расширение границ и внедрение новых технологий для создания лучших решений",
      "companyValues.excellence": "Совершенство",
      "companyValues.excellenceDesc": "Обеспечение высочайшего качества во всем, что я делаю",
      "companyValues.collaboration": "Сотрудничество",
      "companyValues.collaborationDesc": "Совместная работа для достижения выдающихся результатов",
      "companyValues.integrity": "Честность",
      "companyValues.integrityDesc": "Создание доверия через честные и этичные практики",

      // Experience Education Section
      "experienceEducation.experience": "Опыт",
      "experienceEducation.featuredProjects": "Избранные проекты",
      "experienceEducation.education": "Образование",
      "experienceEducation.workExperience": "Опыт работы",
      "experienceEducation.viewProject": "Посмотреть проект",
      "experienceEducation.projects": {
        "aiAnalytics": {
          "title": "Аналитическая платформа на базе ИИ",
          "description": "Разработал платформу аналитики в реальном времени с использованием машинного обучения для прогнозирования"
        },
        "cloudMigration": {
          "title": "Инструмент миграции в облако",
          "description": "Разработал автоматизированный инструмент для бесшовной миграции облачной инфраструктуры"
        }
      },
      "experienceEducation.educationDetails": {
        "masters": {
          "degree": "Магистр компьютерных наук",
          "description": "Специализация в области искусственного интеллекта и машинного обучения"
        },
        "bachelors": {
          "degree": "Бакалавр компьютерных наук",
          "description": "Специализация в области разработки программного обеспечения и структур данных"
        }
      },
      "experienceEducation.companies": {
        "google": {
          "role": "Старший инженер-программист",
          "description": "Руководство разработкой корпоративных решений",
          "achievements": {
            "microservices": "Разработал и внедрил микросервисную инфраструктуру",
            "teamLead": "Руководил командой из 5 разработчиков",
            "performance": "Улучшил производительность системы на 40%"
          }
        },
        "microsoft": {
          "role": "Инженер-программист",
          "description": "Full-stack разработка для облачных сервисов",
          "achievements": {
            "cloudSolutions": "Разработал масштабируемые облачные решения",
            "cicd": "Внедрил CI/CD пайплайны",
            "database": "Оптимизировал производительность базы данных"
          }
        }
      },
      // Skills Section
      "skills.title": "Мои Навыки",
      "skills.react": "React",
      "skills.typescript": "TypeScript",
      "skills.nodejs": "Node.js",
      "skills.python": "Python",
      "skills.aws": "AWS",
      "skills.docker": "Docker",
      "skills.graphql": "GraphQL",
      "skills.mongodb": "MongoDB"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
