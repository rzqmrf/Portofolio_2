'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import styles from './UsesPage.module.css';

const categories = [
  {
    title: 'Workstation',
    items: [
      {
        name: 'HP Pavilion Laptop',
        tag: 'Hardware',
        desc: 'My primary workstation for software development and interface design. Running Windows 11 with custom performance tweaks.'
      },
      {
        name: 'Samsung Essential S3 24"',
        tag: 'Monitor',
        desc: 'A 24-inch full HD monitor configured as a vertical secondary screen for reading documentation and code stack traces.'
      },
      {
        name: 'Logitech Pebble M350',
        tag: 'Mouse',
        desc: 'A minimal, silent, and highly portable mouse that easily slips into my bag for coding sessions outside.'
      }
    ]
  },
  {
    title: 'Development & Design',
    items: [
      {
        name: 'Visual Studio Code',
        tag: 'Editor',
        desc: 'Tokyo Night or GitHub Dark theme, integrated with JetBrains Mono ligatures for ultimate readability during long coding shifts.'
      },
      {
        name: 'Figma',
        tag: 'Design',
        desc: 'Where all my interface systems, layouts, wireframes, and case study bento mockups are designed before writing a single line of code.'
      },
      {
        name: 'Git & GitHub',
        tag: 'Version Control',
        desc: 'Essential for tracking changes, managing branches, and deploying automatically to staging/production on Vercel.'
      },
      {
        name: 'TablePlus',
        tag: 'Database Tool',
        desc: 'A native, lightweight GUI client for checking MySQL database schemas, records, and running manual test queries.'
      }
    ]
  },
  {
    title: 'Tech Preferences',
    items: [
      {
        name: 'Next.js & React',
        tag: 'Frontend Framework',
        desc: 'My absolute favorite tool for building high-performance, SEO-friendly, and interactive web applications.'
      },
      {
        name: 'Laravel & PHP',
        tag: 'Backend System',
        desc: 'Highly reliable framework used for building robust administrative dashboards, database controllers, and secure API gateways.'
      },
      {
        name: 'Flutter & Dart',
        tag: 'Mobile client',
        desc: 'Used for crafting beautiful native-compiled multiplatform mobile apps (Android & iOS) from a single codebase.'
      }
    ]
  }
];

export default function UsesPage() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className="wrap">
          <header className={styles.header}>
            <motion.div 
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Gear & Setup
            </motion.div>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              Tools I <span className={styles.serif}>use</span> daily.
            </motion.h1>
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              A detailed inventory of the physical workstation hardware, development software tools, and stack preferences I use to build digital projects.
            </motion.p>
          </header>

          {categories.map((cat, i) => (
            <motion.section 
              key={cat.title} 
              className={styles.grid}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              <div className={styles.list}>
                {cat.items.map((item, idx) => (
                  <div key={idx} className={styles.item}>
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <span className={styles.itemTag}>{item.tag}</span>
                    </div>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
