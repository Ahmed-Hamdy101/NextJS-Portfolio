import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";
import Circles from "../../components/Circle";

const ProjectsPage = () => {
    const projects = [
        {
            title: "ET GCO TORUS",
            description: "A premium travel and tourism platform for Egypt, featuring tour booking and management.",
            tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
            link: "https://egypt-tour-guide.com",
            image: "🇪🇬"
        },
        {
            title: "Alkayan Co",
            description: "A professional corporate website created and hosted for Alkayan Company.",
            tech: ["React", "CSS3", "JavaScript"],
            link: "https://www.alkayan-co.com",
            image: "🏗️"
        },
        {
            title: "Egypt Racket Sport",
            description: "Advanced e-commerce for sports gear with improved SEO, AMD build customized theme, and optimized stock analysis performance.",
            tech: ["Next.js", "AMD Build", "SEO Optimization", "Performance Analytics"],
            link: "#",
            image: "🎾"
        },
        {
            title: "Enterprise ERP System",
            description: "Full-stack Laravel application with real-time analytics and scalable architecture.",
            tech: ["Laravel", "PHP", "PostgreSQL", "AWS"],
            link: "#",
            image: "📊"
        },
        {
            title: "DevOps Automation Suite",
            description: "CI/CD pipeline optimization and cloud management infrastructure.",
            tech: ["AWS", "Docker", "GitHub Actions", "Terraform"],
            link: "#",
            image: "🛡️"
        },
    ];

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
            {/* Background Circles */}
            <Circles />

            <div className="w-full max-w-6xl z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent"
                    >
                        Masterpieces
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        A collection of high-performance web applications and digital solutions I've built.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.3 + index * 0.1)}
                            initial="hidden"
                            animate="show"
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:border-red-500/50 shadow-2xl transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Decorative background element */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-purple-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                            
                            <div className="text-4xl mb-6">{project.image}</div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">{project.title}</h3>
                            <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full text-[10px] uppercase tracking-wider font-semibold"
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
                                    className="inline-flex items-center text-sm font-bold text-red-500 hover:text-white transition-colors duration-300"
                                >
                                    Visit Project <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;

