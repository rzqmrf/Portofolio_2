'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

function GalleryCell({ photo, index }: { photo: typeof photos[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking variables
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring smooth values for 3D rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 180, damping: 20 });
  
  // Spring value for image scale
  const imgScale = useSpring(1, { stiffness: 180, damping: 22 });

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
    imgScale.set(1.08);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    imgScale.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.cell}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60, scale: 0.92, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        type: "spring", 
        stiffness: 80, 
        damping: 18, 
        delay: index * 0.05 
      }}
      style={{ 
        aspectRatio: photo.aspect,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <motion.img 
        src={photo.src} 
        alt={photo.caption} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          objectPosition: photo.position,
          scale: imgScale,
          transform: 'translateZ(-15px)',
          transition: 'filter 0.3s ease'
        }} 
      />
      <div 
        className={styles.overlay}
        style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
      >
        <span 
          className={styles.caption}
          style={{ transform: 'translateZ(25px)' }}
        >
          {photo.caption}
        </span>
      </div>
    </motion.div>
  );
}

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
          <GalleryCell key={photo.src} photo={photo} index={i} />
        ))}
      </div>
    </section>
  );
}
