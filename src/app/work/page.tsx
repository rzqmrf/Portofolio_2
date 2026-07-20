'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from './WorkPage.module.css';

const PROJECTS_DATA = [
  {
    id: 'tanos-erp',
    num: '01',
    title: 'Tanos ERP',
    category: 'Enterprise',
    desc: 'Logistics dashboard designed for PT ILCS to monitor dispatch schedules and cargo fleet movements in real-time.',
    tech: ['Figma', 'Laravel', 'Tailwind'],
    image: '/tanosss.png',
    link: '/work/tanos-erp',
  },
  {
    id: 'e-reserv',
    num: '02',
    title: 'E-Reserv',
    category: 'Web App',
    desc: 'A facility reservation application built to automate venue bookings, scheduling loops, and queue approvals.',
    tech: ['Figma', 'PHP', 'MySQL'],
    image: '/reserv.jpg',
    link: '/work/e-reserv',
  },
  {
    id: 'balang',
    num: '03',
    title: 'BALANG',
    category: 'Mobile UX',
    desc: 'A community mobile application to report and map lost and found items in Indonesian neighborhoods.',
    tech: ['Figma', 'Mobile UX', 'Product Design'],
    image: '/balang.jpg',
    link: '#',
  },
  {
    id: 'iot-toren',
    num: '04',
    title: 'Monitoring Toren',
    category: 'IoT',
    desc: 'Water level indicator dashboard with ultrasonic sensor readings and hardware status logs.',
    tech: ['Figma', 'Node.js', 'Hardware'],
    image: '/toren.png',
    link: '#',
  },
];

const categories = ['All', 'Enterprise', 'Web App', 'Mobile UX', 'IoT'];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className="wrap">
          <header className={styles.header}>
            <div className="eyebrow">Index of Projects</div>
            <h1 className={styles.title}>All <span className={styles.serif}>work</span>.</h1>
            <p className={styles.subtitle}>
              Design files, prototypes, and applications built to solve real problems.
            </p>

            <div className={styles.filters}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          <div className={styles.list}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  className={styles.row}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.rowImg}>
                    {project.image && (
                      <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
                    )}
                  </div>
                  <div className={styles.rowBody}>
                    <div className={styles.rowMeta}>
                      <span className={styles.num}>{project.num}</span>
                      <span className={styles.cat}>{project.category}</span>
                    </div>
                    <h3 className={styles.rowTitle}>{project.title}</h3>
                    <p className={styles.rowDesc}>{project.desc}</p>
                    <div className={styles.tags}>
                      {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                  <div className={styles.rowAction}>
                    {project.link !== '#' ? (
                      <Link href={project.link} className="btn btn--outline">
                        Case study →
                      </Link>
                    ) : (
                      <span className={styles.coming}>Coming soon</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
