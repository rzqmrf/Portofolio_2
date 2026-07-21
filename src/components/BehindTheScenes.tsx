'use client';
import { motion } from 'framer-motion';
import styles from './BehindTheScenes.module.css';

const photos = [
  { src: '/photo-beach.jpg', caption: 'Sunset vibes', span: 'big', position: 'center 85%' },
  { src: '/photo-campus.jpg', caption: 'Campus life', span: 'tall', position: 'center' },
  { src: '/photo-hiking.jpg', caption: 'Exploring peaks', span: 'normal', position: 'center' },
  { src: '/photo-river.jpg', caption: 'Chasing waterfalls', span: 'big', position: 'center 95%' },
  { src: '/photo-code.jpg', caption: 'Late night code', span: 'normal', position: 'center' },
  { src: '/photo-class.jpg', caption: 'Presenting ideas', span: 'normal', position: 'center' },
  { src: '/photo-futsal.jpg', caption: 'Game day', span: 'normal', position: 'center' },
  { src: '/photo-mall.jpg', caption: 'Off duty', span: 'tall', position: 'center' },
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
            className={`${styles.cell} ${photo.span === 'wide' ? styles.wide : ''} ${photo.span === 'tall' ? styles.tall : ''} ${photo.span === 'big' ? styles.big : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
