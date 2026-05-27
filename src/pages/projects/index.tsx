import { motion, AnimatePresence, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import Image from "next/image";
import { useState, useCallback } from "react";
import {
    HiMiniRocketLaunch, HiMiniCpuChip, HiMiniCube, HiMiniChartBar,
    HiMiniMap, HiMiniUsers, HiMiniWrenchScrewdriver,
    HiMiniArrowTopRightOnSquare, HiMiniCommandLine,
    HiMiniGlobeAlt, HiMiniShoppingCart,
    HiMiniXMark, HiMiniChevronLeft, HiMiniChevronRight,
    HiMiniPhoto,
} from "react-icons/hi2";
import Head from "next/head";
// Look for something like this and add your new string:
type FilterType = "All" | "Live" | "In Progress (private)" | "Live -- Alkayan Nova in Progress" | "Graduation";

interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    Icon: React.ElementType;
    color: string;
    gradient: string;
    borderHover: string;
    status: FilterType;
    images: string[];          // paths under /images/projects/
    previewImage: string;      // card thumbnail
}

const projects: Project[] = [
    {
        title: "Egypt Tour Guide",
        description: "Bilingual (German/English) PWA tourism platform. Next.js 15 App Router, Node.js REST API, Redis caching, GSAP animations, i18next. LCP under 2s. Lighthouse 100% SEO, 98% Accessibility.",
        tech: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Redis", "GSAP", "i18next"],
        link: "https://egypt-tour-guide.com",
        Icon: HiMiniGlobeAlt,
        color: "text-yellow-400",
        gradient: "from-yellow-500/15 to-green-600/10",
        borderHover: "hover:border-yellow-500/40",
        status: "Live",
        previewImage: "/images/projects/etgco-laptop-mop.png",
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
        title: "Alkayan Construction Platform",
        description: "Proprietary Real Estate CMS with RBAC authentication, Laravel MVC backend. Reduced vulnerabilities by 75% via CSRF protection and full-stack input validation.",
        tech: ["Laravel", "PHP", "MySQL", "RBAC", "CSRF"],
        link: "https://www.alkayan-co.com",
        Icon: HiMiniCpuChip,
        color: "text-blue-400",
        gradient: "from-blue-500/15 to-cyan-600/10",
        borderHover: "hover:border-blue-500/40",
        status: "Live -- Alkayan Nova in Progress",
        previewImage: "/images/projects/alkayan-nova.png",
        images: [
            "/images/projects/alkayan-nova.png",
            "/images/projects/alkayan-nova-construction.png",
            "/images/projects/alkayan-projects.png",
            "/images/projects/dark-alkayan-nova-projects.png",
        ],
    },
    {
        title: "Logger Suite ERP (SaaS)",
        description: "Multi-tenant SaaS ERP combining Next.js 15 frontend with Laravel REST backend. Admin/Editor/Guest RBAC, Redis caching, Docker containerization, AWS EC2/S3.",
        tech: ["Next.js 15", "Laravel", "MySQL", "Redis", "JWT", "Docker", "AWS"],
        link: "#",
        Icon: HiMiniChartBar,
        color: "text-red-400",
        gradient: "from-red-500/15 to-orange-600/10",
        borderHover: "hover:border-red-500/40",
        status: "In Progress (private)",
        previewImage: "/images/projects/logger-dsahboard.png",
        images: [
            "/images/projects/logger-dsahboard.png",
            "/images/projects/loger.png",
            "/images/projects/logge-dashboard-stock.png",
        ],
    },
    {
        title: "AutoFix — Car Service Platform",
        description: "AI-powered automotive platform using Bun runtime. Multi-role dashboards for mechanics, admins, and customers. OpenAI API for vehicle diagnostics and code-level maintenance guidance.",
        tech: ["Bun", "React", "TypeScript", "OpenAI API", "Tailwind CSS"],
        link: "#",
        Icon: HiMiniWrenchScrewdriver,
        color: "text-emerald-400",
        gradient: "from-emerald-500/15 to-green-600/10",
        borderHover: "hover:border-emerald-500/40",
        status: "Graduation",
        previewImage: "/images/projects/autofix-car-ux-full.png",
        images: [
            "/images/projects/autofix-car-ux-full.png",
            "/images/projects/auto-fix-car-ux-login.png",
            "/images/projects/autofix-car-ux1.png",
            "/images/projects/autofix-car-ux2.png",
        ],
    },
    {
        title: "Evento — Event Platform",
        description: "Full-stack event management platform with admin and client portals, role-based access, dashboard analytics, and event scheduling.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
        link: "#",
        Icon: HiMiniRocketLaunch,
        color: "text-purple-400",
        gradient: "from-purple-500/15 to-pink-600/10",
        borderHover: "hover:border-purple-500/40",
        status: "In Progress (private)",
        previewImage: "/images/projects/evento-dashboard.png",
        images: [
            "/images/projects/evento-dashboard.png",
            "/images/projects/evento-admin-login.png",
            "/images/projects/evento-client-login.png",
        ],
    },
    {
        title: "Larafolio — Laravel Portfolio",
        description: "Personal developer portfolio built on Laravel backend, showcasing projects, skills, and work history with a clean CMS for content management.",
        tech: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],
        link: "#",
        Icon: HiMiniCube,
        color: "text-indigo-400",
        gradient: "from-indigo-500/15 to-purple-600/10",
        borderHover: "hover:border-indigo-500/40",
        status: "Live",
        previewImage: "/images/projects/larafolio.png",
        images: [
            "/images/projects/larafolio.png",
        ],
    },
    {
        title: "GIS Sinai Explorer",
        description: "Interactive map dashboard for managing POIs across the Sinai region. Fully decoupled Node.js/Express backend with PostgreSQL/PostGIS and Leaflet.js frontend.",
        tech: ["Node.js", "Express", "PostgreSQL", "PostGIS", "Leaflet.js"],
        link: "#",
        Icon: HiMiniMap,
        color: "text-orange-400",
        gradient: "from-orange-500/15 to-yellow-600/10",
        borderHover: "hover:border-orange-500/40",
        status: "Graduation",
        previewImage: "",
        images: [],
    },
    {
        title: "Node.js Backend Suite",
        description: "Three production services on AWS: Store Front API (Redis cart caching, 100% Jasmine coverage), Image Processing Microservice, and MERN app with CI/CD via CircleCI.",
        tech: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS EC2", "S3", "Jasmine"],
        link: "https://github.com/Ahmed-Hamdy101/nodejs-store-front",
        Icon: HiMiniCommandLine,
        color: "text-cyan-400",
        gradient: "from-cyan-500/15 to-blue-600/10",
        borderHover: "hover:border-cyan-500/40",
        status: "Live",
        previewImage: "",
        images: [],
    },
    {
        title: "Zed Store — E-Commerce",
        description: "Live e-commerce storefront with full product catalog, cart management, and checkout flow. React frontend + Node.js/MongoDB backend. Hosted on Vercel with GitHub CI/CD.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
        link: "https://zed-store.app.vercel.app",
        Icon: HiMiniShoppingCart,
        color: "text-sky-400",
        gradient: "from-sky-500/15 to-blue-600/10",
        borderHover: "hover:border-sky-500/40",
        status: "Live",
        previewImage: "",
        images: [],
    },
    {
        title: "Portfolio — This Site",
        description: "This portfolio — built with Next.js 15, Framer Motion, Tailwind CSS 4, and a custom particle canvas engine. Deployed on Vercel.",
        tech: ["Next.js 15", "TypeScript", "Framer Motion", "Tailwind CSS 4", "Canvas API"],
        link: "#",
        Icon: HiMiniUsers,
        color: "text-pink-400",
        gradient: "from-pink-500/15 to-rose-600/10",
        borderHover: "hover:border-pink-500/40",
        status: "Live",
        previewImage: "/images/projects/portfolio.png",
        images: ["/images/projects/portfolio.png"],
    },
];

const filters: FilterType[] = ["All", "Live", "In Progress (private)", "Graduation", "Live -- Alkayan Nova in Progress"];

const filterColors: Record<FilterType, string> = {
    All: "border-white/20 text-white",
    Live: "border-green-500/30 text-green-400",
    "In Progress (private)": "border-yellow-500/30 text-yellow-400",
    Graduation: "border-purple-500/30 text-purple-400",
    "Live -- Alkayan Nova in Progress": "border-cyan-500/30 text-cyan-400",
};

const statusBadge: Record<FilterType, string> = {
    All: "",
    Live: "bg-green-500/20 text-green-400 border border-green-500/30",
    "In Progress (private)": "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    Graduation: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    "Live -- Alkayan Nova in Progress": "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
};

// ─── Lightbox ────────────────────────────────────────────────────────────────
interface LightboxProps {
    images: string[];
    title: string;
    startIndex: number;
    onClose: () => void;
}

const Lightbox = ({ images, title, startIndex, onClose }: LightboxProps) => {
    const [current, setCurrent] = useState(startIndex);

    const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={onClose}
        >
            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-5 right-5 z-10 p-2.5 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-red-500/30 hover:border-red-500/30 transition-all duration-300"
            >
                <HiMiniXMark className="text-xl" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400">
                {title} — {current + 1} / {images.length}
            </div>

            {/* Prev */}
            {images.length > 1 && (
                <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="absolute left-4 p-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all duration-300 z-10"
                >
                    <HiMiniChevronLeft className="text-2xl" />
                </button>
            )}

            {/* Image */}
            <div
                className="relative max-w-6xl max-h-[80vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        <Image
                            src={images[current]}
                            alt={`${title} screenshot ${current + 1}`}
                            width={1400}
                            height={900}
                            className="object-contain max-h-[75vh] rounded-2xl shadow-2xl border border-white/10"
                            priority
                            unoptimized
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Next */}
            {images.length > 1 && (
                <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className="absolute right-4 p-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all duration-300 z-10"
                >
                    <HiMiniChevronRight className="text-2xl" />
                </button>
            )}

            {/* Thumbnail Strip */}
            {images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center max-w-3xl px-4">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                            className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                                i === current ? "border-red-500 scale-110" : "border-white/10 opacity-50 hover:opacity-100"
                            }`}
                        >
                            <Image src={img} alt="" fill className="object-cover" unoptimized />
                        </button>
                    ))}
                </div>
            )}
        </motion.div>

    );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>("All");
    const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

    const filtered = activeFilter === "All"
        ? projects
        : projects.filter((p) => p.status === activeFilter);

    const openLightbox = useCallback((project: Project, index = 0) => {
        if (project.images.length > 0) setLightbox({ project, index });
    }, []);

    return (
                                <> {/*  This fragment now correctly wraps all top-level elements */}
        <Head>
            <title> Projects Page|  Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert</title>
            <meta name="description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 4+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <link rel="canonical" href="https://ahmedhamdy101.is-a.dev//" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ahmedhamdy101.is-a.dev/" />
            <meta property="og:title" content="Ahmed Hamdy | Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert" />
            <meta property="og:description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 4+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <meta property="og:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="favicons.svg" />     
            <meta name="twitter:url" content="https://ahmedhamdy101.is-a.dev/" />
            <meta name="twitter:title" content="Ahmed Hamdy | Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert" />
            <meta name="twitter:description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 4+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <meta name="twitter:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />

        </Head>
        <div className="relative text-white min-h-screen flex flex-col items-center px-6 py-24 overflow-hidden bg-[#020204]">
            <Circles />

            <div className="w-full max-w-7xl z-10 pt-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">Production Projects</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("down", 0.1) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-5xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Portfolio
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.15) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-xl lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        Real-world systems — live in production, in active development, and graduation projects.
                    </motion.p>
                </div>

                {/* Filter Tabs */}
                <motion.div
                    variants={fadeIn("up", 0.15) as unknown as Variants }
                    initial="hidden"
                    animate="show"
                    className="flex flex-wrap justify-center gap-3 mb-14"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${
                                activeFilter === filter
                                    ? `${filterColors[filter]} bg-white/[0.06]`
                                    : "border-white/10 text-gray-500 hover:text-gray-300 hover:border-white/20"
                            }`}
                        >
                            {filter}
                            <span className="ml-2 opacity-60">
                                ({filter === "All" ? projects.length : projects.filter((p) => p.status === filter).length})
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, index) => {
                            const Icon = project.Icon;
                            const hasImages = project.images.length > 0;

                            return (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: (index % 6) * 0.04 }}
                                    whileHover={{ y: -8 }}
                                    className={`group relative glass-panel rounded-[2rem] border border-white/[0.06] ${project.borderHover} transition-all duration-500 overflow-hidden shadow-2xl flex flex-col`}
                                >
                                    {/* Ambient Glow */}
                                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none z-0`} />
                                    <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 blur-[60px] rounded-full transition-opacity duration-700 pointer-events-none z-0`} />

                                    {/* ── Screenshot Preview Area ── */}
                                    <div
                                        className={`relative w-full aspect-video overflow-hidden bg-[#0a0a0f] z-10 ${hasImages ? "cursor-pointer" : ""}`}
                                        onClick={() => hasImages && openLightbox(project, 0)}
                                    >
                                        {hasImages ? (
                                            <>
                                                <Image
                                                    src={project.previewImage}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    unoptimized
                                                />
                                                {/* Dark overlay on hover */}
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                                                {/* Gallery hint */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/70 border border-white/20 backdrop-blur-md">
                                                        <HiMiniPhoto className="text-white text-base" />
                                                        <span className="text-white text-[10px] font-black uppercase tracking-widest">
                                                            {project.images.length} Screenshot{project.images.length > 1 ? "s" : ""}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Thumbnail strip preview */}
                                                {project.images.length > 1 && (
                                                    <div className="absolute bottom-2 left-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                                        {project.images.slice(0, 5).map((img, i) => (
                                                            <button
                                                                key={i}
                                                                onClick={(e) => { e.stopPropagation(); openLightbox(project, i); }}
                                                                className="relative flex-1 aspect-video rounded-md overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-200"
                                                            >
                                                                <Image src={img} alt="" fill className="object-cover" unoptimized />
                                                            </button>
                                                        ))}
                                                        {project.images.length > 5 && (
                                                            <div className="flex items-center justify-center w-10 text-[9px] font-black text-gray-400">
                                                                +{project.images.length - 5}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            /* No-image placeholder */
                                            <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                                                <Icon className={`text-6xl ${project.color} opacity-20`} />
                                            </div>
                                        )}

                                        {/* Status badge */}
                                        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider backdrop-blur-md ${statusBadge[project.status]}`}>
                                            {project.status}
                                        </div>
                                    </div>

                                    {/* ── Card Body ── */}
                                    <div className="flex flex-col flex-1 p-7">
                                        {/* Icon + Title */}
                                        <div className="flex items-start gap-4 mb-3">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center`}>
                                                <Icon className={`text-xl ${project.color}`} />
                                            </div>
                                            <h3 className="text-lg font-black text-white uppercase tracking-tight leading-tight group-hover:text-red-400 transition-colors duration-500 pt-1">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-500 mb-5 line-clamp-3 text-xs leading-relaxed font-light flex-1">
                                            {project.description}
                                        </p>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 bg-white/[0.02] border border-white/[0.06] text-gray-600 rounded-lg text-[8px] uppercase tracking-[0.15em] font-black group-hover:border-white/10 group-hover:text-gray-400 transition-all duration-500"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center gap-4 mt-auto pt-2 border-t border-white/[0.04]">
                                            {project.link !== "#" && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[10px] font-black text-red-500 hover:text-white transition-colors duration-300 uppercase tracking-widest"
                                                >
                                                    <HiMiniArrowTopRightOnSquare className="text-sm" />
                                                    {project.link.includes("github") ? "GitHub" : "Live Site"}
                                                </a>
                                            )}
                                            {hasImages && (
                                                <button
                                                    onClick={() => openLightbox(project, 0)}
                                                    className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-black text-gray-500 hover:text-white transition-colors duration-300 uppercase tracking-widest"
                                                >
                                                    <HiMiniPhoto className="text-sm" />
                                                    Gallery
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
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
