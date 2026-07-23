'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './IntroLoader.module.css';

const words = [
  "Hello",       // English
  "Halo",        // Indonesian
  "Bonjour",     // French
  "Ciao",        // Italian
  "Konnichiwa",  // Japanese
  "Hola",        // Spanish
  "Annyeong"     // Korean
];

export default function IntroLoader() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if loader has already played in this session to prevent nagging
    const hasLoaded = sessionStorage.getItem('intro-loaded');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    if (index < words.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 200); // Word duration
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('intro-loaded', 'true');
      }, 500); // Final word delay before exit slide
      return () => clearTimeout(finishTimer);
    }
  }, [index]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.loader}
          exit={{ 
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className={styles.container}>
            <motion.div 
              className={styles.dot}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.span
              key={index}
              className={styles.word}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              {words[index]}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
