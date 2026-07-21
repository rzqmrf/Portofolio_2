'use client';
import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="wrap">
      <div className={styles.grid}>
        <motion.div
          className={styles.photo}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img 
            src="/hero.jpg" 
            alt="Rozaq portrait" 
            initial={{ scale: 1.18 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
        </motion.div>

        <div className={styles.story}>
          <div className="eyebrow">About</div>
          <motion.h2
            className={styles.lead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            I care about the small decisions that make a product feel{' '}
            <span className={styles.serif}>effortless</span> to use.
          </motion.h2>

          <motion.div
            className={styles.body}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              I'm a UI/UX Designer and Frontend Developer, currently interning at PT Integrasi Logistik Cipta Solusi (ILCS), where I work on enterprise dashboard redesigns — from research and wireframes to shipped interfaces.
            </p>
            <p>
              What keeps me in this field is the overlap between design and code: I enjoy understanding problems deeply enough to design the right solution, and then bringing those solutions to life through code. I'm currently majoring in Informatics Engineering at Electronic Engineering Polytechnic Institute of Surabaya.
            </p>
          </motion.div>

          <motion.div
            className={styles.interests}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tag">UI/UX Design</span>
            <span className="tag">Frontend Dev</span>
            <span className="tag">Design Systems</span>
            <span className="tag">Problem Solving</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
