import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "../components/Avatar";
import { fadeIn } from "../lib/variants";
import { SiNextdotjs, SiAmazon, SiLaravel, SiBun, SiFastify, SiDigitalocean, SiVercel } from "react-icons/si";
import { HiMiniCommandLine, HiMiniEye } from "react-icons/hi2";
import ResumeModal from "../components/ResumeModal";

export default function HomePage() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const testimonials = [
        {
            name: "Al Kayan Team",
            role: "Construction & Engineering Co.",
            content: "Ahmed engineered our Real Estate CMS with RBAC authentication. Security vulnerabilities dropped by 75% and the system handles our entire property listing operation.",
            avatar: "AK"
        },
        {
            name: "ET GCO Tours",
            role: "Tourism Platform",
            content: "Achieved Google Lighthouse scores of 100% SEO and 98% Accessibility on our bilingual PWA. Booking workflow is seamless and the site loads in under 2 seconds.",
            avatar: "ET"
        },
        {
            name: "Padel Nuestro",
            role: "IT Infrastructure Client",
            content: "Ahmed took our network uptime from 95% to 99.5% and designed an AI coaching assistant prototype that cut our estimated implementation time by 30%.",
            avatar: "PN"
        }
    ];

    const services = [
        {
            title: "Full Stack Systems",
            description: "End-to-end web applications with Next.js, Laravel, Bun and Fastify — from pixel-perfect UI to high-performance APIs and database design.",
            icon: SiNextdotjs,
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            title: "Cloud & DevOps",
            description: "Scalable infrastructure on AWS and DigitalOcean with Docker, CI/CD pipelines, NGINX/Caddy, and SSL-secured production deployments.",
            icon: SiAmazon,
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "AI Integration",
            description: "LLM-powered products using OpenAI and Claude APIs, RAG pipelines, LangChain, and vector databases for intelligent application features.",
            icon: SiBun,
            gradient: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#020204] selection:bg-red-500/20 overflow-hidden font-sans">

            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-24 pt-28 pb-16 z-10">
                <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

                    {/* Left Column */}
                    <div className="flex flex-col text-center xl:text-left z-20">
                        {/* Status Badge */}
                        <motion.div
                            variants={fadeIn("down", 0.1)}
                            initial="hidden"
                            animate="show"
                            className="group inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/5 w-fit mx-auto xl:mx-0 mb-8 backdrop-blur-xl shadow-lg transition-all duration-500 cursor-default"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]" />
                            </span>
                            <span className="text-[10px] font-black text-gray-400 tracking-[0.25em] uppercase">Accepting New Projects</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            animate="show"
                            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tighter uppercase"
                        >
                            Senior Full<br />
                            <span className="relative inline-block mt-1.5">
                                <span className="absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-600 to-indigo-500 opacity-25 blur-xl rounded-full" />
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 drop-shadow-2xl">
                                    Stack  Eng.
                                </span>
                            </span>
                        </motion.h1>

                        {/* Bio */}
                        <motion.p
                            variants={fadeIn("down", 0.3)}
                            initial="hidden"
                            animate="show"
                            className="max-w-xl mx-auto xl:mx-0 mb-10 text-lg lg:text-xl text-slate-400 font-light leading-relaxed tracking-tight"
                        >
                            <span className="text-white font-black">Ahmed Hamdy</span> — 3+ years building scalable web systems, RESTful APIs, and cloud-hosted platforms with Node.js, Bun, Laravel, Next.js, and AWS.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4"
                        >
                            <Link href="/projects" className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-white/5 hover:shadow-white/10">
                                View Projects →
                            </Link>

                            <button
                                onClick={() => setIsResumeOpen(true)}
                                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-red-500/20 hover:bg-white/[0.08] text-white font-black uppercase tracking-widest text-xs transition-all duration-500 backdrop-blur-xl flex items-center justify-center gap-2 group"
                            >
                                <HiMiniEye className="text-sm group-hover:scale-110 transition-transform" />
                                Interactive CV
                            </button>

                            <Link href="/about" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-slate-200 transition-colors py-3 px-4">
                                About Me
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Avatar */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        animate="show"
                        className="hidden xl:flex justify-center items-center relative"
                    >
                        <div className="absolute inset-0 border border-white/[0.03] rounded-[3.5rem] scale-[1.15] animate-[spin_80s_linear_infinite]" />
                        <div className="absolute inset-0 border border-white/[0.03] rounded-[3.5rem] scale-[1.3] animate-[spin_60s_linear_infinite_reverse] border-dashed" />
                        <div className="relative w-full max-w-[480px] aspect-square group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-600/10 to-indigo-500/10 rounded-[2.5rem] blur-2xl group-hover:scale-105 transition-all duration-1000" />
                            <div className="relative w-full h-full scale-95 group-hover:scale-100 transition-transform duration-1000 ease-out rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-2xl">
                                <Avatar />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Strip */}
            <section className="relative py-12 px-6 border-y border-white/[0.05] bg-gradient-to-r from-transparent via-white/[0.01] to-transparent z-10 backdrop-blur-sm overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
                        {[
                            { Icon: SiNextdotjs, color: "text-white", name: "Next.js" },
                            { Icon: SiLaravel, color: "text-[#FF2D20]", name: "Laravel" },
                            { Icon: SiBun, color: "text-[#FBF0DF]", name: "Bun" },
                            { Icon: SiFastify, color: "text-white", name: "Fastify" },
                            { Icon: SiAmazon, color: "text-[#FF9900]", name: "AWS" },
                            { Icon: SiDigitalocean, color: "text-[#0080FF]", name: "Digital Ocean" },
                            { Icon: SiVercel, color: "text-white", name: "Vercel" },
                            { Icon: HiMiniCommandLine, color: "text-slate-400", name: "SSH / Linux" },
                        ].map(({ Icon, color, name }, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="group flex flex-col items-center gap-3 relative"
                            >
                                <div className="relative p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/10 group-hover:bg-white/[0.06]">
                                    <Icon className={`text-3xl lg:text-4xl transition-colors duration-500 ${color}`} />
                                </div>
                                <span className="absolute -bottom-6 text-[9px] font-black uppercase tracking-widest text-slate-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative py-32 px-6 lg:px-24 z-10">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="px-5 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl mb-4"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Services</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter"
                        >
                            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Build</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.01 }}
                                className="group relative p-8 md:p-10 rounded-[2.5rem] bg-[#0c0c10]/40 border border-white/[0.05] backdrop-blur-2xl hover:bg-[#101016]/50 transition-all duration-500 overflow-hidden shadow-2xl"
                            >
                                <div className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${service.gradient} opacity-10 blur-[40px] group-hover:opacity-20 group-hover:scale-125 transition-all duration-700`} />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500 shadow-xl">
                                        <service.icon className="text-3xl text-white opacity-80" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-slate-400 font-light leading-relaxed text-sm">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-32 px-6 lg:px-24 z-10">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-3"
                        >
                            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Feedback</span>
                        </motion.h2>
                        <p className="text-slate-500 text-xs uppercase tracking-[0.25em] font-black">From real production engagements</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ scale: 1.01 }}
                                className="relative p-8 md:p-10 rounded-[2.5rem] bg-[#0c0c10]/40 border border-white/[0.06] backdrop-blur-2xl shadow-xl"
                            >
                                <div className="absolute -top-3 right-8 text-5xl text-white/5 font-serif font-black">&quot;</div>
                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-indigo-500 flex items-center justify-center font-black text-white text-sm shadow-lg border border-white/10">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm leading-tight">{testimonial.name}</h4>
                                        <p className="text-red-400 text-[8px] font-black uppercase tracking-widest mt-1">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-slate-400 font-light leading-relaxed text-sm italic relative z-10">
                                    &quot;{testimonial.content}&quot;
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-40 px-6 lg:px-24 overflow-hidden z-10">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container mx-auto text-center relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] sm:w-[35vw] sm:h-[35vw] bg-gradient-to-r from-red-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />
                    <h2 className="relative text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-12 leading-[0.95]">
                        Ready to Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 drop-shadow-2xl">Something?</span>
                    </h2>
                    <Link href="/contact" className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-85 transition duration-500" />
                        <div className="relative px-12 py-5 bg-[#030305] rounded-full border border-white/10 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                            <span className="relative z-10 text-white font-black uppercase tracking-[0.25em] text-xs">
                                Start Your Project
                            </span>
                        </div>
                    </Link>
                </motion.div>
            </section>

            <AnimatePresence>
                {isResumeOpen && (
                    <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
                )}
            </AnimatePresence>
        </div>
    );
}
