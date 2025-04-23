'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-full border-4 border-primary/30"
              />
              <Image
                src="/images/Sai.png"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border-4 border-primary/20"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 leading-relaxed"
            >
I'm a results-driven Frontend Engineer with over 9 years of experience building scalable, high-performance web and mobile applications across diverse domains including technology and finance. My core expertise lies in ReactJS, Next.js, React Native, and TypeScript, with a strong focus on performance optimization, clean architecture, and scalable UI design.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 leading-relaxed"
            >
             Over the years, I’ve contributed to large-scale enterprise applications, leading initiatives to improve SEO, reduce load times, and boost user engagement through strategic use of SSR, GraphQL, and modular frontend engineering. I’m a strong advocate for Test-Driven Development (TDD), maintaining high code coverage while mentoring junior developers and fostering Agile collaboration.  </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 leading-relaxed"
            >
              Beyond code, I care deeply about the end-user experience and business impact of every solution I build. From integrating analytics tools like Google Analytics for data-driven UX decisions to streamlining development workflows with reusable components and best practices, I take pride in shipping clean, maintainable, and performant products. </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 leading-relaxed"
            >
              Currently based in Dubai, I’m also expanding my skill set into Node.js and backend architecture, with the goal of delivering full-stack, end-to-end product experiences.</motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 