import Image from "next/image";

/**
 * Performance fix: removed the redundant useEffect + new window.Image() preload.
 * next/image already handles lazy-loading, priority hints, and srcset optimisation.
 * onError on the <Image> component is sufficient to handle the missing file case.
 */
const Avatar = () => {
    return (
        <div className="relative w-full h-full p-4">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <Image
                    src="/images/avater/avater.png"
                    alt="Ahmed Hamdy"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-1000"
                    onError={(e) => {
                        // Hide broken image and show fallback via CSS
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = "flex";
                    }}
                />

                {/* Fallback — hidden by default, revealed by onError above */}
                <div
                    className="w-full h-full bg-[#0a0a0a] items-center justify-center relative overflow-hidden"
                    style={{ display: "none" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-purple-600/20 to-blue-500/20" />
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="text-4xl font-black text-white/20 tracking-[0.5em] uppercase mb-4">Codxior</div>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-full" />
                    </div>
                </div>

                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] pointer-events-none" />
            </div>
        </div>
    );
};

export default Avatar;
