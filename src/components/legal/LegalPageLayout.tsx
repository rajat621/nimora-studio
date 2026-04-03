"use client";

import styles from "./LegalPage.module.css";
import TermsHeroBackground from "@/components/hero/TermsHeroBackground";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface LegalSection {
  heading: string;
  content: React.ReactNode; // paragraphs, lists, etc.
}

export interface LegalPageProps {
  title: string;
  effectiveDate: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export default function LegalPageLayout({
  title,
  effectiveDate,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <main className={styles.page}>
      <Navigation />

      {/* HERO */}
      <section className={styles.hero}>
        <TermsHeroBackground  />

        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.date}>Effective Date: {effectiveDate}</p>
          <p className={styles.intro}>{intro}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h3>{section.heading}</h3>
              {section.content}
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}