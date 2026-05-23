import React, { ReactNode } from "react";
import ParticularContainer from "./ParticularContainer";
import DockNav from "./DockNav";
import Logo from "./Logo";
import Head from "next/head";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="relative w-full min-h-screen bg-[#020204] text-slate-100 overflow-hidden font-sans">
                {/* Particle canvas — shared across all pages */}
                <ParticularContainer />

                {/* Grid overlay — single instance, no duplicates on pages */}
                <div className="fixed inset-0 grid-mesh opacity-20 z-0 pointer-events-none" aria-hidden="true" />

                {/* Ambient colour blobs — static, no animate-pulse to avoid constant repaints */}
                <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
                    <div
                        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-red-500/[0.06] to-transparent blur-[120px]"
                        style={{ willChange: "transform" }}
                    />
                    <div
                        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-indigo-500/[0.06] to-transparent blur-[120px]"
                        style={{ willChange: "transform" }}
                    />
                </div>

                {/* Brand Logo */}
                <header className="fixed top-6 left-6 z-50">
                    <Logo />
                </header>

                {/* Navigation Dock */}
                <DockNav />

                {/* Page Content */}
                <main className="relative z-10 w-full min-h-screen">
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;
