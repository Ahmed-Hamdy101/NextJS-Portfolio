import Circles from '@/components/Circle';
import React, {JSX, useState} from 'react';
import { Tabs } from "@/components/ui/vercel-tabs"
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
    FaWordpress,
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
    SiJasmine,
    SiTypescript,
    SiPostman,
    SiPostgresql,
    SiJsonwebtokens,
    SiMagic,
    SiPassport,
    SiQt,
    SiApache,
    SiAmazonec2,
    SiAmazonrds,
    SiAmazons3,
    SiAdobeillustrator,
    SiAdobeaftereffects,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiFigma,
    SiSketch,
    SiAdobexd
} from 'react-icons/si'

// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "@/lib/variants";
import Avatar from "@/components/Avatar";

export default function AboutPage() {
    const icons = {
        frontEnd: [
            { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
            { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
            { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
            { icon: FaReact, name: "React", color: "text-cyan-400" },
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
            { icon: SiShadcnui, name: "Shadcn UI", color: "text-slate-300" },
            { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-500" },
            { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
            { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
        ],
        backEnd: [
            { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
            { icon: FaPhp, name: "PHP", color: "text-purple-400" },
            { icon: FaLaravel, name: "Laravel", color: "text-red-500" },
            { icon: SiExpress, name: "ExpressJS", color: "text-gray-400" },
            { icon: SiGo, name: "Go", color: "text-cyan-300" },
            { icon: SiC, name: "C++", color: "text-blue-400" },
            { icon: SiSharp, name: "C#", color: "text-purple-600" },
            { icon: FaPython, name: "Python", color: "text-yellow-300" },
            { icon: FaJava, name: "Java", color: "text-red-400" },
        ],
        tools: [
            { icon: FaAws, name: "AWS", color: "text-orange-400" },
            { icon: FaDocker, name: "Docker", color: "text-blue-400" },
            { icon: FaGitAlt, name: "Git", color: "text-orange-500" },
            { icon: FaDatabase, name: "Databases", color: "text-blue-300" },
            { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500" },
            { icon: SiPostman, name: "Postman", color: "text-orange-500" },
            { icon: SiFigma, name: "Figma", color: "text-purple-500" },
            { icon: SiAdobephotoshop, name: "Photoshop", color: "text-blue-400" },
        ],
    };

    const tabs = [
        { id: "Skills", label: "🚀 Skills" },
        { id: "Experience", label: "💼 Experience" },
        { id: "Awards", label: "🏆 Awards" },
        { id: "Projects", label: "📁 Projects" },
        { id: "Education", label: "🎓 Education" }
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
                        <h4 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            Frontend Development
                        </h4>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                        {icons.frontEnd.map(({ icon: Icon, name, color }) => (
                            <motion.div
                                key={name}
                                whileHover={{ scale: 1.1, y: -5 }}
                                onHoverStart={() => setHoveredSkill(name)}
                                onHoverEnd={() => setHoveredSkill(null)}
                                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                            >
                                <Icon className={`text-3xl ${color} drop-shadow-lg`} />
                                <span className="text-xs font-medium text-center text-gray-300">{name}</span>
                                {hoveredSkill === name && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full"
                                    />
                                )}
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
                        <h4 className="font-bold text-xl bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                            Backend Development
                        </h4>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                        {icons.backEnd.map(({ icon: Icon, name, color }) => (
                            <motion.div
                                key={name}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300"
                            >
                                <Icon className={`text-3xl ${color} drop-shadow-lg`} />
                                <span className="text-xs font-medium text-center text-gray-300">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tools & DevOps */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="group"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-red-600 rounded-full"></div>
                        <h4 className="font-bold text-xl bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                            Tools & DevOps
                        </h4>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                        {icons.tools.map(({ icon: Icon, name, color }) => (
                            <motion.div
                                key={name}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/30 transition-all duration-300"
                            >
                                <Icon className={`text-3xl ${color} drop-shadow-lg`} />
                                <span className="text-xs font-medium text-center text-gray-300">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        ),

        Experience: (
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 hover:border-cyan-400/30 transition-all duration-500"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="flex-1">
                            <h4 className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                                Full Stack Developer & DevOps Engineer
                            </h4>
                            <p className="text-cyan-300 font-semibold mb-3">Padel Nuestro</p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Architected and deployed scalable WordPress ERP systems and Laravel applications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Engineered CI/CD pipelines reducing deployment time by 70%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Led cloud infrastructure management on AWS with 99.9% uptime</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Mentored junior developers and established coding standards</span>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full">
                            <span className="text-cyan-300 text-sm font-semibold">2022 - Present</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        ),

        Awards: (
            <div className="space-y-4">
                {[
                    {
                        title: "Udacity Backend Development Certification",
                        description: "Advanced Node.js, PostgreSQL, JWT Authentication",
                        icon: "🏆",
                        gradient: "from-cyan-400 to-blue-600"
                    },
                    {
                        title: "CI/CD Automation Excellence",
                        description: "AWS, Elastic Beanstalk, CircleCI Integration",
                        icon: "⚡",
                        gradient: "from-green-400 to-emerald-600"
                    },
                    {
                        title: "Clean Code Architecture Award",
                        description: "SOLID & DRY Principles Implementation",
                        icon: "💎",
                        gradient: "from-purple-400 to-pink-600"
                    }
                ].map((award, index) => (
                    <motion.div
                        key={award.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                    >
                        <div className={`text-2xl p-3 rounded-xl bg-gradient-to-br ${award.gradient} shadow-lg`}>
                            {award.icon}
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white mb-2">{award.title}</h4>
                            <p className="text-gray-300 text-sm">{award.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        ),

        Projects: (
            <div className="grid gap-6">
                {[
                    {
                        title: "Enterprise ERP System",
                        description: "Full-stack Laravel application with real-time analytics",
                        tech: ["Laravel", "Vue.js", "PostgreSQL", "AWS"],
                        status: "Live"
                    },
                    {
                        title: "E-commerce Platform",
                        description: "Next.js microservices architecture with payment integration",
                        tech: ["Next.js", "Node.js", "Stripe", "Docker"],
                        status: "In Development"
                    },
                    {
                        title: "DevOps Automation Suite",
                        description: "CI/CD pipeline optimization and cloud management",
                        tech: ["AWS", "Docker", "GitHub Actions", "Terraform"],
                        status: "Live"
                    }
                ].map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-[1.02]"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div className="flex-1">
                                <h4 className="font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                project.status === "Live"
                                    ? "bg-green-500/20 text-green-300 border border-green-400/30"
                                    : "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                            }`}>
                                {project.status}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        ),

        Education: (
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-500"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                            <span className="text-2xl">🎓</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white mb-2">Bachelor's Degree in Computer Science</h4>
                            <p className="text-gray-300 mb-3">GPA: 3.8/4.0 • Magna Cum Laude</p>
                            <div className="flex items-center gap-4 text-sm">
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-400/30">
                                    Focus: Software Engineering
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-500"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white mb-2">Udacity Nanodegree</h4>
                            <p className="text-gray-300 mb-3">Advanced Full Stack Web Development</p>
                            <p className="text-sm text-gray-400">
                                Specialized in microservices architecture, cloud deployment, and advanced CI/CD pipeline development
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        ),
    };

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
            {/* Enhanced Background Circles */}
            <Circles />

            {/* Animated Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-50"></div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

            {/* Avatar */}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex absolute bottom-0 -left-[370px]"
            >
                <Avatar />
            </motion.div>

            {/* Main Content */}
            <div className="grid grid-cols-1 xl:grid-cols-2 w-full max-w-7xl gap-12 items-start relative z-10">
                {/* Left Column - Professional Summary */}
                <div className="space-y-8">
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        animate="show"
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-cyan-300 font-semibold">Full Stack Developer</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold">
                            Crafting Digital{" "}
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                                Experiences
                            </span>
                        </h2>

                        <div className="space-y-4 text-lg leading-relaxed">
                            <p className="text-gray-300">
                                I'm a <span className="text-cyan-300 font-semibold">Full Stack Architect</span> passionate about building
                                scalable, performant applications that deliver exceptional user experiences. With expertise spanning
                                from pixel-perfect UIs to robust cloud infrastructure.
                            </p>
                            <p className="text-gray-300">
                                I specialize in modern tech stacks, clean architecture, and DevOps practices that ensure
                                <span className="text-green-300"> reliability</span> and <span className="text-purple-300">scalability</span>.
                                Constantly exploring emerging technologies to push the boundaries of web development.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                            {[
                                { number: "50+", label: "Projects" },
                                { number: "3+", label: "Years Exp" },
                                { number: "99.9%", label: "Uptime" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                                >
                                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column - Interactive Content */}
                <div className="flex flex-col gap-8 pt-8">
                    <Tabs
                        tabs={tabs}
                        activeTab={activeTab}
                        onTabChange={(tabId) => setActiveTab(tabId)}
                        className="text-white z-20"
                    />

                    <div className="min-h-[500px]">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-lg leading-relaxed"
                        >
                            {tabContent[activeTab]}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}