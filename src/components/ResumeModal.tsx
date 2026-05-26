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
                                Senior Full Stack Engineer &amp; IT Support
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
                            Senior Full Stack Engineer and Computer Programmer with <strong className="text-white font-bold">3+ years</strong> of professional experience designing, building, and deploying scalable web applications, RESTful APIs, and cloud-hosted systems. Skilled across the full stack — JavaScript, TypeScript, PHP, and Python — with deep expertise in <strong className="text-white font-bold">Node.js, Bun, Laravel, React, and AWS</strong> (EC2, S3, RDS, Lambda). Hands-on experience with Docker, Redis, JWT/OAuth2, CI/CD pipelines, microservices, and decoupled architecture. Currently engineering AI-powered products including LLM-integrated agents, RAG pipelines, and AI video generation platforms.
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
                                { label: "Languages", value: "JavaScript (ES6+), TypeScript, PHP, Python, GO, C++, SQL, HTML5, CSS3" },
                                { label: "Front End", value: "React.js, Next.js 15 (App Router), Tailwind CSS 4+, shadcn/ui, Radix UI, Framer Motion, GSAP, jQuery" },
                                { label: "Back End", value: "Node.js, Express.js, Fastify, Bun, Laravel (MVC), RESTful APIs, GraphQL, JWT, OAuth2, Microservices" },
                                { label: "AI / ML", value: "LLM API integration (OpenAI, Claude), RAG pipelines, LangChain, Vector Databases" },
                                { label: "Databases", value: "MySQL, PostgreSQL, MongoDB, SQLite, Oracle, Drizzle ORM, Prisma ORM, Redis (caching)" },
                                { label: "Cloud & DevOps", value: "AWS (EC2, S3, RDS, Lambda), Docker, Caddy, NGINX, Apache, CI/CD, SSH, DigitalOcean, Vercel" },
                                { label: "Testing & Quality", value: "Jasmine, PHPUnit, Jest, unit & integration testing, SOLID, DRY, Swagger/OpenAPI" },
                                { label: "i18n & PWA", value: "i18next, react-i18next, next-intl, TanStack Query, React Hook Form, Zod, PWA" },
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
                                    "Led architecture and implementation of client-side (Next.js) and server-side (Express) systems with full-stack TypeScript type safety and decoupled architecture.",
                                    "Developed tour booking workflow with unique booking code generation, customer management, and dynamic inventory tracking.",
                                    "Optimized LCP under 2.5s via Redis caching, Gzip compression, and SSR/SSG. Achieved Lighthouse scores: 100% SEO, 81% Performance, 98% Accessibility.",
                                    "Designed normalized PostgreSQL schema with Drizzle ORM; implemented indexed queries, automated migrations, and connection pooling.",
                                    "Managed end-to-end deployment: Vercel (frontend) + DigitalOcean Droplet VPS (backend) with Caddy reverse proxy, custom domains, and SSL/TLS.",
                                ]
                            },
                            {
                                role: "Junior WordPress Developer",
                                company: "Egypt Racket Sport",
                                duration: "Dec 2024 – Present | Remote",
                                color: "bg-cyan-500",
                                points: [
                                    "Evaluated and improved site performance using GTmetrix/Google Lighthouse; implemented caching and image optimization to reduce load times.",
                                    "Boosted e-commerce product visibility through on-page SEO strategies using Yoast/Rank Math.",
                                    "Maintained site health: daily plugin updates, conflict resolution, and frontend UI/UX troubleshooting.",
                                ]
                            },
                            {
                                role: "IT Support & Systems Engineer",
                                company: "Padel Nuestro",
                                duration: "Sep 2022 – Mar 2025 | West Cairo",
                                color: "bg-blue-500",
                                points: [
                                    "Diagnosed and resolved 50+ monthly network issues across a 200-person office; improved uptime from 95% to 99.5% using Wireshark packet analysis.",
                                    "Designed and documented an AI Padel Coach assistant prototype with 15+ technical architecture diagrams, reducing estimated implementation time by 30%.",
                                    "Deployed and maintained 3+ CCTV and DVR/NVR systems, cutting security incident response time by 35%.",
                                    "Administered 50+ software licenses; resolved 15+ weekly hardware and printer issues, reducing recurring downtime by 50%.",
                                ]
                            }
                            ,
                            {
                                role: "Full Stack Developer",
                                company: "Al Kayan Construction & Engineering",
                                link: "https://www.alkayan-co.com",
                                duration: "Jan 2021 – Present | Maadi",
                                color: "bg-purple-500",
                                points: [
                                    "Designed and deployed MVC web applications using PHP and Laravel, improving scalability for higher traffic volumes.",
                                    "Engineered a proprietary Real Estate CMS with secure authentication and role-based access control (RBAC).",
                                    "Reduced identified vulnerabilities by 75% through CSRF protection and rigorous full-stack input validation.",
                                    "Optimized database schemas and SQL query execution plans, accelerating data retrieval across production systems.",
                                    "Managed end-to-end hosting (Namecheap), DNS configuration (GoDaddy), and SSL certificates.",
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
                                { name: "Egypt Tour Guide", url: "egypt-tour-guide.com", desc: "Next.js 15 + Node.js bilingual PWA tourism platform. Sub-2s load via Turbopack. Deployed on Vercel + DigitalOcean VPS." },
                                { name: "AutoFix — Car Service Platform", desc: "AI-powered automotive platform (Bun + React + OpenAI). Multi-role: Tech / Admin / Customer. 3× faster startup vs Node.js." },
                                { name: "AI Video Generation Platform", desc: "Next.js 15 + Prisma + NextAuth scaffold with multi-language support, Sharp image processing, Docker, and Caddy reverse proxy." },
                                { name: "Logger Suite ERP (SaaS)", desc: "Multi-tenant SaaS ERP: Next.js 15 frontend + Laravel REST backend. Admin/Editor/Guest RBAC, Redis caching, AWS EC2/S3." },
                                { name: "GIS Sinai Explorer", desc: "Decoupled Node.js + PostgreSQL/PostGIS API with Leaflet.js map dashboard for managing POIs across the Sinai region." },
                                { name: "Node.js Backend Suite (Udacity)", desc: "Store Front API (Redis cart caching, 100% Jasmine coverage), Image Processing Microservice, MERN app on AWS EC2/S3/RDS." },
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
                                <span className="font-bold ml-4">2023</span>
                            </div>
                        </div>
                    </div>

                    {/* Print footer */}
                    <div className="hidden print:block text-center pt-6 border-t border-gray-200 mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        Ahmed Hamdy · Senior Full Stack Engineer · ahmedhamdy.mh95@gmail.com · +20 114 164 0812
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ResumeModal;
