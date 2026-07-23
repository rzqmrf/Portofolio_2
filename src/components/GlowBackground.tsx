'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './GlowBackground.module.css';

export default function GlowBackground() {
  const [mounted, setMounted] = useState(false);

  const x = useMotionValue(-700);
  const y = useMotionValue(-700);

  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.8 });

  useEffect(() => {
    setMounted(true);
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by 350px (half of 700px spotlight width) so spotlight centers on cursor
      x.set(e.clientX - 350);
      y.set(e.clientY - 350);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      {/* Dynamic Mouse Spotlight Glow */}
      <motion.div
        className={styles.spotlight}
        style={{
          x: springX,
          y: springY,
        }}
      />
      
      {/* Static Floating Ambient Neon Blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
    </div>
  );
}
