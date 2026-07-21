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
              width={705}
              height={651}
              style={{ width: '100%', height: 'auto', display: 'block' }}
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
                  <li><a href="#architecture">03 / SYSTEM ARCHITECTURE</a></li>
                  <li><a href="#ui">04 / INTERFACE DESIGN</a></li>
                  <li><a href="#result">05 / RESULT & FEEDBACK</a></li>
                </ul>
              </div>
            </aside>

            <div className={styles.body}>
              <section id="overview" className={styles.bodySection}>
                <h2><span className={styles.secNum}>01 /</span> Overview</h2>
                <p>
                  Monitoring Toren is an IoT water management platform combining hardware sensors with a web monitoring dashboard and Telegram notifications. It provides real-time visibility into household water reserve levels, tracks consumption analytics, and alerts users of critical level thresholds.
                </p>
              </section>

              <section id="problem" className={styles.bodySection}>
                <h2><span className={styles.secNum}>02 /</span> The Bottleneck</h2>
                <p>
                  Water towers frequently overflowed, wasting clean water, or ran completely dry without prior warning. Checking water levels manually required climbing towers physically, which was dangerous and inefficient. Homeowners lacked real-time visibility into water reserves and automated alert systems to manage daily usage.
                </p>
              </section>

              <section id="architecture" className={styles.bodySection}>
                <h2><span className={styles.secNum}>03 /</span> System Architecture</h2>
                <p>
                  I programmed a NodeMCU ESP8266 microcontroller in C++ using Arduino IDE. The hardware interfaces with an HC-SR04 ultrasonic sensor and a water flow sensor, measuring distance and water flow rate. The device pushes data via HTTP POST API requests to a PHP Native backend, which writes telemetry data directly into a MySQL database and dispatches critical alerts through the Telegram Bot API.
                </p>
              </section>

              <section id="ui" className={styles.bodySection}>
                <h2><span className={styles.secNum}>04 /</span> Interface Design</h2>
                <p>
                  The web interface features an interactive landing page with custom CSS fluid wave animations and a modern dashboard. The dashboard displays real-time metrics (water level, volume, percentage, and cost estimation) and integrates a Chart.js line graph to visualize usage trends over time, complete with a dynamic dark/light mode toggle.
                </p>
              </section>

              <section id="result" className={styles.bodySection}>
                <h2><span className={styles.secNum}>05 /</span> Outcome & Impact</h2>
                <p>
                  Deploying the monitoring system completely eliminated manual inspections and water waste. The automated notification triggers instantly on Telegram when capacity falls below 10% or exceeds 95%, allowing homeowners to track water consumption trends and estimate utility bills accurately from a single interface.
                </p>

                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>100%</div>
                    <div className={styles.metricLabel}>Elimination of water tower overflow incidents through automated Telegram alerts</div>
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
              <Link href="/work/focusly" className={styles.nextCard}>
                <span className={styles.nextCardLabel}>Web App // 05</span>
                <h3 className={styles.nextCardTitle}>Focusly App →</h3>
                <p className={styles.nextCardDesc}>Modern task management dashboard featuring LocalStorage & light/dark modes.</p>
              </Link>
              <Link href="/work/tanos-erp" className={styles.nextCard}>
                <span className={styles.nextCardLabel}>Enterprise // 01</span>
                <h3 className={styles.nextCardTitle}>Tanos ERP →</h3>
                <p className={styles.nextCardDesc}>Logistics dashboard built for PT ILCS to monitor dispatch schedules and cargo movements.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
