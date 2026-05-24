import { motion, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import { HiMiniStar, HiMiniChatBubbleLeftRight } from "react-icons/hi2";

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
    return (
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
                        { value: "3+", label: "Years Experience" },
                        { value: "10+", label: "Live Projects" },
                        { value: "5★", label: "Client Rating" },
                    ].map((stat) => (
                        <div key={stat.label} className="glass-panel rounded-2xl p-5 text-center">
                            <p className="text-3xl font-black bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent mb-1">{stat.value}</p>
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.15em] font-black">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            variants={fadeIn("up", 0.1 + index * 0.05) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            whileHover={{ y: -8, scale: 1.01 }}
                            className="group relative glass-panel glass-panel-hover rounded-[2rem] p-8 shadow-2xl overflow-hidden transition-all duration-700"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${testimonial.color} opacity-0 group-hover:opacity-[0.06] rounded-bl-[4rem] transition-opacity duration-700`} />

                            <div className="flex gap-1 mb-5">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <HiMiniStar key={i} className="w-4 h-4 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed font-light text-sm mb-7 italic">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            <div className="w-10 h-px bg-white/10 group-hover:bg-red-500/30 transition-colors duration-500 mb-5" />

                            <div className="flex items-center gap-4">
                                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-black text-sm shadow-lg flex-shrink-0`}>
                                    {testimonial.initial}
                                </div>
                                <div>
                                    <h3 className="font-black text-white text-sm uppercase tracking-wider">{testimonial.name}</h3>
                                    <p className="text-gray-500 text-xs font-medium mt-0.5">
                                        {testimonial.role} <span className="text-gray-600">·</span> {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={fadeIn("up", 0.3) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="text-center mt-20"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-black mb-4">Ready to build together?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-purple-600 text-white font-black uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-red-500/25 transition-all duration-500 hover:scale-105"
                    >
                        Start a Project →
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
