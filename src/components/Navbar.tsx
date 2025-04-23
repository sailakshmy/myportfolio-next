'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const sections = ['about', 'skills', 'experience', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section active if it's in the top half of the viewport
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      // If no section is found in the middle of viewport, check if we're at the bottom
      if (!currentSection) {
        const lastSection = sections[sections.length - 1];
        const lastElement = document.getElementById(lastSection);
        if (lastElement) {
          const rect = lastElement.getBoundingClientRect();
          // If we're near the bottom of the page and the last section is visible
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setActiveSection(lastSection);
            const newUrl = `#${lastSection}`;
            if (window.location.hash !== newUrl) {
              window.history.replaceState(null, '', newUrl);
            }
            return;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
        // Update URL without triggering a page reload
        const newUrl = `#${currentSection}`;
        if (window.location.hash !== newUrl) {
          window.history.replaceState(null, '', newUrl);
        }
      }
    };

    // Check initial hash
    const initialHash = window.location.hash.slice(1);
    if (initialHash && sections.includes(initialHash)) {
      setActiveSection(initialHash);
      const element = document.getElementById(initialHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-xl font-bold hover:text-primary transition-colors duration-300">
              Portfolio
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.href.slice(1));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setActiveSection(item.href.slice(1));
                      }
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 