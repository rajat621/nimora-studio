
"use client";

import LegalPageLayout, {
  LegalSection,
} from "@/components/legal/LegalPageLayout";

// ─────────────────────────────────────────────
// Page data
// ─────────────────────────────────────────────

const sections: LegalSection[] = [
  {
    heading: "1. Use of the Website",
    content: (
      <>
        <p>
          The content on this website is provided for general information about
          our services. By using this site, you agree to use it only for lawful
          purposes and in a way that does not infringe on the rights or restrict
          the use of this site by others.
        </p>
        <p>
          We reserve the right to modify or discontinue any part of the website
          without notice.
        </p>
      </>
    ),
  },
  {
    heading: "2. Intellectual Property",
    content: (
      <>
        <p>
          All content on this website, including text, graphics, logos, images,
          and design elements, is the property of Nimora Studio unless otherwise
          stated.
        </p>
        <p>
          You may not copy, reproduce, distribute, or use any material from this
          website without prior written permission.
        </p>
      </>
    ),
  },
  {
    heading: "3. Project Engagement",
    content: (
      <>
        <p>
          Any project work, collaboration, or services provided by Nimora Studio
          will be governed by a separate agreement or contract outlining scope,
          timelines, and payment terms.
        </p>
        <p>
          The information on this website does not constitute a binding agreement
          for services.
        </p>
      </>
    ),
  },
  {
    heading: "4. Accuracy of Information",
    content: (
      <>
        <p>
          While we strive to ensure that all information on this website is
          accurate and up to date, we do not guarantee the completeness,
          reliability, or accuracy of the content.
        </p>
        <p>
          Information on this website may be updated or changed without notice.
        </p>
      </>
    ),
  },
  {
    heading: "5. Third-Party Links",
    content: (
      <p>
        Our website may include links to third-party websites or resources.
        These links are provided for convenience only, and we are not
        responsible for the content, policies, or practices of these external
        sites.
      </p>
    ),
  },
  {
    heading: "6. Limitation of Liability",
    content: (
      <>
        <p>
          Nimora Studio will not be liable for any direct, indirect, incidental,
          or consequential damages arising from the use of this website or
          reliance on its content.
        </p>
        <p>Use of this website is at your own risk.</p>
      </>
    ),
  },
  {
    heading: "7. Privacy",
    content: (
      <p>
        Your use of this website is also governed by our Privacy Policy, which
        explains how we collect, use, and protect your information.
      </p>
    ),
  },
  {
    heading: "8. Changes to These Terms",
    content: (
      <>
        <p>
          We reserve the right to update or modify these Terms &amp; Conditions
          at any time. Any changes will be reflected on this page with the
          updated date.
        </p>
        <p>
          Continued use of the website after changes implies acceptance of the
          revised terms.
        </p>
      </>
    ),
  },
  {
    heading: "9. Contact Us",
    content: (
      <p>
        If you have any questions about this Terms &amp; Conditions, please
        contact us at{" "}
        <a href="mailto:Info@nimorastudios.com">Info@nimorastudios.com</a>
      </p>
    ),
  },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions for Nimora Studio"
      effectiveDate="10th March, 2026"
      intro="Welcome to Nimora Studio. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully."
      sections={sections}
    />
  );
}