'use client';

import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNavigation = (direction: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => {
      const newIndex = prev + direction;
      if (newIndex < 0) return projects.length - 1;
      if (newIndex >= projects.length) return 0;
      return newIndex;
    });
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex justify-center"
            >
              <div className="bg-dark-lighter rounded-lg overflow-hidden shadow-lg h-full flex flex-col max-w-md w-full">
                <div className="relative h-40 md:h-44 lg:h-48 flex-shrink-0">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-full"
                    >
                      <FaGithub className="text-primary text-lg" />
                    </motion.a>
                    {projects[currentIndex].demo && <motion.a
                      href={projects[currentIndex].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-full"
                    >
                      <FaExternalLinkAlt className="text-primary text-lg" />
                    </motion.a>}
                  </motion.div>
                </div>

                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {projects[currentIndex].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => handleNavigation(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>
          <button
            onClick={() => handleNavigation(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-gray-600'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 