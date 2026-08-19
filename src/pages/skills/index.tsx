import { motion, Variants } from "framer-motion";
import { FaCode, FaHtml5 } from 'react-icons/fa';
import { HiMiniCommandLine } from "react-icons/hi2";
import { 
  DiPhotoshop,   
  DiIllustrator ,
}   from "react-icons/di";
import { TbBrandAdobePremier, TbBrandAdobeXd } from "react-icons/tb";

import { GrOracle } from "react-icons/gr";
import { AiFillAmazonCircle } from "react-icons/ai";
import Head from "next/head";
import {

    SiAnycubic,
    SiBun,
    SiDigitalocean,
    SiDocker,
    SiDrizzle,
    SiElectron,
    SiExpress,
    SiFastify,
    SiFigma,
    SiGit,
    SiGithub,
    SiGodaddy,
    SiJasmine,
    SiJavascript,
    SiLaravel,
    SiMagic,
    SiMongodb,
    SiMysql,
    SiNamecheap,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiQgis,
    SiQt,
    SiReact,
    SiRedis,
    SiShadcnui,
    SiTailwindcss,
    SiTypescript,
    SiUikit,
    SiVercel,
    SiVsco
} from 'react-icons/si';
import Circles from "../../components/Circle";
import { fadeIn } from "../../lib/variants";

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
                { name: "Tailwind CSS+", level: 92, icon: SiTailwindcss, color: "#06B6D4" },
                { name: "Shadcn UI", level: 92, icon: SiShadcnui, color: "#0e1111" },
                { name: "Magic UI", level: 92, icon: SiMagic, color: "#33c27f" },
                { name: "UX/UI", level: 92, icon: SiUikit, color: "#bd33c2" },
                { name: "GASPJS", level: 92, icon: FaCode, color: "#5e33c2" },
                { name: "CSS3 + HTML", level: 92, icon: FaHtml5, color: "#b87231" },
                { name: "GIS MAPS", level: 92, icon: SiQgis, color: "#b87231" },
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
                { name: "Mysql", level: 85, icon: SiMysql, color: "#c45445" },
                { name: "RDS AWS", level: 85, icon: AiFillAmazonCircle, color: "#FF9900" },
                { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47A248" },
                { name: "Redis", level: 82, icon: SiRedis, color: "#DC382D" },
                { name: "Drizzle", level: 82, icon: SiDrizzle, color: "#DC382D" },
                { name: "Prisma", level: 82, icon: SiPrisma, color: "#DC382D" },
                { name: "Jasmine", level: 82, icon: SiJasmine, color: "#DC382D" },
            ],
        },
        {
            title: "DevOps & Cloud & Architecture",
            accentColor: "text-red-400",
            gradient: "from-red-500/10 via-orange-500/5 to-transparent",
            skills: [
                { name: "AWS (EC2/S3/RDS)", level: 85, icon: AiFillAmazonCircle, color: "#FF9900" },
                { name: "DigitalOcean", level: 82, icon: SiDigitalocean, color: "#0080FF" },
                { name: "Docker", level: 82, icon: SiDocker, color: "#2496ED" },
                { name: "SSH / Linux", level: 88, icon: HiMiniCommandLine, color: "#FFFFFF" },
                { name: "Git / CI-CD", level: 95, icon: SiGit, color: "#F05032" },
                { name: "Vercel", level: 90, icon: SiVercel, color: "#FFFFFF" },
                { name: "Decouple", level: 90, icon: SiAnycubic, color: "#7a2a6d" },
                { name: "NameCheap", level: 90, icon: SiNamecheap, color: "#7a2a6d" },
                { name: "Oracle Cloud", level: 90, icon: GrOracle, color: "#7a2a6d" },
                { name: "Godaddy", level: 90, icon: SiGodaddy, color: "#7a2a6d" },
                { name: "Github", level: 90, icon: SiGithub, color: "#7a2a6d" },
            ],
        }       
         ,{
            title: "Tools & AI & Platforms",
            accentColor: "text-red-400",
            gradient: "from-red-500/10 via-orange-500/5 to-transparent",
            skills: [
                { name: "Figma ", level: 90, icon: SiFigma, color: "#00ffbf" },
                { name: "Adobe Xd", level: 90, icon: TbBrandAdobeXd, color: "#d20be4" }, 
                { name: "Adobe Illustrator", level: 90, icon: DiIllustrator, color: "#e9d62a" },
                { name: "Adobe Photoshop", level: 90, icon: DiPhotoshop, color: "#0080FF" },
                { name: "Adobe Premiere", level: 90, icon: TbBrandAdobePremier, color: "#c72eb3" },
                { name: "QT / C++", level: 82, icon: SiQt, color: "#2496ED" },
                { name: "Visual Studio Community / C# ", level: 90, icon: SiVsco, color: "#2496ED" },
                { name: "Electrons", level: 20, icon: SiElectron, color: "#2496ED" },
                { name: "VS Code", level: 88, icon: HiMiniCommandLine, color: "#FFFFFF" },

            ],
        },

    ];

    return (
         <>
            <Head>
            <title> Skills Page|  Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert</title>
            <meta name="description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 4+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <link rel="canonical" href="https://ahmedhamdy101.is-a.dev//" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ahmedhamdy101.is-a.dev/" />
            <meta property="og:title" content="Ahmed Hamdy | Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert" />
            <meta property="og:description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 4+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <meta property="og:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="favicons.svg" />     
            <meta name="twitter:url" content="https://ahmedhamdy101.is-a.dev/" />
            <meta name="twitter:title" content="Ahmed Hamdy | Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert" />
            <meta name="twitter:description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 4+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <meta name="twitter:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />

        </Head>

        
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
                        variants={fadeIn("down", 0.1) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Arsenal
                    </motion.h1>

                    <motion.p
                        variants={fadeIn("down", 0.15) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-lg lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        4+ years shipping production systems across the full stack.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            variants={fadeIn("up", 0.1 + categoryIndex * 0.05) as unknown as Variants}
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

                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                {category.skills.map((skill, index) => {
                                    const SkillIcon = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="group/item relative flex flex-col items-center justify-center p-5 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 overflow-hidden"
                                        >
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                                            
                                            <div className="w-12 h-12 mb-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center shadow-xl group-hover/item:scale-110 group-hover/item:-translate-y-1 transition-all duration-500 relative z-10">
                                                <SkillIcon className="w-6 h-6 drop-shadow-md" style={{ color: skill.color }} />
                                            </div>
                                            <span className="font-bold text-gray-400 group-hover/item:text-white transition-colors uppercase text-[10px] tracking-widest text-center relative z-10">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default SkillsPage;
