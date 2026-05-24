import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Logo = () => {
    const [imageError, setImageError] = useState(false);

    return (
        <Link href="/" className="group">
            <div className="relative w-20 h-20 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden flex items-center justify-center">
                {!imageError ? (
                    <Image
                        src="/images/logo/logo.png"
                        alt="Logo"
                        width={90}
                        height={80}
                        className="object-contain p-2 transition-transform duration-300"
                        priority
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">P</div>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default Logo;

