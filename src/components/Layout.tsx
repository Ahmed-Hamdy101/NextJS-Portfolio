import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import DockNav from "./DockNav";
import Logo from "./Logo";

// Canvas particle system — client-only, deferred so it never blocks page paint
const ParticularContainer = dynamic(() => import("./ParticularContainer"), {
    ssr: false,
    loading: () => null,
});

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen bg-[#020204] text-slate-100 overflow-hidden font-sans">
            {/* Particle canvas — deferred, never blocks paint */}
            <ParticularContainer />

            {/* Grid overlay — single instance */}
            <div className="fixed inset-0 grid-mesh opacity-20 z-0 pointer-events-none" aria-hidden="true" />

            {/* Static ambient blobs — no animation, no repaints */}
            <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-red-500/[0.05] to-transparent blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-indigo-500/[0.05] to-transparent blur-[120px]" />
            </div>

            <header className="fixed top-6 left-6 z-50">
                <Logo />
            </header>

            <DockNav />

            <main className="relative z-10 w-full min-h-screen pb-24 lg:pb-0">
                {children}
            </main>
        </div>
    );
};

export default Layout;
