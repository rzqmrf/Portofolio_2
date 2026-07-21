'use client';
import { motion } from 'framer-motion';
import styles from './BehindTheScenes.module.css';

const photos = [
  { src: '/photo-beach.jpg', caption: 'Sunset vibes', aspect: '16/10', position: 'center 85%' },
  { src: '/photo-campus.jpg', caption: 'Campus life', aspect: '3/4', position: 'center' },
  { src: '/photo-hiking.jpg', caption: 'Exploring peaks', aspect: '1/1', position: 'center' },
  { src: '/photo-river.jpg', caption: 'Chasing waterfalls', aspect: '4/3', position: 'center 95%' },
  { src: '/photo-code.jpg', caption: 'Late night code', aspect: '16/10', position: 'center' },
  { src: '/photo-class.jpg', caption: 'Presenting ideas', aspect: '3/4', position: 'center' },
  { src: '/photo-futsal.jpg', caption: 'Game day', aspect: '1/1', position: 'center' },
  { src: '/photo-mall.jpg', caption: 'Off duty', aspect: '3/4', position: 'center' },
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
            className={styles.cell}
            initial={{ opacity: 0, y: 60, scale: 0.92, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ 
              type: "spring", 
              stiffness: 80, 
              damping: 18, 
              delay: i * 0.05 
            }}
            style={{ aspectRatio: photo.aspect }}
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
