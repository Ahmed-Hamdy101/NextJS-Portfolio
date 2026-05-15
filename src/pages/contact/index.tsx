import { motion, Variants } from "framer-motion";
import { fadeIn } from "../../lib/variants";
import Circles from "../../components/Circle";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaBehance,
    FaDribbble
} from 'react-icons/fa';
import {
    SiCodepen,
    SiStackoverflow,
    SiReddit,
    SiPinterest,
    SiTiktok,
    SiVimeo,
    SiMedium,
    SiDevpost,
    SiHashnode
} from 'react-icons/si';

const ContactPage = () => {
    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/Ahmed-Hamdy101", label: "GitHub" },
        { icon: FaLinkedinIn, href: "https://linkedin.com/in/ahmed-hamdy-ah", label: "LinkedIn" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
    ];

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-10 overflow-hidden">
            {/* Background Circles */}
            <Circles />

            <div className="w-full max-w-4xl z-10">
                <motion.h1
                    variants={fadeIn("down", 0.2) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="text-4xl lg:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent"
                >
                    Get In Touch
                </motion.h1>
                <motion.p
                    variants={fadeIn("down", 0.3) as unknown as Variants}
                    initial="hidden"
                    animate="show"
                    className="text-lg text-center text-gray-300 mb-12"
                >
                    I would love to hear from you! Whether you have a question, a project idea, or just want to connect.
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        variants={fadeIn("right", 0.4) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-xl"
                    >
                        <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400 resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg hover:from-red-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={fadeIn("left", 0.4) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-xl"
                    >
                        <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium mb-2">Email</h3>
                                <a href="mailto:ahmedhamdy.,h95@gmail.com" className="text-red-500 hover:text-purple-500 transition-colors">
                                    ahmedhamdy.,h95@gmail.com
                                </a>
                            </div>
                            <div>
                                <h3 className="font-medium mb-4">Social Media</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variants={fadeIn("up", 0.1 * index) as unknown as Variants}
                                                initial="hidden"
                                                animate="show"
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-red-500/50 transition-all duration-300"
                                                title={social.label}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

