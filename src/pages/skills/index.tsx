import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
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
    SiAmazonaws,
    SiDocker,
    SiGit,
    SiLinux,
    SiNginx,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const SkillsPage = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: FaCode,
            skills: [
                { name: "React", level: 95, icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", level: 90, icon: SiNextdotjs, color: "#000000" },
                { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
                { name: "JavaScript", level: 95, icon: SiJavascript, color: "#F7DF1E" },
                { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
                { name: "Three.js", level: 75, icon: SiThreedotjs, color: "#000000" },
            ],
        },
        {
            title: "Backend Development",
            icon: FaCode,
            skills: [
                { name: "Node.js", level: 90, icon: SiNodedotjs, color: "#339933" },
                { name: "Express", level: 85, icon: SiExpress, color: "#000000" },
                { name: "PHP", level: 80, icon: SiPhp, color: "#777BB4" },
                { name: "Laravel", level: 85, icon: SiLaravel, color: "#FF2D20" },
                { name: "PostgreSQL", level: 80, icon: SiPostgresql, color: "#4169E1" },
                { name: "MongoDB", level: 75, icon: SiMongodb, color: "#47A248" },
            ],
        },
        {
            title: "DevOps & Tools",
            icon: FaCode,
            skills: [
                { name: "AWS", level: 85, icon: SiAmazonaws, color: "#FF9900" },
                { name: "Docker", level: 80, icon: SiDocker, color: "#2496ED" },
                { name: "Git", level: 95, icon: SiGit, color: "#F05032" },
                { name: "CI/CD", level: 85, icon: FaCode, color: "#9333ea" },
                { name: "Linux", level: 80, icon: SiLinux, color: "#FCC624" },
                { name: "NGINX", level: 75, icon: SiNginx, color: "#009639" },
            ],
        },
    ];

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-10 overflow-hidden">
            {/* Background Circles */}
            <Circles />

            <div className="w-full max-w-6xl z-10">
                <motion.h1
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    animate="show"
                    className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent"
                >
                    My Skills
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, categoryIndex) => {
                        const CategoryIcon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                variants={fadeIn("up", 0.3 + categoryIndex * 0.1)}
                                initial="hidden"
                                animate="show"
                                className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-xl"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <CategoryIcon className="w-6 h-6 text-red-500" />
                                    <h2 className="text-2xl font-semibold text-red-500">
                                        {category.title}
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {category.skills.map((skill, index) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <div key={skill.name}>
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <SkillIcon 
                                                            className="w-5 h-5" 
                                                            style={{ color: skill.color }}
                                                        />
                                                        <span className="font-medium">{skill.name}</span>
                                                    </div>
                                                    <span className="text-sm text-gray-400">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1, delay: index * 0.1 }}
                                                        className="h-full bg-gradient-to-r from-red-500 to-purple-600 rounded-full"
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

