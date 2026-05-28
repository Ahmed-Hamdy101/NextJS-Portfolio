import { motion, AnimatePresence, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import Image from "next/image";
import { useState, useCallback, useRef } from "react";
import {
    HiMiniRocketLaunch, HiMiniCpuChip, HiMiniCube, HiMiniChartBar,
    HiMiniMap, HiMiniUsers, HiMiniWrenchScrewdriver,
    HiMiniArrowTopRightOnSquare, HiMiniCommandLine,
    HiMiniGlobeAlt, HiMiniShoppingCart,
    HiMiniXMark, HiMiniChevronLeft, HiMiniChevronRight,
    HiMiniPhoto, HiMiniCodeBracket,
} from "react-icons/hi2";
import Head from "next/head";

type FilterType = "All" | "Live" | "In Progress (private)" | "Live -- Alkayan Nova in Progress" | "Graduation";

interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    Icon: React.ElementType;
    color: string;
    accent: string;
    accentRgb: string;
    status: FilterType;
    images: string[];
    previewImage: string;
    year: string;
    category: string;
}

const projects: Project[] = [
    {
        title: "Egypt Tour Guide",
        description: "Bilingual PWA tourism platform. Next.js 15 App Router, Node.js REST API, Redis caching, GSAP animations, i18next. LCP under 2s. Lighthouse 100% SEO, 98% Accessibility.",
        tech: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Redis", "GSAP", "i18next"],
        link: "https://egypt-tour-guide.com",
        Icon: HiMiniGlobeAlt,
        color: "text-amber-400",
        accent: "#f59e0b",
        accentRgb: "245,158,11",
        status: "Live",
        previewImage: "/images/projects/etgco-laptop-mop.png",
        year: "2024",
        category: "Tourism · PWA",
        images: [
            "/images/projects/etgco-laptop-mop.png",
            "/images/projects/et-gco-tours-ux.png",
            "/images/projects/et-gco-destinations-ux.png",
            "/images/projects/et-gco-destinations.png",
            "/images/projects/et-gco-booking-details-ux.png",
            "/images/projects/et-gco-booking-summary-ux.png",
            "/images/projects/etgco-mobile-x-iphone.png",
            "/images/projects/etgco-mobile.png",
        ],
    },
    {
        title: "Alkayan Construction",
        description: "Proprietary Real Estate CMS with RBAC authentication, Laravel MVC backend. Reduced vulnerabilities by 75% via CSRF protection and full-stack input validation.",
        tech: ["Laravel", "PHP", "MySQL", "RBAC", "CSRF"],
        link: "https://www.alkayan-co.com",
        Icon: HiMiniCpuChip,
        color: "text-sky-400",
        accent: "#38bdf8",
        accentRgb: "56,189,248",
        status: "Live -- Alkayan Nova in Progress",
        previewImage: "/images/projects/alkayan-nova.png",
        year: "2023",
        category: "Real Estate · CMS",
        images: [
            "/images/projects/alkayan-nova.png",
            "/images/projects/alkayan-nova-construction.png",
            "/images/projects/alkayan-projects.png",
            "/images/projects/dark-alkayan-nova-projects.png",
        ],
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
        previewImage: "/images/projects/logger-dsahboard.png",
        year: "2024",
        category: "SaaS · ERP",
        images: [
            "/images/projects/logger-dsahboard.png",
            "/images/projects/loger.png",
            "/images/projects/logge-dashboard-stock.png",
        ],
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
        previewImage: "/images/projects/autofix-car-ux-full.png",
        year: "2024",
        category: "AI · Automotive",
        images: [
            "/images/projects/autofix-car-ux-full.png",
            "/images/projects/auto-fix-car-ux-login.png",
            "/images/projects/autofix-car-ux1.png",
            "/images/projects/autofix-car-ux2.png",
        ],
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
        previewImage: "/images/projects/evento-dashboard.png",
        year: "2024",
        category: "Events · Platform",
        images: [
            "/images/projects/evento-dashboard.png",
            "/images/projects/evento-admin-login.png",
            "/images/projects/evento-client-login.png",
        ],
    },
    {
        title: "Larafolio",
        description: "Personal developer portfolio on Laravel backend with a clean CMS for content management, showcasing projects, skills, and work history.",
        tech: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],
        link: "#",
        Icon: HiMiniCube,
        color: "text-fuchsia-400",
        accent: "#e879f9",
        accentRgb: "232,121,249",
        status: "Live",
        previewImage: "/images/projects/larafolio.png",
        year: "2023",
        category: "Portfolio · Laravel",
        images: ["/images/projects/larafolio.png"],
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
        link: "https://github.com/Ahmed-Hamdy101/nodejs-store-front",
        Icon: HiMiniCommandLine,
        color: "text-cyan-400",
        accent: "#22d3ee",
        accentRgb: "34,211,238",
        status: "Live",
        previewImage: "",
        year: "2023",
        category: "Backend · API",
        images: [],
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
        previewImage: "/images/projects/portfolio.png",
        year: "2025",
        category: "Portfolio",
        images: ["/images/projects/portfolio.png"],
    },
];

const filters: FilterType[] = ["All", "Live", "In Progress (private)", "Graduation", "Live -- Alkayan Nova in Progress"];

const statusConfig: Record<FilterType, { label: string; dot: string; bg: string; text: string; border: string }> = {
    All: { label: "All", dot: "bg-white", bg: "bg-white/5", text: "text-white", border: "border-white/20" },
    Live: { label: "Live", dot: "bg-emerald-400", bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/25" },
    "In Progress (private)": { label: "In Progress", dot: "bg-amber-400", bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/25" },
    Graduation: { label: "Graduation", dot: "bg-violet-400", bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/25" },
    "Live -- Alkayan Nova in Progress": { label: "Live ↗ WIP", dot: "bg-sky-400", bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/25" },
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
interface LightboxProps {
    images: string[];
    title: string;
    startIndex: number;
    onClose: () => void;
}

const Lightbox = ({ images, title, startIndex, onClose }: LightboxProps) => {
    const [current, setCurrent] = useState(startIndex);
    const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4"
            onClick={onClose}
        >
            <button onClick={onClose} className="absolute top-5 right-5 z-10 w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-rose-500/20 hover:border-rose-500/30 transition-all duration-200 flex items-center justify-center">
                <HiMiniXMark className="text-lg" />
            </button>
            <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                {title} — {current + 1}/{images.length}
            </div>

            {images.length > 1 && (
                <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-4 z-10 w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center">
                    <HiMiniChevronLeft className="text-xl" />
                </button>
            )}

            <div className="relative max-w-6xl max-h-[80vh] w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                <AnimatePresence mode="wait">
                    <motion.div key={current} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.2 }} className="relative w-full h-full flex items-center justify-center">
                        <Image src={images[current]} alt={`${title} screenshot ${current + 1}`} width={1400} height={900} className="object-contain max-h-[75vh] rounded-2xl shadow-2xl border border-white/10" priority unoptimized />
                    </motion.div>
                </AnimatePresence>
            </div>

            {images.length > 1 && (
                <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-4 z-10 w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center">
                    <HiMiniChevronRight className="text-xl" />
                </button>
            )}

            {images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center max-w-3xl px-4">
                    {images.map((img, i) => (
                        <button key={i} onClick={e => { e.stopPropagation(); setCurrent(i); }} className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${i === current ? "border-white/60 scale-110" : "border-white/10 opacity-40 hover:opacity-80"}`}>
                            <Image src={img} alt="" fill className="object-cover" unoptimized />
                        </button>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

// ─── Project Card ──────────────────────────────────────────────────────────
interface CardProps {
    project: Project;
    index: number;
    onOpenLightbox: (project: Project, i: number) => void;
}

const ProjectCard = ({ project, index, onOpenLightbox }: CardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const Icon = project.Icon;
    const hasImages = project.images.length > 0;
    const status = statusConfig[project.status];

    return (
        <motion.div
            ref={cardRef}
            layout
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/[0.06] bg-[#0b0b0f] transition-all duration-500 hover:border-white/[0.14] hover:-translate-y-2 hover:shadow-2xl"
            style={{ "--accent": project.accent, "--accent-rgb": project.accentRgb } as React.CSSProperties}
        >
            {/* Ambient corner glow */}
            <div
                className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle, ${project.accent}, transparent)` }}
            />

            {/* ── Preview ── */}
            <div
                className={`relative w-full aspect-[16/10] overflow-hidden bg-[#06060a] shrink-0 ${hasImages ? "cursor-pointer" : ""}`}
                onClick={() => hasImages && onOpenLightbox(project, 0)}
            >
                {hasImages ? (
                    <>
                        <Image src={project.previewImage} alt={project.title} fill className="object-cover transition-all duration-700 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" unoptimized />
                        {/* Gradient vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent opacity-60" />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 border border-white/15 backdrop-blur-xl">
                                <HiMiniPhoto className="text-white text-sm" />
                                <span className="text-white text-[10px] font-black uppercase tracking-[0.18em]">{project.images.length} shots</span>
                            </div>
                        </div>
                        {/* Thumb strip */}
                        {project.images.length > 1 && (
                            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex gap-1.5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                                {project.images.slice(0, 5).map((img, i) => (
                                    <button key={i} onClick={e => { e.stopPropagation(); onOpenLightbox(project, i); }} className="relative flex-1 aspect-video rounded-lg overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-200">
                                        <Image src={img} alt="" fill className="object-cover" unoptimized />
                                    </button>
                                ))}
                                {project.images.length > 5 && (
                                    <div className="flex items-center justify-center w-9 text-[9px] font-black text-gray-500">+{project.images.length - 5}</div>
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-28 h-28 rounded-full blur-2xl opacity-10" style={{ background: project.accent }} />
                            <Icon className={`text-7xl ${project.color} opacity-20 relative z-10`} />
                        </div>
                    </div>
                )}

                {/* Status chip — top left */}
                <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.15em] backdrop-blur-xl border ${status.bg} ${status.text} ${status.border}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${project.status === "Live" ? "animate-pulse" : ""}`} />
                    {status.label}
                </div>

                {/* Year chip — top right */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[9px] font-black text-gray-400 bg-black/50 border border-white/10 backdrop-blur-xl">
                    {project.year}
                </div>
            </div>

            {/* ── Body ── */}
            <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Category pill */}
                <span className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: project.accent }}>
                    {project.category}
                </span>

                {/* Title + Icon */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 bg-white/[0.02]">
                        <Icon className={`text-lg ${project.color}`} />
                    </div>
                    <h3 className="text-base font-black text-white uppercase tracking-tight leading-tight group-hover:text-white transition-colors duration-300">
                        {project.title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-[12px] leading-relaxed font-light line-clamp-3 flex-1">
                    {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-[0.12em] bg-white/[0.03] border border-white/[0.06] text-gray-600 group-hover:border-white/[0.1] group-hover:text-gray-500 transition-all duration-500">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 5 && (
                        <span className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-[0.12em] bg-white/[0.02] border border-white/[0.04] text-gray-700">
                            +{project.tech.length - 5}
                        </span>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/[0.04]">
                    {project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300"
                            style={{ color: project.accent }}
                        >
                            <HiMiniArrowTopRightOnSquare className="text-sm" />
                            {project.link.includes("github") ? "GitHub" : "Live"}
                        </a>
                    )}
                    {project.link.includes("github") && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-600 hover:text-gray-300 transition-colors duration-300"
                        >
                            <HiMiniCodeBracket className="text-sm" />
                            Source
                        </a>
                    )}
                    {hasImages && (
                        <button onClick={() => onOpenLightbox(project, 0)} className="ml-auto flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-600 hover:text-gray-300 transition-colors duration-300">
                            <HiMiniPhoto className="text-sm" />
                            Gallery
                        </button>
                    )}
                </div>
            </div>

            {/* Bottom accent line on hover */}
            <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ background: `linear-gradient(to right, transparent, ${project.accent}, transparent)` }}
            />
        </motion.div>
    );
};

// ─── Main Page ──────────────────────────────────────────────────────────────
const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>("All");
    const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

    const filtered = activeFilter === "All" ? projects : projects.filter(p => p.status === activeFilter);
    const openLightbox = useCallback((project: Project, index = 0) => {
        if (project.images.length > 0) setLightbox({ project, index });
    }, []);

    const liveCount = projects.filter(p => p.status === "Live" || p.status === "Live -- Alkayan Nova in Progress").length;

    return (
        <>
            <Head>
                <title>Projects | Ahmed Hamdy — Full Stack Engineer</title>
                <meta name="description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 4+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
                <link rel="canonical" href="https://ahmedhamdy101.is-a.dev/projects" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ahmedhamdy101.is-a.dev/projects" />
                <meta property="og:title" content="Projects | Ahmed Hamdy — Full Stack Engineer" />
                <meta property="og:description" content="Real-world systems — live in production, in active development, and graduation projects." />
                <meta property="og:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />
            </Head>

            <div className="relative min-h-screen bg-[#020204] text-white overflow-hidden">
                <Circles />

                {/* Noise texture overlay */}
                <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-32">

                    {/* ── Header ── */}
                    <div className="mb-16">
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl w-fit">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                                </span>
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">{liveCount} Live in Production</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl w-fit">
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-500">{projects.length} Total Projects</span>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.div
                            variants={fadeIn("down", 0.1) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                        >
                            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black uppercase tracking-tighter leading-[0.88] text-white mb-6">
                                Selected<br />
                                <span className="relative inline-block">
                                    <span className="absolute -inset-2 blur-3xl opacity-20 rounded-full bg-gradient-to-r from-rose-500 via-violet-500 to-cyan-500" />
                                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-400 to-cyan-400">
                                        Works
                                    </span>
                                </span>
                            </h1>
                            <p className="text-gray-500 text-lg max-w-2xl font-light leading-relaxed">
                                Real-world systems shipped to production — SaaS platforms, tourism apps, ERPs, and AI-powered tools built with{" "}
                                <span className="text-gray-300 font-medium">Next.js, Laravel, Bun, and AWS</span>.
                            </p>
                        </motion.div>
                    </div>

                    {/* ── Stats row ── */}
                    <motion.div
                        variants={fadeIn("up", 0.15) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
                    >
                        {[
                            { label: "Projects Built", value: `${projects.length}+` },
                            { label: "Live in Prod", value: `${liveCount}` },
                            { label: "Years Exp.", value: "4+" },
                            { label: "Tech Stack", value: "12+" },
                        ].map((stat, i) => (
                            <div key={i} className="px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-1">
                                <span className="text-3xl font-black text-white tracking-tight">{stat.value}</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* ── Filter tabs ── */}
                    <motion.div
                        variants={fadeIn("up", 0.18) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap gap-2 mb-12"
                    >
                        {filters.map(filter => {
                            const s = statusConfig[filter];
                            const count = filter === "All" ? projects.length : projects.filter(p => p.status === filter).length;
                            const isActive = activeFilter === filter;
                            return (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.18em] border transition-all duration-300 ${
                                        isActive
                                            ? `${s.bg} ${s.text} ${s.border}`
                                            : "bg-transparent border-white/[0.06] text-gray-600 hover:text-gray-400 hover:border-white/[0.12]"
                                    }`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? s.dot : "bg-gray-700"} transition-colors duration-300`} />
                                    {s.label}
                                    <span className={`transition-colors duration-300 ${isActive ? "opacity-60" : "opacity-40"}`}>({count})</span>
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* ── Grid ── */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project, index) => (
                                <ProjectCard
                                    key={project.title}
                                    project={project}
                                    index={index}
                                    onOpenLightbox={openLightbox}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* ── Empty state ── */}
                    {filtered.length === 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
                            <p className="text-gray-600 text-sm font-black uppercase tracking-[0.2em]">No projects match this filter</p>
                        </motion.div>
                    )}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {lightbox && (
                        <Lightbox
                            images={lightbox.project.images}
                            title={lightbox.project.title}
                            startIndex={lightbox.index}
                            onClose={() => setLightbox(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default ProjectsPage;
