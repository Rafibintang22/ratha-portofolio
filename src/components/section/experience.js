"use client";
import { useEffect, useRef, useState } from "react";

function Experience() {
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
            title: "Intern Web Developer @ The Jarrdin Cihampelas",
            duration: "July 2024 - Sept 2024",
            description: "Developing scalable web applications using modern frameworks.",
        },
        {
            title: "Frontend Developer @ Dinamaritama Konsultan Rekayasa",
            duration: "Feb 2024 - July 2024",
            description: "Built responsive user interfaces with React and Next.js.",
        },
        {
            title: "Web Developer @ Multilink Trans Indonesia",
            duration: "Aug 2023 - Dec 2023",
            description: "Assisted in developing internal tools and gained practical experience.",
        },
    ];
    return (
        <section id="experience" ref={sectionRef} className="px-8 pt-20 pb-20 lg:pt-35 lg:pb-35">
            <div className="mx-auto flex justify-center">
                <div className="flex flex-col justify-center items-center w-full lg:w-2/3">
                    <h2
                        className={`text-4xl md:text-4xl lg:text-[62px] text-center font-semibold tracking-tight drop-shadow-lg mb-10 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                        Professional <br /> Experience
                    </h2>

                    <div className="container-all-experience w-full">
                        <div className="flex flex-col gap-4 md:gap-5">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="group cursor-pointer flex justify-between items-center w-full rounded-lg shadow-lg bg-[var(--primary-color)] px-4 py-3 md:px-6 md:py-4 text-[10px] sm:text-xs md:text-sm font-semibold font-sans transition-all duration-300"
                                >
                                    <span className="w-[50%] sm:w-auto">{exp.title}</span>
                                    <div className="flex items-center gap-3 sm:gap-6">
                                        <span>{exp.duration}</span>

                                        <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex justify-center items-center transition-all duration-300 group-hover:bg-[#df0e54] group-hover:text-[var(--hint-color2)]">
                                            +
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
