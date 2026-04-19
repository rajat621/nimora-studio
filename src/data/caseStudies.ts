type ContentBlock =
  | { type: "text"; value: string }
  | { type: "heading"; value: string }
  | { type: "bullets"; items: string[] }
  | { type: "spacer" };

export const caseStudies = [
  {
    slug: "go-ride",
    hero: {
      title:
        "Go Ride brings cycle rentals, route discovery, and community rides – All in one app.",
      subtitle:
        "Users get quick access to bikes.\nThe business improves asset usage and reduces manual operations.",
      highlight: ["cycle", "rentals", "route", "discovery", "community", "rides"],
    },

    intro: {
      containerMaxWidth: 890,

      visualImage: "/images/Casestudy/GoRide/Image 1.png",

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

      image: "/images/Casestudy/GoRide/Image 2.png",

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
        "Every logo starts with understanding before aesthetics. We begin by defining the brand's purpose and context, explore visual directions through sketching and iteration, and refine the mark through geometry, balance, and usability testing. The final logo is crafted to work seamlessly across screens, sizes, and real-world use.",

      visuals: {
        singleImage: "/images/Casestudy/GoRide/Image 3.png",
      },
    },

    designSystemSection: {
      ideation: {
        eyebrow: "IDEATION",
        description:
          "Multiple ideas were explored, including subscription models and gamification. These were dropped due to low business readiness and high tech effort. The final solution focused on core renting, not feature overload.",
        image: "/images/Casestudy/GoRide/Image 4.png",
      },

      designSystem: {
        eyebrow: "DESIGN SYSTEM",
        description:
          "The Go Ride design system was built to ensure clarity, consistency, and ease of use across the product. It defines typography, colour, components, and interactions that scale seamlessly while keeping the experience intuitive and accessible.",
      },

      typography: {
        title: "Typography",
        image: "/images/Casestudy/GoRide/Image 5.png",
      },

      colorPaletteImage: "/images/Casestudy/GoRide/Image 6.png",
    },

    visualsSection: {
      eyebrow: "VISUALS",
      description:
        "Instead of designing another feed or card layout, we envisioned Scenes as a navigable world, one where event discovery becomes simpler and distinctly interactive.",
      image: "/images/Casestudy/GoRide/Image 7.png",
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
          items: ["User Experience Design", "Interface Design", "Interaction Design", "Design Systems", "Prototyping and usability testing"],
        },
      ],
    },

    conclusionSection: {
      eyebrow: "CONCLUSION",
      description:
        "This project solved a real access and operations problem, not just a UI issue. It connected user trust directly to business efficiency. The system is scalable across cities and fleet sizes.",
    },
  },




  {
    slug: "time-management",
    hero: {
      title:
        "A focused time-management platform that plan, prioritise, and execute academic work without cognitive overload.",
      subtitle:
        "Delivers structured planning that reduces student decision fatigue and missed deadlines, while driving higher retention and engagement for education platforms through consistent, outcome-driven usage.",
      highlight: ["plan", "prioritise", "academic", "work"],
    },

    intro: {
      containerMaxWidth: 890,
      visualImage: "/images/Casestudy/Time Management/Image 1.png",
      description:
        "Ibtidaa — a mid-stage EdTech company building productivity tools for secondary and higher-education students. Highly competitive student productivity market with low long-term retention and feature saturation.",
      meta: {
        client: "Ibtidaa",
        industry: "EdTech",
        services: [
          "UX Strategy",
          "Brand Experience",
          "Product Design",
        ],
        timeline: "8 weeks",
        location: "India",
      },
    },

    processSection: {
      intro: {
        eyebrow: "Design",
        title: "Process Used",
        description:
          "The Double Diamond framework was used to manage uncertainty across user behavior, habit formation, and business retention risk. This approach allowed the team to separate assumptions from evidence, align product decisions with business outcomes, and reduce the risk of building features that looked useful but failed in real-world student routines.",
      },

      image: "/images/Casestudy/Time Management/Image 2.png",

      steps: [
        {
          title: "DISCOVER",
          content:
            "Students frequently created schedules but abandoned them within days. Students tracked tasks but struggled to decide what to do next. Students used multiple disconnected tools (notes app, calendar, reminders). Most competing apps optimised for professionals, not academic workflows.",
        },
        {
          title: "DEFINE",
          content:
            "Students don't fail to plan—they fail to sustain execution because planning systems demand too many decisions upfront. Cognitive overload caused by unclear priorities and unrealistic schedules.",
        },
        {
          title: "DESIGN",
          content:
            "The product shifted from being a task container to a decision-reducing system. The interface priorities \u201cwhat matters now\u201d over showing everything at once. Students receive default frameworks before customisation options.",
        },
        {
          title: "SOLUTION FOUND",
          // Structured content array — render each block by its type:
          //   "text"    → plain paragraph
          //   "heading" → bold/label line  (e.g. "How It Solves the Problem")
          //   "bullets" → bullet-point list
          //   "spacer"  → empty line between sections
          //
          // To add a line break inside a "text" value use \n
          // To add a blank line between two blocks use { type: "spacer" }
          content: [
            {
              type: "text",
              value: "A guided academic planning system combining:",
            },
            {
              type: "bullets",
              items: [
                "Task input with automatic time-slot suggestions",
                "Daily priority limits to prevent overload",
                "Visual separation between \u201cmust-do\u201d and \u201coptional\u201d tasks",
              ],
            },
            { type: "spacer" },
            {
              type: "heading",
              value: "How It Solves the Problem",
            },
            {
              type: "bullets",
              items: [
                "Converts vague intentions into executable plans",
                "Reduces daily planning effort",
                "Encourages consistent engagement through achievable workloads",
              ],
            },
            { type: "spacer" },
            {
              type: "heading",
              value: "Why This Solution Was Chosen",
            },
            {
              type: "text",
              value:
                "Alternative concepts (gamification, social accountability, streaks) were deprioritized because they increased engagement without solving execution failure.",
            },
          ] satisfies ContentBlock[],
        },
      ],
    },

    brandingSection: {
      eyebrow: "BRANDING",
      description:
        "Every logo starts with understanding before aesthetics. We begin by defining the brand's purpose and context, explore visual directions through sketching and iteration, and refine the mark through geometry, balance, and usability testing. The final logo is crafted to work seamlessly across screens, sizes, and real-world use.",
      visuals: {
        singleImage: "/images/Casestudy/Time Management/Image 3.png",
      },
    },

    designSystemSection: {
      ideation: {
        eyebrow: "IDEATION",
        description: "The team looked at AI schedules, group features, and rewards, but didn't use them because they were hard to trust and added confusion. Instead, the focus stayed on one clear workflow using simple logic that works reliably.",
        image: "/images/Casestudy/Time Management/Image 4.png",
      },

      designSystem: {
        eyebrow: "DESIGN SYSTEM",
        description:
          "The design system keeps layouts, colours, and components consistent across the dashboard. It helps teams build faster while keeping the experience clear and easy to use.",
      },

      typography: {
        title: "Typography",
        image: "/images/Casestudy/Time Management/Image 5.png",
      },

      colorPaletteImage: "/images/Casestudy/Time Management/Image 6.png",
    },

    visualsSection: {
      eyebrow: "VISUALS",
      description:
        "The visuals are clean and minimal to help users focus on tasks and time blocks. Clear spacing and soft colors reduce stress and make schedules easy to scan.",
      image: "/images/Casestudy/Time Management/Image 7.png",
    },

    roleSection: {
      title: "Our Role",
      description:
        "We led the UX strategy and product design, shaping the core workflow and structure. We aligned user needs with business goals to deliver a clear, scalable solution.",

      columns: [
        {
          title: "UX Strategy",
          items: ["Business Goals", "Emerging Trends", "User needs"],
        },
        {
          title: "Brand Experience",
          items: ["Illustration & Iconography", "Branding Strategy & Positioning"],
        },
        {
          title: "Product Design",
          items: ["User Experience Design", "Interface Design", "Design System", "Interaction Design", "Prototyping and usability testing", "Iterative Testing"],
        },
      ],
    },

    conclusionSection: {
      eyebrow: "CONCLUSION",
      description:
        "This project focused on helping users actually complete tasks, not just look productive. It solved a real problem by keeping the system easy to use and reliable. The solution is built to scale, with room to grow through smarter features and partnerships.",
    },
  },




  {
    slug: "feasto",
    hero: {
      title:
        "A kiosk-based snack ordering system that eliminates queue anxiety during cinema intervals. Plan, order, and receive snacks without leaving your seat or missing the movie.",
      subtitle:
        "Designed to reduce decision fatigue, waiting time, and crowd pressure during high-density cinema intervals by combining self-service ordering with seat-based delivery.",
      highlight: ["eliminates", "queue", "anxiety", "Plan", "order", "receive"],
    },

    intro: {
      containerMaxWidth: 890,
      visualImage: "/images/Casestudy/Feasto/Image 1.png",
      description:
        "Cinema Chains & Theatre Operations managing high density audience flow during short movie intervals. Highly time constrained service environment with peak congestion, queue dependency, and frequent experience breakdowns.",
      meta: {
        client: "Feasto",
        industry: "Entertainment / Cinema",
        services: [
          "UX Strategy",
          "Brand Experience",
          "Product Design",
        ],
        timeline: "8 weeks",
        location: "India",
      },
    },

    processSection: {
      intro: {
        eyebrow: "Design",
        title: "Process Used",
        description:
          "Feasto was designed using a service-first approach, focusing on real user behaviour during high-pressure cinema intervals. The process examined how limited time, crowd movement, and queues slow down decision-making. This shifted the focus from improving interfaces to rethinking the entire ordering flow. Instead of optimising screens, the solution removes queue dependency allowing users to order quickly and return to their seats while the system manages preparation and delivery.",
      },

      image: "/images/Casestudy/Feasto/Image 2.png",

      steps: [
        {
          title: "DISCOVER",
          content:
            "During cinema intervals, large crowds move toward snack counters at the same time, creating long queues and time pressure. Users hesitate while deciding, feel rushed, and constantly check the time. Many either make quick compromises or skip snacks entirely. Existing options like mobile apps fail here, as they require attention, login, and time.",
        },
        {
          title: "DEFINE",
          content:
            "The problem is not ordering snacks it is doing so within a limited time. Queue dependency and uncertainty create stress, where users fear missing the movie more than they want snacks.",
        },
        {
          title: "DESIGN",
          content:
            "The focus shifts from improving interfaces to removing queue dependency. The system prioritizes fast interaction, minimal decisions, and allowing users to return to their seats immediately.",
        },
        {
  title: "SOLUTION FOUND",
  content: [
    {
      type: "text",
      value: "A kiosk-based ordering system with in-seat delivery.",
    },
    {
      type: "heading",
      value: "Key Features",
    },
    {
      type: "bullets",
      items: [
        "Self-service kiosks",
        "Visual, fast menu selection",
        "Seat-based delivery",
        "Order confirmation",
      ],
    },
    {
      type: "heading",
      value: "How It Solves",
    },
    {
      type: "bullets",
      items: [
        "Removes queues",
        "Reduces decision time",
        "Lets users return to their seats quickly",
      ],
    },
    {
      type: "heading",
      value: "Why This",
    },
    {
      type: "text",
      value:
        "Other solutions still rely on time and attention. This approach works within the interval constraint.",
    },
  ] satisfies ContentBlock[],
},
      ],
    },

    brandingSection: {
      eyebrow: "BRANDING",
      description: "The Feasto logo is designed to communicate speed and simplicity in a high-pressure environment. Built for quick recognition, the identity avoids visual complexity and works effectively in crowded cinema spaces where attention is limited. The design reflects the product's core purpose enabling fast, frictionless snack ordering without delay or confusion.",
      visuals: {
        singleImage: "/images/Casestudy/Feasto/Image 3.png",
      },
    },

    designSystemSection: {
      ideation: {
        eyebrow: "IDEATION",
        description: "Initial ideas explored mobile ordering, pre-booking, and staff-assisted delivery, but these approaches still depended on user attention, time, or existing queues. The focus shifted to a single, reliable workflow that reduces friction during the interval allowing users to order quickly without waiting or navigating complex steps.",
        image: "/images/Casestudy/Feasto/Image 4.png",
      },

      designSystem: {
        eyebrow: "DESIGN SYSTEM",
        description: "The design system is built for speed, clarity, and consistency under high-pressure conditions. Layouts, components, and interactions are kept simple and predictable, ensuring users can quickly understand and act without confusion. The system supports fast decision-making while maintaining consistency across all kiosk screens.",
      },

      typography: {
        title: "Typography",
        image: "/images/Casestudy/Feasto/Image 5.png",
      },

      colorPaletteImage: "/images/Casestudy/Feasto/Image 6.png",
    },

    visualsSection: {
      eyebrow: "VISUALS",
      description: "The visuals are clean and minimal to help users focus on tasks and time blocks. Clear spacing and soft colors reduce stress and make schedules easy to scan.",
      image: "/images/Casestudy/Feasto/Image 7.png",
    },

    roleSection: {
      title: "Our Role",
      description:
        "We led the UX and service design for Feasto, defining the core experience, user flows, and system interactions. The focus was on aligning user needs with real-world cinema constraints to create a fast, reliable, and scalable snack-ordering experience.",

      columns: [
        {
          title: "UX Strategy",
          items: ["Business Goals", "Emerging Trends", "User needs", "Technical and operational constraints"],
        },
        {
          title: "Brand Experience",
          items: ["Illustration & Iconography", "Branding Strategy & Positioning"],
        },
        {
          title: "Product Design",
          items: ["User Experience Design", "Interface Design", "Design System", "Interaction Design", "Prototyping and usability testing", "Iterative Testing"],
        },
      ],
    },

    conclusionSection: {
      eyebrow: "CONCLUSION",
      description:
        "Feasto focuses on solving a real, time-critical problem helping users order snacks without missing the movie. By removing queue dependency and simplifying decision-making, the system transforms a stressful interval into a fast and predictable experience. The solution demonstrates how service design and system thinking can improve both user experience and operational efficiency in high-pressure environments.",
    },
  },




  {
    slug: "resturent-dashboard",
    hero: {
      title:
        "A restaurant dashboard that helps owners track orders, sales, and operations in real time from one screen.",
      subtitle:
        "It saves staff time and reduces daily confusion. It helps the business make faster and better decisions.",
      highlight: ["track", "orders", "sales", "operations", "real-time"],
    },

    intro: {
      containerMaxWidth: 890,
      visualImage: "/images/Casestudy/Resturent dashboard/Image 1.png",
      description:
        "The project was done for a mid-sized restaurant chain operating multiple outlets. The dashboard was started to improve daily control and reporting. Without change, errors, delays, and revenue loss would continue.",
      meta: {
        client: "Plate - Fork",
        industry: "E-Commerce",
        services: [
          "UX Strategy",
          "Brand Experience",
          "Product Design",
        ],
        timeline: "6 weeks",
        location: "India",
      },
    },

    processSection: {
      intro: {
        eyebrow: "Design",
        title: "Process Used",
        description: "The Double Diamond process was used to reduce risk before building anything. The problem involved many users, data sources, and business decisions. A structured approach helped avoid wrong assumptions and wasted effort.",
      },

      image: "/images/Casestudy/Resturent dashboard/Image 2.png",

      steps: [
        {
          title: "DISCOVER",
          content:
            "Staff checked sales, orders, and inventory from different tools. Managers struggled to understand performance quickly during busy hours. Reports were delayed and often ignored. This caused slow decisions, missed issues, and poor daily planning.",
        },
        {
          title: "DEFINE",
          content:
            "The core problem was lack of clear, real-time visibility into restaurant performance. Target users were restaurant owners and floor managers. The main pain point was confusing and delayed data.",
        },
        {
          title: "DESIGN",
          content:
            "Insights led to a focus on clarity, speed, and priority-based information. Only critical metrics were shown first. The dashboard was designed to work during peak hours.",
        },
        {
          title: "SOLUTION FOUND",
          content:
            "A centralized dashboard showing sales, orders, staff status, and inventory. It reduced the need to switch tools or ask for reports. It improved daily control without adding staff workload.",
        },
      ],
    },

    brandingSection: {
      eyebrow: "BRANDING",
      description:
        "Every logo starts with understanding before aesthetics. We begin by defining the brand's purpose and context, explore visual directions through sketching and iteration, and refine the mark through geometry, balance, and usability testing. The final logo is crafted to work seamlessly across screens, sizes, and real-world use.",
      visuals: {
        singleImage: "/images/Casestudy/Resturent dashboard/Image 3.png",
      },
    },

    designSystemSection: {
      ideation: {
        eyebrow: "IDEATION",
        description:
          "Advanced analytics and heavy customization were explored but dropped. They required more time and higher costs. The team focused on essentials that worked immediately.",
        image: "/images/Casestudy/Resturent dashboard/Image 4.png",
      },

      designSystem: {
        eyebrow: "DESIGN SYSTEM",
        description:
          "The design system was created to keep the restaurant dashboard consistent, clear, and easy to scale. It defines colors, typography, spacing, and components so teams can build faster with fewer errors.",
      },

      typography: {
        title: "Typography",
        image: "/images/Casestudy/Resturent dashboard/Image 5.png",
      },

      colorPaletteImage: "/images/Casestudy/Resturent dashboard/Image 6.png",
    },

    visualsSection: {
      eyebrow: "VISUALS",
      description:
        "The visuals were designed to be clean, calm, and easy to read during busy hours. High-contrast colors highlight important data, while simple layouts reduce noise. The interface helps users scan information quickly without distraction or confusion.",
      image: "/images/Casestudy/Resturent dashboard/Image 7.png",
    },

    roleSection: {
      title: "Our Role",
      description:
        "Our responsibility covered user research, Branding strategy, UX architecture, Design systems, Interaction Design and UI execution.",

      columns: [
        {
          title: "UX Strategy",
          items: ["Business Goals", "Emerging Trends", "User needs", "Technical and operational constraints"],
        },
        {
          title: "Brand Experience",
          items: ["Illustration & Iconography"],
        },
        {
          title: "Product Design",
          items: ["User Experience Design", "Interface Design", "Design System", "Interaction Design", "Prototyping and usability testing", "Iterative Testing"],
        },
      ],
    },

    conclusionSection: {
      eyebrow: "CONCLUSION",
      description:
        "This project solved a real operational problem for restaurants. It improved visibility, control, and daily decision-making. The dashboard is scalable across outlets and teams.",
    },
  },
];