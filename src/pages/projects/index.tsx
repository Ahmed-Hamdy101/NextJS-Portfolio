import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import Link from "next/link";
import { useState } from "react";
import {
    HiMiniRocketLaunch, HiMiniCpuChip, HiMiniCube, HiMiniChartBar,
    HiMiniDevicePhoneMobile, HiMiniMap, HiMiniUsers, HiMiniWrenchScrewdriver,
    HiMiniPaperAirplane, HiMiniArrowTopRightOnSquare, HiMiniCommandLine,
    HiMiniGlobeAlt, HiMiniShoppingCart,
} from "react-icons/hi2";

type FilterType = "All" | "Live" | "In Progress" | "Graduation";

interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    Icon: React.ElementType;
    color: string;
    gradient: string;
    status: FilterType;
}

const projects: Project[] = [
    {
        title: "Egypt Tour Guide",
        description: "Bilingual (German/English) PWA tourism platform. Next.js 15 App Router, Node.js REST API, Redis caching, GSAP animations, i18next. LCP under 2s. Lighthouse 100% SEO, 98% Accessibility.",
        tech: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS 4", "GSAP", "i18next"],
        link: "https://egypt-tour-guide.com",
        Icon: HiMiniGlobeAlt,
        color: "text-yellow-400",
        gradient: "from-yellow-500/20 to-green-500/20",
        status: "Live",
    },
    {
        title: "Alkayan Construction Platform",
        description: "Proprietary Real Estate CMS with RBAC authentication, Laravel MVC backend. Reduced vulnerabilities by 75% via CSRF protection and full-stack input validation.",
        tech: ["Laravel", "PHP", "MySQL", "RBAC", "CSRF", "Namecheap"],
        link: "https://www.alkayan-co.com",
        Icon: HiMiniCpuChip,
        color: "text-blue-400",
        gradient: "from-blue-500/20 to-cyan-500/20",
        status: "Live",
    },
    {
        title: "Logger Suite ERP (SaaS)",
        description: "Multi-tenant SaaS ERP combining Next.js 15 frontend with Laravel REST backend. Admin/Editor/Guest RBAC, Redis caching, Docker containerization, AWS EC2/S3.",
        tech: ["Next.js 15", "Laravel", "MySQL", "Redis", "JWT", "RBAC", "Docker", "AWS"],
        link: "#",
        Icon: HiMiniChartBar,
        color: "text-red-400",
        gradient: "from-red-500/20 to-orange-500/20",
        status: "In Progress",
    },
    {
        title: "AI Video Generation Platform",
        description: "Production-ready AI video platform with NextAuth.js auth, next-intl multi-language support, Sharp image processing, Docker containerization, Caddy reverse proxy, and DND Kit UI.",
        tech: ["Next.js 15", "TypeScript", "Prisma ORM", "NextAuth.js", "Sharp", "Docker", "Caddy"],
        link: "#",
        Icon: HiMiniRocketLaunch,
        color: "text-purple-400",
        gradient: "from-purple-500/20 to-pink-500/20",
        status: "In Progress",
    },
    {
        title: "AutoFix — Car Service Platform",
        description: "AI-powered automotive platform using Bun runtime. Multi-role dashboards for mechanics, admins, and customers. OpenAI API for vehicle diagnostics and code-level maintenance guidance.",
        tech: ["Bun", "React", "TypeScript", "OpenAI API", "Tailwind CSS"],
        link: "#",
        Icon: HiMiniWrenchScrewdriver,
        color: "text-emerald-400",
        gradient: "from-emerald-500/20 to-green-500/20",
        status: "Graduation",
    },
    {
        title: "GIS Sinai Explorer",
        description: "Interactive map dashboard for managing points of interest across the Sinai region. Fully decoupled Node.js/Express backend with PostgreSQL/PostGIS and Leaflet.js frontend.",
        tech: ["Node.js", "Express", "PostgreSQL", "PostGIS", "Leaflet.js", "GeoJSON"],
        link: "#",
        Icon: HiMiniMap,
        color: "text-orange-400",
        gradient: "from-orange-500/20 to-yellow-500/20",
        status: "Graduation",
    },
    {
        title: "Node.js Backend Suite",
        description: "Three production services hosted on AWS: Store Front API (Redis cart caching, 100% Jasmine coverage), Image Processing Microservice, and MERN app with CI/CD via CircleCI.",
        tech: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS EC2", "S3", "Jasmine", "CircleCI"],
        link: "https://github.com/Ahmed-Hamdy101/nodejs-store-front",
        Icon: HiMiniCommandLine,
        color: "text-cyan-400",
        gradient: "from-cyan-500/20 to-blue-500/20",
        status: "Live",
    },
    {
        title: "Laravel Admin Suite",
        description: "Secure REST API with full Swagger/OpenAPI documentation, JWT, OAuth2, and RBAC. Improved data management efficiency by 20% and cut unauthorized access incidents by 25%.",
        tech: ["Laravel", "PHP", "JWT", "OAuth2", "RBAC", "Swagger/OpenAPI", "PHPUnit"],
        link: "https://github.com/Ahmed-Hamdy101/laravel-admin-app",
        Icon: HiMiniCube,
        color: "text-indigo-400",
        gradient: "from-indigo-500/20 to-purple-500/20",
        status: "Live",
    },
    {
        title: "Zed Store — E-Commerce",
        description: "Live e-commerce storefront with full product catalog, cart management, and checkout flow. React frontend + Node.js/MongoDB backend. Hosted on Vercel with GitHub CI/CD.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
        link: "https://zed-store.app.vercel.app",
        Icon: HiMiniShoppingCart,
        color: "text-sky-400",
        gradient: "from-sky-500/20 to-blue-500/20",
        status: "Live",
    },
    {
        title: "Alumni School App",
        description: "Graduation Project: Comprehensive alumni networking and school management platform with cross-platform mobile support.",
        tech: ["React Native", "Firebase", "Node.js"],
        link: "#",
        Icon: HiMiniUsers,
        color: "text-pink-400",
        gradient: "from-pink-500/20 to-rose-500/20",
        status: "Graduation",
    },
];

const filters: FilterType[] = ["All", "Live", "In Progress", "Graduation"];

const filterColors: Record<FilterType, string> = {
    All: "border-white/20 text-white",
    Live: "border-green-500/30 text-green-400",
    "In Progress": "border-yellow-500/30 text-yellow-400",
    Graduation: "border-purple-500/30 text-purple-400",
};

const statusColors: Record<FilterType, string> = {
    All: "",
    Live: "bg-green-500/20 text-green-400 border border-green-500/30",
    "In Progress": "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    Graduation: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
};

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>("All");

    const filtered = activeFilter === "All"
        ? projects
        : projects.filter((p) => p.status === activeFilter);

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-[#020204]">
            <Circles />

            <div className="w-full max-w-7xl z-10 pt-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">Production Projects</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="text-5xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Portfolio
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-xl lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        Real-world systems — live in production, in active development, and graduation projects.
                    </motion.p>
                </div>

                {/* Filter Tabs */}
                <motion.div
                    variants={fadeIn("up", 0.35)}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((project, index) => {
                        const Icon = project.Icon;
                        return (
                            <motion.div
                                key={project.title}
                                layout
                                variants={fadeIn("up", 0.1 + (index % 3) * 0.1)}
                                initial="hidden"
                                animate="show"
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative glass-panel glass-panel-hover rounded-[2.5rem] p-8 hover:border-red-500/40 transition-all duration-700 overflow-hidden shadow-2xl"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${statusColors[project.status as FilterType]}`}>
                                    {project.status}
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-white/[0.02] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-700 border border-white/10 shadow-xl relative z-10">
                                    <Icon className={`text-3xl ${project.color}`} />
                                </div>

                                <h3 className="text-2xl font-black mb-3 group-hover:text-red-400 transition-colors duration-500 uppercase tracking-tight relative z-10">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed font-light relative z-10">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white/[0.02] border border-white/10 text-gray-500 rounded-lg text-[9px] uppercase tracking-[0.2em] font-black group-hover:border-red-500/20 group-hover:text-gray-300 transition-all duration-500"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-black text-red-500 hover:text-white transition-all duration-500 relative z-10 uppercase tracking-widest"
                                    >
                                        <HiMiniArrowTopRightOnSquare className="text-sm" />
                                        {project.link.includes("github") ? "View on GitHub" : "Live Preview"}
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
