'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './IntroLoader.module.css';

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Check if loader has already played in this session to prevent nagging
    const hasLoaded = sessionStorage.getItem('intro-loaded');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    setAnimate(true);

    // Fade out and finish loading after drawing completes + short pause
    const finishTimer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('intro-loaded', 'true');
    }, 3200); // 2.5s animation + 0.7s pause to admire the result

    return () => clearTimeout(finishTimer);
  }, []);

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

  const path = "M 30,90 C 30,90 25,140 45,140 C 65,140 60,95 80,95 C 100,95 95,140 95,140 C 95,140 110,100 120,100 C 130,100 125,140 120,140 C 115,140 110,120 120,120 C 130,120 135,140 135,140 C 135,140 145,50 155,50 C 165,50 155,140 155,140 C 155,140 165,50 175,50 C 185,50 175,140 175,140 C 175,140 190,100 200,100 C 210,100 210,140 200,140 C 190,140 190,100 200,100 C 210,100 230,110 250,90";

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
            {/* SVG drawing board */}
            <svg 
              className={styles.svg} 
              viewBox="0 0 280 180" 
              width="280" 
              height="180"
            >
              {animate && (
                <motion.path
                  d={path}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
            </svg>

            {/* Paper Airplane overlay wrapper */}
            {animate && (
              <div className={styles.airplaneWrapper}>
                <svg 
                  className={styles.airplane} 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20"
                >
                  <path 
                    d="M2 21l21-9L2 3v7l15 2-15 2v7z" 
                    fill="var(--accent)" 
                  />
                </svg>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
