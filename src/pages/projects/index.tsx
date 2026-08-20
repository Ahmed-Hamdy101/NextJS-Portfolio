import { motion, AnimatePresence, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback, useRef } from "react";
import {
    HiMiniArrowTopRightOnSquare,
    HiMiniXMark, HiMiniChevronLeft, HiMiniChevronRight,
    HiMiniPhoto, HiMiniCodeBracket, HiMiniDocumentText,
} from "react-icons/hi2";
import Head from "next/head";
import { projects, filters, statusConfig, Project, FilterType } from "@/lib/projects-data";

// ─── Lightbox ──────────────────────────────────────────────────────────────
export interface LightboxProps {
    images: string[];
    title: string;
    startIndex: number;
    onClose: () => void;
}

export const Lightbox = ({ images, title, startIndex, onClose }: LightboxProps) => {
    const [current, setCurrent] = useState(startIndex);
    const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4"
            onClick={onClose}
        >
            <button onClick={onClose} className="absolute top-5 right-5 z-10 w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-rose-500/20 hover:border-rose-500/30 transition-all duration-200 flex items-center justify-center">
                <HiMiniXMark className="text-lg" />
            </button>
            <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                {title} — {current + 1}/{images.length}
            </div>

            {images.length > 1 && (
                <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-4 z-10 w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center">
                    <HiMiniChevronLeft className="text-xl" />
                </button>
            )}

            <div className="relative max-w-6xl max-h-[80vh] w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                <AnimatePresence mode="wait">
                    <motion.div key={current} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.2 }} className="relative w-full h-full flex items-center justify-center">
                        <Image src={images[current]} alt={`${title} screenshot ${current + 1}`} width={1400} height={900} className="object-contain max-h-[75vh] rounded-2xl shadow-2xl border border-white/10" priority unoptimized />
                    </motion.div>
                </AnimatePresence>
            </div>

            {images.length > 1 && (
                <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-4 z-10 w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center">
                    <HiMiniChevronRight className="text-xl" />
                </button>
            )}

            {images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center max-w-3xl px-4">
                    {images.map((img, i) => (
                        <button key={i} onClick={e => { e.stopPropagation(); setCurrent(i); }} className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${i === current ? "border-white/60 scale-110" : "border-white/10 opacity-40 hover:opacity-80"}`}>
                            <Image src={img} alt="" fill className="object-cover" unoptimized />
                        </button>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

// ─── Project Card ──────────────────────────────────────────────────────────
interface CardProps {
    project: Project;
    index: number;
    onOpenLightbox: (project: Project, i: number) => void;
}

const ProjectCard = ({ project, index, onOpenLightbox }: CardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const Icon = project.Icon;
    const hasImages = project.images.length > 0;
    const status = statusConfig[project.status];
    const isLiveLink = project.link !== "#" && !project.link.includes("github");

    return (
        <motion.div
            ref={cardRef}
            layout
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/[0.06] bg-[#0b0b0f] transition-all duration-500 hover:border-white/[0.14] hover:-translate-y-2 hover:shadow-2xl"
            style={{ "--accent": project.accent, "--accent-rgb": project.accentRgb } as React.CSSProperties}
        >
            {/* Ambient corner glow */}
            <div
                className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle, ${project.accent}, transparent)` }}
            />

            {/* ── Preview ── */}
            <div
                className={`relative w-full aspect-[16/10] overflow-hidden bg-[#06060a] shrink-0 ${hasImages || project.slug ? "cursor-pointer" : ""}`}
                onClick={() => {
                    if (project.slug) router.push(`/projects/${project.slug}`);
                    else if (hasImages) onOpenLightbox(project, 0);
                }}
            >
                {hasImages ? (
                    <>
                        <Image src={project.previewImage} alt={project.title} fill className="object-cover transition-all duration-700 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" unoptimized />
                        {/* Gradient vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent opacity-60" />
                        {/* Hover tint */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-28 h-28 rounded-full blur-2xl opacity-10" style={{ background: project.accent }} />
                            <Icon className={`text-7xl ${project.color} opacity-20 relative z-10`} />
                        </div>
                    </div>
                )}

                {/* Status chip — top left */}
                <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.15em] backdrop-blur-xl border ${status.bg} ${status.text} ${status.border}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${project.status === "Live" ? "animate-pulse" : ""}`} />
                    {status.label}
                </div>

                {/* Year chip — top right */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[9px] font-black text-gray-400 bg-black/50 border border-white/10 backdrop-blur-xl">
                    {project.year}
                </div>
            </div>

            {/* ── Body ── */}
            <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Category pill */}
                <span className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: project.accent }}>
                    {project.category}
                </span>

                {/* Title + Icon */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 bg-white/[0.02]">
                        <Icon className={`text-lg ${project.color}`} />
                    </div>
                    <h3 className="text-base font-black text-white uppercase tracking-tight leading-tight group-hover:text-white transition-colors duration-300">
                        {project.title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-[12px] leading-relaxed font-light line-clamp-3 flex-1">
                    {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-[0.12em] bg-white/[0.03] border border-white/[0.06] text-gray-600 group-hover:border-white/[0.1] group-hover:text-gray-500 transition-all duration-500">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 5 && (
                        <span className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-[0.12em] bg-white/[0.02] border border-white/[0.04] text-gray-700">
                            +{project.tech.length - 5}
                        </span>
                    )}
                </div>

                {/* Footer */}
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/[0.04]">
                    {isLiveLink && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300"
                            style={{ color: project.accent }}
                        >
                            <HiMiniArrowTopRightOnSquare className="text-sm" />
                            Live
                        </a>
                    )}
                    {!isLiveLink && project.link.includes("github") && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300"
                            style={{ color: project.accent }}
                        >
                            <HiMiniCodeBracket className="text-sm" />
                            GitHub
                        </a>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-600 hover:text-gray-300 transition-colors duration-300"
                        >
                            <HiMiniCodeBracket className="text-sm" />
                            Source
                        </a>
                    )}
                    {project.slug && (
                        <Link href={`/projects/${project.slug}`}
                            className="ml-auto flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            <HiMiniDocumentText className="text-sm" />
                            Case Study
                        </Link>
                    )}
                    {hasImages && !project.slug && (
                        <button onClick={() => onOpenLightbox(project, 0)} className="ml-auto flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-600 hover:text-gray-300 transition-colors duration-300">
                            <HiMiniPhoto className="text-sm" />
                            Gallery
                        </button>
                    )}
                </div>
            </div>

            {/* Bottom accent line on hover */}
            <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ background: `linear-gradient(to right, transparent, ${project.accent}, transparent)` }}
            />
        </motion.div>
    );
};

// ─── Main Page ──────────────────────────────────────────────────────────────
const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>("All");
    const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

    const filtered = activeFilter === "All" ? projects : projects.filter(p => p.status === activeFilter);
    const openLightbox = useCallback((project: Project, index = 0) => {
        if (project.images.length > 0) setLightbox({ project, index });
    }, []);

    const liveCount = projects.filter(p => p.status === "Live" || p.status === "Live -- Alkayan Nova in Progress").length;

    return (
        <>
            <Head>
                <title>Projects | Ahmed Hamdy — Full Stack Engineer</title>
                <meta name="description" content="Ahmed Hamdy is a Senior Full Stack Engineer with 5+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
                <link rel="canonical" href="https://ahmedhamdy101.is-a.dev/projects" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ahmedhamdy101.is-a.dev/projects" />
                <meta property="og:title" content="Projects | Ahmed Hamdy — Full Stack Engineer" />
                <meta property="og:description" content="Real-world systems — live in production, in active development, and graduation projects." />
                <meta property="og:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />
            </Head>

            <div className="relative min-h-screen bg-[#020204] text-white overflow-hidden">
                <Circles />

                {/* Noise texture overlay */}
                <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-32">

                    {/* ── Header ── */}
                    <div className="mb-16">
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl w-fit">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                                </span>
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">{liveCount} Live in Production</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl w-fit">
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-500">{projects.length} Total Projects</span>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.div
                            variants={fadeIn("down", 0.1) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                        >
                            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black uppercase tracking-tighter leading-[0.88] text-white mb-6">
                                Selected<br />
                                <span className="relative inline-block">
                                    <span className="absolute -inset-2 blur-3xl opacity-20 rounded-full bg-gradient-to-r from-rose-500 via-violet-500 to-cyan-500" />
                                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-400 to-cyan-400">
                                        Works
                                    </span>
                                </span>
                            </h1>
                            <p className="text-gray-500 text-lg max-w-2xl font-light leading-relaxed">
                                Real-world systems shipped to production — SaaS platforms, tourism apps, ERPs, and AI-powered tools built with{" "}
                                <span className="text-gray-300 font-medium">Next.js, Laravel, Bun, and AWS</span>.
                            </p>
                        </motion.div>
                    </div>

                    {/* ── Stats row ── */}
                    <motion.div
                        variants={fadeIn("up", 0.15) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
                    >
                        {[
                            { label: "Projects Built", value: `${projects.length}+` },
                            { label: "Live in Prod", value: `${liveCount}` },
                            { label: "Years Exp.", value: "5+" },
                            { label: "Tech Stack", value: "12+" },
                        ].map((stat, i) => (
                            <div key={i} className="px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-1">
                                <span className="text-3xl font-black text-white tracking-tight">{stat.value}</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* ── Filter tabs ── */}
                    <motion.div
                        variants={fadeIn("up", 0.18) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap gap-2 mb-12"
                    >
                        {filters.map(filter => {
                            const s = statusConfig[filter];
                            const count = filter === "All" ? projects.length : projects.filter(p => p.status === filter).length;
                            const isActive = activeFilter === filter;
                            return (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.18em] border transition-all duration-300 ${
                                        isActive
                                            ? `${s.bg} ${s.text} ${s.border}`
                                            : "bg-transparent border-white/[0.06] text-gray-600 hover:text-gray-400 hover:border-white/[0.12]"
                                    }`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? s.dot : "bg-gray-700"} transition-colors duration-300`} />
                                    {s.label}
                                    <span className={`transition-colors duration-300 ${isActive ? "opacity-60" : "opacity-40"}`}>({count})</span>
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* ── Grid ── */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project, index) => (
                                <ProjectCard
                                    key={project.title}
                                    project={project}
                                    index={index}
                                    onOpenLightbox={openLightbox}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* ── Empty state ── */}
                    {filtered.length === 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
                            <p className="text-gray-600 text-sm font-black uppercase tracking-[0.2em]">No projects match this filter</p>
                        </motion.div>
                    )}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {lightbox && (
                        <Lightbox
                            images={lightbox.project.images}
                            title={lightbox.project.title}
                            startIndex={lightbox.index}
                            onClose={() => setLightbox(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default ProjectsPage;
