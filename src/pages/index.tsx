import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Avatar from "../components/Avatar";
import { fadeIn } from "../lib/variants";
import { SiNextdotjs, SiAmazon, SiVercel, SiLaravel, SiBun, SiFastify, SiDigitalocean } from "react-icons/si";
import { HiMiniCommandLine } from "react-icons/hi2";

export default function HomePage() {
    const testimonials = [
        {
            name: "Marco Rossi",
            role: "CTO @ Padel Nuestro",
            content: "Ahmed's architectural vision for our ERP system was a game-changer. He engineered a scalable ecosystem that streamlined our entire operation.",
            avatar: "MR"
        },
        {
            name: "Sarah Jenkins",
            role: "Product Lead @ TechFlow",
            content: "The attention to detail in the Next.js modernization of our platform was incredible. Performance increased by 40%, and the UI is now industry-leading.",
            avatar: "SJ"
        },
        {
            name: "Omar Al-Sayed",
            role: "Founder @ Alkayan Nova",
            content: "Working with Codxior was the best decision for our digital transformation. Ahmed's ability to bridge complex business logic with stunning UI is unparalleled.",
            avatar: "OA"
        }
    ];

    const services = [
        {
            title: "ERP Ecosystems",
            description: "Architecting complex, high-stakes ERP systems with Laravel and Next.js for seamless business automation.",
            icon: SiNextdotjs,
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            title: "Cloud Architecture",
            description: "Scalable infrastructure with AWS and Digital Ocean, powered by automated CI/CD pipelines.",
            icon: SiAmazon,
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "Full Stack Mastery",
            description: "Engineering robust digital solutions from pixel-perfect frontends to high-performance backends like Bun & Fastify.",
            icon: SiBun,
            gradient: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#030303] selection:bg-red-500/30 overflow-hidden font-sans">

            {/* Highly Dynamic Backgrounds */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-red-600/10 via-purple-900/10 to-transparent blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-blue-600/10 via-emerald-900/10 to-transparent blur-[120px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
            </div>

            {/* Premium Grid Pattern overlay */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)] z-0 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-24 pt-20 pb-10 z-10">
                <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

                    {/* Left Column */}
                    <div className="flex flex-col text-center xl:text-left z-20">
                        {/* Glowing Status Badge */}
                        <motion.div
                            variants={fadeIn("down", 0.1)}
                            initial="hidden"
                            animate="show"
                            className="group inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 w-fit mx-auto xl:mx-0 mb-12 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 cursor-default"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,1)] group-hover:shadow-[0_0_30px_rgba(34,197,94,1)] transition-shadow"></span>
                            </span>
                            <span className="text-[11px] font-black text-gray-300 tracking-[0.3em] uppercase">Accepting New Ecosystems</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            animate="show"
                            className="text-6xl sm:text-7xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase"
                        >
                            Architecting <br />
                            <span className="relative inline-block mt-2">
                                <span className="absolute -inset-2 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 opacity-30 blur-2xl rounded-full"></span>
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 drop-shadow-2xl">Modernity</span>
                            </span>
                        </motion.h1>

                        {/* Bio */}
                        <motion.p
                            variants={fadeIn("down", 0.3)}
                            initial="hidden"
                            animate="show"
                            className="max-w-2xl mx-auto xl:mx-0 mb-14 text-xl lg:text-3xl text-gray-400 font-light leading-relaxed tracking-tight"
                        >
                            Founder of <span className="text-white font-black tracking-widest relative inline-block"><span className="relative z-10">CODXIOR</span><span className="absolute bottom-1 left-0 w-full h-2 bg-red-500/50 -z-10"></span></span>. I bridge the gap between complex software architecture and stunning user experiences.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-6"
                        >
                            <Link href="/projects" className="group relative px-10 py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs transition-all duration-500 hover:scale-105 flex items-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                                <span className="relative z-10 flex items-center gap-2">
                                    View Masterpieces
                                    <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"></div>
                            </Link>
                            <Link href="/about" className="px-10 py-5 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl">
                                Discover More
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Avatar Display */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        animate="show"
                        className="hidden xl:flex justify-center items-center relative"
                    >
                        {/* Decorative Rings */}
                        <div className="absolute inset-0 border border-white/5 rounded-full scale-[1.2] animate-[spin_60s_linear_infinite]"></div>
                        <div className="absolute inset-0 border border-white/5 rounded-full scale-[1.5] animate-[spin_40s_linear_infinite_reverse] border-dashed"></div>

                        <div className="relative w-full max-w-[550px] aspect-square group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-purple-600/30 to-blue-500/30 rounded-[3rem] blur-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000 ease-out"></div>
                            <div className="relative w-full h-full scale-95 group-hover:scale-100 transition-transform duration-1000 ease-out rounded-[3rem] overflow-hidden border border-white/10 bg-black/50 backdrop-blur-2xl">
                                <Avatar />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Glowing Tech Stack Strip */}
            <section className="relative py-16 px-6 border-y border-white/5 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent z-10 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
                        {[
                            { Icon: SiNextdotjs, color: "text-white", glow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]", name: "Next.js" },
                            { Icon: SiLaravel, color: "text-[#FF2D20]", glow: "group-hover:shadow-[0_0_30px_rgba(255,45,32,0.4)]", name: "Laravel" },
                            { Icon: SiBun, color: "text-[#FBF0DF]", glow: "group-hover:shadow-[0_0_30px_rgba(251,240,223,0.4)]", name: "Bun" },
                            { Icon: SiFastify, color: "text-white", glow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]", name: "Fastify" },
                            { Icon: SiAmazon, color: "text-[#FF9900]", glow: "group-hover:shadow-[0_0_30px_rgba(255,153,0,0.4)]", name: "AWS" },
                            { Icon: SiDigitalocean, color: "text-[#0080FF]", glow: "group-hover:shadow-[0_0_30px_rgba(0,128,255,0.4)]", name: "Digital Ocean" },
                            { Icon: SiVercel, color: "text-white", glow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]", name: "Vercel" },
                            { Icon: HiMiniCommandLine, color: "text-gray-400", glow: "group-hover:shadow-[0_0_30px_rgba(156,163,175,0.4)]", name: "SSH / Linux" },
                        ].map(({ Icon, color, glow, name }, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col items-center gap-4 relative"
                            >
                                <div className={`relative p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-3 group-hover:border-white/20 group-hover:bg-white/10 ${glow}`}>
                                    <Icon className={`text-4xl lg:text-5xl transition-colors duration-500 ${color}`} />
                                </div>
                                <span className="absolute -bottom-8 text-[10px] font-black uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 whitespace-nowrap">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="relative py-40 px-6 lg:px-24 z-10">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
                        >
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Services</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter"
                        >
                            Codxior <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Expertise</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                            >
                                {/* Glowing orb background */}
                                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 blur-[50px] group-hover:opacity-40 group-hover:scale-150 transition-all duration-700`}></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                                        <service.icon className="text-5xl text-white opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed text-lg">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-40 px-6 lg:px-24 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent z-10">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4"
                        >
                            Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Voice</span>
                        </motion.h2>
                        <p className="text-gray-500 text-lg uppercase tracking-[0.2em] font-bold">Feedback from industry leaders</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="relative p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
                            >
                                <div className="absolute -top-5 right-10 text-6xl text-white/5 font-serif font-black">&quot;</div>
                                <div className="flex items-center gap-6 mb-8 relative z-10">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 flex items-center justify-center font-black text-white text-xl shadow-lg border border-white/20">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl">{testimonial.name}</h4>
                                        <p className="text-purple-400 text-[10px] font-black uppercase tracking-widest mt-1">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 font-light leading-relaxed text-lg relative z-10">
                                    &quot;{testimonial.content}&quot;
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final Section */}
            <section className="relative py-48 px-6 lg:px-24 overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none"></div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container mx-auto text-center relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw] bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                    <h2 className="relative text-6xl sm:text-7xl lg:text-[8rem] font-black text-white uppercase tracking-tighter mb-16 leading-[0.9]">
                        Ready to Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 drop-shadow-2xl">Impact?</span>
                    </h2>

                    <Link href="/contact" className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative px-14 py-6 bg-[#050505] rounded-full border border-white/10 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                            <span className="relative z-10 text-white font-black uppercase tracking-[0.3em] text-sm">
                                Start Your Project
                            </span>
                            <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-transparent transition-colors z-0"></div>
                        </div>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
