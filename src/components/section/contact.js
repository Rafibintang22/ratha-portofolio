"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const sosmed = [
        {
            name: "Instagram",
            link: "https://www.instagram.com/rafibintang10/",
            colorBg: "#ea2264",
            icon: "https://img.icons8.com/ios-filled/100/ffffff/instagram-new.png",
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/rafi-bintang-8355322ab/",
            colorBg: "#0a66c2",
            icon: "https://img.icons8.com/ios-filled/100/ffffff/linkedin.png",
        },
        {
            name: "Github",
            link: "https://github.com/Rafibintang22",
            colorBg: "#f78d60",
            icon: "https://img.icons8.com/ios-filled/100/ffffff/github.png",
        },
    ];

    return (
        <section
            id="contact"
            ref={sectionRef}
            className={`bg-black transition-all duration-700
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
        >
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-6 lg:px-24 py-20">
                <div>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold leading-snug mb-5">
                        Let’s Connect and Create Something Meaningful
                    </h3>

                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                        Have an idea, a project, or simply a thought worth sharing? I’m always open
                        to good conversations and great collaborations. <br />
                        Tell me what you’re working on—I’d love to hear it.
                    </p>

                    <a
                        href="mailto:rafibintang26.rb@gmail.com"
                        className="text-xl sm:text-2xl font-semibold text-[var(--primary-color)] underline underline-offset-4 hover:text-[#e20c53] transition-all"
                    >
                        rafibintang26.rb@gmail.com
                    </a>

                    <div className="hidden lg:block mt-6 space-y-1 text-gray-300 text-base sm:text-lg">
                        {sosmed.map((s, i) => (
                            <div key={i}>
                                <Link
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-all"
                                >
                                    {s.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sosmed.map((s, i) => (
                        <Link
                            key={i}
                            href={s.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ backgroundColor: s.colorBg }}
                            className="p-6 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] flex flex-col justify-center items-center gap-3 text-white font-semibold rounded-lg group transition-all duration-300"
                        >
                            <Image
                                src={s.icon}
                                width={38}
                                height={38}
                                alt={s.name}
                                className="sm:w-[42px] sm:h-[42px] drop-shadow-xl group-hover:scale-105 transition-all"
                            />
                            <span className="text-base sm:text-lg group-hover:scale-105 transition-all">
                                {s.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
