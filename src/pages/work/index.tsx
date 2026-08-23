import { motion, Variants } from "framer-motion";
import { fadeIn } from "../../lib/variants";
import Circles from "../../components/Circle";
import Image from "next/image";
import {
    HiMiniBriefcase,
    HiMiniCommandLine,
    HiMiniRocketLaunch,
    HiMiniGlobeAlt,
    HiMiniCpuChip,
} from "react-icons/hi2";
import Head from "next/head";

const experiences = [
    {
        company: "ET GCO Tours",
        companyLink: "https://egypt-tour-guide.com",
        logo: "/images/companies/ET GCO.png",
        role: "Full Stack Developer",
        duration: "Dec 2025 – Present",
        type: "Remote",
        description:
            "Architected a fully type-safe, decoupled Next.js 15 + Express + TypeScript app powering a complete tour booking platform with unique booking codes, customer management, and real-time inventory. Normalized PostgreSQL schema with Drizzle ORM, strategic indexes, migrations, and connection pooling. Delivered LCP under 2.5s and Lighthouse scores of 100% SEO / 81% Performance / 98% Accessibility via Redis caching, SSR/SSG, and Gzip. Built an accessible, mobile-first interface with Radix UI, GSAP, and Framer Motion. Deployed front-end on Vercel and back-end on a DigitalOcean Droplet (migrated from Oracle Cloud) with a reverse proxy, custom domains, and strict SSL/TLS.",
        skills: ["Next.js 15", "TypeScript", "Express", "PostgreSQL", "Drizzle ORM", "Redis", "Radix UI", "GSAP", "DigitalOcean", "Vercel"],
        Icon: HiMiniGlobeAlt,
        gradient: "from-yellow-500/10 via-green-600/5 to-transparent",
        accent: "text-yellow-400",
        dot: "border-yellow-500 shadow-yellow-500/40",
        tag: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    {
        company: "Egypt Racket Sport",
        companyLink: "https://egyptracketstore.com",
        logo: null,
        role: "WordPress / SEO Specialist",
        duration: "Nov 2025 – Jan 2026",
        type: "Remote",
        description:
            "Managed and optimized WordPress product pages with technical SEO, improved Core Web Vitals, and UI enhancements. Performed ongoing performance tuning, troubleshooting, and maintenance that improved site speed and search visibility.",
        skills: ["WordPress", "SEO", "Core Web Vitals", "Performance Tuning"],
        Icon: HiMiniBriefcase,
        gradient: "from-cyan-500/10 via-blue-600/5 to-transparent",
        accent: "text-cyan-400",
        dot: "border-cyan-500 shadow-cyan-500/40",
        tag: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    {
        company: "Al Kayan Construction & Engineering (Nova v2.0)",
        update: "Alkayan Nova — Custom PHP MVC Rebuild",
        companyLink: "https://ahmedhamdy101.is-a.dev/projects/alkayan-nova",
        logo: "/images/companies/alkayan-nova.png",
        role: "Full Stack Developer",
        duration: "Sep 2025 – Present",
        type: "On-site · Maadi",
        description:
            "Designed a custom PHP MVC framework from scratch (front-controller pattern, no Laravel, no CMS) handling routing, JSON APIs, and page rendering. Architected a reusable OOP component system — static layout classes exposing navbar, footer, hero, and section blocks as composable methods — keeping markup DRY across 10+ page templates. Built a distinctive front end with MDBootstrap, GSAP-driven 3D card animations, and a Three.js WebGL hero scene, with light/dark theme persisted via localStorage. Hardened security: CSRF tokens on every form, full-stack input validation, removed hard-coded credentials, closed .env exposure, fixed error-message leakage.",
        skills: ["PHP", "Custom MVC", "MDBootstrap", "Three.js", "GSAP", "WebGL", "CSRF"],
        Icon: HiMiniRocketLaunch,
        gradient: "from-blue-500/10 via-purple-600/5 to-transparent",
        accent: "text-blue-400",
        dot: "border-blue-500 shadow-blue-500/40",
        tag: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
        company: "Al Kayan Construction (Legacy + Real Estate CMS)",
        companyLink: "https://www.alkayan-co.com",
        logo: "/images/companies/alkayan-nova.png",
        role: "Full Stack Developer",
        duration: "Jan 2021 – Sep 2025",
        type: "On-site · Maadi",
        description:
            "Architected and deployed the official production web platform for Al Kayan Construction, showcasing multi-category project portfolios and career management features. Built an Admin CMS with Role-Based Access Control (RBAC), implementing strict input validation and CSRF protection to safeguard against web vulnerabilities. Managed end-to-end production deployment, including cloud hosting, DNS routing, and SSL configuration.",
        skills: ["Laravel", "PHP", "MySQL", "RBAC", "CSRF", "Namecheap", "GoDaddy"],
        Icon: HiMiniCpuChip,
        gradient: "from-sky-500/10 via-purple-600/5 to-transparent",
        accent: "text-sky-400",
        dot: "border-sky-500 shadow-sky-500/40",
        tag: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    },
    {
        company: "Padel Nuestro",
        companyLink: null,
        logo: null,
        role: "IT Support Specialist",
        duration: "Sep 2023 – Mar 2026",
        type: "West Cairo",
        description:
            "Maintained network and IT infrastructure for a 100-person office, resolving 10+ issues monthly. Deployed and managed CCTV/DVR/NVR systems for security monitoring. Administered Windows Server 2019, ERP systems, VPN access, software licensing, and hardware/printer support.",
        skills: ["Networking", "CCTV / NVR", "Windows Server", "ERP", "VPN", "IT Support"],
        Icon: HiMiniCommandLine,
        gradient: "from-indigo-500/10 via-purple-600/5 to-transparent",
        accent: "text-indigo-400",
        dot: "border-indigo-500 shadow-indigo-500/40",
        tag: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    },
];

const WorkPage = () => {
    return (
            <>
             <Head>
            <title> Work Showcase |  Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert</title>
            <meta name="description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 5+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <link rel="canonical" href="https://ahmedhamdy101.is-a.dev//" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ahmedhamdy101.is-a.dev/" />
            <meta property="og:title" content="Ahmed Hamdy | Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert" />
            <meta property="og:description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 5+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <meta property="og:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="favicons.svg" />     
            <meta name="twitter:url" content="https://ahmedhamdy101.is-a.dev/" />
            <meta name="twitter:title" content="Ahmed Hamdy | Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert" />
            <meta name="twitter:description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 5+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <meta name="twitter:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />

        </Head>

        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
            <Circles />

            <div className="w-full max-w-5xl z-10 pt-20">

                {/* ── Header ── */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">Professional Path</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("down", 0.1) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Journey
                    </motion.h1>

                    <motion.p
                        variants={fadeIn("down", 0.15) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-lg lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        5+ years of full-stack engineering, IT leadership, and scalable system architecture.
                    </motion.p>
                </div>

                {/* ── Timeline ── */}
                <div className="relative pl-6 sm:pl-10 space-y-12">
                    {/* Vertical line */}
                    <div className="absolute left-1.5 sm:left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-red-500 via-purple-600 to-indigo-500/10" />

                    {experiences.map((exp, index) => {
                        const Icon = exp.Icon;
                        return (
                            <motion.div
                                key={exp.company}
                                variants={fadeIn("up", 0.1 + index * 0.08)  as unknown as Variants }
                                initial="hidden"
                                animate="show"
                                className="group relative glass-panel glass-panel-hover rounded-[2.5rem] overflow-hidden shadow-2xl"
                            >
                                {/* Ambient glow */}
                                <div className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${exp.gradient} opacity-20 blur-[40px] group-hover:scale-125 transition-all duration-700`} />

                                {/* Timeline dot */}
                                <div className={`absolute left-[-29px] sm:left-[-41px] top-10 w-4 h-4 rounded-full bg-[#020204] border-2 ${exp.dot} flex items-center justify-center shadow-[0_0_10px] z-20 group-hover:scale-125 transition-all duration-500`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${exp.accent.replace("text-", "bg-")}`} />
                                </div>

                                {/* ── Card header with logo ── */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 pt-8 pb-5 border-b border-white/[0.05] relative z-10">
                                    <div className="flex items-center gap-4">
                                        {/* Company logo or icon fallback */}
                                        {exp.logo ? (
                                            <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xl group-hover:scale-105 transition-transform duration-500">
                                                <Image
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain w-10 h-10"
                                                    unoptimized
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-105 transition-transform duration-500">
                                                <Icon className={`w-7 h-7 ${exp.accent}`} />
                                            </div>
                                        )}

                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-none">
                                                {exp.role}
                                            </h3>
                                            {exp.companyLink ? (
                                                <a
                                                    href={exp.companyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`${exp.accent} font-bold text-sm mt-1.5 inline-block uppercase tracking-wider hover:underline`}
                                                >
                                                    {exp.company} ↗
                                                </a>
                                            ) : (
                                                <p className={`${exp.accent} font-bold text-sm mt-1.5 uppercase tracking-wider`}>
                                                    {exp.company}
                                                </p>
                                            )}
                                            <div className="text-xs text-gray-500 mt-1">
                                                {exp.update && (
                                                    <span className="bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded-full uppercase tracking-widest font-black">
                                                        {exp.update}
                                                    </span>
                                                )}
                                            </div>
                                                
                                        </div>
                                    </div>

                                    {/* Duration + location badges */}
                                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                                        <div className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${exp.tag}`}>
                                            {exp.duration}
                                        </div>
                                        <div className="px-4 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                            {exp.type}
                                        </div>
                                    </div>
                                </div>

                                {/* ── Card body ── */}
                                <div className="px-8 py-6 relative z-10">
                                    <p className="text-slate-400 leading-relaxed text-sm lg:text-base font-light mb-6">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 bg-white/[0.02] border border-white/5 text-[9px] font-black uppercase tracking-widest text-gray-500 rounded-lg group-hover:border-white/10 group-hover:text-gray-300 transition-colors duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
        </>
    );
};

export default WorkPage;
