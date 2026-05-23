import { motion, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import { HiMiniStar, HiMiniChatBubbleLeftRight } from "react-icons/hi2";

const TestimonialsPage = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO",
            company: "Tech Startup",
            initial: "J",
            color: "from-red-500 to-orange-500",
            glow: "group-hover:shadow-red-500/20",
            content: "Working with Ahmed was an absolute pleasure. The attention to detail and commitment to delivering high-quality code is unmatched. Our project was completed on time and exceeded all expectations.",
            rating: 5,
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Product Manager",
            company: "Design Co",
            initial: "J",
            color: "from-purple-500 to-pink-500",
            glow: "group-hover:shadow-purple-500/20",
            content: "Exceptional full-stack developer who understands both frontend and backend intricacies. The solutions provided were scalable, maintainable, and perfectly aligned with our business goals.",
            rating: 5,
        },
        {
            id: 3,
            name: "Mike Johnson",
            role: "CTO",
            company: "Innovation Labs",
            initial: "M",
            color: "from-blue-500 to-cyan-500",
            glow: "group-hover:shadow-blue-500/20",
            content: "Ahmed's expertise in modern technologies helped us build a robust, production-grade application. Great communication throughout the project and always available for support.",
            rating: 5,
        },
        {
            id: 4,
            name: "Sarah Williams",
            role: "Founder",
            company: "Creative Agency",
            initial: "S",
            color: "from-emerald-500 to-teal-500",
            glow: "group-hover:shadow-emerald-500/20",
            content: "Outstanding work! Ahmed transformed our vision into a beautiful, functional web application. The code quality and performance optimizations were truly impressive.",
            rating: 5,
        },
        {
            id: 5,
            name: "David Brown",
            role: "Lead Developer",
            company: "Software Corp",
            initial: "D",
            color: "from-indigo-500 to-purple-500",
            glow: "group-hover:shadow-indigo-500/20",
            content: "A true professional with deep knowledge of React, Next.js, and backend technologies. Consistently delivered clean, efficient code that our entire team could easily maintain and extend.",
            rating: 5,
        },
        {
            id: 6,
            name: "Emily Davis",
            role: "Marketing Director",
            company: "Brand Co",
            initial: "E",
            color: "from-yellow-500 to-orange-500",
            glow: "group-hover:shadow-yellow-500/20",
            content: "Ahmed created an amazing user experience that significantly improved our conversion rates. The attention to UX detail and performance optimization was remarkable — results spoke for themselves.",
            rating: 5,
        },
    ];

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
                        <HiMiniChatBubbleLeftRight className="text-red-400 text-sm" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">Client Voices</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("down", 0.2) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-5xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Testimonials
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.3) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-xl lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        Real words from real collaborators — what it feels like to build with Codxior.
                    </motion.p>
                </div>

                {/* Stats Row */}
                <motion.div
                    variants={fadeIn("up", 0.35) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-3 gap-6 mb-20 max-w-2xl mx-auto"
                >
                    {[
                        { value: "100%", label: "Satisfaction Rate" },
                        { value: "50+", label: "Projects Delivered" },
                        { value: "5★", label: "Average Rating" },
                    ].map((stat) => (
                        <div key={stat.label} className="glass-panel rounded-2xl p-5 text-center">
                            <p className="text-3xl font-black bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent mb-1">{stat.value}</p>
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.15em] font-black">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            variants={fadeIn("up", 0.2 + index * 0.08) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`group relative glass-panel glass-panel-hover rounded-[2rem] p-8 shadow-2xl overflow-hidden transition-all duration-700`}
                        >
                            {/* Subtle corner accent */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${testimonial.color} opacity-0 group-hover:opacity-[0.06] rounded-bl-[4rem] transition-opacity duration-700`}></div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <HiMiniStar key={i} className="w-4 h-4 text-yellow-400 drop-shadow-sm" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-300 leading-relaxed font-light text-[0.95rem] mb-8 italic relative z-10">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            {/* Divider */}
                            <div className="w-12 h-px bg-white/10 group-hover:bg-red-500/30 transition-colors duration-500 mb-6"></div>

                            {/* Author */}
                            <div className="flex items-center gap-4 relative z-10">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-black text-lg shadow-lg flex-shrink-0`}>
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

                {/* Bottom CTA */}
                <motion.div
                    variants={fadeIn("up", 0.6) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="text-center mt-24"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-black mb-4">Ready to join the list?</p>
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
