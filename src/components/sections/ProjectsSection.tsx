'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Projects</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700" />
          
          {projects.map((project, index) => (
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
              <div className="timeline-dot" />
              <div className={`card ${
                index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
              }`}>
                {project.image && (
                  <div className="relative h-48 w-full mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-2">{project.date}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold text-white">Technologies:</span> {project.technology}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourcecode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection; 