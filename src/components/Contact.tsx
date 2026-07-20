'use client';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const contactLinks = [
  { num: '01', label: 'Email', value: 'rozaqmaruf06@gmail.com', href: 'mailto:rozaqmaruf06@gmail.com' },
  { num: '02', label: 'LinkedIn', value: 'Muhammad Rozaq Maruf', href: 'https://linkedin.com/in/rozaqmaruf' },
  { num: '03', label: 'GitHub', value: 'rzqmrf', href: 'https://github.com/rzqmrf' },
  { num: '04', label: 'Instagram', value: '@rozaqmaruf', href: 'https://instagram.com/@rozaq.mrf' },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="eyebrow">Get In Touch</div>
          <h2 className={styles.headline}>
            Let's create something<br />
            <span className={styles.serif}>memorable.</span>
          </h2>
        </div>

        <div className={styles.list}>
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={styles.row}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.rowLeft}>
                <span className={styles.num}>{link.num}</span>
                <span className={styles.label}>{link.label}</span>
              </div>
              <div className={styles.rowRight}>
                <span className={styles.value}>{link.value}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
