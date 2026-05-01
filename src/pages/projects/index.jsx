import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";

const ProjectsPage = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A modern portfolio website built with Next.js and Tailwind CSS.",
            tech: ["Next.js", "React", "Tailwind CSS"],
        },
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment integration.",
            tech: ["Next.js", "Node.js", "MongoDB"],
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates.",
            tech: ["React", "Firebase", "TypeScript"],
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
                    My Projects
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.3 + index * 0.1)}
                            initial="hidden"
                            animate="show"
                            whileHover={{ y: -5 }}
                            className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-purple-600/20 border border-red-500/30 text-white rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;

