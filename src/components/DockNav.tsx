import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { 
    HiMiniHome, 
    HiMiniUser, 
    HiMiniRectangleGroup, 
    HiMiniSquaresPlus, 
    HiMiniEnvelope,
    HiMiniBriefcase,
    HiMiniChatBubbleLeftRight,
    HiMiniCube
} from "react-icons/hi2";

const navItems = [
    { href: "/", label: "Home", Icon: HiMiniHome },
    { href: "/about", label: "About", Icon: HiMiniUser },
    { href: "/skills", label: "Skills", Icon: HiMiniSquaresPlus },
    { href: "/work", label: "Work", Icon: HiMiniBriefcase },
    { href: "/projects", label: "Projects", Icon: HiMiniRectangleGroup },
    { href: "/testimonials", label: "Testimonials", Icon: HiMiniChatBubbleLeftRight },
    { href: "/services", label: "Services", Icon: HiMiniCube },
    { href: "/contact", label: "Contact", Icon: HiMiniEnvelope },
];

const DockNav = () => {
    const router = useRouter();
    const pathname = router?.pathname || "";

    return (
        <>
            {/* Desktop Right Dock Navigation */}
            <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-2.5 p-2 bg-[#0a0a0c]/60 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
                >
                    {navItems.map((item, index) => {
                        // Check active status
                        const isActive = pathname === item.href || 
                            (item.href !== "/" && pathname?.startsWith(item.href));
                        const Icon = item.Icon;
                        
                        return (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.2 }}
                                whileHover={{ scale: 1.1, x: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={item.href}
                                    className={`
                                        relative flex items-center justify-center w-11 h-11 rounded-xl
                                        transition-all duration-300 group
                                        ${isActive 
                                            ? "bg-gradient-to-r from-red-500/10 to-purple-600/10 border border-red-500/20 text-red-500" 
                                            : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                                        }
                                    `}
                                    title={item.label}
                                >
                                    <Icon className="w-5 h-5" />
                                    
                                    {/* Glowing Hover Dot / Label */}
                                    <div className="absolute right-14 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none origin-right">
                                        <div className="px-3 py-1.5 rounded-lg bg-[#0d0d12]/90 border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-200 shadow-xl whitespace-nowrap">
                                            {item.label}
                                        </div>
                                    </div>

                                    {isActive && (
                                        <motion.div
                                            layoutId="activeDockIndicator"
                                            className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-red-500 rounded-l-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </nav>

            {/* Mobile/Tablet Bottom Navigation Bar */}
            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 block lg:hidden w-[90%] max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-around items-center px-4 py-2.5 bg-[#0a0a0c]/85 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                >
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || 
                            (item.href !== "/" && pathname?.startsWith(item.href));
                        const Icon = item.Icon;
                        
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative flex flex-col items-center justify-center p-2 rounded-xl"
                            >
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                    className={`
                                        relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300
                                        ${isActive 
                                            ? "text-red-500" 
                                            : "text-slate-400"
                                        }
                                    `}
                                >
                                    <Icon className="w-5 h-5" />
                                    
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeMobileIndicator"
                                            className="absolute inset-0 bg-red-500/5 rounded-xl border border-red-500/20"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </motion.div>
                                <span className={`text-[8px] font-black uppercase tracking-wider mt-1 scale-95 transition-colors duration-300 ${isActive ? "text-red-500 font-bold" : "text-slate-500"}`}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </motion.div>
            </nav>
        </>
    );
};

export default DockNav;
