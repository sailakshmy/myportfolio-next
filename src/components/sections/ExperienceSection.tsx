'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import { experiences } from '@/data/experiences';

const ExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Sort experiences by period (newest first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.period.split(' - ')[0]);
    const dateB = new Date(b.period.split(' - ')[0]);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

          <div className="space-y-8">
            {sortedExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>

                <motion.div
                  whileHover={{ scale: 1, zIndex: 10 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`bg-dark-lighter p-6 rounded-lg shadow-lg border-l-4 border-primary origin-top ${
                    index % 2 === 0 ? 'md:ml-auto md:mr-0 md:w-1/2' : 'md:mr-auto md:ml-0 md:w-1/2'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.1 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 5 }}
                      className="p-3 bg-primary/10 rounded-full"
                    >
                      <FaBriefcase className="text-primary text-xl" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.15 + index * 0.1 }}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <FaCalendarAlt className="text-primary" />
                      <span>{exp.period}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <FaMapMarkerAlt className="text-primary" />
                      <span>{exp.location}</span>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.1 }}
                    className="text-gray-300 mb-4 space-y-2"
                  >
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc list-inside space-y-2">
                        {exp.description.map((desc, descIndex) => (
                          <motion.li
                            key={descIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.15, delay: 0.15 + index * 0.1 + descIndex * 0.02 }}
                            className={descIndex >= 3 && hoveredIndex !== index ? 'hidden' : ''}
                          >
                            {desc}
                          </motion.li>
                        ))}
                        {exp.description.length > 3 && hoveredIndex !== index && (
                          <motion.li
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.15, delay: 0.15 + index * 0.1 + 3 * 0.02 }}
                            className="text-primary cursor-pointer"
                          >
                            +{exp.description.length - 3} more points
                          </motion.li>
                        )}
                      </ul>
                    ) : (
                      <p>{exp.description}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.25 + index * 0.1 }}
                    className="flex flex-wrap gap-2"
                  >
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 