import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../tanos-erp/CaseStudy.module.css';

export default function EReservCaseStudy() {
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
              <div className="eyebrow">CASE STUDY // 02</div>
              <h1 className={styles.title}>
                E-Reserv <span className={styles.titleSerif}>Hub.</span>
              </h1>
              <p className={styles.subtitle}>
                An integrated digital platform designed to streamline sports field reservations connecting tenants and managers via a Flutter mobile app & Laravel admin panel.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a href="https://github.com/rzqmrf/E-Reserv" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
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
                <span className={styles.metaVal}>Full-Stack Developer & Designer</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>TIMELINE</span>
                <span className={styles.metaVal}>3 Months</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>STACK</span>
                <span className={styles.metaVal}>Flutter, Laravel 12, MySQL, Midtrans</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/ereserv.png" 
              alt="E-Reserv Dashboard Cover" 
              width={1536}
              height={1024}
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
                  E-Reserv is an integrated digital platform designed to streamline sports field reservations. It connects field tenants with facility managers through a multiplatform mobile client (Flutter) for real-time slot bookings and a web-based administration panel (Laravel 12) automated with digital payment gateways and AI-powered financial prediction engine.
                </p>
              </section>

              <section id="problem" className={styles.bodySection}>
                <h2><span className={styles.secNum}>02 /</span> The Bottleneck</h2>
                <p>
                  Traditional sports venue booking workflows frequently suffered from double-bookings due to asynchronous schedule updates. Customers had to manually coordinate available hours, transfer fees via bank transfers, and send photos of receipts for manual verification. Additionally, court occupancy was suboptimal during off-peak hours because individual players often struggled to find enough teammates to share court booking costs.
                </p>
              </section>

              <section id="architecture" className={styles.bodySection}>
                <h2><span className={styles.secNum}>03 /</span> Database Architecture</h2>
                <p>
                  I architected a relational database schema in MySQL containing key tables: <code>users</code>, <code>fields</code>, <code>schedules</code>, <code>slots</code>, <code>bookings</code>, and <code>payments</code>. The system dynamically generates 1-hour time slots based on field schedules and enforces strict capacity validation. Overlapping reservations are programmatically blocked at the database query level, preventing conflicts even during concurrent payment settlements (race conditions).
                </p>
              </section>

              <section id="ui" className={styles.bodySection}>
                <h2><span className={styles.secNum}>04 /</span> Interface System</h2>
                <p>
                  The visual design utilizes a premium dark-themed, sporty-tech UI language across the mobile app (Flutter) and admin dashboard (Laravel). It features an interactive daily calendar, live remaining court capacity indicators, colorful reservation status badges, and an administrative panel with integrated Chart.js visualizations for financial metrics.
                </p>
              </section>

              <section id="result" className={styles.bodySection}>
                <h2><span className={styles.secNum}>05 /</span> Outcome & Impact</h2>
                <p>
                  By deploying E-Reserv, we successfully automated the sports reservation workflow end-to-end. Tenants can pay instantly via Midtrans (triggering automated status approvals), other players can join public sessions for free (the Host-Joiner model), and venue administrators can forecast upcoming 7-day revenue using a custom Neural Network (MLPRegressor) model directly from their dashboard.
                </p>

                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>98%</div>
                    <div className={styles.metricLabel}>Reduction in payment processing and verification time</div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>0%</div>
                    <div className={styles.metricLabel}>Schedule overlap conflict rate</div>
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
              <Link href="/work/balang" className={styles.nextCard}>
                <span className={styles.nextCardLabel}>Mobile // 03</span>
                <h3 className={styles.nextCardTitle}>BALANG App →</h3>
                <p className={styles.nextCardDesc}>Community lost-and-found mobile client built with Flutter & Firebase.</p>
              </Link>
              <Link href="/work/iot-toren" className={styles.nextCard}>
                <span className={styles.nextCardLabel}>IoT // 04</span>
                <h3 className={styles.nextCardTitle}>Monitoring Toren →</h3>
                <p className={styles.nextCardDesc}>Real-time water tower level sensor dashboard with hardware control logs.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
