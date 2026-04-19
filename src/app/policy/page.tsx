// "use client";

// import styles from "./policy.module.css";
// import TermsHeroBackground from "@/components/hero/TermsHeroBackground";
// import CTA from "@/components/cta/CTA";
// import Footer from "@/components/footer/Footer";
// import Navigation from "@/components/navigation/Navigation";

// export default function PolicyPage() {
//   return (
//     <main className={styles.page}>
//       <Navigation />

//       {/* HERO */}
//       <section className={styles.hero}>
//         <TermsHeroBackground />

//         <div className={styles.heroContent}>
//           <h1 className={styles.title}>
//             Privacy Policy for Nimora Studio
//           </h1>

//           <p className={styles.date}>
//             Effective Date: 10th March, 2026
//           </p>

//           <p className={styles.intro}>
// At Nimora Studio, we respect your privacy and are committed to protecting the personal information you share with us. 
// This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
//           </p>
//         </div>
//       </section>

//       {/* TERMS */}
//       <section className={styles.termsSection}>
//   <div className={styles.container}>

//     <div className={styles.term}>
//       <h3>1. Information We Collect</h3>

//       <p>
//         We may collect certain information when you interact with our website, including:
//       </p>

//       <p>
//         Personal Information like: Name, Email address, Company name, Any information you submit
//         through contact forms, Non-Personal Information such as browser type, device information,
//         pages visited and general website usage data.
//       </p>

//       <p>
//         This information helps us understand how visitors use our website and improve our services.
//       </p>
//     </div>

//     <div className={styles.term}>
//       <h3>2. How We Use Your Information</h3>

//       <p>We use the information collected to:</p>

//       <ul>
//         <li>Respond to inquiries and messages</li>
//         <li>Communicate about potential projects or collaborations</li>
//         <li>Improve website performance and user experience</li>
//         <li>Understand visitor behavior and preferences</li>
//       </ul>

//       <p>
//         We do not sell, trade, or rent your personal information to third parties.
//       </p>
//     </div>

//     <div className={styles.term}>
//       <h3>3. Cookies and Tracking Technologies</h3>

//       <p>
//         Our website may use cookies or similar technologies to enhance the browsing experience
//         and collect basic usage analytics.
//       </p>

//       <p>Cookies help us:</p>

//       <ul>
//         <li>Understand how visitors interact with our site</li>
//         <li>Improve website functionality</li>
//         <li>Optimize content and performance</li>
//       </ul>

//       <p>You can choose to disable cookies through your browser settings.</p>
//     </div>

//     <div className={styles.term}>
//       <h3>4. Third-Party Services</h3>

//       <p>
//         We may use third-party services such as analytics tools or hosting providers that collect,
//         process, or store certain data on our behalf.
//       </p>

//       <p>
//         These services operate under their own privacy policies, and we recommend reviewing them
//         if you have concerns.
//       </p>
//     </div>

//     <div className={styles.term}>
//       <h3>5. Data Security</h3>

//       <p>
//         We take reasonable measures to protect your personal information from unauthorized access,
//         misuse, or disclosure.
//       </p>

//       <p>
//         However, no online platform can guarantee complete security, and you share information at
//         your own discretion.
//       </p>
//     </div>

//     <div className={styles.term}>
//       <h3>6. Your Rights</h3>

//       <p>
//         Depending on your location, you may have the right to:
//       </p>

//       <ul>
//         <li>Request access to your personal data</li>
//         <li>Request corrections or updates</li>
//         <li>Request deletion of your data</li>
//       </ul>

//       <p>
//         To exercise these rights, please contact us using the information below.
//       </p>
//     </div>

//     <div className={styles.term}>
//       <h3>7. Changes to This Privacy Policy</h3>

//       <p>
//         We may update this Privacy Policy periodically to reflect changes in our practices
//         or legal requirements.
//       </p>

//       <p>
//         Any updates will be posted on this page with the revised date.
//       </p>
//     </div>

//     <div className={styles.term}>
//       <h3>8. Contact Us</h3>

//       <p>
//         If you have any questions about this Privacy Policy, please contact us at
//         <strong> Info@nimorastudios.com</strong>
//       </p>
//     </div>

//   </div>
// </section>
//       <CTA />
//       <Footer />
//     </main>
//   );
// }
"use client";

import LegalPageLayout, {
  LegalSection,
} from "@/components/legal/LegalPageLayout";

// ─────────────────────────────────────────────
// Page data
// ─────────────────────────────────────────────

const sections: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    content: (
      <>
        <p>
          We may collect certain information when you interact with our website,
          including:
        </p>
        <p>
          <strong>Personal Information</strong> like: Name, Email address,
          Company name, Any information you submit through contact forms.
        </p>
        <p>
          <strong>Non-Personal Information</strong> such as browser type, device
          information, pages visited and general website usage data.
        </p>
        <p>
          This information helps us understand how visitors use our website and
          improve our services.
        </p>
      </>
    ),
  },
  {
    heading: "2. How We Use Your Information",
    content: (
      <>
        <p>We use the information collected to:</p>
        <ul>
          <li>Respond to inquiries and messages</li>
          <li>Communicate about potential projects or collaborations</li>
          <li>Improve website performance and user experience</li>
          <li>Understand visitor behavior and preferences</li>
        </ul>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties.
        </p>
      </>
    ),
  },
  {
    heading: "3. Cookies and Tracking Technologies",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies to enhance the
          browsing experience and collect basic usage analytics.
        </p>
        <p>Cookies help us:</p>
        <ul>
          <li>Understand how visitors interact with our site</li>
          <li>Improve website functionality</li>
          <li>Optimize content and performance</li>
        </ul>
        <p>You can choose to disable cookies through your browser settings.</p>
      </>
    ),
  },
  {
    heading: "4. Third-Party Services",
    content: (
      <>
        <p>
          We may use third-party services such as analytics tools or hosting
          providers that collect, process, or store certain data on our behalf.
        </p>
        <p>
          These services operate under their own privacy policies, and we
          recommend reviewing them if you have concerns.
        </p>
      </>
    ),
  },
  {
    heading: "5. Data Security",
    content: (
      <>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, misuse, or disclosure.
        </p>
        <p>
          However, no online platform can guarantee complete security, and you
          share information at your own discretion.
        </p>
      </>
    ),
  },
  {
    heading: "6. Your Rights",
    content: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request corrections or updates</li>
          <li>Request deletion of your data</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information
          below.
        </p>
      </>
    ),
  },
  {
    heading: "7. Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy periodically to reflect changes in
          our practices or legal requirements.
        </p>
        <p>Any updates will be posted on this page with the revised date.</p>
      </>
    ),
  },
  {
    heading: "8. Contact Us",
    content: (
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <a href="mailto:Info@nimorastudios.com">Info@nimorastudios.com</a>
      </p>
    ),
  },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function PolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy for Nimora Studio"
      effectiveDate="10th March, 2026"
      intro="At Nimora Studio, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website."
      sections={sections}
    />
  );
}