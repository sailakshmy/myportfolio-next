'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experiences';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700" />
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-8 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
              } md:w-1/2`}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />
              <div className={`p-6 bg-gray-800 rounded-lg shadow-lg ${
                index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
              }`}>
                <h3 className="text-xl font-bold mb-2">{experience.companyName}</h3>
                <p className="text-gray-400 mb-2">{experience.designation}</p>
                <p className="text-gray-400 mb-2">{experience.duration}</p>
                <p className="text-gray-300 mb-4">{experience.technology}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {experience.jobDescription.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection; 