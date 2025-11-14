"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
    const [scale, setScale] = useState(1);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // batasan agar tidak terlalu besar
            const maxScale = 1.08;
            const newScale = 1 + Math.min(scrollY / 1000, maxScale - 1);

            setScale(newScale);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // trigger onLoad animation
        const timeout = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            id="home"
            className="relative w-full h-screen overflow-hidden flex items-center justify-center"
        >
            {/* bg gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] to-[#150c1f] -z-50" />

            {/* glow */}
            <div className="absolute right-1/3 top-[22%] w-64 h-64 rounded-full bg-[#ffbfa1] blur-[150px] opacity-40 -z-40"></div>
            <div className="absolute left-1/3 top-[40%] w-72 h-72 rounded-full bg-[#ff3fa5] blur-[200px] opacity-[0.18] -z-40"></div>
            <div className="absolute left-14 top-1/2 w-16 h-16 rounded-full bg-[#6a4bff] blur-[70px] opacity-30 -z-40"></div>

            {/* cubes + shadow */}
            <div className="absolute inset-0 flex justify-center items-end pb-[10vh] pointer-events-none -z-30">
                <div className="relative transition-transform duration-300">
                    <Image
                        style={{ transform: `scale(${scale})` }}
                        src="/cube.png"
                        alt="Hero 3D Cubes"
                        width={500}
                        height={900}
                        className="opacity-70 object-contain"
                        priority
                    />

                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-50px] w-[140%] h-[60px] rounded-full blur-[60px] bg-[#f78d60] opacity-25"></div>
                </div>
            </div>

            {/* hero content */}
            <div className="relative z-10 text-center space-y-6 px-6 pointer-events-none">
                <h1 className="text-5xl md:text-7xl xl:text-[140px] uppercase font-semibold tracking-tight drop-shadow-lg">
                    Rafi Bintang
                </h1>

                <p
                    className={`text-lg md:text-2xl max-w-xl mx-auto leading-relaxed transition-all duration-1000 ${
                        loaded ? "opacity-95 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    Software Engineer • Front End Developer • UI/UX Design
                </p>
            </div>

            {/* Scroll Indicator GIF */}
            <a
                href="#expertise"
                className={`z-[21] absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto transition-all duration-2000 ${
                    loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <Image
                    src="/scroll.gif"
                    alt="Scroll Down"
                    width={60}
                    height={60}
                    className="opacity-80"
                    unoptimized
                    priority
                />
            </a>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0b0f1a] pointer-events-none z-[20]" />
        </section>
    );
}
