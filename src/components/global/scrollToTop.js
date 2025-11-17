"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-12 h-12 bg-white/90 backdrop-blur-md 
            shadow-lg rounded-xs flex items-center justify-center cursor-pointer transition-all
            duration-300 hover:scale-110 hover:bg-white z-[999] 
            ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <Image
                src="https://img.icons8.com/sf-black-filled/64/f78d60/up.png"
                alt="go-up"
                width={28}
                height={28}
            />
        </button>
    );
}
