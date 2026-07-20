import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CaseStudy.module.css';

export default function TanosErpCaseStudy() {
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
              <div className="eyebrow">CASE STUDY // 01</div>
              <h1 className={styles.title}>
                Tanos <span className={styles.titleSerif}>ERP.</span>
              </h1>
              <p className={styles.subtitle}>
                An enterprise dispatch planning application designed to coordinate fleet movements and order logistics under a single dashboard interface.
              </p>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>CLIENT</span>
                <span className={styles.metaVal}>PT Integrasi Logistik Cipta Solusi (ILCS)</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>ROLE</span>
                <span className={styles.metaVal}>UI/UX Design Intern</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>TIMELINE</span>
                <span className={styles.metaVal}>3 Months</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>STACK</span>
                <span className={styles.metaVal}>Figma, Laravel, Tailwind</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/tanos.png" 
              alt="Tanos ERP Case Study Cover" 
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
                  <li><a href="#problem">02 / THE CHALLENGE</a></li>
                  <li><a href="#research">03 / USER DISCOVERY</a></li>
                  <li><a href="#flow">04 / ARCHITECTURE</a></li>
                  <li><a href="#ui">05 / INTERFACE SYSTEM</a></li>
                  <li><a href="#result">06 / METRICS & OUTCOME</a></li>
                </ul>
              </div>
            </aside>

            <div className={styles.body}>
              <section id="overview" className={styles.bodySection}>
                <h2><span className={styles.secNum}>01 /</span> Overview</h2>
                <p>
                  PT Integrasi Logistik Cipta Solusi (ILCS) is an Indonesian logistics enterprise. As a design intern, I was assigned to overhaul the interface system of Tanos ERP—their proprietary logistics scheduling application. The goal was to replace scattered spreadsheet systems with a unified visual workstation.
                </p>
              </section>

              <section id="problem" className={styles.bodySection}>
                <h2><span className={styles.secNum}>02 /</span> The Challenge</h2>
                <p>
                  Before the design upgrade, scheduling operations were slow and error-prone. Fleet coordinators manually typed records across multiple spreadsheets, leading to double-bookings and delayed deliveries. Our primary design metric was to cut cargo dispatch sequences down from 15 minutes to under 5 minutes.
                </p>
              </section>

              <section id="research" className={styles.bodySection}>
                <h2><span className={styles.secNum}>03 /</span> User Discovery</h2>
                <p>
                  I spent a week shadowing operations coordinators on-site. I observed that their eyes constantly jumped between disparate screens. The most critical user pain points were the lack of active warning states when coordinates overlapped and the high amount of unnecessary clicks required to schedule a route.
                </p>
              </section>

              <section id="flow" className={styles.bodySection}>
                <h2><span className={styles.secNum}>04 /</span> Information Architecture</h2>
                <p>
                  I mapped out the operations journey to eliminate friction. By grouping data points logically and designing collapsible side panels, we ensured that the fleet dispatch dashboard displays all mandatory stats on a single viewport without causing visual clutter.
                </p>
              </section>

              <section id="ui" className={styles.bodySection}>
                <h2><span className={styles.secNum}>05 /</span> Interface System</h2>
                <p>
                  We built a solid, dark, data-dense design system in Figma. Using high-contrast purple accents for primary interactive cues and subtle greys for static values, the layout is balanced and clear. I designed atomic table rows, indicator badges, and customized form controls that are easily translated into code.
                </p>
              </section>

              <section id="result" className={styles.bodySection}>
                <h2><span className={styles.secNum}>06 /</span> Outcome & Impact</h2>
                <p>
                  The final layout was handed over and implemented using Laravel and Tailwind CSS. Post-launch user testing showed significant operational speedups and a near-zero route conflict rate. Operation coordinators reported significantly less fatigue during 8-hour shifts.
                </p>

                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>73%</div>
                    <div className={styles.metricLabel}>Reduction in dispatch scheduling time</div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricNum}>&lt; 5m</div>
                    <div className={styles.metricLabel}>Average dispatch time per vessel</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className={styles.nextTeaser}>
            <span className={styles.nextLabel}>Next Project</span>
            <Link href="/work/e-reserv" className={styles.nextTitle}>
              E-Reserv Hub →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
