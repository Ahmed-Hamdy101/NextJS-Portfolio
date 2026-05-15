import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { 
    HiMiniHome, 
    HiMiniUser, 
    HiMiniRectangleGroup, 
    HiMiniSquaresPlus, 
    HiMiniEnvelope 
} from "react-icons/hi2";

const navItems = [
    { href: "/", label: "Home", Icon: HiMiniHome },
    { href: "/about", label: "About", Icon: HiMiniUser },
    { href: "/skills", label: "Skills", Icon: HiMiniSquaresPlus },
    { href: "/projects", label: "Projects", Icon: HiMiniRectangleGroup },
    { href: "/contact", label: "Contact", Icon: HiMiniEnvelope },
];

const DockNav = () => {
    const router = useRouter();
    const pathname = router?.pathname || "";

    return (
        <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-1 p-2 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 shadow-2xl"
            >
                {navItems.map((item, index) => {
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
                                    relative flex items-center justify-center w-10 h-10 rounded-lg
                                    transition-all duration-300 group
                                    ${isActive 
                                        ? "bg-white/20 dark:bg-white/10 text-white" 
                                        : "text-gray-400 hover:text-white hover:bg-white/10 dark:hover:bg-white/5"
                                    }
                                `}
                                title={item.label}
                            >
                                <Icon className="w-5 h-5" />
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-purple-600 rounded-r-full"
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
    );
};

export default DockNav;
