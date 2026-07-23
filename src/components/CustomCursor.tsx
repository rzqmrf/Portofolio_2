'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Smooth trailing spring for the outer ring
  const springX = useSpring(x, { damping: 30, stiffness: 220, mass: 0.6 });
  const springY = useSpring(y, { damping: 30, stiffness: 220, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const leave = () => setVisible(false);
    const enter = () => setHovered(true);
    const exit = () => setHovered(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);

    const bind = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', exit);
      });
    };

    bind();
    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      obs.disconnect();
    };
  }, [x, y, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Tiny solid dot moving instantly */}
      <motion.div
        className={`${styles.dot} ${hovered ? styles.dotActive : ''}`}
        style={{ left: x, top: y }}
      />
      {/* Large trailing ring with spring damping physics */}
      <motion.div
        className={`${styles.ring} ${hovered ? styles.ringActive : ''}`}
        style={{ left: springX, top: springY }}
      />
    </>
  );
}
