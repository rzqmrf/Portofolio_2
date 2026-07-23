'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ScrollToTopAirplane.module.css';

export default function ScrollToTopAirplane() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setProgress(Math.min((currentScroll / totalScroll) * 100, 100));
      }
      
      setVisible(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    if (isLaunching) return;
    setIsLaunching(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset launching state after transition completes (takes off, then resets at top)
    setTimeout(() => {
      setIsLaunching(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={handleScrollToTop}
          className={styles.button}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={isLaunching ? {
            y: -120,
            x: 60,
            rotate: -45,
            scale: 0.4,
            opacity: 0,
            transition: { duration: 0.9, ease: [0.6, -0.28, 0.735, 0.045] }
          } : {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: -45, // default angle pointing up-right
            transition: { type: 'spring', stiffness: 260, damping: 20 }
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={!isLaunching ? { 
            scale: 1.1, 
            rotate: -25, // tilt upwards closer to straight vertical flight
            transition: { type: 'spring', stiffness: 400, damping: 10 }
          } : {}}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          {/* Circular Progress Ring */}
          <svg className={styles.progressRing} width="52" height="52">
            <circle
              className={styles.circleBg}
              cx="26"
              cy="26"
              r="22"
            />
            <motion.circle
              className={styles.circleProgress}
              cx="26"
              cy="26"
              r="22"
              strokeDasharray="138" // 2 * pi * r
              style={{
                strokeDashoffset: 138 - (138 * progress) / 100
              }}
            />
          </svg>

          {/* Paper Airplane Icon */}
          <svg 
            className={styles.airplane} 
            viewBox="0 0 24 24" 
            width="20" 
            height="20"
          >
            <path 
              d="M2 21l21-9L2 3v7l15 2-15 2v7z" 
              fill="currentColor" 
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
