'use client';

import { skills } from '@/data/skills';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:justify-center">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:scale-[1.02] transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl shadow-lg w-full max-w-sm"
            >
              <h3 className="text-xl font-bold mb-6 text-white capitalize flex items-center">
                {category}
              </h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill.name}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200 cursor-default"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection; 