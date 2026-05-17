import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";
import Circles from "../../components/Circle";
import { HiBriefcase, HiAcademicCap, HiCommandLine, HiMiniRocketLaunch, HiMiniMagnifyingGlassCircle } from "react-icons/hi2";

const WorkPage = () => {
    const experiences = [
        {
            company: "Codxior",
            role: "Founder & CEO",
            duration: "2024 - Present",
            description: "Leading a high-performance software engineering agency focused on digital ecosystem architecture and scalable full-stack solutions.",
            skills: ["Architecture", "Leadership", "Next.js", "DevOps"],
            icon: HiMiniRocketLaunch,
        },
        {
            company: "Padel Nuestro",
            role: "IT Support",
            duration: "2022 - 2024",
            description: "Provided comprehensive IT support, managing hardware and software troubleshooting. Maintained system reliability and ensured smooth daily operations.",
            skills: ["IT Support", "Troubleshooting", "System Maintenance", "Networking"],
            icon: HiCommandLine,
        },
        {
            company: "Egypt Racket Sport",
            role: "Senior Full Stack Architect (Freelance)",
            duration: "2021 - 2022",
            description: "Developed advanced e-commerce solutions with custom themes. Optimized SEO and stock analysis performance for a high-traffic sports store.",
            skills: ["SEO", "Performance", "AMD Build", "E-commerce"],
            icon: HiMiniMagnifyingGlassCircle,
        },
        {
            company: "Alkayan Co",
            role: "Full Stack Developer",
            duration: "2020 - 2021",
            description: "Designed and developed the corporate digital presence for a leading construction company. Focused on modern UI and reliable hosting.",
            skills: ["React", "UI/UX", "Hosting", "Modernization"],
            icon: HiBriefcase,
        },
    ];

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
            {/* Background Circles */}
            <Circles />

            <div className="w-full max-w-5xl z-10 pt-20">
                <div className="text-center mb-16">
                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="text-4xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent"
                    >
                        Professional Journey
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto font-light"
                    >
                        A timeline of technical leadership and architectural innovation.
                    </motion.p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => {
                        const Icon = exp.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.3 + index * 0.1)}
                                initial="hidden"
                                animate="show"
                                className="group relative bg-white/5 backdrop-blur-3xl rounded-3xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-500"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-shrink-0 p-5 bg-gradient-to-br from-red-500/10 to-purple-600/10 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="w-12 h-12 text-red-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
                                            <div>
                                                <h3 className="text-3xl font-black text-white group-hover:text-red-500 transition-colors uppercase tracking-tight">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-gray-400 font-bold text-lg">{exp.company}</p>
                                            </div>
                                            <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-gray-500">
                                                {exp.duration}
                                            </div>
                                        </div>
                                        <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {exp.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-4 py-1.5 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 rounded-lg group-hover:border-red-500/20 transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Timeline connector decoration */}
                                {index !== experiences.length - 1 && (
                                    <div className="hidden md:block absolute -bottom-12 left-14 w-0.5 h-12 bg-gradient-to-b from-red-500/20 to-transparent"></div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WorkPage;
