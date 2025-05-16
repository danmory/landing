import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import ExperienceEducation from "./components/ExperienceEducation";
import SkillsCarousel from "./components/SkillsCarousel";
import CompanyValues from "./components/CompanyValues";
import ContactModal from "./components/ContactModal";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="relative bg-primary min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <LanguageSwitcher onLanguageChange={() => {}} />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactModalOpen(true)}
            className="px-6 py-2 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
          >
            Get in Touch
          </motion.button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <section className="min-h-screen">
          <Hero />
        </section>

        <section className="py-20 bg-gray-900">
          <CompanyValues />
        </section>

        <section className="py-20 bg-primary">
          <SkillsCarousel />
        </section>

        <section className="py-20 bg-gray-900">
          <ExperienceEducation />
        </section>
      </main>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <ContactModal onClose={() => setIsContactModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
