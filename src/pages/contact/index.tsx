import { motion, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {
    HiMiniEnvelope, HiMiniMapPin, HiMiniPaperAirplane,
    HiMiniArrowTopRightOnSquare, HiMiniPhone,
} from 'react-icons/hi2';

const ContactPage = () => {
    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/Ahmed-Hamdy101", label: "GitHub", color: "hover:border-gray-400/40 hover:text-gray-300" },
        { icon: FaLinkedinIn, href: "https://linkedin.com/in/ahmed-hamdy-ah", label: "LinkedIn", color: "hover:border-blue-500/40 hover:text-blue-400" },
    ];

    const contactInfo = [
        {
            icon: HiMiniEnvelope,
            label: "Email",
            value: "ahmedhamdy.mh95@gmail.com",
            href: "mailto:ahmedhamdy.mh95@gmail.com",
            color: "text-red-400",
        },
        {
            icon: HiMiniPhone,
            label: "Phone",
            value: "+20 114 164 0812",
            href: "tel:+201141640812",
            color: "text-purple-400",
        },
        {
            icon: HiMiniMapPin,
            label: "Location",
            value: "6th of October, Giza, Egypt — Available Remotely",
            href: null,
            color: "text-blue-400",
        },
    ];

    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-[#020204]">
            <Circles />

            <div className="w-full max-w-6xl z-10 pt-16">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">Open to Opportunities</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("down", 0.2) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-5xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.3) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="text-gray-400 text-xl lg:text-2xl max-w-3xl mx-auto font-light tracking-tight"
                    >
                        Have a project in mind? Let&apos;s build something scalable and fast together.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        variants={fadeIn("right", 0.4) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="lg:col-span-3 glass-panel rounded-[2rem] p-8 lg:p-12 shadow-2xl"
                    >
                        <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Send a Message</h2>
                        <p className="text-gray-500 text-sm mb-10 font-light">I typically reply within 24 hours.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="group">
                                    <label htmlFor="contact-name" className="block mb-2 text-xs font-black uppercase tracking-[0.15em] text-gray-400 group-focus-within:text-red-400 transition-colors duration-300">Full Name</label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 focus:bg-white/[0.04] text-white placeholder-gray-600 transition-all duration-300 text-sm font-light"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="contact-email" className="block mb-2 text-xs font-black uppercase tracking-[0.15em] text-gray-400 group-focus-within:text-red-400 transition-colors duration-300">Email Address</label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 focus:bg-white/[0.04] text-white placeholder-gray-600 transition-all duration-300 text-sm font-light"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label htmlFor="contact-subject" className="block mb-2 text-xs font-black uppercase tracking-[0.15em] text-gray-400 group-focus-within:text-red-400 transition-colors duration-300">Subject</label>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 focus:bg-white/[0.04] text-white placeholder-gray-600 transition-all duration-300 text-sm font-light"
                                    placeholder="Project Proposal / Collaboration Inquiry"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="contact-message" className="block mb-2 text-xs font-black uppercase tracking-[0.15em] text-gray-400 group-focus-within:text-red-400 transition-colors duration-300">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 focus:bg-white/[0.04] text-white placeholder-gray-600 resize-none transition-all duration-300 text-sm font-light leading-relaxed"
                                    placeholder="Tell me about your project, timeline, and goals..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white rounded-xl font-black uppercase tracking-[0.15em] text-sm shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-500"
                            >
                                <HiMiniPaperAirplane className="text-lg rotate-[-45deg]" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Right Panel */}
                    <motion.div
                        variants={fadeIn("left", 0.5) as unknown as Variants}
                        initial="hidden"
                        animate="show"
                        className="lg:col-span-2 flex flex-col gap-5"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="glass-panel glass-panel-hover rounded-2xl p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center ${info.color}`}>
                                        <info.icon className="text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.15em] text-gray-500 mb-1">{info.label}</p>
                                        {info.href ? (
                                            <a href={info.href} className="text-gray-200 hover:text-red-400 transition-colors duration-300 text-sm font-medium break-all">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-200 text-sm font-medium">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="glass-panel rounded-2xl p-6"
                        >
                            <p className="text-xs font-black uppercase tracking-[0.15em] text-gray-500 mb-4">Find Me Online</p>
                            <div className="flex flex-col gap-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-3 px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-gray-400 ${social.color} transition-all duration-300`}
                                        >
                                            <Icon className="text-base flex-shrink-0" />
                                            <span className="text-xs font-black uppercase tracking-wider">{social.label}</span>
                                            <HiMiniArrowTopRightOnSquare className="text-xs ml-auto flex-shrink-0 opacity-50" />
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Availability Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.95 }}
                            className="glass-panel rounded-2xl p-6 border border-green-500/20"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                                </span>
                                <p className="text-xs font-black uppercase tracking-[0.15em] text-green-400">Available for Projects</p>
                            </div>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">
                                Currently accepting new client projects and collaborations. Response time: under 24 hrs.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
