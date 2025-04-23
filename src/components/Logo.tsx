'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="relative w-8 h-8"
      >
        <motion.div
          className="absolute inset-0 bg-primary rounded-lg"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-1 bg-dark rounded-md"
          whileHover={{ scale: 0.9 }}
        />
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-primary font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          S
        </motion.span>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300"
      >
        Sailakshmy
      </motion.span>
    </Link>
  );
};

export default Logo; 