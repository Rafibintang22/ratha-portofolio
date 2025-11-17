"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Expertise() {
    const myExpertise = [
        {
            icon: "https://img.icons8.com/ios/100/FFFFFF/imac.png",
            title1: "Software",
            title2: "Development",
            desc: "Experienced in both functional and object-oriented programming using Java, JavaScript, and TypeScript.",
            color: "#f78d60",
        },
        {
            icon: "https://img.icons8.com/ios/100/FFFFFF/react-native--v1.png",
            title1: "Frontend Dev",
            title2: "React, NextJS",
            desc: "Over 3 years of experience building responsive interfaces with HTML, CSS, JS, React and Next.js frameworks.",
            color: "#ea2264",
        },
        {
            icon: "https://img.icons8.com/ios/100/FFFFFF/windows10-personalization.png",
            title1: "UI/UX & Digital",
            title2: "Design",
            desc: "Designing user-focused interfaces and visuals, from intuitive flows to polished mockups and brand assets — using Figma, Photoshop, and Illustrator.",
            color: "#ffcc00",
        },
    ];

    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(sectionRef.current); // trigger sekali saja
                }
            },
            {
                threshold: 0.2, // 20% dari section harus terlihat
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="expertise" ref={sectionRef} className="px-8 pt-20 lg:pt-40">
            <div className="mx-auto flex justify-center">
                <div className="flex flex-col justify-center items-center">
                    <h2
                        className={`text-5xl md:text-5xl lg:text-[75px] font-semibold tracking-tight drop-shadow-lg mb-20 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                        My Expertise
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-nowrap gap-4 lg:gap-0 mx-auto">
                        {myExpertise.map((expertise, index) => (
                            <div
                                key={index}
                                className={`flex flex-col w-full border-2 border-[#a3a3a3] px-8 py-10 transition-all duration-700 ${
                                    visible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"
                                }`}
                                style={{ transitionDelay: `${index * 300}ms` }} // stagger 0.3s tiap box
                            >
                                <div className="relative pl-15">
                                    <div className="absolute top-0 left-0">
                                        <Image
                                            src={expertise.icon}
                                            alt={"icon-" + expertise.title1 + expertise.title2}
                                            width={50}
                                            height={50}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight drop-shadow-lg w-max">
                                        <span className="relative z-10 inline-block">
                                            {expertise.title1}
                                            <span
                                                className="absolute left-0 bottom-1 h-1.5 w-full -z-1 transition-all duration-700"
                                                style={{ backgroundColor: expertise.color }}
                                            ></span>
                                        </span>

                                        <br />
                                        {expertise.title2}
                                    </h3>
                                </div>

                                <div className="relative pl-10 my-6">
                                    <span className="absolute -top-4 left-1 text-white/30 text-sm font-normal tracking-wide">
                                        &lt;h3&gt;
                                    </span>

                                    <div className="absolute top-1/2 left-5 w-[1px] h-[80%] bg-white/30 -translate-y-1/2"></div>

                                    <p className="text-base md:text-md leading-relaxed w-55 max-w-full">
                                        {expertise.desc}
                                    </p>

                                    <span className="absolute -bottom-4 left-0 text-white/30 text-xs font-normal tracking-wide">
                                        &lt;/h3&gt;
                                    </span>
                                </div>
                            </div>
                        ))}

                        <div
                            className={`hidden md:flex lg:hidden flex-col w-full px-8 py-10 relative transition-all duration-1000 ${
                                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                            style={{ transitionDelay: `${myExpertise.length * 300}ms` }} // stagger 0.3s tiap box
                        >
                            <div className="absolute top-1/2 left-2 w-[10px] h-[80%] bg-[#640d5f] -translate-y-1/2"></div>

                            <h3 className="text-xl md:text-3xl font-semibold tracking-tight drop-shadow-lg ml-6">
                                It’s so hard, sometimes you feel like giving up, but the hardest
                                thing is just keeping on.
                            </h3>
                            <p className="text-base md:text-md leading-relaxed w-55 ml-6">
                                — John Lennon
                            </p>
                        </div>
                    </div>

                    <div
                        className={`relative -top-5 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                    >
                        <Image
                            src={"/code.png"}
                            alt="code-bg"
                            width={800}
                            height={300}
                            className="object-contain opacity-35 z-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
