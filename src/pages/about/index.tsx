import Circles from '../../components/Circle';
import React, { JSX, useState } from 'react';
import { Tabs } from "../../components/ui/vercel-tabs"
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaLaravel,
    FaAws,
    FaDocker,
    FaGitAlt,
    FaDatabase,
    FaPython,
    FaJava,
} from 'react-icons/fa';

import {
    SiGo, SiC, SiNextdotjs,
    SiBootstrap,
    SiTailwindcss,
    SiShadcnui,
    SiSharp,
    SiExpress,
    SiTypescript,
    SiPostman,
    SiPostgresql,
    SiFigma,
    SiAdobephotoshop,
    SiBun,
    SiFastify,
    SiDigitalocean,
    SiVercel,
} from 'react-icons/si'

import {
    HiMiniCommandLine,
    HiMiniBriefcase,
    HiMiniTrophy,
    HiMiniRectangleGroup,
    HiMiniAcademicCap,
    HiMiniStar,
    HiMiniBolt,
    HiMiniSparkles
} from "react-icons/hi2";

// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../../lib/variants";
import Avatar from "../../components/Avatar";

export default function AboutPage() {
    const icons = {
        frontEnd: [
            { icon: FaHtml5, name: "HTML5", color: "text-[#E34F26]" },
            { icon: FaCss3Alt, name: "CSS3", color: "text-[#1572B6]" },
            { icon: FaJs, name: "JavaScript", color: "text-[#F7DF1E]" },
            { icon: FaReact, name: "React", color: "text-[#61DAFB]" },
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
            { icon: SiShadcnui, name: "Shadcn UI", color: "text-[#FFFFFF]" },
            { icon: SiBootstrap, name: "Bootstrap", color: "text-[#7952B3]" },
            { icon: SiNextdotjs, name: "Next.js", color: "text-[#FFFFFF]" },
            { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
        ],
        backEnd: [
            { icon: FaNodeJs, name: "Node.js", color: "text-[#339933]" },
            { icon: SiBun, name: "Bun", color: "text-[#FBF0DF]" },
            { icon: FaPhp, name: "PHP", color: "text-[#777BB4]" },
            { icon: FaLaravel, name: "Laravel", color: "text-[#FF2D20]" },
            { icon: SiExpress, name: "Express", color: "text-[#FFFFFF]" },
            { icon: SiFastify, name: "Fastify", color: "text-[#FFFFFF]" },
            { icon: SiGo, name: "Go", color: "text-[#00ADD8]" },
            { icon: FaPython, name: "Python", color: "text-[#3776AB]" },
            { icon: FaJava, name: "Java", color: "text-[#007396]" },
        ],
        tools: [
            { icon: FaAws, name: "AWS", color: "text-[#FF9900]" },
            { icon: SiDigitalocean, name: "Digital Ocean", color: "text-[#0080FF]" },
            { icon: SiVercel, name: "Vercel", color: "text-[#FFFFFF]" },
            { icon: FaDocker, name: "Docker", color: "text-[#2496ED]" },
            { icon: HiMiniCommandLine, name: "SSH/Linux", color: "text-[#FFFFFF]" },
            { icon: FaGitAlt, name: "Git", color: "text-[#F05032]" },
            { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#4169E1]" },
            { icon: SiPostman, name: "Postman", color: "text-[#FF6C37]" },
        ],
    };

    const tabs = [
        { id: "Skills", label: "Skills", Icon: HiMiniCommandLine },
        { id: "Experience", label: "Experience", Icon: HiMiniBriefcase },
        { id: "Awards", label: "Awards", Icon: HiMiniTrophy },
        { id: "Projects", label: "Projects", Icon: HiMiniRectangleGroup },
        { id: "Education", label: "Education", Icon: HiMiniAcademicCap }
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const tabContent: Record<string, JSX.Element> = {
        Skills: (
            <div className="space-y-8">
                {/* Frontend */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="group"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
                        <h4 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
                            Frontend Development
                        </h4>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                        {icons.frontEnd.map(({ icon: Icon, name, color }) => (
                            <motion.div
                                key={name}
                                whileHover={{ scale: 1.05, y: -2 }}
                                onHoverStart={() => setHoveredSkill(name)}
                                onHoverEnd={() => setHoveredSkill(null)}
                                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                            >
                                <Icon className={`text-3xl ${color}`} />
                                <span className="text-[10px] font-bold uppercase tracking-tight text-gray-400 text-center">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Backend */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="group"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full"></div>
                        <h4 className="font-bold text-xl bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent uppercase tracking-wider">
                            Backend Development
                        </h4>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                        {icons.backEnd.map(({ icon: Icon, name, color }) => (
                            <motion.div
                                key={name}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/30 transition-all duration-300"
                            >
                                <Icon className={`text-3xl ${color}`} />
                                <span className="text-[10px] font-bold uppercase tracking-tight text-gray-400 text-center">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        ),

        Experience: (
            <div className="space-y-6">
                {[
                    {
                        role: "Founder & CEO",
                        company: "Codxior",
                        duration: "2024 - Present",
                        points: [
                            "Building a next-generation software house focusing on high-performance digital ecosystems",
                            "Leading architectural decisions and product strategy for diverse client solutions",
                            "Scaling operations and establishing a premium brand identity"
                        ],
                        color: "from-red-500 to-purple-600"
                    },
                    {
                        role: "IT Support",
                        company: "Padel Nuestro",
                        duration: "2022 - 2024",
                        points: [
                            "Provided comprehensive IT support and resolved complex technical issues",
                            "Managed hardware and software troubleshooting to ensure system reliability",
                            "Maintained smooth daily operations across all business departments",
                        ],
                        color: "from-cyan-400 to-blue-600"
                    }
                ].map((exp, index) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-all duration-500"
                    >
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color}`}></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div className="flex-1">
                                <h4 className={`font-black text-xl bg-gradient-to-r ${exp.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                                    {exp.role}
                                </h4>
                                <p className="text-white font-bold text-lg mb-4">{exp.company}</p>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    {exp.points.map((point, pIndex) => (
                                        <li key={pIndex} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-white/20 rounded-full mt-1.5 flex-shrink-0"></div>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                                <span className="text-gray-400 text-xs font-black uppercase">{exp.duration}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        ),

        Awards: (
            <div className="space-y-4">
                {[
                    {
                        title: "Udacity Backend Development Certification",
                        description: "Advanced Node.js, PostgreSQL, JWT Authentication",
                        Icon: HiMiniStar,
                        gradient: "from-cyan-400 to-blue-600"
                    },
                    {
                        title: "CI/CD Automation Excellence",
                        description: "AWS, Elastic Beanstalk, CircleCI Integration",
                        Icon: HiMiniBolt,
                        gradient: "from-green-400 to-emerald-600"
                    },
                    {
                        title: "Clean Code Architecture Award",
                        description: "SOLID & DRY Principles Implementation",
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
                            <h4 className="font-bold text-white text-lg">{award.title}</h4>
                            <p className="text-gray-500 text-sm font-medium">{award.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        ),

        Projects: (
            <div className="grid gap-6">
                {[
                    {
                        title: "Alkayan Nova",
                        description: "Modern UI & Architecture for construction ecosystem",
                        tech: ["Next.js", "Architecture", "Tailwind"],
                        status: "Live"
                    },
                    {
                        title: "Loger Suit ERPS",
                        description: "Advanced ERP built with Laravel & Next.js",
                        tech: ["Laravel", "Next.js", "BI"],
                        status: "In Progress"
                    },
                    {
                        title: "Auto Fix Car",
                        description: "Triple dashboard automotive ecosystem via Strapi",
                        tech: ["Strapi", "Next.js", "Dashboard"],
                        status: "Live"
                    }
                ].map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all duration-500"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div className="flex-1">
                                <h4 className="font-bold text-white text-lg mb-2">{project.title}</h4>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-[10px] font-black uppercase bg-white/5 text-gray-400 rounded-lg border border-white/10 group-hover:border-red-500/20 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${project.status === "Live"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                }`}>
                                {project.status}
                            </div>
                        </div>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center pt-4"
                >
                    <a href="/projects" className="text-red-500 font-black uppercase text-xs tracking-[0.2em] hover:text-white transition-colors">
                        View All Masterpieces →
                    </a>
                </motion.div>
            </div>
        ),

        Education: (
            <div className="space-y-6">
                {[
                    {
                        title: "Bachelor's Degree in Computer Science",
                        info: "Graduation Projects: GIS SINIA, Alumni App, Auto Fix",
                        Icon: HiMiniAcademicCap,
                        gradient: "from-purple-500 to-pink-600",
                        tags: ["Software Engineering", "GIS", "Mobile"]
                    },
                    {
                        title: "Udacity Nanodegree",
                        info: "Advanced Full Stack Web Development & DevOps",
                        Icon: HiMiniBolt,
                        gradient: "from-blue-500 to-cyan-600",
                        tags: ["Microservices", "CI/CD", "AWS"]
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
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}>
                                <edu.Icon className="text-2xl text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-white text-lg mb-2">{edu.title}</h4>
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

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(0,0,0,1)_100%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

            {/* Avatar */}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                animate="show"
                className="hidden xl:flex absolute bottom-0 -left-[370px]"
            >
                <Avatar />
            </motion.div>

            {/* Main Content */}
            <div className="grid grid-cols-1 xl:grid-cols-2 w-full max-w-7xl gap-16 items-start relative z-10 pt-20">
                {/* Left Column */}
                <div className="space-y-10">
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        animate="show"
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-300">Building Codxior</span>
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                            Crafting The<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-600 to-blue-500">Future Web</span>
                        </h2>

                        <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
                            <p>
                                I'm <span className="text-white font-bold underline decoration-red-500 underline-offset-8">Ahmed Hamdy</span>,
                                a Full Stack Architect and Founder of <span className="text-white font-black italic">Codxior</span>.
                                I build digital experiences that define industries.
                            </p>
                            <p>
                                From complex ERP systems to integrated IoT ecosystems, I specialize in
                                <span className="text-white font-medium"> high-stakes architecture </span>
                                and seamless user interactions.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-6">
                            {[
                                { number: "50+", label: "Successes" },
                                { number: "3+", label: "Grad Projs" },
                                { number: "24/7", label: "Dev Mind" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="text-3xl font-black text-white group-hover:text-red-500 transition-colors duration-300">
                                        {stat.number}
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-600 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-12">
                    <div className="flex flex-wrap gap-4 p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 w-fit">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-500 ${activeTab === tab.id
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
                            transition={{ duration: 0.4, ease: "circOut" }}
                        >
                            {tabContent[activeTab]}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}