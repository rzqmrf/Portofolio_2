'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const navItems = [
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

const themes = [
  { id: 'light', icon: '☼' },
  { id: 'dark', icon: '☾' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const selectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('theme', themeId);
  };

  return (
    <div className={`${styles.navContainer} ${scrolled ? styles.scrolledContainer : ''}`}>
      <motion.nav 
        className={styles.navPill}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="/" className={styles.logo}>
          r<span>.</span>
        </Link>

        <div className={styles.linksWrapper}>
          <div className={styles.links} onMouseLeave={() => setHoveredIdx(null)}>
            {navItems.map((item, idx) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                >
                  <span className={styles.linkLabel}>{item.label}</span>
                  {hoveredIdx === idx && (
                    <motion.div
                      layoutId="navHoverBg"
                      className={styles.hoverBg}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                  {isActive && !hoveredIdx && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      className={styles.activeDot}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styles.rightGroup}>
          <div className={styles.themeSwitcher}>
            {themes.map(t => (
              <button
                key={t.id}
                onClick={() => selectTheme(t.id)}
                className={`${styles.themeBtn} ${currentTheme === t.id ? styles.activeThemeText : ''}`}
                title={`${t.id} theme`}
                style={{ position: 'relative' }}
              >
                <span className={styles.iconLabel}>{t.icon}</span>
                {currentTheme === t.id && (
                  <motion.div
                    layoutId="activeThemeBg"
                    className={styles.themeActiveBg}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
