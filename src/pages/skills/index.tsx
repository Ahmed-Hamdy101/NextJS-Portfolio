import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";
import Circles from "../../components/Circle";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiThreedotjs,
    SiNodedotjs,
    SiExpress,
    SiPhp,
    SiLaravel,
    SiPostgresql,
    SiMongodb,
    SiAmazon,
    SiDocker,
    SiGit,
    SiLinux,
    SiNginx,
    SiBun,
    SiFastify,
    SiDigitalocean,
    SiVercel,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { HiMiniCommandLine } from "react-icons/hi2";

const SkillsPage = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: FaCode,
            skills: [
                { name: "React", level: 95, icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", level: 90, icon: SiNextdotjs, color: "#FFFFFF" },
                { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
                { name: "JavaScript", level: 95, icon: SiJavascript, color: "#F7DF1E" },
                { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
                { name: "Three.js", level: 75, icon: SiThreedotjs, color: "#FFFFFF" },
            ],
        },
        {
            title: "Backend Development",
            icon: FaCode,
            skills: [
                { name: "Node.js", level: 90, icon: SiNodedotjs, color: "#339933" },
                { name: "Bun", level: 85, icon: SiBun, color: "#FBF0DF" },
                { name: "Express", level: 85, icon: SiExpress, color: "#FFFFFF" },
                { name: "Fastify", level: 80, icon: SiFastify, color: "#FFFFFF" },
                { name: "PHP", level: 80, icon: SiPhp, color: "#777BB4" },
                { name: "Laravel", level: 85, icon: SiLaravel, color: "#FF2D20" },
                { name: "PostgreSQL", level: 80, icon: SiPostgresql, color: "#4169E1" },
            ],
        },
        {
            title: "DevOps & Tools",
            icon: FaCode,
            skills: [
                { name: "AWS", level: 85, icon: SiAmazon, color: "#FF9900" },
                { name: "Digital Ocean", level: 80, icon: SiDigitalocean, color: "#0080FF" },
                { name: "Vercel", level: 85, icon: SiVercel, color: "#FFFFFF" },
                { name: "Docker", level: 80, icon: SiDocker, color: "#2496ED" },
                { name: "SSH/Linux", level: 85, icon: HiMiniCommandLine, color: "#FFFFFF" },
                { name: "Git", level: 95, icon: SiGit, color: "#F05032" },
                { name: "CI/CD", level: 85, icon: FaCode, color: "#9333ea" },
            ],
        },
    ];

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
            <Circles />

            <div className="w-full max-w-6xl z-10 pt-16">
                <div className="text-center mb-16">
                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="text-5xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Arsenal
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-xl lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        Mastering the technologies that power the modern web.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => {
                        const CategoryIcon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                variants={fadeIn("up", 0.3 + categoryIndex * 0.1)}
                                initial="hidden"
                                animate="show"
                                className="bg-white/5 backdrop-blur-3xl rounded-[2rem] p-8 border border-white/10 shadow-2xl hover:border-red-500/30 transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-red-500/10 rounded-xl">
                                        <CategoryIcon className="w-6 h-6 text-red-500" />
                                    </div>
                                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                                        {category.title}
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    {category.skills.map((skill, index) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <div key={skill.name} className="group">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-3">
                                                        <SkillIcon
                                                            className="w-6 h-6 transition-transform group-hover:scale-110 duration-300"
                                                            style={{ color: skill.color }}
                                                        />
                                                        <span className="font-bold text-gray-300 group-hover:text-white transition-colors uppercase text-xs tracking-widest">{skill.name}</span>
                                                    </div>
                                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden border border-white/5">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1.5, delay: index * 0.1, ease: "circOut" }}
                                                        className="h-full bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;

