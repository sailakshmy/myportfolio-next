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
                {items.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-2 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-200">{skill.name}</span>
                      <span className="text-gray-400 text-sm sm:text-base group-hover:text-primary transition-colors duration-200">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection; 