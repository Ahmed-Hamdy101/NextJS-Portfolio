import Image from "next/image";
import { useState, useEffect } from "react";

const Avatar = () => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new window.Image();
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageError(true);
        img.src = "/avater.png";
    }, []);

    return (
        <div className="relative w-full h-full p-4">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                {imageLoaded && !imageError ? (
                    <Image
                        src="/avater.png"
                        alt="Ahmed Hamdy"
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-1000"
                    />
                ) : (
                    <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
                        {/* Premium Abstract Background for Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-purple-600/20 to-blue-500/20 animate-pulse"></div>
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-red-500/10 rounded-full blur-[100px]"></div>
                        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/10 rounded-full blur-[100px]"></div>
                        
                        {/* Minimalist Branding */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="text-4xl font-black text-white/20 tracking-[0.5em] uppercase mb-4">
                                Codxior
                            </div>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-full"></div>
                        </div>
                    </div>
                )}
                {/* Subtle Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] pointer-events-none"></div>
            </div>
        </div>
    );
};

export default Avatar;

