'use client';
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

export default function Skills() {
  return (
    <section id="skills" className="wrap">
      <div className="section-head">
        <div className="eyebrow">Toolkit</div>
        <h2 className="section-title">What I work with.</h2>
      </div>

      <div className={styles.grid}>
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            className={styles.card}
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
              {cat.skills.map((skill, si) => (
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
        ))}
      </div>
    </section>
  );
}
