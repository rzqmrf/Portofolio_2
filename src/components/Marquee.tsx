'use client';
import styles from './Marquee.module.css';

const items = ['UI/UX Design', 'Dashboard Systems', 'Mobile Interfaces', 'Frontend Code', 'Figma Prototypes', 'Design Systems', 'User Research', 'Laravel', 'IoT Dashboards'];

export default function Marquee() {
  const strip = [...items, ...items];
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {strip.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={i % 2 === 0 ? styles.sans : styles.serifItem}>{item}</span>
            <span className={styles.separator}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
