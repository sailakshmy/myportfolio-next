'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-300">
              I am a passionate web developer with expertise in modern web technologies.
              I specialize in building responsive, user-friendly applications using
              React, Next.js, and other cutting-edge tools.
            </p>
            <p className="text-lg text-gray-300">
              With a strong foundation in both frontend and backend development,
              I create seamless digital experiences that combine functionality
              with aesthetic appeal.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection; 