"use client";

import Link from "next/link";
import styles from "./ServicePage.module.css";
import { services, ServicePageData } from "./serviceData";
import TermsHeroBackground from "@/components/hero/TermsHeroBackground";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";

// ─────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────

interface ServicePageLayoutProps {
  data: ServicePageData;
}

// ─────────────────────────────────────────────────────────────
// Helper — parse bold text wrapped in **…** in intro strings
// ─────────────────────────────────────────────────────────────

function ParsedParagraph({ text }: { text: string }) {
  // splits on **bold** markers
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <p className={styles.introParagraph}>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
      )}
    </p>
  );
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

export default function ServicePageLayout({ data }: ServicePageLayoutProps) {
  return (
    <main className={styles.page}>
      <Navigation />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <TermsHeroBackground  />

        {/* Tab navigation */}
        <nav className={styles.tabNav} aria-label="Service pages">
          <div className={styles.tabList}>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`${styles.tabBtn} ${
                  service.slug === data.slug ? styles.tabActive : ""
                }`}
              >
                {service.tabLabel}
              </Link>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{data.title}</h1>

          {data.intro.map((paragraph, i) => (
            <ParsedParagraph key={i} text={paragraph} />
          ))}
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className={styles.contentSection}>
        <div className={styles.container}>

          {/* What We Focus On */}
          <p className={styles.focusHeading}>What We Focus On</p>

          {data.focusItems.map((item, i) => (
            <div key={i} className={styles.focusItem}>
              <h3 className={styles.focusItemHeading}>{item.heading}</h3>
              <p className={styles.focusItemDescription}>{item.description}</p>
            </div>
          ))}

          {/* The Outcome */}
          <p className={styles.outcomeHeading}>The Outcome</p>

          {data.outcome.map((paragraph, i) => (
            <p key={i} className={styles.outcomeParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}