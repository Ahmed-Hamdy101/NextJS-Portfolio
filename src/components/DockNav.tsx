import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// SVG Icons
const HomeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const AboutIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const SkillsIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const ProjectsIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
);

const ContactIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const navItems = [
    { href: "/", label: "Home", Icon: HomeIcon },
    { href: "/about", label: "About", Icon: AboutIcon },
    { href: "/skills", label: "Skills", Icon: SkillsIcon },
    { href: "/projects", label: "Projects", Icon: ProjectsIcon },
    { href: "/contact", label: "Contact", Icon: ContactIcon },
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
