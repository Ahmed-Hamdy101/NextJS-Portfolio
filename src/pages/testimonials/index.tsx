import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import { HiMiniStar, HiMiniChatBubbleLeftRight, HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import Head from "next/head";

const testimonials = [
    {
        id: 1,
        name: "Al Kayan Engineering",
        role: "Construction & Real Estate",
        company: "alkayan-co.com",
        initial: "AK",
        color: "from-blue-500 to-cyan-400",
        content: "Ahmed engineered our complete Real Estate CMS from scratch with RBAC authentication. Security vulnerabilities dropped by 75% and our entire property listing operation runs on it in production.",
        rating: 5,
    },
    {
        id: 2,
        name: "ET GCO Tours",
        role: "Tourism Platform",
        company: "egypt-tour-guide.com",
        initial: "ET",
        color: "from-yellow-500 to-green-500",
        content: "100% Lighthouse SEO and 98% Accessibility on our bilingual PWA. The booking workflow is seamless, loads in under 2 seconds, and handles German and English users flawlessly.",
        rating: 5,
    },
    {
        id: 3,
        name: "Padel Nuestro",
        role: "Sports Infrastructure",
        company: "West Cairo",
        initial: "PN",
        color: "from-purple-500 to-pink-500",
        content: "Network uptime went from 95% to 99.5%. Ahmed also designed an AI coaching assistant prototype with 15+ architecture diagrams — reduced our estimated build time by 30%.",
        rating: 5,
    },
    {
        id: 4,
        name: "Egypt Racket Sport",
        role: "E-Commerce & SEO",
        company: "WordPress / WooCommerce",
        initial: "ER",
        color: "from-emerald-500 to-teal-500",
        content: "Site performance improved significantly through proper caching and image optimization. Product visibility increased after on-page SEO work — consistent, reliable updates with zero downtime.",
        rating: 5,
    },
];

const TestimonialsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
             <>
             <Head>
            <title> Testimonials |  Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert</title>
            <meta name="description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 4+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <link rel="canonical" href="https://ahmedhamdy101.is-a.dev//" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ahmedhamdy101.is-a.dev/" />
            <meta property="og:title" content="Ahmed Hamdy | Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert" />
            <meta property="og:description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 4+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <meta property="og:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="favicons.svg" />     
            <meta name="twitter:url" content="https://ahmedhamdy101.is-a.dev/" />
            <meta name="twitter:title" content="Ahmed Hamdy | Mid Level Senior Full Stack Engineer | Next.js, Laravel, AWS Expert" />
            <meta name="twitter:description" content="Ahmed Hamdy is a Mid Level Senior Full Stack Engineer with 4+ years of experience building scalable web applications and cloud infrastructure using Next.js, Laravel, AWS, and AI integrations." />
            <meta name="twitter:image" content="https://ahmedhamdy101.is-a.dev/og-image.jpg" />

        </Head>

        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-[#020204]">
            <Circles />

            <div className="w-full max-w-7xl z-10 pt-16">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-6"
                    >
                        <HiMiniChatBubbleLeftRight className="text-red-400 text-sm" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">Client Feedback</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("down", 0.1) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-5xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Testimonials
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.15) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-xl lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        Real feedback from real production engagements.
                    </motion.p>
                </div>

                {/* Stats Row */}
                <motion.div
                    variants={fadeIn("up", 0.15) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-3 gap-6 mb-20 max-w-2xl mx-auto"
                >
                    {[
                        { value: "4+", label: "Years Experience" },
                        { value: "10+", label: "Live Projects" },
                        { value: "5★", label: "Client Rating" },
                    ].map((stat) => (
                        <div key={stat.label} className="glass-panel rounded-2xl p-5 text-center">
                            <p className="text-3xl font-black bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent mb-1">{stat.value}</p>
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.15em] font-black">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Testimonials Carousel */}
                <motion.div
                    variants={fadeIn("up", 0.1) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="relative w-full max-w-5xl mx-auto"
                >
                    {/* Carousel Viewport */}
                    <div className="overflow-hidden rounded-[2.5rem] relative group py-4">
                        <motion.div
                            className="flex cursor-grab active:cursor-grabbing"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = Math.abs(offset.x) * velocity.x;
                                if (swipe < -10000 || offset.x < -50) next();
                                else if (swipe > 10000 || offset.x > 50) prev();
                            }}
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-6">
                                    <div className="relative glass-panel rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden h-full border border-white/[0.06]">
                                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${testimonial.color} opacity-[0.06] rounded-bl-full`} />
                                        
                                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center h-full relative z-10">
                                            {/* Left Column: Author */}
                                            <div className="flex flex-col items-center text-center w-full md:w-1/3 md:border-r border-white/10 md:pr-8">
                                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-black text-3xl shadow-xl mb-4 border border-white/20`}>
                                                    {testimonial.initial}
                                                </div>
                                                <h3 className="font-black text-white text-lg uppercase tracking-wider">{testimonial.name}</h3>
                                                <p className="text-gray-400 text-xs font-medium mt-1 mb-2 uppercase tracking-widest">{testimonial.role}</p>
                                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                                                    {testimonial.company}
                                                </div>
                                                <div className="flex gap-1 mt-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <HiMiniStar key={i} className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Column: Content */}
                                            <div className="w-full md:w-2/3 flex flex-col justify-center">
                                                <HiMiniChatBubbleLeftRight className="text-4xl text-white/10 mb-4" />
                                                <p className="text-gray-200 leading-relaxed font-light text-base md:text-xl italic">
                                                    &ldquo;{testimonial.content}&rdquo;
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                        >
                            <HiMiniChevronLeft className="text-xl" />
                        </button>
                        
                        <div className="flex items-center gap-3">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        currentIndex === idx ? "w-8 bg-gradient-to-r from-red-500 to-purple-500" : "w-2 bg-white/20 hover:bg-white/40"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                        >
                            <HiMiniChevronRight className="text-xl" />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.3) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="text-center mt-20"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-black mb-4">Ready to build together?</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-purple-600 text-white font-black uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-red-500/25 transition-all duration-500 hover:scale-105"
                    >
                        Start a Project →
                    </Link>
                </motion.div>
            </div>
        </div>
        </>
    );
};

export default TestimonialsPage;
