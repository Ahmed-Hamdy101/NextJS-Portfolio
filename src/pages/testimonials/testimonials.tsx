import { HiMiniStar } from "react-icons/hi2";
import { motion, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";

const TestimonialsPage = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO, Tech Startup",
            image: "/avatar.jpg",
            content: "Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering high-quality code is unmatched. Our project was completed on time and exceeded all expectations.",
            rating: 5,
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Product Manager, Design Co",
            image: "/avatar.jpg",
            content: "Exceptional full-stack developer who understands both frontend and backend intricacies. The solutions provided were scalable, maintainable, and perfectly aligned with our business goals.",
            rating: 5,
        },
        {
            id: 3,
            name: "Mike Johnson",
            role: "CTO, Innovation Labs",
            image: "/avatar.jpg",
            content: "The developer's expertise in modern technologies and best practices helped us build a robust application. Great communication throughout the project and always available for support.",
            rating: 5,
        },
        {
            id: 4,
            name: "Sarah Williams",
            role: "Founder, Creative Agency",
            image: "/avatar.jpg",
            content: "Outstanding work! The developer transformed our vision into a beautiful, functional web application. The code quality and performance optimizations were impressive.",
            rating: 5,
        },
        {
            id: 5,
            name: "David Brown",
            role: "Lead Developer, Software Corp",
            image: "/avatar.jpg",
            content: "A true professional with deep knowledge of React, Next.js, and backend technologies. The developer consistently delivered clean, efficient code that our team could easily maintain.",
            rating: 5,
        },
        {
            id: 6,
            name: "Emily Davis",
            role: "Marketing Director, Brand Co",
            image: "/avatar.jpg",
            content: "The developer created an amazing user experience that significantly improved our conversion rates. The attention to UX/UI details and performance optimization was remarkable.",
            rating: 5,
        },
    ];

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-10 overflow-hidden">
            {/* Background Circles */}
            <Circles />

            <div className="w-full max-w-7xl z-10">
                <motion.h1
                    variants={fadeIn("down", 0.2) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="text-4xl lg:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent"
                >
                    Client Testimonials
                </motion.h1>
                <motion.p
                    variants={fadeIn("down", 0.3) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="text-lg text-center text-gray-300 mb-12"
                >
                    What clients say about working with me
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            variants={fadeIn("up", 0.2 + index * 0.1) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            whileHover={{ y: -5 }}
                            className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <HiMiniStar key={i} className="w-5 h-5 text-yellow-400" />
                                    ))}
                                </div>
                            <p className="text-gray-300 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPage;

