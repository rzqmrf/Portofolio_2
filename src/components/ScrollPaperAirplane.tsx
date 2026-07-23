'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './ScrollPaperAirplane.module.css';

export default function ScrollPaperAirplane() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const [direction, setDirection] = useState<'down' | 'up'>('down');

  // Smooth springs for sway (x-axis) and banking rotation
  const x = useSpring(0, { stiffness: 60, damping: 20 });
  const rotate = useSpring(-45, { stiffness: 50, damping: 18 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const unsubscribe = scrollY.onChange((latest) => {
      const diff = latest - lastScrollY.current;
      
      let currentDir = direction;
      if (diff > 1) {
        currentDir = 'down';
        setDirection('down');
      } else if (diff < -1) {
        currentDir = 'up';
        setDirection('up');
      }

      // Update ref
      lastScrollY.current = latest;

      // Sway calculations (amplitude 45px)
      const sway = Math.sin(latest / 160) * 45;
      x.set(sway);

      // Rotate calculations:
      // Point down-right (135deg) when scrolling down, up-right (-45deg) when scrolling up
      const baseAngle = currentDir === 'down' ? 135 : -45;
      const bank = Math.cos(latest / 160) * 15; // Bank angle amplitude 15deg
      rotate.set(baseAngle + bank);
    });

    return () => unsubscribe();
  }, [mounted, scrollY, x, rotate, direction]);

  if (!mounted) return null;

  return (
    <motion.div
      className={styles.airplaneWrapper}
      style={{
        x,
        rotate,
      }}
    >
      <svg 
        viewBox="0 0 24 24" 
        width="26" 
        height="26"
        className={styles.airplane}
      >
        <path 
          d="M2 21l21-9L2 3v7l15 2-15 2v7z" 
          fill="currentColor" 
        />
      </svg>
      <div className={styles.trail} />
    </motion.div>
  );
}
