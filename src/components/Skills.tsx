'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const categories = [
  {
    label: 'Design',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Design System', 'User Research', 'User Flow'],
  },
  {
    label: 'Frontend',
    skills: ['HTML / CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Laravel Blade', 'React'],
  },
  {
    label: 'Backend',
    skills: ['PHP', 'MySQL', 'PostgreSQL', 'REST API'],
  },
  {
    label: 'Workflow',
    skills: ['Git / GitHub', 'VS Code', 'Postman', 'Notion', 'Trello'],
  },
];

function SkillsCard({ cat, ci }: { cat: typeof categories[0]; ci: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Bypass on mobile/touch screens for better scroll performance
    if (window.matchMedia('(hover: none)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    // Rotate max 8 degrees for a subtle luxury feel
    const angleX = -(y - yc) / 15;
    const angleY = (x - xc) / 15;
    
    setRotateX(angleX);
    setRotateY(angleY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: rotateX === 0 && rotateY === 0 ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
      }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring", 
        stiffness: 90, 
        damping: 18, 
        delay: ci * 0.1 
      }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.num}>0{ci + 1}</span>
        <h3 className={styles.label}>{cat.label}</h3>
      </div>
      <div className={styles.tags}>
        {cat.skills.map((skill) => (
          <motion.span
            key={skill}
            className={styles.tag}
            whileHover={{ 
              y: -3,
              scale: 1.03,
              transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
          >
            <span className={styles.dot} />
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="wrap">
      <div className="section-head">
        <div className="eyebrow">Toolkit</div>
        <h2 className="section-title">What I work with.</h2>
      </div>

      <div className={styles.grid}>
        {categories.map((cat, ci) => (
          <SkillsCard key={cat.label} cat={cat} ci={ci} />
        ))}
      </div>
    </section>
  );
}
