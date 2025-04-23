'use client';

import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(1);

  useEffect(() => {
    const updateVisibleProjects = () => {
      if (window.innerWidth >= 1024) {
        setVisibleProjects(3);
      } else if (window.innerWidth >= 768) {
        setVisibleProjects(2);
      } else {
        setVisibleProjects(1);
      }
    };

    updateVisibleProjects();
    window.addEventListener('resize', updateVisibleProjects);
    return () => window.removeEventListener('resize', updateVisibleProjects);
  }, []);

  const getVisibleProjects = () => {
    const projectsArray = [...projects, ...projects, ...projects];
    const startIndex = currentIndex;
    return projectsArray.slice(startIndex, startIndex + visibleProjects);
  };

  const getFocusState = (index: number) => {
    if (hoveredIndex !== null) {
      return index === hoveredIndex;
    }
    return index === focusedIndex;
  };

  useEffect(() => {
    if (hoveredIndex !== null) return;
    
    const focusTimer = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % visibleProjects);
    }, 3000);

    return () => clearInterval(focusTimer);
  }, [hoveredIndex, visibleProjects]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) return projects.length - 1;
      if (newIndex >= projects.length) return 0;
      return newIndex;
    });
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

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

        <div className="relative h-[450px] w-full">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full items-center`}>
            {getVisibleProjects().map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: getFocusState(index) ? 1.05 : 0.95,
                  zIndex: getFocusState(index) ? 10 : 1
                }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.1
                }}
                onHoverStart={() => {
                  setHoveredIndex(index);
                  setIsAutoPlaying(false);
                }}
                onHoverEnd={() => {
                  setHoveredIndex(null);
                  setIsAutoPlaying(true);
                }}
                className={`bg-dark-lighter rounded-lg overflow-hidden shadow-lg h-[380px] flex flex-col cursor-pointer ${
                  getFocusState(index) ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="relative h-40 flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full"
                    >
                      <FaGithub className="text-primary text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full"
                    >
                      <FaExternalLinkAlt className="text-primary text-xl" />
                    </motion.a>
                  </motion.div>
                </div>

                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => {
              setIsAutoPlaying(false);
              paginate(-1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              paginate(1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-600'
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