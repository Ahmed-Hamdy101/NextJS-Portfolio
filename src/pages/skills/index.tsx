import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";
import Circles from "../../components/Circle";
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
    SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiPostgresql,
    SiAmazon, SiDocker, SiGit, SiBun, SiFastify, SiDigitalocean, SiVercel,
    SiMongodb, SiRedis, SiPrisma,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { HiMiniCommandLine } from "react-icons/hi2";

const SkillsPage = () => {
    const skillCategories = [
        {
            title: "Frontend Engineering",
            accentColor: "text-cyan-400",
            gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
            skills: [
                { name: "React", level: 95, icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", level: 92, icon: SiNextdotjs, color: "#FFFFFF" },
                { name: "TypeScript", level: 88, icon: SiTypescript, color: "#3178C6" },
                { name: "JavaScript", level: 95, icon: SiJavascript, color: "#F7DF1E" },
                { name: "Tailwind CSS", level: 92, icon: SiTailwindcss, color: "#06B6D4" },
            ],
        },
        {
            title: "Backend Systems",
            accentColor: "text-purple-400",
            gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
            skills: [
                { name: "Node.js", level: 92, icon: SiNodedotjs, color: "#339933" },
                { name: "Bun", level: 88, icon: SiBun, color: "#FBF0DF" },
                { name: "Express", level: 88, icon: SiExpress, color: "#FFFFFF" },
                { name: "Fastify", level: 82, icon: SiFastify, color: "#FFFFFF" },
                { name: "PHP / Laravel", level: 88, icon: SiLaravel, color: "#FF2D20" },
                { name: "PostgreSQL", level: 85, icon: SiPostgresql, color: "#4169E1" },
                { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47A248" },
                { name: "Redis", level: 82, icon: SiRedis, color: "#DC382D" },
            ],
        },
        {
            title: "DevOps & Cloud",
            accentColor: "text-red-400",
            gradient: "from-red-500/10 via-orange-500/5 to-transparent",
            skills: [
                { name: "AWS (EC2/S3/RDS)", level: 85, icon: SiAmazon, color: "#FF9900" },
                { name: "DigitalOcean", level: 82, icon: SiDigitalocean, color: "#0080FF" },
                { name: "Docker", level: 82, icon: SiDocker, color: "#2496ED" },
                { name: "SSH / Linux", level: 88, icon: HiMiniCommandLine, color: "#FFFFFF" },
                { name: "Git / CI-CD", level: 95, icon: SiGit, color: "#F05032" },
                { name: "Vercel", level: 90, icon: SiVercel, color: "#FFFFFF" },
            ],
        },
    ];

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
            <Circles />

            <div className="w-full max-w-6xl z-10 pt-16">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">Technical Arsenal</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("down", 0.1)}
                        initial="hidden"
                        animate="show"
                        className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Arsenal
                    </motion.h1>

                    <motion.p
                        variants={fadeIn("down", 0.15)}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-lg lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        3+ years shipping production systems across the full stack.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            variants={fadeIn("up", 0.1 + categoryIndex * 0.05)}
                            initial="hidden"
                            animate="show"
                            className="glass-panel glass-panel-hover rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative group"
                        >
                            <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${category.gradient} opacity-20 blur-[40px] group-hover:scale-125 transition-all duration-700`} />

                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="p-3 bg-white/[0.03] border border-white/5 rounded-2xl shadow-xl">
                                    <FaCode className={`w-6 h-6 ${category.accentColor}`} />
                                </div>
                                <h2 className="text-lg font-black text-white uppercase tracking-tight">
                                    {category.title}
                                </h2>
                            </div>

                            <div className="space-y-5 relative z-10">
                                {category.skills.map((skill, index) => {
                                    const SkillIcon = skill.icon;
                                    return (
                                        <div key={skill.name} className="group/item">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-7 h-7 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center">
                                                        <SkillIcon className="w-3.5 h-3.5" style={{ color: skill.color }} />
                                                    </div>
                                                    <span className="font-bold text-gray-400 group-hover/item:text-white transition-colors uppercase text-[10px] tracking-widest">{skill.name}</span>
                                                </div>
                                                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden border border-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    // viewport-based trigger: only animate when visible, not on mount
                                                    transition={{ duration: 0.8, delay: index * 0.04, ease: "easeOut" }}
                                                    className="h-full bg-gradient-to-r from-red-500 via-purple-600 to-indigo-500 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;
