import React, { useEffect, useRef } from "react";
import  ParticleContainer  from "@/components/ParticularContainer";
import ParticularContainer from "@/components/ParticularContainer";
import Avatar from "@/components/Avatar";

// Main Homepage Component
function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 overflow-hidden relative">
            {/* Particle Background */}
            <ParticularContainer />

            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 2 }}>
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-red-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Content wrapper */}
            <div className="relative w-full h-full xl:ml-40 px-6 lg:px-8" style={{ zIndex: 10 }}>
                <div className="flex flex-col justify-center text-center xl:text-left pt-20 xl:pt-40 min-h-screen container mx-auto">
                    {/* Title */}
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                        Transforming Ideas <br />
                        Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Digital Reality</span>
                    </h1>

                    {/* Paragraph */}
                    <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-lg text-gray-300 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        I create immersive digital experiences that blend innovative design with cutting-edge technology. Let's bring your vision to life with solutions that stand out in the digital landscape.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                            View Projects
                        </button>
                        <button className="px-8 py-3 rounded-lg border border-gray-700 text-white hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm">
                            View Resume
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            <div className="text-3xl font-bold text-white">50+</div>
                            <div className="text-gray-400">Projects</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            <div className="text-3xl font-bold text-white">5+</div>
                            <div className="text-gray-400">Years Experience</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            <div className="text-3xl font-bold text-white">98%</div>
                            <div className="text-gray-400">Client Satisfaction</div>
                        </div>
                    </div>
                </div>


            </div>
            {/* Right image + Avatar */}
            <div className="w-[1200px] h-full absolute right-0 bottom-0">
                <div
                    className="relative flex justify-center  items-center w-full h-full"
                >
                    {/* Explosion Background */}
                    <div className="absolute inset-0 bg-explosion bg-cover bg-right bg-no-repeat mix-blend-color-dodge" />

                    {/* Avatar (centered vertically, no mt-10) */}
                    <div className="w-full h-full max-w-[337px] max-h-[678px] absolute -bottom-32 lg:right-[16%]">
                        <Avatar />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden xl:block" style={{ zIndex: 20 }}>
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;