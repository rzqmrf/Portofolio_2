'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './Hero.module.css';

function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 15, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 15, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const firstName = 'Muhammad';
  const middleName = 'Rozaq';
  const lastName = "Ma'ruf";

  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.nameBlock}>
          <div className={styles.nameRow}>
            {firstName.split('').map((ch, i) => (
              <motion.span
                key={`a-${i}`}
                className={styles.letter}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.15 + i * 0.03, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }}
                whileHover={{ y: -18, scale: 1.15, rotate: 6, color: '#8B5CF6', transition: { type: 'spring', stiffness: 300, damping: 10 } }}
              >{ch}</motion.span>
            ))}
          </div>
          <div className={styles.nameRow}>
            {middleName.split('').map((ch, i) => (
              <motion.span
                key={`b-${i}`}
                className={`${styles.letter} ${styles.accent}`}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.4 + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }}
                whileHover={{ y: -18, scale: 1.15, rotate: -6, transition: { type: 'spring', stiffness: 300, damping: 10 } }}
              >{ch}</motion.span>
            ))}
          </div>
          <div className={styles.nameRow}>
            {lastName.split('').map((ch, i) => (
              <motion.span
                key={`c-${i}`}
                className={`${styles.letter} ${styles.serif}`}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.6 + i * 0.03, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }}
                whileHover={{ y: -18, scale: 1.15, rotate: 6, color: '#8B5CF6', transition: { type: 'spring', stiffness: 300, damping: 10 } }}
              >{ch}</motion.span>
            ))}
          </div>
        </div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          UI/UX & Frontend Developer
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
        >
          <Magnetic>
            <a href="#featured" className="btn btn--fill">See my work</a>
          </Magnetic>
          <Magnetic>
            <a href="/about" className="btn btn--outline">About me</a>
          </Magnetic>
        </motion.div>
      </div>

      <div className={styles.scrollHint}>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >↓</motion.span>
      </div>
    </header>
  );
}
