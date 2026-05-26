import { motion, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import Link from "next/link";
import {
    HiMiniCpuChip,
    HiMiniCube,
    HiMiniCloud,
    HiMiniCommandLine,
    HiMiniDevicePhoneMobile,
    HiMiniRocketLaunch,
    HiMiniArrowTopRightOnSquare,
} from "react-icons/hi2";


const services = [
    {
        Icon: HiMiniCpuChip,
        title: "ERP Systems",
        tagline: "Enterprise Resource Planning",
        description:
            "Architecting complex, high-stakes ERP platforms tailored to your business workflows. From inventory management and invoicing to live BI dashboards — built with Laravel, Next.js, and PostgreSQL.",
        stack: ["Laravel", "Next.js", "PostgreSQL", "BI"],
        gradient: "from-blue-500 to-cyan-400",
        glowColor: "group-hover:shadow-blue-500/20",
    },
    {
        Icon: HiMiniCloud,
        title: "Cloud Architecture",
        tagline: "Scalable Infrastructure",
        description:
            "Designing and deploying production-grade cloud infrastructure on AWS and Digital Ocean. Fully automated CI/CD pipelines, Docker containerization, NGINX reverse-proxy setups, and zero-downtime deployments.",
        stack: ["AWS EC2/S3", "Docker", "NGINX", "CI/CD"],
        gradient: "from-orange-500 to-red-500",
        glowColor: "group-hover:shadow-orange-500/20",
    },
    {
        Icon: HiMiniCube,
        title: "Full Stack Web Apps",
        tagline: "End-to-End Engineering",
        description:
            "Building pixel-perfect, high-performance web applications from frontend to backend. React & Next.js frontends paired with Bun/Fastify or Node.js/Express APIs, optimized for speed and scale.",
        stack: ["Next.js", "Bun", "Fastify", "Tailwind"],
        gradient: "from-purple-500 to-pink-500",
        glowColor: "group-hover:shadow-purple-500/20",
    },
    {
        Icon: HiMiniDevicePhoneMobile,
        title: "SaaS Platforms",
        tagline: "Software as a Service",
        description:
            "Turning ideas into revenue-generating SaaS products. Multi-tenant architecture, subscription billing integration, role-based access control, and scalable deployment strategies.",
        stack: ["Multi-tenant", "Auth", "Stripe", "Next.js"],
        gradient: "from-emerald-500 to-teal-400",
        glowColor: "group-hover:shadow-emerald-500/20",
    },
    {
        Icon: HiMiniCommandLine,
        title: "DevOps & Automation",
        tagline: "Infrastructure & Pipelines",
        description:
            "Automating your development lifecycle with robust CI/CD pipelines, infrastructure-as-code, server hardening, and monitoring. Less downtime, faster releases, more confidence.",
        stack: ["GitHub Actions", "Docker", "Linux", "SSH"],
        gradient: "from-red-500 to-orange-500",
        glowColor: "group-hover:shadow-red-500/20",
    },
    {
        Icon: HiMiniRocketLaunch,
        title: "Digital Transformation",
        tagline: "Legacy to Modern",
        description:
            "Migrating legacy systems and codebases to modern architectures. Performance audits, SEO optimization, UI/UX redesigns, and complete platform overhauls that future-proof your business.",
        stack: ["Migration", "Performance", "SEO", "UI/UX"],
        gradient: "from-indigo-500 to-purple-500",
        glowColor: "group-hover:shadow-indigo-500/20",
    },
];

const ServicesPage = () => {
    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-[#020204]">
            <Circles />

            <div className="fixed inset-0 grid-mesh opacity-30 z-0 pointer-events-none" aria-hidden="true" />

            <div className="w-full max-w-7xl z-10 pt-16">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">Codxior Studio</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("down", 0.2) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-5xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Services
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.3) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-xl lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        End-to-end software engineering — from architecture to deployment.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {services.map((service, index) => {
                        const Icon = service.Icon;
                        return (
                            <motion.div
                                key={service.title}
                                variants={fadeIn("up", 0.2 + (index % 3) * 0.1) as unknown as Variants}
                                initial="hidden"
                                animate="show"
                                whileHover={{ y: -10, scale: 1.01 }}
                                className={`group relative glass-panel glass-panel-hover rounded-[2rem] p-8 shadow-2xl overflow-hidden transition-all duration-700 ${service.glowColor} hover:shadow-xl`}
                            >
                                {/* Corner accent glow */}
                                <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.08] blur-[40px] transition-opacity duration-700`}></div>

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                    <Icon className="text-white text-2xl" />
                                </div>

                                {/* Content */}
                                <p className={`text-[9px] font-black uppercase tracking-[0.25em] bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
                                    {service.tagline}
                                </p>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-white/90 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2">
                                    {service.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white/[0.03] border border-white/10 text-[9px] font-black uppercase tracking-[0.15em] text-gray-500 rounded-lg group-hover:border-white/15 group-hover:text-gray-300 transition-all duration-500"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Process Section */}
                <motion.div
                    variants={fadeIn("up", 0.4) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="glass-panel rounded-[2rem] p-10 lg:p-16 mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-12 text-center">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Work</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Deep-dive into your goals, stack, and constraints." },
                            { step: "02", title: "Architecture", desc: "Design the system blueprint before writing a single line." },
                            { step: "03", title: "Build", desc: "Iterative development with regular reviews and demos." },
                            { step: "04", title: "Deploy", desc: "Production-grade launch with CI/CD and monitoring." },
                        ].map((phase, i) => (
                            <div key={phase.step} className="text-center group">
                                <div className="text-5xl font-black bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {phase.step}
                                </div>
                                <h4 className="text-white font-black uppercase tracking-wider text-sm mb-2">{phase.title}</h4>
                                <p className="text-gray-500 text-xs font-light leading-relaxed">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={fadeIn("up", 0.5) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="text-center"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-black mb-6">Ready to start your project?</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-red-500 to-purple-600 text-white font-black uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-red-500/25 transition-all duration-500 hover:scale-105"
                    >
                        <HiMiniArrowTopRightOnSquare className="text-lg" />
                        Start a Conversation →
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;
