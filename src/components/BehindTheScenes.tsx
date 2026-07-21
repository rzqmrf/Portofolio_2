'use client';
import { motion } from 'framer-motion';
import styles from './BehindTheScenes.module.css';

const photos = [
  { 
    src: '/photo-beach.jpg', 
    caption: 'Sunset vibes', 
    className: styles.sunset, 
    position: 'center 85%' 
  },
  { 
    src: '/photo-campus.jpg', 
    caption: 'Campus life', 
    className: styles.campus, 
    position: 'center' 
  },
  { 
    src: '/photo-hiking.jpg', 
    caption: 'Exploring peaks', 
    className: styles.hiking, 
    position: 'center' 
  },
  { 
    src: '/photo-river.jpg', 
    caption: 'Chasing waterfalls', 
    className: styles.river, 
    position: 'center 95%' 
  },
  { 
    src: '/photo-code.jpg', 
    caption: 'Late night code', 
    className: styles.code, 
    position: 'center' 
  },
  { 
    src: '/photo-class.jpg', 
    caption: 'Presenting ideas', 
    className: styles.class, 
    position: 'center' 
  },
  { 
    src: '/photo-futsal.jpg', 
    caption: 'Game day', 
    className: styles.futsal, 
    position: 'center' 
  },
  { 
    src: '/photo-mall.jpg', 
    caption: 'Off duty', 
    className: styles.mall, 
    position: 'center' 
  },
];

export default function BehindTheScenes() {
  return (
    <section id="gallery" className="wrap">
      <div className="section-head">
        <div className="eyebrow">Behind the Scenes</div>
        <h2 className="section-title">
          Beyond the <span className={styles.serif}>pixels</span>.
        </h2>
        <p className="section-note">When I'm not pushing commits — hiking, exploring, or just vibing.</p>
      </div>

      <div className={styles.masonry}>
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            className={`${styles.cell} ${photo.className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src={photo.src} 
              alt={photo.caption} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: photo.position
              }} 
            />
            <div className={styles.overlay}>
              <span className={styles.caption}>{photo.caption}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
