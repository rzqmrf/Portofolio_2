import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../tanos-erp/CaseStudy.module.css';

export default function BalangCaseStudy() {
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
              <div className="eyebrow">CASE STUDY // 03</div>
              <h1 className={styles.title}>
                BALANG <span className={styles.titleSerif}>App.</span>
              </h1>
              <p className={styles.subtitle}>
                A crowd-sourced mobile application built with Flutter to report, verify, and map lost & found items in Indonesian neighborhoods using geolocation.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a href="https://github.com/Aiboo13/Balang" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                  GitHub Repository ↗
                </a>
              </div>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>PROJECT TYPE</span>
                <span className={styles.metaVal}>Academic Project (EEPIS Surabaya)</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>ROLE</span>
                <span className={styles.metaVal}>Mobile Developer & UI Designer</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>TIMELINE</span>
                <span className={styles.metaVal}>3 Months</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>STACK</span>
                <span className={styles.metaVal}>Flutter, Firebase, Google Maps API</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/balang.png" 
              alt="BALANG App Interface Cover" 
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
                  <li><a href="#architecture">03 / DB STRUCTURE</a></li>
                  <li><a href="#ui">04 / INTERFACE SYSTEM</a></li>
                  <li><a href="#result">05 / RESULT & FEEDBACK</a></li>
                </ul>
              </div>
            </aside>

            <div className={styles.body}>
              <section id="overview" className={styles.bodySection}>
                <h2><span className={styles.secNum}>01 /</span> Overview</h2>
                <p>
                  BALANG is a community-driven mobile application designed to simplify locating lost items. It acts as a digital lost-and-found hub, connecting citizens who have lost items with those who have found them, utilizing interactive maps and instant notifications.
                </p>
              </section>

              <section id="problem" className={styles.bodySection}>
                <h2><span className={styles.secNum}>02 /</span> The Bottleneck</h2>
                <p>
                  Traditional methods of reporting lost items in local Indonesian neighborhoods relied on fragmented messaging groups (e.g. WhatsApp or Facebook). These posts quickly got buried by other chats, lacked precise geographic coordinates, and suffered from high manual verification overhead, causing most found items to remain unclaimed.
                </p>
              </section>

              <section id="architecture" className={styles.bodySection}>
                <h2><span className={styles.secNum}>03 /</span> System Architecture</h2>
                <p>
                  I designed a real-time reactive architecture using Flutter. The database utilizes Firebase Realtime Database for instantaneous feed updates and chat messaging. Geolocation is managed using the Google Maps Flutter SDK, allowing users to drop map pins representing the exact discovery location.
                </p>
              </section>

              <section id="ui" className={styles.bodySection}>
                <h2><span className={styles.secNum}>04 /</span> Interface System</h2>
                <p>
                  The mobile interface features a dark-themed visual language built around mapping. It features a map dashboard displaying nearby items, custom bottom sheets for item details, an integrated chat module for secure claims communication, and an easy photo-attachment upload system.
                </p>
              </section>

              <section id="result" className={styles.bodySection}>
                <h2><span className={styles.secNum}>05 /</span> Outcome & Impact</h2>
                <p>
                  The deployment of BALANG resulted in a highly intuitive lost-and-found portal. Community users can report items in under 2 minutes, verify claims through integrated messaging, and coordinate returns via precise map coordinates.
                </p>

                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>85%</div>
                    <div className={styles.metricLabel}>Recovery rate increase in pilot neighborhood</div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>&lt; 2m</div>
                    <div className={styles.metricLabel}>Time required to post a new report</div>
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
              <Link href="/work/iot-toren" className={styles.nextCard}>
                <span className={styles.nextCardLabel}>IoT // 04</span>
                <h3 className={styles.nextCardTitle}>Monitoring Toren →</h3>
                <p className={styles.nextCardDesc}>Real-time water tower level sensor dashboard with hardware control logs.</p>
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
