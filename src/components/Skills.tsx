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

      <div className={styles.columns}>
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: ci * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className={styles.colLabel}>{cat.label}</h3>
            <ul className={styles.list}>
              {cat.skills.map(skill => (
                <li key={skill} className={styles.item}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
