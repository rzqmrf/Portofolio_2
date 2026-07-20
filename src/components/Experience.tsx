'use client';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const timeline = [
  {
    period: 'Juni 2026 — Present',
    role: 'UI/UX Design Intern',
    company: 'PT Integrasi Logistik Cipta Solusi',
    desc: 'Redesigning enterprise logistics dashboards (Tanos ERP) for port freight coordination — from user research to hi-fi prototypes shipped in production.',
  },
  {
    period: 'August 2024 — Present',
    role: 'Informatics Engineering',
    company: 'EEPIS Surabaya',
    desc: 'Studying software engineering, database systems, HCI, and building various academic projects in web & IoT.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="wrap">
      <div className="section-head">
        <div className="eyebrow">Experience</div>
        <h2 className="section-title">Where I've been.</h2>
      </div>

      <div className={styles.timeline}>
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className={styles.row}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.left}>
              <span className={styles.period}>{item.period}</span>
            </div>
            <div className={styles.right}>
              <h3 className={styles.role}>{item.role}</h3>
              <span className={styles.company}>{item.company}</span>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
