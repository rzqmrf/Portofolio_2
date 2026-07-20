'use client';
import { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

interface ProjectData {
  num: string;
  title: string;
  cat: string;
  desc: string;
  tech: string[];
  image: string;
  link: string;
}

const projects: ProjectData[] = [
  {
    num: '01',
    title: 'E-Reserv',
    cat: 'Web App',
    desc: 'Booking and schedule management system for sports facilities and shared spaces.',
    tech: ['Figma', 'PHP', 'MySQL'],
    image: '/reserv.jpg',
    link: '/work/e-reserv',
  },
  {
    num: '02',
    title: 'BALANG',
    cat: 'Mobile UX',
    desc: 'Community lost-and-found mobile app focused on fast reporting and proximity alerts.',
    tech: ['Figma', 'Product Design'],
    image: '/balang.jpg',
    link: '#',
  },
  {
    num: '03',
    title: 'Monitoring Toren',
    cat: 'IoT Dashboard',
    desc: 'Real-time water tower telemetry panel with sensor readings and cost estimation.',
    tech: ['Node.js', 'Hardware', 'Figma'],
    image: '/toren.png',
    link: '#',
  },
];

function TiltCard({ project }: { project: ProjectData }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.cardImage}>
        <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
        <div className={styles.cardOverlay}>
          <span className={styles.cardNum}>{project.num}</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <span className={styles.cardCat}>{project.cat}</span>
        </div>
        <p className={styles.cardDesc}>{project.desc}</p>
        <div className={styles.cardFooter}>
          <div className={styles.tags}>
            {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          {project.link !== '#' && (
            <Link href={project.link} className={styles.cardLink}>
              View case →
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Selected Work</div>
          <h2 className="section-title">More projects.</h2>
          <p className="section-note">Things I've designed and built — from enterprise dashboards to mobile concepts.</p>
        </div>

        <div className={styles.grid}>
          {projects.map(p => <TiltCard key={p.num} project={p} />)}
        </div>
      </div>
    </section>
  );
}
