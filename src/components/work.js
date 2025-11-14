"use client";
import { useEffect, useRef, useState } from "react";

function Work() {
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
        <section id="work" ref={sectionRef} className="h-screen px-12 mt-6 mb-6">
            <h2
                className={`text-6xl md:text-7xl lg:text-[105px] font-semibold tracking-tight drop-shadow-lg mb-20 transition-all duration-1000 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                My <br />
                Work
            </h2>
        </section>
    );
}

export default Work;
