import React, { ReactNode } from "react";
import ParticularContainer from "./ParticularContainer";
import DockNav from "./DockNav";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 ">
            {/* Page Content */}
            <ParticularContainer/>
            <DockNav/>
            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;