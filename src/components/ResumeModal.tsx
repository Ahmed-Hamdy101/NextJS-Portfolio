import React from "react";
import { motion } from "framer-motion";
import {
    HiMiniXMark,
    HiMiniEnvelope,
    HiMiniMapPin,
    HiMiniPhone,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full max-w-4xl bg-[#0b0b0f] border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh] overflow-hidden"
            >
                {/* Header — screen only */}
                <div className="print-hide flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                        <span className="w-3 h-3 rounded-full bg-green-500" />
                        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Curriculum Vitae — Ahmed Hamdy</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onClose}
                            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300"
                            aria-label="Close"
                        >
                            <HiMiniXMark className="text-lg" />
                        </button>
                    </div>
                </div>

                {/* CV Body */}
                <div className="overflow-y-auto p-6 md:p-10 space-y-7 print-cv-container bg-[#08080c] print:bg-white text-gray-300 print:text-gray-900">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 pb-7 border-b border-white/10 print-cv-border">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-white print-cv-text-dark tracking-tight uppercase">Ahmed Hamdy</h1>
                            <p className="text-base font-bold text-red-500 print:text-red-600 uppercase tracking-widest mt-1">
                                Mid Level Senior Full Stack Engineer &amp; IT Support
                            </p>
                            <p className="text-xs text-gray-500 mt-1 font-medium">Node.js · Laravel · Next.js · TypeScript · AWS · AI Integration</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-400 print-cv-text-muted">
                            <span className="flex items-center gap-2">
                                <HiMiniMapPin className="text-red-500 flex-shrink-0" />
                                6th of October, Giza, Egypt
                            </span>
                            <span className="flex items-center gap-2">
                                <HiMiniPhone className="text-purple-400 flex-shrink-0" />
                                +20 114 164 0812
                            </span>
                            <a href="mailto:ahmedhamdy.mh95@gmail.com" className="flex items-center gap-2 mr-4 hover:text-white transition-colors">
                                <HiMiniEnvelope className="text-red-500 flex-shrink-0" />
                                ahmedhamdy.mh95@gmail.com
                            </a>
                            <a href="https://github.com/Ahmed-Hamdy101" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors ml-4">
                                <FaGithub className="text-gray-400 flex-shrink-0" />
                                github.com/Ahmed-Hamdy101
                            </a>
                            <a href="https://linkedin.com/in/ahmed-hamdy-ah" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                <FaLinkedin className="text-blue-400 flex-shrink-0" />
                                linkedin.com/in/ahmed-hamdy-ah
                            </a>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="space-y-2">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white print-cv-text-dark flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-gradient-to-b from-red-500 to-purple-600 rounded-full" />
                            Professional Summary
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-400 print-cv-text-muted font-light">
                            Full Stack Engineer with <strong className="text-white font-bold">5+ years</strong> of experience building and deploying production web applications and APIs. Deep expertise in <strong className="text-white font-bold">Node.js, Laravel, Next.js 15, TypeScript, and AWS</strong>. Proven track record delivering high-performance systems (LCP under 2.5s, strong Lighthouse scores), secure architectures, and AI-powered features (LLM integrations &amp; RAG pipelines). Multiple live products across tourism, construction, real estate, and e-commerce. Focused on clean architecture, measurable performance, and security.
                        </p>
                    </div>

                    {/* Technical Skills */}
                    <div className="space-y-3">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white print-cv-text-dark flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full" />
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                { label: "Core Stack", value: "Node.js, Express, Fastify, Bun, Laravel, Next.js 15, React, TypeScript, PHP" },
                                { label: "Frontend", value: "Tailwind CSS, shadcn/ui, Radix UI, Framer Motion, GSAP, Three.js" },
                                { label: "Backend & APIs", value: "RESTful APIs, JWT / OAuth2, Microservices, Decoupled Architecture, Monolithic" },
                                { label: "Cloud & DevOps", value: "AWS (EC2, S3, RDS, Lambda), Docker, NGINX, CI/CD, Redis" },
                                { label: "Databases & ORMs", value: "PostgreSQL, MySQL, MongoDB, Drizzle, Prisma" },
                                { label: "AI & Testing", value: "OpenAI / Claude LLM integration, RAG pipelines, Testing (Jest, PHPUnit, Jasmine)" },
                            ].map(({ label, value }) => (
                                <div key={label} className="p-3 rounded-xl bg-white/[0.02] print-cv-bg-light border border-white/5 print-cv-border">
                                    <span className="text-[10px] font-black uppercase tracking-wider text-red-400 print:text-red-600">{label}: </span>
                                    <span className="text-[11px] text-gray-400 print-cv-text-muted font-medium">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="space-y-5">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white print-cv-text-dark flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full" />
                            Professional Experience
                        </h2>

                        {[
                            {
                                role: "Full Stack Developer",
                                company: "ET GCO Tours",
                                link: "https://egypt-tour-guide.com",
                                duration: "Dec 2025 – Present | Remote",
                                color: "bg-yellow-500",
                                points: [
                                    "Architected a fully type-safe, decoupled Next.js 15 + Express + TypeScript application powering a complete tour booking platform with unique booking codes, customer management, and real-time inventory.",
                                    "Designed and implemented a normalized PostgreSQL schema with Drizzle ORM, strategic indexes, migrations, and connection pooling for production-scale traffic.",
                                    "Delivered LCP under 2.5s and Lighthouse scores of 100% SEO / 81% Performance / 98% Accessibility through Redis caching, SSR/SSG, and Gzip compression.",
                                    "Built an accessible, mobile-first interface using Radix UI components, enhanced with GSAP, Framer Motion, and Tailwind CSS animations.",
                                    "Managed end-to-end deployment: front-end on Vercel, back-end migrated from Oracle Cloud to a DigitalOcean Droplet with reverse proxy, custom domains, and strict SSL/TLS.",
                                ]
                            },
                            {
                                role: "WordPress / SEO Specialist",
                                company: "Egypt Racket Sport",
                                link: "https://egyptracketstore.com",
                                duration: "Nov 2025 – Jan 2026 | Remote",
                                color: "bg-cyan-500",
                                points: [
                                    "Managed and optimized WordPress product pages with technical SEO, improved Core Web Vitals, and UI enhancements.",
                                    "Performed ongoing performance tuning, troubleshooting, and maintenance that improved site speed and search visibility.",
                                ]
                            },
                            {
                                role: "Full Stack Developer",
                                company: "Al Kayan Construction & Engineering (Nova v2.0)",
                                link: "https://ahmedhamdy101.is-a.dev/projects/alkayan-nova",
                                duration: "Sep 2025 – Present | Maadi, Egypt",
                                color: "bg-indigo-500",
                                points: [
                                    "Architected a reusable OOP component system (PHP static layout classes) exposing shared UI blocks as composable methods, keeping markup DRY across 10+ page templates.",
                                    "Built a distinctive front end using MDBootstrap, GSAP-driven 3D card animations, and a Three.js WebGL hero scene, with full light/dark theme support persisted via localStorage.",
                                    "Designed a custom PHP MVC framework from scratch using a front-controller pattern, handling routing, JSON APIs, and page rendering — no Laravel, no CMS.",
                                    "Hardened application security: CSRF tokens on all forms, full-stack input validation, removed hard-coded credentials, closed .env exposure, and fixed error leakages.",
                                ]
                            },
                            {
                                role: "Full Stack Developer",
                                company: "Al Kayan Construction (Legacy + Real Estate CMS)",
                                link: "https://www.alkayan-co.com",
                                duration: "Jan 2021 – Sep 2025 | Maadi, Egypt",
                                color: "bg-purple-500",
                                points: [
                                    "Architected and deployed the official production web platform for Al Kayan Construction, showcasing multi-category project portfolios and career management features.",
                                    "Built an Admin CMS with Role-Based Access Control (RBAC), implementing strict input validation and CSRF protection to safeguard against web vulnerabilities.",
                                    "Managed end-to-end production deployment, including cloud hosting, DNS routing, and SSL configuration.",
                                ]
                            },
                            {
                                role: "IT Support Specialist",
                                company: "Padel Nuestro",
                                duration: "Sep 2023 – Mar 2026 | West Cairo, Egypt",
                                color: "bg-blue-500",
                                points: [
                                    "Maintained network and IT infrastructure for a 100-person office, resolving 10+ issues monthly.",
                                    "Deployed and managed CCTV/DVR/NVR systems for security monitoring.",
                                    "Administered Windows Server 2019, ERP systems, VPN access, software licensing, and hardware/printer support.",
                                ]
                            }
                        ].map((exp, i) => (
                            <div key={i} className="relative pl-6 border-l border-white/10 print-cv-border">
                                <div className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ${exp.color}`} />
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                                    <h3 className="text-sm font-bold text-white print-cv-text-dark">
                                        {exp.role}{" "}
                                        <span className="text-gray-500 font-normal">|</span>{" "}
                                        {exp.link
                                            ? <a href={exp.link} target="_blank" rel="noreferrer" className="text-red-400 hover:underline">{exp.company}</a>
                                            : <span>{exp.company}</span>
                                        }
                                    </h3>
                                    <span className="text-[10px] text-gray-500 print-cv-text-muted font-bold uppercase whitespace-nowrap">{exp.duration}</span>
                                </div>
                                <ul className="space-y-1.5">
                                    {exp.points.map((pt, pi) => (
                                        <li key={pi} className="flex items-start gap-2 text-xs text-gray-400 print-cv-text-muted font-light leading-relaxed">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Key Projects */}
                    <div className="space-y-3">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white print-cv-text-dark flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                            Key Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                { name: "ETGCO Tours", url: "egypt-tour-guide.com", desc: "High-performance bilingual (DE/EN) PWA tourism app built with Next.js 15, TypeScript, and Redis, achieving sub-2s load times." },
                                { name: "Laravel REST API (Admin Backend)", url: "github.com/Ahmed-Hamdy101/laravel-rest-api", desc: "Production-ready Laravel REST API featuring Passport OAuth2/JWT auth, RBAC, full order lifecycle management, and streaming CSV exports." },
                                { name: "AWS Fullstack Deployment", url: "github.com/Ahmed-Hamdy101/aws-fullstack-deployment", desc: "Full-stack AWS application featuring custom cloud infrastructure, backend microservices, and CI/CD production deployment." },
                                { name: "Logger Suite ERP", url: "ahmedhamdy101.is-a.dev/projects/logger-suite-erp", desc: "Multi-tenant SaaS ERP combining Next.js 15 frontend with Laravel REST backend. Admin/Editor/User RBAC and Redis caching." },
                                { name: "Node.js Storefront API", url: "github.com/Ahmed-Hamdy101/nodejs-store-front-api", desc: "Robust TypeScript/Express e-commerce REST API with PostgreSQL, JWT authentication, migration workflows, and comprehensive Jasmine testing." },
                                { name: "TypeScript AI API", url: "github.com/Ahmed-Hamdy101/ts-ai-api", desc: "Production-ready Fastify REST API in TypeScript integrated with OpenAI to deliver intelligent assistant capabilities." },
                                { name: "Al Kayan Construction Nova", url: "github.com/Ahmed-Hamdy101/alkayan-nova-showcase", desc: "High-performance construction platform built with PHP/MVC, interactive 3D visuals (Three.js/GSAP), IndexedDB caching, and SEO optimization." },
                                { name: "AutoFix", url: "github.com/Ahmed-Hamdy101/autofix-service-platform-demo", desc: "Multi-role dashboards for mechanics, admins, and customers, with AI-assisted vehicle diagnostics." },
                                { name: "GIS Dashboard Map", url: "github.com/Ahmed-Hamdy101/gis-dashboard", desc: "A multilingual GIS dashboard for exploring buildings on a Cesium 3D map." },
                            ].map(({ name, url, desc }) => (
                                <div key={name} className="p-3 rounded-xl bg-white/[0.02] print-cv-bg-light border border-white/5 print-cv-border space-y-1">
                                    <h3 className="text-xs font-bold text-white print-cv-text-dark uppercase">
                                        {name}{url && <a href={`https://${url}`} target="_blank" rel="noreferrer" className="ml-1 text-red-400 normal-case font-normal">{url}</a>}
                                    </h3>
                                    <p className="text-[11px] text-gray-400 print-cv-text-muted leading-relaxed font-light">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certifications */}
                    <div className="space-y-3">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white print-cv-text-dark flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-gradient-to-b from-yellow-500 to-amber-600 rounded-full" />
                            Education &amp; Certifications
                        </h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-start text-xs text-gray-400 print-cv-text-muted">
                                <div>
                                    <strong className="text-white print-cv-text-dark">Bachelor of Engineering — Computer Science</strong>
                                    <br />
                                    Culture &amp; Science City, Faculty of CS &amp; Information Systems, Giza, Egypt — 2020
                                    <br />
                                    Graduation project: Doctor Prescription Electronic System (Android + Web)
                                </div>
                                <span className="font-bold ml-4">2020</span>
                            </div>
                            <div className="flex justify-between items-start text-xs text-gray-400 print-cv-text-muted">
                                <div>
                                    <strong className="text-white print-cv-text-dark">Advanced Full Stack Web Development Nanodegree</strong>
                                    <br />
                                    Udacity / FWD — Node.js, Express, PostgreSQL, React, AWS (EC2, S3, RDS), Docker, CI/CD, security &amp; testing
                                </div>
                                <span className="font-bold ml-4">2022</span>
                            </div>
                        </div>
                    </div>

                    {/* Print footer */}
                    <div className="hidden print:block text-center pt-6 border-t border-gray-200 mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        Ahmed Hamdy · Mid Level Senior Full Stack Engineer · ahmedhamdy.mh95@gmail.com · +20 114 164 0812
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ResumeModal;
