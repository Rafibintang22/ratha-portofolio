export const workDetails = [
    {
        slug: "sipbanja",
        title: "Flood Control Application System",
        category: "Web Development",
        description:
            "A command-center dashboard that helps the Banjarmasin city government monitor flood gates, visualize telemetry data, and trigger response workflows in real time.",
        technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Leaflet"],
        metadata: {
            role: "Full-stack Developer",
            industry: "Smart City",
            year: "2024",
        },
        highlights: [
            "Real-time telemetry stream with historical trend overlays for each flood gate.",
            "Interactive geospatial map so operators can drill into field-level status quickly.",
            "Incident automation that suggests recommended actions based on the latest readings.",
        ],
        images: ["/works/sipbanja/sipbanja2-map.webp", "/works/sipbanja/sipbanja2-map.png"],
    },
    {
        slug: "hmpsars",
        title: "HMPS Ars Website",
        category: "Web Development",
        description:
            "Departmental portal for Architecture Student Association used to publish agendas, media updates, and collaboration opportunities.",
        technologies: ["Next.js", "Tailwind CSS", "Supabase"],
        metadata: {
            role: "Frontend Lead",
            industry: "Education",
            year: "2024",
        },
        highlights: [
            "Landing page hero that cycles through featured initiatives with custom gradient masks.",
            "Content blocks composed from a minimal CMS schema so the committee can edit safely.",
            "Accessible typography scale and high-contrast palette for better readability.",
        ],
        images: ["/works/hmpsars/hmpsars.webp"],
    },
    {
        slug: "jarrdin",
        title: "The Jarrdin Member Web App",
        category: "Web Development",
        description:
            "Membership management portal for Rusunami residents covering facility bookings, dues tracking, and multi-role approvals.",
        technologies: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB"],
        metadata: {
            role: "Product Engineer",
            industry: "Property Management",
            year: "2023",
        },
        highlights: [
            "Self-service payment receipts and download center to reduce admin handoffs.",
            "Role-based dashboards for tenants, finance, and building management.",
            "Batch notification system that keeps everyone aligned on upcoming maintenance.",
        ],
        images: [
            "/works/jarrdin/jarrdin-member.webp",
            "/works/jarrdin/jarrdin-member-mockup.webp",
            "/works/jarrdin/webJarrdin.webp",
        ],
    },
    {
        slug: "multilink",
        title: "Multilink Company Website",
        category: "Web Development",
        description:
            "Corporate marketing site for a logistics provider with product storytelling, service breakdowns, and a modular CMS-friendly design system.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
        metadata: {
            role: "Frontend Engineer",
            industry: "Logistics",
            year: "2022",
        },
        highlights: [
            "Reusable slice-based components that marketing can mix-and-match in the CMS.",
            "Optimized image delivery pipeline to keep Lighthouse scores in the 90s.",
            "Animated hero blocks that respond to cursor movement and scroll position.",
        ],
        images: ["/works/multilink/multilink.webp", "/works/multilink/multilink.png"],
    },
    {
        slug: "airwende",
        title: "Airwende Company Website",
        category: "UI/UX Design",
        description:
            "Concept site that blends storytelling with bold product mockups for an aviation tech startup.",
        technologies: ["Next.js", "Tailwind CSS", "GSAP"],
        metadata: {
            role: "UI/UX Designer",
            industry: "Aviation",
            year: "2023",
        },
        highlights: [
            "Immersive narrative sections powered by scroll-triggered parallax.",
            "Ultra-lightweight component library enabling quick variant explorations.",
            "Intentionally crafted typography rhythm inspired by boarding-pass layouts.",
        ],
        images: ["/works/airwende/Airwende.webp", "/works/airwende/Airwende.png"],
    },
    {
        slug: "pos",
        title: "Point Of Sales",
        category: "UI/UX Design",
        description:
            "Tablet-friendly POS experience for boutique retailers, covering catalog, checkout, and day-close summaries.",
        technologies: ["React", "Tailwind CSS", "Redux Toolkit"],
        metadata: {
            role: "Product Engineer",
            industry: "Retail",
            year: "2022",
        },
        highlights: [
            "Offline-first architecture with optimistic updates for faster checkout.",
            "Composable UI primitives to support kiosk, tablet, and desktop breakpoints.",
            "Realtime sales dashboard with contextual KPIs for store managers.",
        ],
        images: ["/works/pos/PointOfSales.webp"],
    },
];

export const getWorkBySlug = (slug) => workDetails.find((work) => work.slug === slug);

