'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Experience.module.css';

const timeline = [
  {
    logo: '/psd.png',
    period: 'June 2026 — Present',
    role: 'UI/UX Design Intern',
    company: 'Pelindo Solusi Digital (PSD)',
    desc: 'Redesigning enterprise logistics dashboards (Tanos ERP) for port freight coordination — from user research to hi-fi prototypes shipped in production.',
  },
  {
    logo: '/pens.png',
    period: 'August 2024 — Present',
    role: 'Informatics Engineering',
    company: 'Electronic Engineering Polytechnic Institute of Surabaya (PENS)',
    desc: 'Studying software engineering, database systems, HCI, and building various academic projects in web & IoT.',
  },
];

export default function Experience() {
  const [failedLogos, setFailedLogos] = useState<Record<number, boolean>>({});

  return (
    <section id="experience" className="wrap">
      <div className="section-head">
        <div className="eyebrow">Experience</div>
        <h2 className="section-title">Where I've been.</h2>
      </div>

      <div className={styles.timeline}>
        {timeline.map((item, i) => {
          const hasFailed = failedLogos[i];
          return (
            <motion.div
              key={i}
              className={styles.row}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring", 
                stiffness: 70, 
                damping: 15, 
                delay: i * 0.12 
              }}
            >
              <div className={styles.left}>
                <div className={styles.logoFrame}>
                  {!hasFailed ? (
                    <Image
                      src={item.logo}
                      alt={item.company}
                      fill
                      style={{ objectFit: 'contain' }}
                      onError={() => {
                        setFailedLogos(prev => ({ ...prev, [i]: true }));
                      }}
                    />
                  ) : (
                    <span className={styles.logoFallback}>{item.company.charAt(0)}</span>
                  )}
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.roleRow}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <span className={styles.company}>{item.company}</span>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
