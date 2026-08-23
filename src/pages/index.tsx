import { AnimatePresence, motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { BiLogoAmazon } from "react-icons/bi";
import { FaGithub, FaLinkedinIn, FaStackOverflow, FaWhatsapp } from "react-icons/fa";
import { HiMiniCommandLine, HiMiniEye, HiMiniCalendarDays } from "react-icons/hi2";
import {
    SiBun,
    SiDigitalocean,
    SiFastify,
    SiLaravel,
    SiNextdotjs,
    SiVercel,
} from "react-icons/si";
import Avatar from "../components/Avatar";
import { fadeIn } from "../lib/variants";
import Head from "next/head"; 
import ScheduleForm from "../components/ScheduleForm";

const ResumeModal = dynamic(() => import("../components/ResumeModal"), {
    ssr: false,
    loading: () => null,
});

const SOCIALS = [
    {
        label: "GitHub",
        href: "https://github.com/Ahmed-Hamdy101",
        Icon: FaGithub,
        color: "hover:text-white hover:border-white/30 hover:bg-white/5",
        glow: "hover:shadow-white/10",
        tooltip: "Ahmed-Hamdy101",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ahmed-hamdy-ah/",
        Icon: FaLinkedinIn,
        color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5",
        glow: "hover:shadow-[#0A66C2]/20",
        tooltip: "ahmed-hamdy-ah",
    },
    {
        label: "Stack Overflow",
        href: "https://stackoverflow.com/users/19638490/ahmed-hamdy",
        Icon: FaStackOverflow,
        color: "hover:text-[#F58025] hover:border-[#F58025]/40 hover:bg-[#F58025]/5",
        glow: "hover:shadow-[#F58025]/20",
        tooltip: "ahmed-hamdy",
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/201141640812",
        Icon: FaWhatsapp,
        color: "hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/5",
        glow: "hover:shadow-[#25D366]/20",
        tooltip: "+20 114 164 0812",
    },
];

export default function HomePage() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const testimonials = [
        {
            name: "Al Kayan Team",
            role: "Construction & Engineering Co.",
            content: "Ahmed engineered our Real Estate CMS with RBAC authentication. Security vulnerabilities dropped by 75% and the system handles our entire property listing operation.",
            avatar: "AK",
        },
        {
            name: "ET GCO Tours",
            role: "Tourism Platform",
            content: "Achieved Google Lighthouse scores of 100% SEO, 81% Performance, and 98% Accessibility on our bilingual PWA. Booking workflow is seamless and the site loads in under 2 seconds.",
            avatar: "ET",
        },
        {
            name: "Padel Nuestro",
            role: "IT Infrastructure Client",
            content: "Ahmed kept our 100-person office running — network, ERP, VPN, licensing, and hardware support — and deployed our CCTV/DVR/NVR security systems end to end.",
            avatar: "PN",
        },
    ];

    const services = [
        {
            title: "Full Stack Systems",
            description: "End-to-end web applications with Next.js, Laravel, Bun and Fastify — from pixel-perfect UI to high-performance APIs and database design.",
            icon: SiNextdotjs,
            gradient: "from-blue-500 to-cyan-400",
        },
        {
            title: "Cloud & DevOps",
            description: "Scalable infrastructure on AWS and DigitalOcean with Docker, CI/CD pipelines, NGINX/Caddy, and SSL-secured production deployments.",
            icon: BiLogoAmazon,
            gradient: "from-orange-500 to-red-500",
        },
        {
            title: "AI Integration",
            description: "LLM-powered products using OpenAI and Claude APIs, RAG pipelines, LangChain, and vector databases for intelligent application features.",
            icon: SiBun,
            gradient: "from-purple-500 to-pink-500",
        },
    ];

    const trustedCompanies = [
        "Al Kayan Engineering", "ET GCO Tours", "Padel Nuestro",
        "Egypt Racket Sport", "Logger Suite", "AutoFix", "Evento", "GIS Sinai",
    ];

    return (
        <> {/*  This fragment now correctly wraps all top-level elements */}
        <Head>
            <title> Home Page Ahmed Hamdy Portfolio |  Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert</title>
            <meta name="description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 5+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <link rel="canonical" href="https://ahmedhamdy101.is-a.dev//" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ahmedhamdy101.is-a.dev/" />
            <meta property="og:title" content="Ahmed Hamdy | Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert" />
            <meta property="og:description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 5+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <meta property="og:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="favicons.svg" />     
            <meta name="twitter:url" content="https://ahmedhamdy101.is-a.dev/" />
            <meta name="twitter:title" content="Ahmed Hamdy | Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert" />
            <meta name="twitter:description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 5+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <meta name="twitter:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />

        </Head>

        <div className="relative min-h-screen bg-[#020204] selection:bg-red-500/20 overflow-hidden font-sans">

            {/* ── Vertical Social Sidebar — desktop only ── */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="fixed left-6 bottom-1/2 translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1"
            >
                {/* Top line */}
                <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/10 mb-2" />

                {SOCIALS.map(({ label, href, Icon, color, glow, tooltip }) => (
                    <div key={label} className="group relative flex items-center">
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={`
                                relative w-10 h-10 rounded-xl
                                border border-white/[0.07]
                                bg-white/[0.02]
                                flex items-center justify-center
                                text-gray-500 text-base
                                transition-all duration-300
                                shadow-lg ${glow}
                                ${color}
                            `}
                        >
                            <Icon />

                            {/* Active dot pulse */}
                            {label === "WhatsApp" && (
                                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#25D366]">
                                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
                                </span>
                            )}
                        </a>

                        {/* Tooltip — slides in from left */}
                        <div className="
                            absolute left-14 pointer-events-none
                            flex items-center gap-2
                            opacity-0 -translate-x-2
                            group-hover:opacity-100 group-hover:translate-x-0
                            transition-all duration-200
                            whitespace-nowrap
                        ">
                            <div className="px-3 py-1.5 rounded-lg bg-[#0d0d12] border border-white/10 shadow-xl">
                                <p className="text-[10px] font-black uppercase tracking-widest text-white">{label}</p>
                                <p className="text-[9px] text-gray-500 font-mono mt-0.5">{tooltip}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Bottom line */}
                <div className="w-px h-16 bg-gradient-to-b from-white/10 to-transparent mt-2" />
            </motion.div>

            {/* ── Hero ── */}
            <section className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-24 pt-28 pb-16 z-10">
                <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

                    <div className="flex flex-col text-center xl:text-left z-20">
                        {/* Status badge */}
                        <motion.div
                            variants={fadeIn("down", 0.1) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/5 w-fit mx-auto xl:mx-0 mb-8 backdrop-blur-xl"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="text-[10px] font-black text-gray-400 tracking-[0.25em] uppercase">Accepting New Projects</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeIn("down", 0.15) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tighter uppercase"
                        >
                           Full<br />
                            <span className="relative inline-block mt-1.5">
                                <span className="absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-600 to-indigo-500 opacity-25 blur-xl rounded-full" />
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500">
                                    Stack Eng.
                                </span>
                            </span>
                        </motion.h1>

                        {/* Bio */}
                        <motion.p
                            variants={fadeIn("down", 0.2) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            className="max-w-xl mx-auto xl:mx-0 mb-8 text-lg lg:text-xl text-slate-400 font-light leading-relaxed"
                        >
                            <span className="text-white font-black">Ahmed Hamdy</span> — 5+ years building scalable web systems, RESTful APIs, and cloud-hosted platforms with Node.js, Bun, Laravel, Next.js, and AWS.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeIn("down", 0.25) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center xl:justify-start gap-4 mb-10 w-full"
                        >
                            <Link
                                href="#schedule"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-purple-600 text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-2xl shadow-red-500/20 hover:shadow-red-500/30 whitespace-nowrap"
                            >
                                <HiMiniCalendarDays className="text-sm" />
                                Schedule a Call
                            </Link>

                            <Link
                                href="/projects"
                                className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-2xl shadow-white/5 whitespace-nowrap"
                            >
                                View Projects →
                            </Link>

                            <button
                                onClick={() => setIsResumeOpen(true)}
                                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-red-500/20 hover:bg-white/[0.08] text-white font-black uppercase tracking-widest text-xs transition-all duration-300 backdrop-blur-xl flex items-center justify-center gap-2 group whitespace-nowrap"
                            >
                                <HiMiniEye className="text-sm group-hover:scale-110 transition-transform" />
                                Interactive CV
                            </button>

                            <Link href="/about" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-slate-200 transition-colors py-3 px-4 whitespace-nowrap">
                                About Me
                            </Link>
                        </motion.div>

                        {/* ── Mobile Social Row ── */}
                        <motion.div
                            variants={fadeIn("up", 0.3) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            className="flex items-center justify-center xl:justify-start gap-3 lg:hidden"
                        >
                            {SOCIALS.map(({ label, href, Icon, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={`
                                        w-11 h-11 rounded-xl
                                        border border-white/[0.07]
                                        bg-white/[0.02]
                                        flex items-center justify-center
                                        text-gray-500 text-lg
                                        transition-all duration-300
                                        ${color}
                                    `}
                                >
                                    <Icon />
                                </a>
                            ))}

                            {/* Divider + email hint */}
                            <div className="w-px h-6 bg-white/10 mx-1" />
                            <a
                                href="mailto:ahmedhamdy.mh95@gmail.com"
                                className="text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-gray-300 transition-colors"
                            >
                                Email
                            </a>
                        </motion.div>
                    </div>

                    {/* Avatar */}
                    <motion.div
                        variants={fadeIn("left", 0.2) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="hidden xl:flex justify-center items-center relative"
                    >
                        <div className="relative w-full max-w-[480px] aspect-square group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-600/10 to-indigo-500/10 rounded-[2.5rem] blur-2xl group-hover:scale-105 transition-all duration-1000" />
                            <div className="relative w-full h-full scale-95 group-hover:scale-100 transition-transform duration-700 rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-2xl">
                                <Avatar />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Trusted Companies Marquee ── */}
            <section className="relative py-16 border-y border-white/[0.05] bg-[#020204] z-10 overflow-hidden flex flex-col items-center">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-8 text-center px-6">Companies & Projects I&apos;ve Built For</p>
                <div className="relative flex w-full max-w-[100vw] overflow-hidden group">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#020204] to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#020204] to-transparent z-10" />
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    >
                        {[...trustedCompanies, ...trustedCompanies, ...trustedCompanies, ...trustedCompanies].map((company, i) => (
                            <div key={i} className="flex items-center gap-4 px-8 sm:px-12 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
                                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-red-500 to-purple-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">{company}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Tech Strip ── */}
            <section className="relative py-12 px-6 border-b border-white/[0.05] z-10 overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
                        {[
                            { Icon: SiNextdotjs, color: "text-white", name: "Next.js" },
                            { Icon: SiLaravel, color: "text-[#FF2D20]", name: "Laravel" },
                            { Icon: SiBun, color: "text-[#FBF0DF]", name: "Bun" },
                            { Icon: SiFastify, color: "text-white", name: "Fastify" },
                            { Icon: BiLogoAmazon, color: "text-[#FF9900]", name: "AWS" },
                            { Icon: SiDigitalocean, color: "text-[#0080FF]", name: "DigitalOcean" },
                            { Icon: SiVercel, color: "text-white", name: "Vercel" },
                            { Icon: HiMiniCommandLine, color: "text-slate-400", name: "SSH / Linux" },
                        ].map(({ Icon, color, name }, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group flex flex-col items-center gap-3 relative"
                            >
                                <div className="relative p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/[0.06]">
                                    <Icon className={`text-3xl lg:text-4xl ${color}`} />
                                </div>
                                <span className="absolute -bottom-6 text-[9px] font-black uppercase tracking-widest text-slate-500 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Services ── */}
            <section className="relative py-32 px-6 lg:px-24 z-10">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-20">
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
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-8 md:p-10 rounded-[2.5rem] bg-[#0c0c10]/40 border border-white/[0.05] overflow-hidden shadow-2xl hover:border-red-500/20 hover:bg-[#0c0c10]/60 transition-all duration-500"
                            >
                                <div className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${service.gradient} opacity-10 blur-[40px] group-hover:opacity-20 transition-opacity duration-700`} />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-red-500/30 transition-all duration-500">
                                        <service.icon className="text-3xl text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-slate-400 font-light leading-relaxed text-sm">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
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
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                                className="relative p-8 md:p-10 rounded-[2.5rem] bg-[#0c0c10]/40 border border-white/[0.06] shadow-xl hover:border-purple-500/20 hover:bg-[#0c0c10]/60 transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-indigo-500 flex items-center justify-center font-black text-white text-sm shadow-lg border border-white/10">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                        <p className="text-red-400 text-[8px] font-black uppercase tracking-widest mt-1">{t.role}</p>
                                    </div>
                                </div>
                                <p className="text-slate-400 font-light leading-relaxed text-sm italic">&quot;{t.content}&quot;</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Schedule Section ── */}
            <section id="schedule" className="relative py-32 px-6 lg:px-24 z-10 border-t border-white/[0.05]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-6 w-fit mx-auto lg:mx-0"
                            >
                                <HiMiniCalendarDays className="text-red-400 text-base" />
                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">
                                    Let's connect
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-6"
                            >
                                Schedule a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Call</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-slate-400 text-lg font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                            >
                                Pick a date and time that suits you. We can discuss your project requirements, technical challenges, or collaboration opportunities. A Google Meet link and calendar invite will be sent directly to your email.
                            </motion.p>
                        </div>
                        <div className="lg:col-span-7 w-full">
                            <ScheduleForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="relative py-40 px-6 lg:px-24 overflow-hidden z-10">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container mx-auto text-center"
                >
                    <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.95]">
                        Ready to Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500">Something?</span>
                    </h2>

                    {/* Social row inside CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="flex items-center justify-center gap-3 mb-12"
                    >
                        {SOCIALS.map(({ label, href, Icon, color }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={`
                                    w-11 h-11 rounded-xl
                                    border border-white/[0.07]
                                    bg-white/[0.02]
                                    flex items-center justify-center
                                    text-gray-500 text-base
                                    transition-all duration-300
                                    ${color}
                                `}
                            >
                                <Icon />
                            </a>
                        ))}
                    </motion.div>

                    <Link href="/contact" className="group inline-block">
                        <div className="relative px-12 py-5 bg-[#030305] rounded-full border border-white/10 hover:scale-105 transition-transform duration-300">
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
        </>
    );
}
