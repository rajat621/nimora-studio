// ─────────────────────────────────────────────────────────────
// serviceData.ts
// Single source of truth for all service page content.
// Used by ServicePageLayout and ServiceCard (via Services.tsx).
// ─────────────────────────────────────────────────────────────

export interface FocusItem {
  heading: string;
  description: string;
}

export interface ServicePageData {
  /** slug matches the URL segment, e.g. "ux-strategy" */
  slug: string;
  /** Label shown in the tab bar */
  tabLabel: string;
  /** Hero title */
  title: string;
  /** One or two intro paragraphs */
  intro: string[];
  /** "What We Focus On" items */
  focusItems: FocusItem[];
  /** "The Outcome" paragraphs */
  outcome: string[];
  /** Image used on the Services section card */
  cardImage: string;
  /** Short description shown on the Services section card */
  cardDescription: string;
  /** Tags shown on the Services section card */
  cardTags: string[];
}

// ─────────────────────────────────────────────────────────────
// All 5 services
// ─────────────────────────────────────────────────────────────

export const services: ServicePageData[] = [
  {
    slug: "ux-strategy",
    tabLabel: "UX Strategy",
    title: "UX Strategy & Product Direction",
    intro: [
      "Before design or development begins, the most important question is: Are we building the right thing — in the right way — for the right users?",
      "Our UX strategy service helps teams define a clear product direction by aligning business goals, user needs, market realities, and technical constraints. This foundation reduces risk, prevents costly rework, and ensures every decision supports meaningful outcomes.",
    ],
    focusItems: [
      {
        heading: "Business Goals",
        description:
          "Understanding what success looks like for your organisation — revenue, growth, efficiency, or market positioning — so the product supports real business outcomes.",
      },
      {
        heading: "Heuristic Analysis",
        description:
          "Evaluating existing products or concepts against proven usability principles to identify friction, confusion, and opportunities for improvement.",
      },
      {
        heading: "Emerging Trends",
        description:
          "Analysing industry shifts, user expectations, and technological changes to ensure the product remains relevant and future-ready.",
      },
      {
        heading: "User Needs",
        description:
          "Identifying who your users are, what they're trying to accomplish, and where they struggle so solutions solve real problems, not assumptions.",
      },
      {
        heading: "UI/UX Auditing",
        description:
          "A structured review of current interfaces and experiences to uncover usability issues, inconsistencies, and areas that impact engagement or conversion.",
      },
      {
        heading: "AI Readiness & Experience Strategy",
        description:
          "Assessing how intelligent features can enhance the product experience and determining where AI adds real value without adding complexity.",
      },
      {
        heading: "Technical & Operational Constraints",
        description:
          "Understanding system limitations, resources, timelines, and workflows to ensure the strategy is practical and executable.",
      },
    ],
    outcome: [
      "You leave with a clear direction for what to build, why it matters, and how to move forward with confidence.",
      "This stage creates alignment across teams and prevents expensive course corrections later.",
    ],
    cardImage: "/images/services/Image_1.png",
    cardDescription:
      "We help teams define the right product direction and reduce early-stage risk.",
    cardTags: [
      "Business goals",
      "Heuristic Analysis",
      "Emerging Trends",
      "User needs",
      "UI/UX Auditing",
      "AI Readiness & Experience Strategy",
      "Technical and operational constraints",
    ],
  },

  {
    slug: "brand-experience",
    tabLabel: "Brand Experience",
    title: "Brand Experience & Identity",
    intro: [
      "Your brand is more than a logo — it's how people recognise you, trust you, and remember you across every interaction.",
      "We design cohesive brand experiences that communicate who you are, what you stand for, and why customers should choose you. By aligning strategy, visuals, and tone, we help brands feel clear, consistent, and credible across digital products and touchpoints.",
    ],
    focusItems: [
      {
        heading: "Branding Strategy & Positioning",
        description:
          "Defining your brand's purpose, audience, personality, and market position so you stand out with clarity not noise.",
      },
      {
        heading: "Typography, Color & Iconography",
        description:
          "Creating a visual language that is distinctive, accessible, and consistent across platforms, ensuring instant recognition and usability.",
      },
      {
        heading: "Illustration & Motion Design",
        description:
          "Designing custom visuals and motion that add personality, explain complex ideas, and make interactions more engaging and memorable.",
      },
      {
        heading: "Brand Clarity & Trust Design",
        description:
          "Shaping how your brand communicates through layout, tone, and visual consistency — building credibility and reducing confusion for users.",
      },
    ],
    outcome: [
      "A unified brand system that looks professional, feels intentional, and supports long-term growth.",
      "Your team gains clear guidelines and reusable assets that keep every touchpoint consistent from marketing to product experience.",
    ],
    cardImage: "/images/services/Image_2.png",
    cardDescription:
      "Build a brand that feels clear, consistent, and credible across digital touchpoints.",
    cardTags: [
      "Branding Strategy & Positioning",
      "Typography, Color, & Iconography",
      "Illustration and motion Design",
      "Brand Clarity & Trust Design",
    ],
  },

  {
    slug: "product-design",
    tabLabel: "Product Design",
    title: "Product Design (UX & UI)",
    intro: [
      "Great products don't happen by accident — they're designed intentionally around how people think, behave, and interact.",
      "We design end-to-end product experiences that are intuitive, efficient, and aligned with your business goals. From early concepts to validated solutions, our process ensures the product feels natural to use and ready to scale.",
    ],
    focusItems: [
      {
        heading: "User Experience Design",
        description:
          "Structuring flows, journeys, and information so users can accomplish tasks easily and confidently.",
      },
      {
        heading: "Interface Design",
        description:
          "Crafting clean, consistent visual interfaces that are accessible, scalable, and aligned with your brand.",
      },
      {
        heading: "Interaction Design",
        description:
          "Defining how the product responds to user actions — ensuring interactions feel smooth, predictable, and meaningful.",
      },
      {
        heading: "AI-Assisted Experience Design",
        description:
          "Designing intelligent features that enhance usability and decision-making without adding complexity.",
      },
      {
        heading: "Design Systems",
        description:
          "Building reusable components and guidelines that ensure consistency and speed across current and future development.",
      },
      {
        heading: "Prototyping & Usability Testing",
        description:
          "Creating interactive prototypes to validate ideas early and uncover usability issues before development begins.",
      },
      {
        heading: "Iterative Testing",
        description:
          "Continuously refining the experience based on feedback and real usage insights.",
      },
    ],
    outcome: [
      "A product that feels intuitive from the first interaction and continues to perform as it grows.",
    ],
    cardImage: "/images/services/Image_3.png",
    cardDescription:
      "Design usable, scalable products grounded in real user needs.",
    cardTags: [
      "User Experience Design",
      "Interface Design",
      "Interaction Design",
      "AI-Assisted Experience Design",
      "Design Systems",
      "Prototyping and usability testing",
      "Iterative Testing",
    ],
  },

  {
    slug: "product-development",
    tabLabel: "Product Development",
    title: "Product Development & Implementation",
    intro: [
      "Design only delivers value when it becomes a reliable, working product. We translate ideas and designs into scalable, high-performance software built for real-world use.",
      "Our engineering approach prioritises stability, maintainability, and future growth so your product can evolve without constant rebuilds.",
    ],
    focusItems: [
      {
        heading: "Web & Application Development",
        description:
          "Building responsive, reliable digital products across web and mobile platforms.",
      },
      {
        heading: "SaaS Platform Implementation",
        description:
          "Developing scalable platforms that support subscription models, complex workflows, and long-term growth.",
      },
      {
        heading: "Frontend & Backend Engineering",
        description:
          "Creating seamless user interfaces supported by robust server-side architecture and data handling.",
      },
      {
        heading: "System Integration & APIs",
        description:
          "Connecting third-party services, tools, and internal systems for smooth data flow and functionality.",
      },
      {
        heading: "Performance & Scalability Planning",
        description:
          "Ensuring the product remains fast, stable, and capable of handling growth.",
      },
      {
        heading: "AI Integration & Product Automation",
        description:
          "Implementing intelligent features and automation to improve efficiency and user experience.",
      },
    ],
    outcome: [
      "A dependable, production-ready product that performs well today and scales confidently tomorrow.",
    ],
    cardImage: "/images/services/Image_4.png",
    cardDescription:
      "Build reliable, scalable products from validated designs.",
    cardTags: [
      "Web and application development",
      "SaaS platform implementation",
      "Frontend and backend engineering",
      "System integration and APIs",
      "Performance and scalability planning",
      "AI Integration & Product Automation",
    ],
  },

  {
    slug: "go-live-support",
    tabLabel: "Go-Live Support",
    title: "Go-Live Support & Continuous Improvement",
    intro: [
      "Launching a product isn't the finish line — it's the beginning of real learning.",
      "We support your product beyond launch to ensure stability, performance, and continuous improvement as users interact with it in the real world.",
    ],
    focusItems: [
      {
        heading: "Performance & Stability Monitoring",
        description:
          "Tracking system health to ensure reliable operation under real usage conditions.",
      },
      {
        heading: "Ongoing Support & Optimization",
        description:
          "Improving performance, usability, and efficiency as needs evolve.",
      },
      {
        heading: "Bug Fixes & Issue Resolution",
        description:
          "Identifying and resolving problems quickly to minimise disruption.",
      },
      {
        heading: "Security Updates & Maintenance",
        description: "Keeping systems protected and up to date.",
      },
      {
        heading: "Iterative Design & UX Improvements",
        description:
          "Refining the experience based on real feedback and usage patterns.",
      },
      {
        heading: "Product Insights & Optimization",
        description:
          "Using data and observations to guide meaningful enhancements.",
      },
    ],
    outcome: [
      "A product that stays reliable, relevant, and competitive long after launch.",
    ],
    cardImage: "/images/services/Image_5.png",
    cardDescription:
      "Ongoing support and improvements after launch.",
    cardTags: [
      "Performance and Stability Monitoring",
      "Ongoing Support and Optimization",
      "Bug Fixes & Issue Resolution",
      "Security Updates and Maintenance",
      "Iterative design and UX improvements",
      "Product Insights & Optimization",
    ],
  },
];

/** Helper — find a service by slug */
export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return services.find((s) => s.slug === slug);
}