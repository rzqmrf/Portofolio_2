import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../tanos-erp/CaseStudy.module.css';

export default function MonitoringTorenCaseStudy() {
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
              <div className="eyebrow">CASE STUDY // 04</div>
              <h1 className={styles.title}>
                Monitoring <span className={styles.titleSerif}>Toren.</span>
              </h1>
              <p className={styles.subtitle}>
                An IoT dashboard and hardware system utilizing ultrasonic sensors to monitor water tower levels, trigger automated pumps, and log real-time consumption data.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a href="https://github.com/rzqmrf/monitoring_IOT" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
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
                <span className={styles.metaVal}>IoT Developer & Dashboard Designer</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>TIMELINE</span>
                <span className={styles.metaVal}>2 Months</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>STACK</span>
                <span className={styles.metaVal}>Arduino, ESP8266, PHP Native, MySQL</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/dashboard.png" 
              alt="Water level indicator dashboard" 
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
                  Monitoring Toren is an IoT water management platform combining hardware sensors with a web monitoring dashboard. It provides real-time visibility into household water reserve levels, automates water pump control relays, and tracks long-term consumption analytics.
                </p>
              </section>

              <section id="problem" className={styles.bodySection}>
                <h2><span className={styles.secNum}>02 /</span> The Bottleneck</h2>
                <p>
                  Water towers frequently overflowed, wasting clean water, or ran completely dry without prior warning. Checking water levels manually required climbing towers physically, which was dangerous and inefficient. Homeowners lacked visual warnings of leaks or abnormal water usage patterns.
                </p>
              </section>

              <section id="architecture" className={styles.bodySection}>
                <h2><span className={styles.secNum}>03 /</span> System Architecture</h2>
                <p>
                  I programmed a NodeMCU ESP8266 microcontroller in C++ using Arduino IDE. The hardware interfaces with an HC-SR04 ultrasonic sensor placed inside the tower, calculating distance to determine water depth. The sensor pushes data via HTTP POST API requests to a PHP Native backend, which writes logs directly into a MySQL database.
                </p>
              </section>

              <section id="ui" className={styles.bodySection}>
                <h2><span className={styles.secNum}>04 /</span> Interface Design</h2>
                <p>
                  The web dashboard utilizes a Bootstrap-based dark-themed UI. The main display features a real-time wave animation representing the current water percentage level, alongside active logs, network ping metrics, and a dynamic hardware relay switch allowing remote manual pump override.
                </p>
              </section>

              <section id="result" className={styles.bodySection}>
                <h2><span className={styles.secNum}>05 /</span> Outcome & Impact</h2>
                <p>
                  Deploying the monitoring system completely eliminated manual inspections and water waste. The automated pump triggers instantly when capacity falls below 20%, and the system logs water depth, pump execution duration, and energy efficiency directly to the panel.
                </p>

                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>100%</div>
                    <div className={styles.metricLabel}>Elimination of water tower overflow incidents</div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>0</div>
                    <div className={styles.metricLabel}>Manual physical tower inspections required</div>
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
              <Link href="/work/balang" className={styles.nextCard}>
                <span className={styles.nextCardLabel}>Mobile // 03</span>
                <h3 className={styles.nextCardTitle}>BALANG App →</h3>
                <p className={styles.nextCardDesc}>Community lost-and-found mobile client built with Flutter & Firebase.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
