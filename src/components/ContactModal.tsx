import { motion } from 'framer-motion';
import { X, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:contact@company.com" className="text-white hover:text-accent transition-colors">
                  contact@company.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a href="tel:+1234567890" className="text-white hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">123 Tech Street, Silicon Valley, CA</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-accent/10 p-3 rounded-lg text-accent hover:bg-accent/20 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-accent/10 p-3 rounded-lg text-accent hover:bg-accent/20 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-accent/10 p-3 rounded-lg text-accent hover:bg-accent/20 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal; 