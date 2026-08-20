import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
    HiMiniArrowLeft, HiMiniArrowTopRightOnSquare, HiMiniCodeBracket,
    HiMiniCubeTransparent, HiMiniPhoto,
} from "react-icons/hi2";
import Circles from "@/components/Circle";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import DiagramViewer from "@/components/DiagramViewer";
import { fadeIn } from "@/lib/variants";
import { projects, statusConfig, Project } from "@/lib/projects-data";

interface Props {
    slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projects
        .filter((p) => p.slug)
        .map((p) => ({ params: { slug: p.slug as string } }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const slug = params?.slug as string;
    const exists = projects.some((p) => p.slug === slug);
    if (!exists) return { notFound: true };
    return { props: { slug } };
};

export default function ProjectDetailPage({ slug }: Props) {
    const project = projects.find((p) => p.slug === slug) as Project;

    if (!project || !project.caseStudy) return null;

    const { caseStudy } = project;
    const Icon = project.Icon;
    const status = statusConfig[project.status];
    const isLiveLink = project.link !== "#" && !project.link.includes("github");
    const otherProjects = projects.filter((p) => p.slug && p.slug !== project.slug).slice(0, 3);

    return (
        <>
            <Head>
                <title>{project.title} | Case Study — Ahmed Hamdy</title>
                <meta name="description" content={project.description} />
                <link rel="canonical" href={`https://ahmedhamdy101.is-a.dev/projects/${project.slug}`} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://ahmedhamdy101.is-a.dev/projects/${project.slug}`} />
                <meta property="og:title" content={`${project.title} | Case Study — Ahmed Hamdy`} />
                <meta property="og:description" content={project.description} />
                {project.previewImage && (
                    <meta property="og:image" content={`https://ahmedhamdy101.is-a.dev${project.previewImage}`} />
                )}
            </Head>

            <div className="relative min-h-screen bg-[#020204] text-white overflow-hidden">
                <Circles />
                <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />

                <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-32">

                    {/* ── Back link ── */}
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                        <Link href="/projects" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-gray-200 transition-colors duration-300 mb-10">
                            <HiMiniArrowLeft className="text-sm" />
                            All Projects
                        </Link>
                    </motion.div>

                    {/* ── Hero ── */}
                    <motion.div variants={fadeIn("up", 0.1) as unknown as Variants} initial="hidden" animate="show" className="mb-14">
                        <div className="flex flex-wrap items-center gap-2.5 mb-6">
                            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border ${status.bg} ${status.text} ${status.border}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                                {status.label}
                            </div>
                            <span className="px-2.5 py-1 rounded-full text-[9px] font-black text-gray-400 bg-white/5 border border-white/10">{project.year}</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: project.accent }}>{project.category}</span>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/[0.03]">
                                <Icon className={`text-2xl ${project.color}`} />
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                                {project.title}
                            </h1>
                        </div>

                        <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed max-w-3xl mb-8">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] bg-white/[0.03] border border-white/[0.08] text-gray-400">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {isLiveLink && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-black uppercase tracking-widest text-[10px] transition-all duration-300 hover:scale-105"
                                    style={{ background: `linear-gradient(to right, ${project.accent}, ${project.accent}cc)` }}
                                >
                                    <HiMiniArrowTopRightOnSquare className="text-sm" />
                                    View Live Site
                                </a>
                            )}
                            {(project.githubLink || (!isLiveLink && project.link.includes("github"))) && (
                                <a href={project.githubLink ?? project.link} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] text-white font-black uppercase tracking-widest text-[10px] transition-all duration-300"
                                >
                                    <HiMiniCodeBracket className="text-sm" />
                                    Source on GitHub
                                </a>
                            )}
                            <a href="#architecture"
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] text-white font-black uppercase tracking-widest text-[10px] transition-all duration-300"
                            >
                                <HiMiniCubeTransparent className="text-sm" />
                                View Architecture
                            </a>
                        </div>
                    </motion.div>

                    {/* ── Screens ── */}
                    {project.images.length > 0 && (
                        <motion.div variants={fadeIn("up", 0.13) as unknown as Variants} initial="hidden" animate="show" className="mb-14">
                            <div className="flex items-center gap-3 mb-6">
                                <HiMiniPhoto className="text-lg text-gray-500" />
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white">Screens</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.images.map((img, i) => (
                                    <a
                                        key={img}
                                        href={img}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-300 group block"
                                    >
                                        <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* ── Tech Stack & Architecture ── */}
                    <motion.div id="architecture" variants={fadeIn("up", 0.15) as unknown as Variants} initial="hidden" animate="show" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <HiMiniCubeTransparent className="text-lg text-gray-500" />
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white">Tech Stack & Architecture</h2>
                        </div>

                        {caseStudy.diagrams && caseStudy.diagrams.length > 0 ? (
                            <div className="mb-6">
                                <DiagramViewer diagrams={caseStudy.diagrams} accent={project.accent} />
                            </div>
                        ) : caseStudy.apiOnly ? (
                            <div className="glass-panel rounded-[2rem] overflow-hidden mb-6">
                                <ArchitectureDiagram
                                    accent={project.accent}
                                    layers={
                                        project.slug === "typescript-ai-api"
                                            ? ["Client App", "Fastify REST API (TypeScript)", "OpenAI API"]
                                            : project.slug === "aws-fullstack-deployment"
                                                ? ["Client", "Node.js / Express (TypeScript)", "AWS Elastic Beanstalk", "RDS PostgreSQL + S3"]
                                                : ["Client / Admin Panel", "Laravel REST API + Passport (OAuth2/JWT)", "MySQL"]
                                    }
                                />
                                <p className="text-center text-gray-600 text-[11px] font-medium px-8 pb-8 -mt-4">
                                    Backend API service — no UI to screenshot. See the source for full endpoint documentation.
                                </p>
                            </div>
                        ) : null}

                        <div className="glass-panel rounded-[2rem] p-8 space-y-4">
                            {caseStudy.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                                    <span className="text-gray-400 text-sm font-light leading-relaxed">{h}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── More projects ── */}
                    {otherProjects.length > 0 && (
                        <motion.div variants={fadeIn("up", 0.3) as unknown as Variants} initial="hidden" animate="show">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6">More Case Studies</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {otherProjects.map((p) => (
                                    <Link
                                        key={p.slug}
                                        href={`/projects/${p.slug}`}
                                        className="group flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all duration-300"
                                    >
                                        <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 bg-white/[0.02] flex-shrink-0">
                                            <p.Icon className={`text-base ${p.color}`} />
                                        </div>
                                        <span className="text-xs font-black text-gray-300 group-hover:text-white uppercase tracking-tight transition-colors">{p.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
}
