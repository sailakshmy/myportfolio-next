'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaWhatsapp, FaFileAlt } from 'react-icons/fa';

const ContactSection = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/sailakshmy',
      color: 'hover:bg-gray-800',
      iconColor: 'text-gray-800'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:sailakshmy94@gmail.com',
      color: 'hover:bg-red-500',
      iconColor: 'text-red-500'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: 'https://wa.me/+918754550768',
      color: 'hover:bg-green-500',
      iconColor: 'text-green-500'
    },
    {
      name: 'Resume',
      icon: FaFileAlt,
      href: '/resume/Sailakshmy_Frontend_9Years.pdf',
      color: 'hover:bg-blue-500',
      iconColor: 'text-blue-500',
      download: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="grid grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.download ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={link.download}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center gap-3 p-4 bg-dark-lighter rounded-lg transition-colors ${link.color}`}
              >
                <link.icon className={`text-2xl ${link.iconColor}`} />
                <span className="text-white font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-300">
              Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 