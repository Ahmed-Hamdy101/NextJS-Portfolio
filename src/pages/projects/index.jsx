import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import { 
    HiMiniRocketLaunch, 
    HiMiniCpuChip, 
    HiMiniCube, 
    HiMiniChartBar, 
    HiMiniDevicePhoneMobile,
    HiMiniMap,
    HiMiniUsers,
    HiMiniWrenchScrewdriver,
    HiMiniPaperAirplane
} from "react-icons/hi2";

const ProjectsPage = () => {
    const projects = [
        {
            title: "Alkayan Nova",
            description: "Modernizing UI & Architecture for a comprehensive construction ecosystem. Focused on scalability and performance.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Architecture"],
            link: "https://www.alkayan-co.com",
            Icon: HiMiniCpuChip,
            color: "text-blue-500",
            gradient: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: "Loger Suit ERPS",
            description: "Advanced ERP system built with Laravel and Next.js, featuring inventory management and business intelligence analytics.",
            tech: ["Laravel", "Next.js", "PostgreSQL", "BI"],
            link: "#",
            Icon: HiMiniChartBar,
            color: "text-red-500",
            gradient: "from-red-500/20 to-orange-500/20"
        },
        {
            title: "Cartol v2",
            description: "Zed-Store integration and e-commerce enhancements. Version 2 focuses on checkout optimization and API speed.",
            tech: ["React", "Zed-Store API", "Node.js"],
            link: "#",
            Icon: HiMiniRocketLaunch,
            color: "text-purple-500",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "CS Path Learning",
            description: "CEO & Founder of an educational platform designed to guide students through computer science career paths.",
            tech: ["Education", "Next.js", "Community"],
            link: "#",
            Icon: HiMiniCube,
            color: "text-green-500",
            gradient: "from-green-500/20 to-emerald-500/20"
        },
        {
            title: "Skillfrog",
            description: "Advanced platform for skill assessment and career development, featuring real-time evaluation tools.",
            tech: ["SaaS", "Next.js", "AI Integration"],
            link: "#",
            Icon: HiMiniDevicePhoneMobile,
            color: "text-cyan-500",
            gradient: "from-cyan-500/20 to-blue-500/20"
        },
        {
            title: "GIS WEB MAP SINIA",
            description: "Graduation Project: Advanced Geographic Information System for the Sinai region using modern mapping technologies.",
            tech: ["GIS", "Leaflet", "PostGIS", "GeoJSON"],
            link: "#",
            Icon: HiMiniMap,
            color: "text-orange-500",
            gradient: "from-orange-500/20 to-yellow-500/20"
        },
        {
            title: "Alumni School App",
            description: "Graduation Project: Comprehensive alumni networking and school management platform for better community engagement.",
            tech: ["React Native", "Firebase", "Node.js"],
            link: "#",
            Icon: HiMiniUsers,
            color: "text-indigo-500",
            gradient: "from-indigo-500/20 to-purple-500/20"
        },
        {
            title: "Auto Fix Car",
            description: "Graduation Project: 3 integrated dashboards (Tech, Customer, Admin) for automotive services, powered by Strapi CMS.",
            tech: ["Strapi", "Next.js", "Dashboard UI"],
            link: "#",
            Icon: HiMiniWrenchScrewdriver,
            color: "text-emerald-500",
            gradient: "from-emerald-500/20 to-green-500/20"
        },
        {
            title: "ETGCO TOURS",
            description: "Created their brand identity and integrated Telegram API for real-time service notifications and booking alerts.",
            tech: ["Branding", "Telegram API", "Integration"],
            link: "https://egypt-tour-guide.com",
            Icon: HiMiniPaperAirplane,
            color: "text-sky-500",
            gradient: "from-sky-500/20 to-blue-500/20"
        },
    ];

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
            <Circles />

            <div className="w-full max-w-7xl z-10 pt-16">
                <div className="text-center mb-20">
                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="text-5xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Portfolio
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-xl lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        A curated collection of digital architecture and engineering excellence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => {
                        const Icon = project.Icon;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.3 + (index % 3) * 0.1)}
                                initial="hidden"
                                animate="show"
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="group relative bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-10 border border-white/10 hover:border-red-500/40 transition-all duration-700 overflow-hidden shadow-2xl"
                            >
                                {/* Decorative background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                
                                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 border border-white/10 shadow-xl relative z-10`}>
                                    <Icon className={`text-4xl ${project.color}`} />
                                </div>
                                
                                <h3 className="text-3xl font-black mb-4 group-hover:text-red-500 transition-colors duration-500 uppercase tracking-tight relative z-10">{project.title}</h3>
                                <p className="text-gray-400 mb-8 line-clamp-3 text-base leading-relaxed font-light relative z-10">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2.5 mb-10 relative z-10">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-4 py-1.5 bg-white/5 border border-white/10 text-gray-500 rounded-xl text-[10px] uppercase tracking-[0.2em] font-black group-hover:border-red-500/30 group-hover:text-gray-300 transition-all duration-500"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                {project.link !== "#" && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-black text-red-500 hover:text-white transition-all duration-500 group-hover:gap-4 relative z-10 uppercase tracking-widest"
                                    >
                                        Live Preview <span className="transition-transform group-hover:translate-x-2">→</span>
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;

