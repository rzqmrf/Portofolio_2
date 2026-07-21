import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../tanos-erp/CaseStudy.module.css';

export default function FocuslyCaseStudy() {
  return (
    <>
      <Navbar />
      <article className={styles.caseStudy}>
        <header className={styles.header}>
          <div className="wrap">
            <Link href="/work" className={styles.backBtn}>
              ← Back to All Projects
            </Link>
            
            <div className={styles.titleArea}>
              <div className="eyebrow">CASE STUDY // 05</div>
              <h1 className={styles.title}>
                Focusly <span className={styles.titleSerif}>App.</span>
              </h1>
              <p className={styles.subtitle}>
                A modern, interactive task management web application featuring dark/light mode toggles, automated progress bars, and local storage persistence.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a href="https://github.com/rzqmrf/Focusly" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                  GitHub Repository ↗
                </a>
              </div>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>PROJECT TYPE</span>
                <span className={styles.metaVal}>Personal Project</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>ROLE</span>
                <span className={styles.metaVal}>Frontend Developer & Designer</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>TIMELINE</span>
                <span className={styles.metaVal}>1 Week</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>STACK</span>
                <span className={styles.metaVal}>HTML5, CSS3, ES6 JavaScript</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper} style={{ aspectRatio: '1024/502' }}>
            <Image 
              src="/focusly.png" 
              alt="Focusly Web Application Interface" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>
        </div>

        <div className="wrap">
          <div className={styles.contentGrid}>
            <aside className={styles.aside}>
              <div className={styles.toc}>
                <h3>INDEX</h3>
                <ul>
                  <li><a href="#overview">01 / OVERVIEW</a></li>
                  <li><a href="#problem">02 / THE BOTTLENECK</a></li>
                  <li><a href="#architecture">03 / CODE STRUCTURE</a></li>
                  <li><a href="#ui">04 / INTERFACE SYSTEM</a></li>
                  <li><a href="#result">05 / RESULT & FEEDBACK</a></li>
                </ul>
              </div>
            </aside>

            <div className={styles.body}>
              <section id="overview" className={styles.bodySection}>
                <h2><span className={styles.secNum}>01 /</span> Overview</h2>
                <p>
                  Focusly is a modern, responsive web-based task management application. Built from scratch with vanilla HTML5, CSS3, and ES6 JavaScript, it is designed to help users streamline their daily workflows and track productivity goals with interactive animations.
                </p>
              </section>

              <section id="problem" className={styles.bodySection}>
                <h2><span className={styles.secNum}>02 /</span> The Bottleneck</h2>
                <p>
                  Typical simple to-do applications are cluttered, lack visual motivation, and lose data upon page refreshes. Users wanted a clean, lightweight productivity tool that persists their lists locally without complex account registrations, and visually rewards progress.
                </p>
              </section>

              <section id="architecture" className={styles.bodySection}>
                <h2><span className={styles.secNum}>03 /</span> Code Architecture</h2>
                <p>
                  I designed a clean, lightweight architecture using Vanilla ES6 JavaScript modules. Data persistence is managed seamlessly through the HTML5 Web Storage API (LocalStorage). Task list arrays are dynamically stringified, saved to local cache, and parsed upon initial page load, preventing any data loss.
                </p>
              </section>

              <section id="ui" className={styles.bodySection}>
                <h2><span className={styles.secNum}>04 /</span> Interface System</h2>
                <p>
                  The user interface features a glassmorphic dark/light mode toggle with smooth, CSS transition-based animations. It integrates a dynamic progress bar that automatically calculates and renders the percentage of completed tasks in real time, custom status checkboxes, and custom filter buttons (All, Active, Done).
                </p>
              </section>

              <section id="result" className={styles.bodySection}>
                <h2><span className={styles.secNum}>05 /</span> Outcome & Impact</h2>
                <p>
                  Focusly successfully automated task tracking with zero dependencies. The dynamic progress indicators keep users motivated, local persistence ensures instant load times under 100ms, and the clean design provides a friction-free productivity space.
                </p>

                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>100ms</div>
                    <div className={styles.metricLabel}>Initial page load and list render speed</div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>100%</div>
                    <div className={styles.metricLabel}>Local data persistence with zero external database dependencies</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className={styles.nextTeaser}>
            <span className={styles.nextLabel}>Continue Exploring</span>
            <div className={styles.nextGrid}>
              <Link href="/work/tanos-erp" className={styles.nextCard}>
                <span className={styles.nextCardLabel}>Enterprise // 01</span>
                <h3 className={styles.nextCardTitle}>Tanos ERP →</h3>
                <p className={styles.nextCardDesc}>Logistics dashboard built for PT ILCS to monitor dispatch schedules and cargo movements.</p>
              </Link>
              <Link href="/work/e-reserv" className={styles.nextCard}>
                <span className={styles.nextCardLabel}>Web App // 02</span>
                <h3 className={styles.nextCardTitle}>E-Reserv Hub →</h3>
                <p className={styles.nextCardDesc}>Sports field booking portal with dynamic slot generation & payment triggers.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
