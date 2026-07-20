'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedProject.module.css';

export default function FeaturedProject() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="featured" className={styles.section} ref={sectionRef}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="eyebrow">Featured Project</div>
          <h2 className={styles.title}>
            Tanos <span className={styles.serif}>ERP</span>
          </h2>
          <div className={styles.meta}>
            <span>UI/UX Design</span>
            <span className={styles.dot}>·</span>
            <span>2024</span>
            <span className={styles.dot}>·</span>
            <span>PT ILCS</span>
          </div>
        </div>
      </div>

      <motion.div className={styles.imageFrame} style={{ y: imgY }}>
        <div className={styles.imgInner}>
          <Image src="/tanos.png" alt="Tanos ERP" fill style={{ objectFit: 'cover' }} />
        </div>
      </motion.div>

      <div className="wrap">
        <div className={styles.footer}>
          <p className={styles.desc}>
            An enterprise logistics dashboard built to optimize port freight coordination, container dispatch scheduling, and operational monitoring for one of Indonesia's largest port logistics companies.
          </p>
          <Link href="/work/tanos-erp" className="btn btn--fill">
            Read case study →
          </Link>
        </div>
      </div>
    </section>
  );
}
