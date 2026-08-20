import { IconType } from "react-icons";
import {
    HiMiniRocketLaunch, HiMiniCpuChip, HiMiniCube, HiMiniChartBar,
    HiMiniMap, HiMiniUsers, HiMiniWrenchScrewdriver,
    HiMiniGlobeAlt, HiMiniShoppingCart, HiMiniCommandLine, HiMiniSparkles,
    HiMiniCloud,
} from "react-icons/hi2";

export type FilterType = "All" | "Live" | "In Progress (private)" | "Live -- Alkayan Nova in Progress" | "Graduation";

export interface CaseStudy {
    problem: string;
    solution: string;
    highlights: string[];
    /** true = no real screenshots exist yet, render an architecture diagram instead of a gallery */
    apiOnly?: boolean;
    /** Real architecture/ER/sequence diagrams exported as SVG — shown in a tabbed viewer when present */
    diagrams?: { label: string; src: string }[];
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    /** Optional second link — shown alongside `link` when a project has BOTH a live site and a public repo */
    githubLink?: string;
    Icon: IconType;
    color: string;
    accent: string;
    accentRgb: string;
    status: FilterType;
    images: string[];
    previewImage: string;
    year: string;
    category: string;
    /** Present only on the 5–7 featured projects that get a dedicated /projects/[slug] case-study page */
    slug?: string;
    caseStudy?: CaseStudy;
}

export const projects: Project[] = [
    {
        title: "Egypt Tour Guide",
        description: "Bilingual PWA tourism platform. Next.js 15 App Router, Node.js REST API, Redis caching, GSAP animations, i18next. LCP under 2s. Lighthouse 100% SEO, 98% Accessibility.",
        tech: ["Next.js 15", "TypeScript", "Express", "PostgreSQL", "Drizzle ORM", "Redis", "GSAP", "i18next"],
        link: "https://www.egypt-tour-guide.com/",
        githubLink: "https://github.com/Ahmed-Hamdy101/et-gco-tours-showcase",
        Icon: HiMiniGlobeAlt,
        color: "text-amber-400",
        accent: "#f59e0b",
        accentRgb: "245,158,11",
        status: "Live",
        previewImage: "/images/projects/et-gco-platform/et-gco-thumbnail-project-image.png",
        year: "2025",
        category: "Tourism · PWA",
        images: [
            "/images/projects/et-gco-platform/gallery/book.png",
            "/images/projects/et-gco-platform/gallery/book-details.png",
            "/images/projects/et-gco-platform/gallery/destination-page.png",
            "/images/projects/et-gco-platform/gallery/destination-section.png",
        ],
        slug: "egypt-tour-guide",
        caseStudy: {
            problem: "ET GCO Tours needed a bilingual (German/English) tourism booking platform that could compete on organic search, load instantly on mobile, and replace manual phone/email booking coordination with a structured, trackable workflow — without sacrificing design polish.",
            solution: "Architected a fully decoupled system: a Next.js 15 client and an Express API server, both in TypeScript for end-to-end type safety. Built a custom booking-code generation engine with dynamic inventory tracking across tour categories, backed by a normalized PostgreSQL schema (Drizzle ORM) with automated migrations and connection pooling.",
            highlights: [
                "Decoupled frontend/backend: Next.js 15 on Vercel talking to an Express API on a DigitalOcean Droplet behind a Caddy reverse proxy with SSL/TLS",
                "Redis caching + Gzip compression + SSR/SSG to keep LCP under 2.5s",
                "Rate limiting, CSRF protection, SQL-injection prevention, and automated request validation via Express Validator",
                "i18next-driven bilingual UI with automatic browser-language detection",
                "GA4 integration for traffic monitoring — Lighthouse scores of 100% SEO / 98% Accessibility",
            ],
            diagrams: [
                { label: "System Architecture", src: "/images/projects/et-gco-platform/diagrams/et-gco-architecture.svg" },
                { label: "ER Diagram", src: "/images/projects/et-gco-platform/diagrams/et-gco-erDiagram.svg" },
                { label: "Booking Sequence", src: "/images/projects/et-gco-platform/diagrams/et-gco-sequenceDiagram.svg" },
                { label: "Low-Level Design", src: "/images/projects/et-gco-platform/diagrams/etgco-lrd-rp.svg" },
            ],
        },
    },
    {
        title: "Alkayan Construction",
        description: "Proprietary Real Estate CMS with RBAC authentication,  MVC backend. Reduced vulnerabilities by 75% via CSRF protection and full-stack input validation.",
        tech: ["Laravel", "PHP", "MySQL", "RBAC", "CSRF", "Three.js", "GSAP"],
        link: "https://www.alkayan-co.com",
        githubLink: "https://github.com/Ahmed-Hamdy101/alkayan-nova-showcase",
        Icon: HiMiniCpuChip,
        color: "text-sky-400",
        accent: "#38bdf8",
        accentRgb: "56,189,248",
        status: "Live -- Alkayan Nova in Progress",
        previewImage: "/images/projects/al-kayan-nova/ak-thumbnail-main-image.png",
        year: "2021",
        category: "Real Estate · CMS",
        images: [
            "/images/projects/al-kayan-nova/gallery/01-hero-building-future.png",
            "/images/projects/al-kayan-nova/gallery/02-constructing-regional-landmarks.png",
            "/images/projects/al-kayan-nova/gallery/03-what-we-build.png",
            "/images/projects/al-kayan-nova/gallery/04-landmarks-focus.png",
            "/images/projects/al-kayan-nova/gallery/05-leadership-team.png",
            "/images/projects/al-kayan-nova/gallery/06-forged-in-partnership.png",
            "/images/projects/al-kayan-nova/gallery/07-project-clarity.png",
            "/images/projects/al-kayan-nova/gallery/08-build-your-legacy-footer.png",
        ],
        slug: "alkayan-nova",
        caseStudy: {
            problem: "Al Kayan Construction & Engineering was running on a static informational site with no structured way to manage property listings, no access control over who could publish content, and known security gaps in the legacy codebase.",
            solution: "Engineered a proprietary Real Estate CMS from the ground up in Laravel (MVC) with role-based access control (RBAC), CSRF protection, and full-stack input validation — cutting identified vulnerabilities by 75%. Followed up with \u201cNova\u201d, a UX 2.0 redesign adding a dark/light theme system, advanced property filtering, interactive 3D visuals (Three.js/GSAP), and IndexedDB-backed client-side caching.",
            highlights: [
                "Laravel MVC backend on MySQL with an RBAC role hierarchy for property and content management",
                "CSRF protection + rigorous full-stack input validation, reducing identified vulnerabilities by 75%",
                "Optimized database schemas and SQL execution plans across concurrent production systems",
                "Three.js/GSAP 3D visual layer and IndexedDB caching added in the Nova redesign",
                "End-to-end infra ownership: DNS (GoDaddy), hosting (Namecheap), SSL certificates",
            ],
            diagrams: [
                { label: "System Architecture", src: "/images/projects/al-kayan-nova/diagrams/al-kayan-architecture.svg" },
                { label: "Component Diagram", src: "/images/projects/al-kayan-nova/diagrams/alkayan-component-tb.svg" },
                { label: "Component Interaction", src: "/images/projects/al-kayan-nova/diagrams/alkayan-cid.svg" },
                { label: "Data Flow Diagram", src: "/images/projects/al-kayan-nova/diagrams/alkayan-df-td.svg" },
                { label: "ER Diagram", src: "/images/projects/al-kayan-nova/diagrams/alkayan-erd.svg" },
            ],
        },
    },
    {
        title: "Portfolio — This Site",
        description: "This portfolio — built with Next.js 15, Framer Motion, Tailwind CSS 4, and a custom particle canvas engine. Deployed on Vercel with perfect Lighthouse scores.",
        tech: ["Next.js 15", "TypeScript", "Framer Motion", "Tailwind CSS 4", "Canvas API"],
        link: "#",
        Icon: HiMiniUsers,
        color: "text-pink-400",
        accent: "#f472b6",
        accentRgb: "244,114,182",
        status: "Live",
        previewImage: "",
        year: "2025",
        category: "Portfolio",
        images: [],
    },
    {
        title: "Logger Suite ERP",
        description: "Multi-tenant SaaS ERP combining Next.js 15 frontend with Laravel REST backend. Admin/Editor/Guest RBAC, Redis caching, Docker containerization, AWS EC2/S3.",
        tech: ["Next.js 15", "Laravel", "MySQL", "Redis", "JWT", "Docker", "AWS"],
        link: "#",
        Icon: HiMiniChartBar,
        color: "text-rose-400",
        accent: "#fb7185",
        accentRgb: "251,113,133",
        status: "In Progress (private)",
        previewImage: "/images/projects/logger-suite/dashboard-project-image-thumbnail.png",
        year: "2024",
        category: "SaaS · ERP",
        images: [
            "/images/projects/logger-suite/gallery/dashboard.png",
            "/images/projects/logger-suite/gallery/dashboard_ai.png",
            "/images/projects/logger-suite/gallery/dashboard_pos.png",
            "/images/projects/logger-suite/gallery/dashboard_product.png",
            "/images/projects/logger-suite/gallery/dashboard_stock.png",
            "/images/projects/logger-suite/gallery/login.png",
        ],
        slug: "logger-suite-erp",
        caseStudy: {
            problem: "Growing operations teams needed a multi-tenant ERP that could handle inventory, stock tracking, and role-scoped dashboards for admins, editors, and guests — without every tenant needing separate infrastructure.",
            solution: "Built a multi-tenant SaaS ERP pairing a Next.js 15 frontend with a Laravel REST backend. Implemented Admin/Editor/Guest RBAC, JWT-secured API access, and Redis caching for dashboard and stock-tracking performance, containerized with Docker and deployed on AWS EC2/S3.",
            highlights: [
                "Decoupled Next.js 15 frontend + Laravel REST API backend",
                "Multi-tenant data model with Admin/Editor/Guest role-based access control",
                "JWT authentication across the API boundary, Redis caching for hot dashboard queries",
                "Docker containerization with AWS EC2/S3 deployment",
            ],
        },
    },
    {
        title: "AutoFix — Car Service",
        description: "AI-powered automotive platform using Bun runtime. Multi-role dashboards for mechanics, admins, and customers. OpenAI API for vehicle diagnostics and code-level maintenance guidance.",
        tech: ["Bun", "React", "TypeScript", "OpenAI API", "Tailwind CSS"],
        link: "#",
        Icon: HiMiniWrenchScrewdriver,
        color: "text-emerald-400",
        accent: "#34d399",
        accentRgb: "52,211,153",
        status: "Graduation",
        previewImage: "/images/projects/Icare-car-platform/autofix-car-ux-full.png",
        year: "2024",
        category: "AI · Automotive",
        images: [
            "/images/projects/Icare-car-platform/autofix-car-ux-full.png",
        ],
        slug: "autofix-car-service",
        caseStudy: {
            problem: "Car owners and independent mechanics often lack quick, structured access to diagnostic guidance — leading to guesswork, unnecessary shop visits, and miscommunication between customers, mechanics, and admins.",
            solution: "Built an AI-powered automotive service platform on the Bun runtime with multi-role dashboards for mechanics, admins, and customers. Integrated the OpenAI API to power vehicle diagnostics and code-level maintenance guidance directly inside the customer and mechanic flows.",
            highlights: [
                "Bun runtime for fast startup and a tighter dev loop than a standard Node.js stack",
                "Role-scoped dashboards: Customer / Mechanic / Admin, each with its own views and permissions",
                "OpenAI API integration for natural-language vehicle diagnostics and maintenance guidance",
                "React + TypeScript + Tailwind CSS front end with a component-driven UI",
            ],
        },
    },
    {
        title: "Evento — Events",
        description: "Full-stack event management platform with admin and client portals, role-based access, dashboard analytics, and event scheduling.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
        link: "#",
        Icon: HiMiniRocketLaunch,
        color: "text-violet-400",
        accent: "#a78bfa",
        accentRgb: "167,139,250",
        status: "In Progress (private)",
        previewImage: "",
        year: "2024",
        category: "Events · Platform",
        images: [],
    },
    {
        title: "Larafolio",
        description: "Personal developer portfolio on Laravel backend with a clean CMS for content management, showcasing projects, skills, and work history.",
        tech: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],
        link: "https://github.com/Ahmed-Hamdy101/laravel-larafolio",
        Icon: HiMiniCube,
        color: "text-fuchsia-400",
        accent: "#e879f9",
        accentRgb: "232,121,249",
        status: "Live",
        previewImage: "/images/projects/larafolio/larafolio.jpg",
        year: "2023",
        category: "Portfolio · Laravel",
        images: ["/images/projects/larafolio/larafolio.jpg"],
    },
    {
        title: "Admin Rest API",
        description: "A secure and scalable Admin API built with Laravel and powered by Passport authentication. Designed to manage users, orders, and admin operations through clean RESTful endpoints.",
        tech: ["Laravel", "Passport (OAuth2/JWT)", "RBAC", "PHP", "MySQL", "REST API"],
        link: "https://github.com/Ahmed-Hamdy101/laravel-rest-api",
        Icon: HiMiniRocketLaunch,
        color: "text-cyan-400",
        accent: "#cf352a",
        accentRgb: "34,211,238",
        status: "Live",
        previewImage: "/images/projects/laravel-rest-api/laravel-rest-api-thumbnail.png",
        year: "2023",
        category: "Backend · API",
        images: ["/images/projects/laravel-rest-api/laravel-rest-api-thumbnail.png"],
        slug: "laravel-admin-rest-api",
        caseStudy: {
            problem: "Admin backends for e-commerce or ops platforms often bolt on authentication and export features late, leading to inconsistent auth and slow, memory-heavy CSV exports for large order sets.",
            solution: "Built a secure, scalable Admin REST API in Laravel using Passport for OAuth2/JWT authentication, with RBAC controlling access to users, orders, and admin operations. Order lifecycle management is exposed through clean RESTful endpoints, including streaming CSV exports that avoid loading full datasets into memory.",
            highlights: [
                "Laravel + Passport for OAuth2/JWT-based API authentication",
                "RBAC layer governing user, order, and admin-operation endpoints",
                "Full order lifecycle management via RESTful endpoints",
                "Streaming CSV export for large order datasets, avoiding memory spikes",
            ],
            diagrams: [
                { label: "System Architecture", src: "/images/projects/laravel-rest-api/diagrams/laravel-system-architecture.svg" },
                { label: "Stack Architecture", src: "/images/projects/laravel-rest-api/diagrams/laravel-rest-stack-arch.svg" },
                { label: "API Endpoints", src: "/images/projects/laravel-rest-api/diagrams/laravel-api-endpoint-v1.svg" },
                { label: "ER Diagram", src: "/images/projects/laravel-rest-api/diagrams/laravel-rest-erDiagram.svg" },
                { label: "JWT Auth Sequence", src: "/images/projects/laravel-rest-api/diagrams/jwt-auth-sequenceDiagram.svg" },
            ],
            apiOnly: true,
        },
    },
    {
        title: "TypeScript AI API",
        description: "Production-ready Fastify REST API in TypeScript, integrated with the OpenAI API to deliver intelligent-assistant capabilities behind clean, typed endpoints.",
        tech: ["Fastify", "TypeScript", "OpenAI API", "Node.js"],
        link: "https://github.com/Ahmed-Hamdy101/ts-ai-api",
        Icon: HiMiniSparkles,
        color: "text-indigo-400",
        accent: "#818cf8",
        accentRgb: "129,140,248",
        status: "Live",
        previewImage: "/images/projects/ts-ai-api/ts-ai-api.jpg",
        year: "2024",
        category: "Backend · AI API",
        images: ["/images/projects/ts-ai-api/ts-ai-api.jpg"],
        slug: "typescript-ai-api",
        caseStudy: {
            problem: "Teams integrating LLM features into a product need a reliable, typed API layer around the OpenAI API rather than calling it ad hoc from the frontend — something with proper request validation, error handling, and a clean contract.",
            solution: "Built a production-ready Fastify REST API in TypeScript that wraps the OpenAI API to deliver intelligent-assistant capabilities behind clean, typed endpoints — a reusable backend layer any frontend can call safely.",
            highlights: [
                "Fastify chosen over Express for its lower overhead and built-in schema-based validation",
                "TypeScript end-to-end for compile-time safety on request/response contracts",
                "OpenAI API integration abstracted behind internal service methods, never exposed directly to clients",
                "Structured for reuse as an internal AI microservice inside larger systems",
            ],
            apiOnly: true,
        },
    },
    {
        title: "GIS Sinai Explorer",
        description: "Interactive map dashboard for managing POIs across the Sinai region. Fully decoupled Node.js/Express backend with PostgreSQL/PostGIS and Leaflet.js frontend.",
        tech: ["Node.js", "Express", "PostgreSQL", "PostGIS", "Leaflet.js"],
        link: "#",
        Icon: HiMiniMap,
        color: "text-orange-400",
        accent: "#fb923c",
        accentRgb: "251,146,60",
        status: "Graduation",
        previewImage: "",
        year: "2023",
        category: "GIS · Mapping",
        images: [],
    },
    {
        title: "Node.js Backend Suite",
        description: "Three production services on AWS: Store Front API (Redis cart caching, 100% Jasmine coverage), Image Processing Microservice, and MERN app with CI/CD via CircleCI.",
        tech: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS EC2", "S3", "Jasmine"],
        link: "https://github.com/Ahmed-Hamdy101/nodejs-store-front-api",
        Icon: HiMiniCommandLine,
        color: "text-cyan-400",
        accent: "#22d3ee",
        accentRgb: "34,211,238",
        status: "Live",
        previewImage: "/images/projects/nodejs-storefront-api/nodejs-storeforent-api.jpg",
        year: "2023",
        category: "Backend · API",
        images: ["/images/projects/nodejs-storefront-api/nodejs-storeforent-api.jpg"],
    },
    {
        title: "AWS Fullstack Deployment",
        description: "Full-stack Node.js/Express/TypeScript app (Udagram) deployed on AWS with a complete automated pipeline — Elastic Beanstalk hosting, RDS PostgreSQL, S3 image storage, and CircleCI CI/CD end-to-end.",
        tech: ["Node.js", "Express", "TypeScript", "AWS Elastic Beanstalk", "AWS RDS", "AWS S3", "CircleCI"],
        link: "https://github.com/Ahmed-Hamdy101/aws-fullstack-deployment",
        Icon: HiMiniCloud,
        color: "text-blue-400",
        accent: "#60a5fa",
        accentRgb: "96,165,250",
        status: "Live",
        previewImage: "/images/projects/aws-deployment/aws-deplyment.jpg",
        year: "2023",
        category: "Cloud · DevOps",
        images: ["/images/projects/aws-deployment/aws-deplyment.jpg"],
        slug: "aws-fullstack-deployment",
        caseStudy: {
            problem: "Shipping a Node.js/Express app locally is easy, but standing up a real AWS deployment — a managed database, decoupled object storage, and a pipeline that safely auto-deploys every push — is where most portfolio projects stop short.",
            solution: "Deployed a full-stack Node.js/Express/TypeScript application to AWS Elastic Beanstalk, backed by an RDS PostgreSQL database and an S3 bucket for media storage, with a CircleCI pipeline running tests and pushing every change straight to the Beanstalk environment.",
            highlights: [
                "AWS Elastic Beanstalk hosting for the Node.js/Express/TypeScript API and frontend",
                "AWS RDS (PostgreSQL) as the managed production database",
                "AWS S3 bucket for image/media storage, decoupled from the app server",
                "CircleCI pipeline automating build, test, and deployment on every push",
            ],
            apiOnly: true,
        },
    },
    {
        title: "Zed Store",
        description: "Live e-commerce storefront with full product catalog, cart management, and checkout flow. React frontend + Node.js/MongoDB backend. Hosted on Vercel with GitHub CI/CD.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
        link: "https://zed-store.app.vercel.app",
        Icon: HiMiniShoppingCart,
        color: "text-teal-400",
        accent: "#2dd4bf",
        accentRgb: "45,212,191",
        status: "Live",
        previewImage: "",
        year: "2023",
        category: "E-Commerce",
        images: [],
    },
];

export const filters: FilterType[] = ["All", "Live", "In Progress (private)", "Graduation", "Live -- Alkayan Nova in Progress"];

export const statusConfig: Record<FilterType, { label: string; dot: string; bg: string; text: string; border: string }> = {
    All: { label: "All", dot: "bg-white", bg: "bg-white/5", text: "text-white", border: "border-white/20" },
    Live: { label: "Live", dot: "bg-emerald-400", bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/25" },
    "In Progress (private)": { label: "In Progress", dot: "bg-amber-400", bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/25" },
    Graduation: { label: "Graduation", dot: "bg-violet-400", bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/25" },
    "Live -- Alkayan Nova in Progress": { label: "Live ↗ WIP", dot: "bg-sky-400", bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/25" },
};
