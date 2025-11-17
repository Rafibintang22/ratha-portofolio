"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Experience() {
    const [openIndex, setOpenIndex] = useState(0);
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

    const experiences = [
        {
            title: "Front End Web Developer @ Sparks by Jadiin",
            duration: "Sep 2024 – Jan 2025",
            location: "Bandung, IDN",
            description:
                "Designed UI using Figma and built interactive frontend interfaces with React.js. Integrated RESTful APIs via Axios and implemented global state using Zustand for complex user flows.",
            tags: ["React.js", "Zustand", "Axios", "Figma"],
            img: "/works/sparks/sparks-logo.webp",
        },
        {
            title: "Full Stack Web Developer @ Rusunami The Jarrdin Cihampelas",
            duration: "Jul 2024 – Sep 2024",
            location: "Bandung, IDN",
            description:
                "Developed a full-stack property management system using React.js and Express.js, including API design, authentication, and MySQL integration to improve resident engagement.",
            tags: ["React.js", "Express.js", "MySQL", "REST API"],
            img: "/works/jarrdin/Logo P3SRS.webp",
        },
        {
            title: "Front End Developer @ PT Dinamaritama Konsultan Rekayasa",
            duration: "Feb 2024 – Jul 2024",
            location: "Bandung, IDN",
            description:
                "Built GIS-enabled flood monitoring system with React.js and Ant Design. Integrated interactive map visualizations using Leaflet/Mapbox for real-time river basin monitoring.",
            tags: ["React.js", "Leaflet", "Mapbox", "Ant Design"],
        },
        {
            title: "Web Developer @ PT Multilink Trans Indonesia",
            duration: "Aug 2023 – Dec 2023",
            location: "Bekasi, IDN",
            description:
                "Developed responsive company websites using Nicepage. Improved performance, SEO, and UX while producing visual content using Photoshop and Lightroom.",
            tags: ["Nicepage", "SEO", "Photoshop", "Lightroom"],
            img: "/works/multilink/mti-logo.webp",
        },
        {
            title: "Backend Developer @ Student Association of Architecture (UNPAR)",
            duration: "Jul 2023 – Sep 2023",
            location: "Bandung, IDN",
            description:
                "Developed scalable Express.js backend and REST API services for event and data management to streamline internal organization operations.",
            tags: ["Express.js", "REST API", "Node.js"],
            img: "/works/hmpsars/Logo HMPSARS.webp",
        },
    ];

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="px-2 md:px-8 pt-20 pb-20 lg:pt-35 lg:pb-35"
        >
            <div className="mx-auto flex justify-center">
                <div className="flex flex-col justify-center items-center w-full lg:w-3/5">
                    <h2
                        className={`text-4xl md:text-4xl lg:text-[62px] text-center font-semibold tracking-tight drop-shadow-lg mb-10 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                        Professional <br /> Experience
                    </h2>

                    <div
                        className={`container-all-experience w-full transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                        <div className="flex flex-col gap-4 md:gap-5 text-[10px] sm:text-xs md:text-sm">
                            {experiences.map((exp, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div key={index} className="w-full transition-all duration-300">
                                        <div
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="font-sans flex justify-between items-center w-full px-6 py-4 rounded-lg cursor-pointer shadow-md transition-all duration-300 bg-[var(--primary-color)] hover:opacity-90 flex-nowrap"
                                        >
                                            <span className="font-semibold text-xs md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                                                {exp.title}
                                            </span>

                                            <div className="flex items-center gap-1 md:gap-4">
                                                <span className="text-xs md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                                                    {exp.duration}
                                                </span>

                                                <div className="w-7 h-7 flex justify-center items-center rounded-full text-xl transition-all duration-300">
                                                    {isOpen ? "−" : "+"}
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] ${
                                                isOpen
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 -translate-y-2"
                                            }`}
                                            style={{
                                                maxHeight: isOpen ? "500px" : "0px",
                                            }}
                                        >
                                            <div className="mt-2 px-6 py-5 rounded-lg shadow-inner bg-[var(--primary-color)]/50">
                                                <div className="flex items-center gap-2 mb-3 text-sm sm:text-base">
                                                    <div className="flex items-center gap-2">
                                                        <Image
                                                            src="https://img.icons8.com/ios-filled/100/ea2264/marker.png"
                                                            alt="loc-icon"
                                                            width={18}
                                                            height={18}
                                                            className="opacity-80"
                                                        />
                                                        {exp.location}
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-start gap-4">
                                                    <p className="text-sm sm:text-base leading-relaxed mb-4 flex-1">
                                                        {exp.description}
                                                    </p>

                                                    {exp.img && (
                                                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 relative">
                                                            <Image
                                                                src={exp.img}
                                                                alt={`logo-${exp.title}`}
                                                                fill
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {exp.tags?.map((tag, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 rounded-full text-xs sm:text-sm bg-[var(--secondary-color)]"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
