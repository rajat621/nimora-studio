export const caseStudies = [
  {
    slug: "go-ride",
hero: {
  title:
    "Go Ride brings cycle rentals, route discovery, and community rides – All in one app.",
  subtitle:
    "Users get quick access to bikes. The business improves asset usage and reduces manual operations.",
  highlight: ["cycle", "rentals", "route", "discovery", "community", "rides"],
},

    overview: {
      description:
        "The client needed a sustainable cycling ecosystem enabling rentals, tracking and group rides.",
    },

intro: {
  containerMaxWidth: 890, // optional if you want control

  visualImage: "/images/industries/image_1.png", 
  // This is ONE combined image (logo + phones exactly like design)

  description:
    "The client is a mid-size urban mobility company operating cycle rentals in metro cities. The project started due to low app usage and high support costs. If nothing changed, bike idle time and customer drop-offs would increase.",

  meta: {
    client: "Go - Ride",
    industry: "E-Commerce / Mobility",
    services: [
      "UX Strategy",
      "Brand Experience",
      "Product Design",
    ],
    timeline: "08 weeks",
    location: "India",
  },
},

processSection: {
  intro: {
    eyebrow: "Design",
    title: "Process Used",
    description:
      "The Double Diamond framework was used to manage uncertainty across user behavior, habit formation, and business retention risk.\n\nThe problem space was broad, with multiple user types. This approach helped separate real issues from assumptions before design decisions.",
  },

  image: "/images/industries/image_2.png",

  steps: [
    {
      title: "DISCOVER",
      content:
        "Users struggled to find available cycles and understand pricing before arrival. Operators relied on manual tracking, leading to wrong availability and disputes. Users lost trust due to failed pickups and unclear rules. For the business, this caused cancellations, support overload, and lost revenue.",
    },
    {
      title: "DEFINE",
      content:
        "The core problem was unreliable access to cycle rentals at the moment of need. Target users were daily commuters, tourists, and short-distance urban riders. The key pain point was uncertainty—availability, pricing, and pickup flow.",
    },
    {
      title: "DESIGN",
      content:
        "The design focused on clarity, speed, and trust over visual complexity. Rules were set: no hidden steps, no unclear pricing, no manual confirmation loops.",
    },
    {
      title: "SOLUTION FOUND",
      content:
        "A mobile app was designed to show real-time cycle availability and fixed booking flows. Users could locate, reserve, unlock, and return cycles without staff involvement. Operators gained a single system for inventory, bookings, and usage tracking.",
    },
  ],
},

  brandingSection: {
  eyebrow: "LOGO DESIGN",

  description:
    "Every logo starts with understanding before aesthetics. We begin by defining the brand’s purpose and context, explore visual directions through sketching and iteration, and refine the mark through geometry, balance, and usability testing. The final logo is crafted to work seamlessly across screens, sizes, and real-world use.",

  visuals: {
    row1: [
      "/images/industries/image_1.png",
      "/images/industries/image_3.png",
    ],

    row2: "/images/industries/image_2.png",

    row3: [
      "/images/industries/image_4.png",
      "/images/industries/image_5.png",
    ],
  },
},
designSystemSection: {
  ideation: {
    eyebrow: "IDEATION",
    description:
      "Multiple ideas were explored, including subscription models and gamification. These were dropped due to low business readiness and high tech effort. The final solution focused on core renting, not feature overload.",
    image: "/images/industries/image_1.png",
  },

  designSystem: {
    eyebrow: "DESIGN SYSTEM",
    description:
      "The Go Ride design system was built to ensure clarity, consistency, and ease of use across the product. It defines typography, colour, components, and interactions that scale seamlessly while keeping the experience intuitive and accessible.",
  },

  typography: {
    title: "Typography",
    fontFamily: "Roboto",
    description:
      "Roboto was chosen for its clarity, screen readability, and neutral tone, making it ideal for quick scanning and real-time ride information.",

    variants: [
      { label: "Regular", weight: 400 },
      { label: "Medium", weight: 500 },
      { label: "Semibold", weight: 600 },
      { label: "Bold", weight: 700 },
      { label: "Italic", weight: 400, style: "italic" },
      { label: "Medium Italic", weight: 500, style: "italic" },
    ],
  },

  colorPaletteImage: "/images/industries/image_5.png",
},
visualsSection: {
  eyebrow: "VISUALS",
  description:
    "Instead of designing another feed or card layout, we envisioned Scenes as a navigable world, one where event discovery becomes simpler and distinctly interactive.",
  image: "/images/industries/image_1.png",
},

roleSection: {
  title: "Our Role",
  description:
    "Our responsibility covered user research, Branding strategy, UX architecture, Design systems, Interaction Design and UI execution.",

  columns: [
    {
      title: "UX Strategy",
      items: ["Market Research", "Emerging Trends", "UX research"],
    },
    {
      title: "Brand Experience",
      items: ["Branding Strategy & Positioning", "Illustration & Iconography"],
    },
    {
      title: "Product Design",
      items: ["UI/UX Design", "Design Systems", "Interaction Design", "Digital Prototyping"],
    },
  ],
},

conclusionSection: {
  eyebrow: "CONCLUSION",
  description:
    "This project solved a real access and operations problem, not just a UI issue. It connected user trust directly to business efficiency. The system is scalable across cities and fleet sizes.",
},


 } // Add more case studies here
];