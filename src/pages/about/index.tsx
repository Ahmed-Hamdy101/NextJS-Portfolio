import { AnimatePresence, motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { JSX, useState } from 'react';
import {
    HiMiniAcademicCap,
    HiMiniBolt,
    HiMiniBriefcase,
    HiMiniEye,
    HiMiniSparkles,
    HiMiniStar,
    HiMiniTrophy,
} from "react-icons/hi2";
import Avatar from "../../components/Avatar";
import Circles from '../../components/Circle';
import ResumeModal from "../../components/ResumeModal";
import { fadeIn } from "../../lib/variants";

export default function AboutPage() {
    const tabs = [
        { id: "Experience", label: "Experience", Icon: HiMiniBriefcase },
        { id: "Awards", label: "Awards", Icon: HiMiniTrophy },
        { id: "Education", label: "Education", Icon: HiMiniAcademicCap }
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const tabContent: Record<string, JSX.Element> = {
        Experience: (
            <div className="space-y-6">
                {[
                    {
                        role: "Full Stack Developer",
                        company: "ET GCO Tours",
                        duration: "Dec 2025 – Present",
                        points: [
                            "Led Next.js + Express architecture with TypeScript, achieved Lighthouse 100% SEO, 98% Accessibility.",
                            "Optimized LCP under 2.5s via Redis caching, Gzip compression, and SSR/SSG.",
                            "Designed normalized PostgreSQL schema with Drizzle ORM, managed Vercel + DigitalOcean VPS deployment.",
                        ],
                        color: "from-yellow-500 to-green-600"
                    },
                    {
                        role: "Junior WordPress Developer",
                        company: "Egypt Racket Sport",
                        duration: "Dec 2024 – Present",
                        points: [
                            "Improved site performance via GTmetrix/Lighthouse audits, caching, and image optimization.",
                            "Implemented on-page SEO with Yoast/Rank Math to boost e-commerce product visibility.",
                            "Resolved plugin conflicts and maintained frontend UI/UX stability.",
                        ],
                        color: "from-cyan-400 to-blue-600"
                    },
                    {
                        role: "IT Support & Systems Engineer",
                        company: "Padel Nuestro",
                        duration: "Sep 2022 – Mar 2025",
                        points: [
                            "Diagnosed 50+ monthly network issues in a 200-person office, improved uptime from 95% to 99.5% using Wireshark.",
                            "Designed AI Padel Coach assistant prototype with 15+ architecture diagrams, cutting implementation time by 30%.",
                            "Deployed 3+ CCTV/DVR/NVR systems, administered 50+ licenses and reduced hardware downtime by 50%.",
                        ],
                        color: "from-blue-400 to-indigo-600"
                    },          
                     {
                        role: "Full Stack Developer",
                        company: "Al Kayan Construction & Engineering",
                        duration: "Jan 2021 – Present",
                        points: [
                            "Built proprietary Real Estate CMS in Laravel with RBAC authentication and role-based access control.",
                            "Reduced vulnerabilities by 75% through CSRF protection and full-stack input validation.",
                            "Managed DNS (GoDaddy), hosting (Namecheap), and SSL certificates for concurrent production projects.",
                        ],
                        color: "from-purple-500 to-red-600"
                    },
                ].map((exp, index) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-all duration-500"
                    >
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color}`} />
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div className="flex-1">
                                <h4 className={`font-black text-xl bg-gradient-to-r ${exp.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                                    {exp.role}
                                </h4>
                                <p className="text-white font-bold text-base mb-4">{exp.company}</p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    {exp.points.map((point, pi) => (
                                        <li key={pi} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-white/20 rounded-full mt-1.5 flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl self-start">
                                <span className="text-gray-400 text-xs font-black uppercase">{exp.duration}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center pt-4"
                >
                    <Link href="/work" className="inline-flex items-center gap-2 text-red-500 font-black uppercase text-xs tracking-[0.2em] hover:text-white transition-all duration-300">
                        Full Professional Journey →
                    </Link>
                </motion.div>
            </div>
        ),

        Awards: (
            <div className="space-y-4">
                {[
                    {
                        title: "Udacity Advanced Full Stack Nanodegree",
                        description: "Node.js, PostgreSQL, React, AWS (EC2/S3/RDS), CI/CD, Docker, security & testing — 2023",
                        Icon: HiMiniStar,
                        gradient: "from-cyan-400 to-blue-600"
                    },
                    {
                        title: "CI/CD Pipeline Automation",
                        description: "AWS, Elastic Beanstalk, CircleCI integration across production deployments",
                        Icon: HiMiniBolt,
                        gradient: "from-green-400 to-emerald-600"
                    },
                    {
                        title: "Clean Architecture & SOLID Principles",
                        description: "Applied DRY/SOLID across 10+ production projects; Swagger/OpenAPI documentation",
                        Icon: HiMiniSparkles,
                        gradient: "from-purple-400 to-pink-600"
                    }
                ].map((award, index) => (
                    <motion.div
                        key={award.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${award.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                            <award.Icon className="text-2xl text-white" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white text-base">{award.title}</h4>
                            <p className="text-gray-500 text-sm font-medium">{award.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        ),

        Education: (
            <div className="space-y-6">
                {[
                    {
                        title: "Bachelor of Engineering — Computer Science",
                        info: "Culture & Science City, Faculty of CS & Information Systems, Giza — 2020. Graduation project: Doctor Prescription Electronic System (Android + Web).",
                        Icon: HiMiniAcademicCap,
                        gradient: "from-purple-500 to-pink-600",
                        tags: ["Data Structures", "Algorithms", "OOP", "Software Eng", "Networks"]
                    },
                    {
                        title: "Udacity Full Stack Nanodegree",
                        info: "Advanced Full Stack Web Development & DevOps — Node.js, Express, PostgreSQL, React, AWS, Docker, CI/CD, unit & integration testing.",
                        Icon: HiMiniBolt,
                        gradient: "from-blue-500 to-cyan-600",
                        tags: ["Microservices", "CI/CD", "AWS", "Docker", "Testing"]
                    }
                ].map((edu, index) => (
                    <motion.div
                        key={edu.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
                    >
                        <div className="flex items-start gap-6">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                                <edu.Icon className="text-2xl text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-white text-base mb-2">{edu.title}</h4>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed font-medium">{edu.info}</p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 text-[9px] font-black uppercase bg-white/5 text-gray-500 rounded-md border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        ),
    };

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
            <Circles />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(0,0,0,1)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

            <motion.div
                variants={fadeIn('right', 0.2) as unknown as Variants}
                initial="hidden"
                animate="show"
                className="hidden xl:flex absolute bottom-0 -left-[370px]"
            >
                <Avatar />
            </motion.div>

            <div className="grid grid-cols-1 xl:grid-cols-2 w-full max-w-7xl gap-16 items-start relative z-10 pt-20">
                {/* Left Column */}
                <div className="space-y-10">
                    <motion.div
                        variants={fadeIn('up', 0.3) as unknown as  Variants}
                        initial="hidden"
                        animate="show"
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                            </span>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-300">4+ Years Experience</span>
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                            Mid level Senior Full  <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-600 to-blue-500">Stack Engineer</span>
                        </h2>

                        <div className="space-y-5 text-lg text-gray-400 font-light leading-relaxed">
                            <p>
                                I&apos;m <span className="text-white font-bold underline decoration-red-500 underline-offset-8">Ahmed Hamdy</span>,
                                a Mid level Senior Full  Stack Engineer based in Giza, Egypt. I design and ship scalable web applications, RESTful APIs, and cloud-hosted systems across the full stack.
                            </p>
                            <p>
                                From real estate platforms and ERP systems to AI-powered products and tourism PWAs, I specialize in
                                <span className="text-white font-medium"> high-performance architecture </span>
                                using Node.js, Bun, Laravel, Next.js, and AWS.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <button
                                onClick={() => setIsResumeOpen(true)}
                                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-purple-600 text-white font-black uppercase tracking-widest text-[10px] transition-all duration-300 hover:opacity-90 shadow-lg shadow-red-500/10 flex items-center justify-center gap-2 group cursor-pointer"
                            >
                                <HiMiniEye className="text-sm group-hover:scale-110 transition-transform" />
                                Review CV
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-6">
                            {[
                                { number: "4+", label: "Yrs Exp" },
                                { number: "4+", label: "Live Projects" },
                                { number: "75%", label: "Vuln Reduction" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="text-3xl font-black text-white group-hover:text-red-500 transition-colors duration-300">{stat.number}</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-600 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <Link href="/skills" className="group flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-600 mb-0.5">Explore</p>
                                    <p className="text-xs font-black text-white group-hover:text-cyan-400 transition-colors">Technical Skills</p>
                                </div>
                                <span className="text-cyan-400/60 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300">→</span>
                            </Link>
                            <Link href="/projects" className="group flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-400/30 transition-all duration-300">
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-600 mb-0.5">View</p>
                                    <p className="text-xs font-black text-white group-hover:text-red-400 transition-colors">All Projects</p>
                                </div>
                                <span className="text-red-400/60 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300">→</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-12">
                    <div className="flex flex-wrap gap-3 p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 w-fit">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-500 ${
                                    activeTab === tab.id
                                        ? "bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg shadow-red-500/20"
                                        : "text-gray-500 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                <tab.Icon className="text-lg" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[600px] relative">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.35, ease: "circOut" }}
                        >
                            {tabContent[activeTab]}
                        </motion.div>
                    </div>
                </div>

                <AnimatePresence>
                    {isResumeOpen && (
                        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
