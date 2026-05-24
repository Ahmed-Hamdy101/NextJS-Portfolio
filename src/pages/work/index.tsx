import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";
import Circles from "../../components/Circle";
import { HiMiniBriefcase, HiMiniCommandLine, HiMiniRocketLaunch, HiMiniWrenchScrewdriver, HiMiniGlobeAlt } from "react-icons/hi2";

const WorkPage = () => {
    const experiences = [
        {
            company: "ET GCO Tours",
            companyLink: "https://egypt-tour-guide.com",
            role: "Full Stack Developer",
            duration: "Dec 2025 – Present | Remote",
            description: "Led full-stack architecture using Next.js (client) and Express (server) with TypeScript and decoupled design. Engineered a tour booking workflow, achieved Lighthouse 100% SEO / 98% Accessibility, and optimized LCP under 2.5s via Redis caching, SSR/SSG, and Gzip. Deployed on Vercel + DigitalOcean VPS with Caddy reverse proxy.",
            skills: ["Next.js 15", "TypeScript", "PostgreSQL", "Drizzle ORM", "Redis", "GSAP", "DigitalOcean", "Vercel"],
            icon: HiMiniGlobeAlt,
            gradient: "from-yellow-500/10 via-green-600/5 to-transparent",
            accentColor: "text-yellow-400",
        },
        {
            company: "Egypt Racket Sport",
            role: "Junior WordPress Developer",
            duration: "Dec 2024 – Present | Remote",
            description: "Evaluated and improved site performance using GTmetrix and Google Lighthouse. Implemented caching and image optimization. Boosted product visibility through on-page SEO with Yoast/Rank Math. Managed plugin updates and resolved frontend UI/UX conflicts.",
            skills: ["WordPress", "WooCommerce", "SEO", "GTmetrix", "Plugin Dev", "Lighthouse"],
            icon: HiMiniBriefcase,
            gradient: "from-cyan-500/10 via-blue-600/5 to-transparent",
            accentColor: "text-cyan-400",
        },
        {
            company: "Padel Nuestro",
            role: "IT Support & Systems Engineer",
            duration: "Sep 2022 – Mar 2025 | West Cairo",
            description: "Diagnosed and resolved 50+ monthly network issues across a 200-person office, improving uptime from 95% to 99.5% using Wireshark packet analysis. Designed an AI Padel Coach assistant prototype with 15+ architecture diagrams, reducing implementation time by 30%. Deployed 3+ CCTV/DVR systems and managed 50+ software licenses.",
            skills: ["Networking", "Wireshark", "CCTV/NVR", "IT Support", "AI Prototyping", "System Design"],
            icon: HiMiniCommandLine,
            gradient: "from-blue-500/10 via-indigo-600/5 to-transparent",
            accentColor: "text-blue-400",
        },
        {
            company: "Al Kayan Construction & Engineering",
            companyLink: "https://www.alkayan-co.com",
            role: "Full Stack Developer",
            duration: "Jan 2021 – Present | Maadi",
            description: "Designed and deployed Laravel MVC web applications for a leading construction firm. Built a proprietary Real Estate CMS with RBAC authentication. Reduced vulnerabilities by 75% via CSRF protection and full-stack input validation. Optimized SQL queries and managed DNS, hosting, and SSL across concurrent projects.",
            skills: ["Laravel", "PHP", "MySQL", "RBAC", "CSRF", "Namecheap", "GoDaddy", "SSL"],
            icon: HiMiniRocketLaunch,
            gradient: "from-red-500/10 via-purple-600/5 to-transparent",
            accentColor: "text-red-400",
        },
    ];

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
            <Circles />

            <div className="w-full max-w-5xl z-10 pt-20">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">Professional Path</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Journey
                    </motion.h1>

                    <motion.p
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-lg lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        3+ years of full-stack engineering, IT leadership, and scalable system architecture.
                    </motion.p>
                </div>

                <div className="relative pl-6 sm:pl-10 space-y-12">
                    <div className="absolute left-1.5 sm:left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-red-500 via-purple-600 to-indigo-500/10" />

                    {experiences.map((exp, index) => {
                        const Icon = exp.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.3 + index * 0.1)}
                                initial="hidden"
                                animate="show"
                                className="group relative glass-panel glass-panel-hover rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
                            >
                                <div className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${exp.gradient} opacity-20 blur-[40px] group-hover:scale-125 transition-all duration-700`} />

                                {/* Timeline node */}
                                <div className="absolute left-[-29px] sm:left-[-41px] top-10 w-4 h-4 rounded-full bg-[#020204] border-2 border-red-500 flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.5)] z-20 group-hover:scale-125 group-hover:border-purple-500 transition-all duration-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:bg-purple-500 transition-all duration-500" />
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                    <div className="flex-shrink-0 p-5 bg-white/[0.03] border border-white/5 rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-xl">
                                        <Icon className={`w-12 h-12 ${exp.accentColor}`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                                            <div>
                                                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-none">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-red-500/80 group-hover:text-red-500 transition-colors font-bold text-sm mt-2 uppercase tracking-wider">
                                                    {exp.companyLink
                                                        ? <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.company}</a>
                                                        : exp.company
                                                    }
                                                </p>
                                            </div>
                                            <div className="px-5 py-2 bg-white/[0.03] border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">
                                                {exp.duration}
                                            </div>
                                        </div>
                                        <p className="text-slate-400 mb-6 leading-relaxed text-sm lg:text-base font-light">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, si) => (
                                                <span
                                                    key={si}
                                                    className="px-3.5 py-1.5 bg-white/[0.02] border border-white/5 text-[9px] font-black uppercase tracking-widest text-gray-500 rounded-lg group-hover:border-white/10 group-hover:text-gray-300 transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WorkPage;
