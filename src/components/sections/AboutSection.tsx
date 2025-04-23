'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/profile.jpg"
                alt="Profile Photo"
                fill
                className="object-cover rounded-full border-4 border-primary"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate web developer with expertise in modern web technologies.
              I specialize in building responsive, user-friendly applications using
              React, Next.js, and other cutting-edge tools.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend development,
              I create seamless digital experiences that combine functionality
              with aesthetic appeal. My approach to development is centered around
              creating efficient, scalable, and maintainable code while ensuring
              the best possible user experience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              with the developer community.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection; 