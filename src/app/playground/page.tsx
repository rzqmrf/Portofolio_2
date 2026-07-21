'use client';
import { useState, useRef, MouseEvent } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import styles from './PlaygroundPage.module.css';

export default function PlaygroundPage() {
  // Palette State
  const [colors, setColors] = useState<string[]>([
    '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B'
  ]);
  const [toast, setToast] = useState<string | null>(null);

  // Dynamic Progress State
  const [progress, setProgress] = useState<number>(64);

  // 3D Card Hover Ref and Calculation
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  // Generate random palette
  const generatePalette = () => {
    const newColors = Array.from({ length: 4 }, () => {
      const h = Math.floor(Math.random() * 360);
      const s = 65 + Math.floor(Math.random() * 20); // 65% - 85%
      const l = 50 + Math.floor(Math.random() * 15); // 50% - 65%
      return `hsl(${h}, ${s}%, ${l}%)`;
    });
    setColors(newColors);
    showToast('Palette regenerated!');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied: ${text}`);
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  // 3D Card Move Handler
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Convert coordinate to angle from -15deg to +15deg
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = -(y - yc) / 10;
    const angleY = (x - xc) / 10;
    
    setRotateX(angleX);
    setRotateY(angleY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className="wrap">
          <header className={styles.header}>
            <motion.div 
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Creative Code Lab
            </motion.div>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              Playground<span className={styles.serif}>.</span>
            </motion.h1>
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              An interactive space for mini design concepts, UI components, and raw creative experiments built using modern front-end tech.
            </motion.p>
          </header>

          <div className={styles.grid}>
            {/* Widget 1: Interactive Palette Generator */}
            <motion.div 
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>EXPERIMENT // 01</span>
                <h3 className={styles.cardTitle}>Dynamic Color Palette</h3>
                <p className={styles.cardDesc}>A real-time color palette generator. Tap a block to copy its hex/HSL code directly to your clipboard.</p>
              </div>
              <div className={styles.preview}>
                <div className={styles.palette}>
                  {colors.map((color, idx) => (
                    <div 
                      key={idx}
                      className={styles.colorBox}
                      style={{ backgroundColor: color }}
                      onClick={() => copyToClipboard(color)}
                      title="Click to Copy"
                    />
                  ))}
                </div>
                {toast && <div className={styles.toast}>{toast}</div>}
              </div>
              <button onClick={generatePalette} className={styles.regenerateBtn}>
                Generate Palette
              </button>
            </motion.div>

            {/* Widget 2: Liquid Progress Slider */}
            <motion.div 
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>EXPERIMENT // 02</span>
                <h3 className={styles.cardTitle}>Progress Tracking</h3>
                <p className={styles.cardDesc}>Adjust the slider to simulate fluid progress tracking. The circular widget animates dynamically to represent percentage completed.</p>
              </div>
              <div className={styles.preview}>
                <div className={styles.sliderContainer}>
                  <div className={styles.sliderVal}>{progress}% Completed</div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={progress}
                    onChange={(e) => setProgress(Number(e.target.value))}
                    className={styles.slider}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className={styles.itemTag}>Interactive</span>
                <span className={styles.cardDesc}>Updates state instantly.</span>
              </div>
            </motion.div>

            {/* Widget 3: 3D Parallax Card */}
            <motion.div 
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>EXPERIMENT // 03</span>
                <h3 className={styles.cardTitle}>3D Magnetic Parallax</h3>
                <p className={styles.cardDesc}>Move your cursor over the card in the frame below. The layout will calculate angles and tilt toward your movement in real-time.</p>
              </div>
              <div className={styles.preview}>
                <div 
                  ref={cardRef}
                  className={styles.tiltCard}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    transition: rotateX === 0 && rotateY === 0 ? 'transform 0.5s ease' : 'none'
                  }}
                >
                  <span className={styles.itemTag}>Hover Me</span>
                  <h4 style={{ margin: '16px 0 8px', fontWeight: 600 }}>Parallax Card</h4>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Tokyo Night Mood</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className={styles.itemTag}>Perspective</span>
                <span className={styles.cardDesc}>Spring returns on leave.</span>
              </div>
            </motion.div>

            {/* Widget 4: Magnetic Shimmer Button */}
            <motion.div 
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>EXPERIMENT // 04</span>
                <h3 className={styles.cardTitle}>Glow Shimmer Button</h3>
                <p className={styles.cardDesc}>A glowing button designed using CSS shadows and gradients. Ideal for high-end primary call-to-action prompts.</p>
              </div>
              <div className={styles.preview}>
                <button className={styles.glowBtn}>
                  Interactive Shimmer
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className={styles.itemTag}>Shimmer</span>
                <span className={styles.cardDesc}>Perfect CSS shadow glow.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
