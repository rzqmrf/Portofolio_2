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
                An automated booking portal designed to manage facility schedules, handle reservation queues, and send instant supervisor approvals.
              </p>
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
                <span className={styles.metaVal}>Figma, PHP, MySQL, CSS</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/ereserv.png" 
              alt="E-Reserv Dashboard Cover" 
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
                  E-Reserv is a web application designed to handle reservations of meeting rooms, shared spaces, and corporate assets. It replaces paper request slips and manual email approvals with a digitized, automated queueing database.
                </p>
              </section>

              <section id="problem" className={styles.bodySection}>
                <h2><span className={styles.secNum}>02 /</span> The Bottleneck</h2>
                <p>
                  The previous reservation workflow took an average of 3 days to complete. Users had to print a paper request slip, obtain physically signed approvals from department heads, and drop the slip off at the facility office. Double bookings occurred frequently due to updates not being synchronized.
                </p>
              </section>

              <section id="architecture" className={styles.bodySection}>
                <h2><span className={styles.secNum}>03 /</span> Database Architecture</h2>
                <p>
                  I architected a relational database schema in MySQL containing key tables: <code>users</code>, <code>facilities</code>, <code>reservations</code>, and <code>approvals</code>. I designed constraints to prevent overlapping reservations programmatically at the query level, ensuring schedule conflicts are mathematically impossible.
                </p>
              </section>

              <section id="ui" className={styles.bodySection}>
                <h2><span className={styles.secNum}>04 /</span> Interface System</h2>
                <p>
                  The visual design was structured in Figma using a clean light-themed UI language (which we transitioned into a premium dark theme for this portfolio). It features a real-time calendar grid, reservation statuses labeled with colorful indicator badges, and a minimal admin panel for quick approval actions.
                </p>
              </section>

              <section id="result" className={styles.bodySection}>
                <h2><span className={styles.secNum}>05 /</span> Outcome & Impact</h2>
                <p>
                  By deploying E-Reserv, we successfully automated the workflow from end-to-end. Users can instantly request a facility from their browsers, and managers receive real-time notifications to approve or decline in a single click.
                </p>

                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>98%</div>
                    <div className={styles.metricLabel}>Reduction in processing time</div>
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
            <span className={styles.nextLabel}>Next Project</span>
            <Link href="/work/tanos-erp" className={styles.nextTitle}>
              Tanos ERP →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
