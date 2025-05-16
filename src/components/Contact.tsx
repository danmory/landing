import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          {t("contact.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
                  required
                  placeholder={t("contact.messagePlaceholder")}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent2 transition-colors"
              >
                {t("contact.getInTouch")}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.title")}
            </h3>
            <p className="text-gray-300 mb-8">{t("contact.description")}</p>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-accent hover:text-accent2 transition-colors"
              >
                <span className="mr-2">📧</span>
                {t("contact.social.email")}
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-accent hover:text-accent2 transition-colors"
              >
                <span className="mr-2">💼</span>
                {t("contact.social.linkedin")}
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-accent hover:text-accent2 transition-colors"
              >
                <span className="mr-2">💻</span>
                {t("contact.social.github")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
