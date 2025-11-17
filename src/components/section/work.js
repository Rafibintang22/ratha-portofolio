"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "../global";

function Work() {
    const [visible, setVisible] = useState(false);
    const headWorkRef = useRef(null);
    const [visibleAllWorks, setVisibleAllWorks] = useState(false);
    const allWorksRef = useRef(null);

    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const categorys = ["All", "Web Development", "Design"];
    const works = [
        {
            title: "Flood Control Application System",
            category: "Web Development",
            image: "/works/sipbanja/sipbanja2-map.webp",
        },
        {
            title: "Multilink Company Website",
            category: "Web Development",
            image: "/works/multilink/multilink.webp",
        },
        {
            title: "HmpsArs Website",
            category: "Web Development",
            image: "/works/hmpsars/hmpsars.webp",
        },
        {
            title: "Airwende Company Website",
            category: "UI/UX Design",
            image: "/works/airwende/Airwende.webp",
        },
        {
            title: "The Jarrdin Member Web App",
            category: "Web Development",
            image: "/works/jarrdin/jarrdin-member.webp",
        },
        {
            title: "Point Of Sales",
            category: "UI/UX Design",
            image: "/works/pos/PointOfSales.webp",
        },
    ];

    // FILTERING
    const filteredWorks =
        activeCategory === "All" ? works : works.filter((w) => w.category.includes(activeCategory));

    // PAGINATION
    const rowsPerPage = 6;
    const totalRows = filteredWorks.length;
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = filteredWorks.slice(startIndex, startIndex + rowsPerPage);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(headWorkRef.current); // trigger sekali saja
                }
            },
            {
                threshold: 0.2, // 20% dari section harus terlihat
            }
        );

        if (headWorkRef.current) {
            observer.observe(headWorkRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisibleAllWorks(true);
                    observer.unobserve(allWorksRef.current);
                }
            },
            { threshold: 0.2 }
        );

        if (allWorksRef.current) observer.observe(allWorksRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section id="work" ref={headWorkRef} className="px-8 mt-6 mb-6">
                <div className="flex flex-wrap md:flex-nowrap relative mx-auto max-w-[1240px]">
                    <div className="min-w-[45%]">
                        <div className="flex flex-col">
                            <h2
                                className={`text-6xl md:text-7xl lg:text-[105px] font-semibold tracking-tight drop-shadow-lg mb-10 transition-all duration-1000 leading-[1.2em] ${
                                    visible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                            >
                                My <br />
                                Work
                            </h2>
                            <div
                                className={`text-lg transition-all duration-1000 ${
                                    visible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                            >
                                Built a comprehensive full-stack web platform using React.js on the
                                front end and Express.js on the back end to enhance the property
                                management system and improve user engagement for Rusunami’s
                                residential environment.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-5 py-3 min-w-[55%] justify-end relative">
                        <div className="absolute translate-x-2 md:-translate-x-5 lg:-translate-x-8 w-full h-[350px] md:h-[420px]">
                            <Image
                                src={"/works/jarrdin/webJarrdin.webp"}
                                alt="Laptop Jarrdin"
                                fill
                                className={`object-contain transition-all duration-2000
                                ${
                                    visible
                                        ? "opacity-100 -translate-y-25 md:-translate-y-35"
                                        : "opacity-0 translate-y-4"
                                }`}
                            />
                        </div>

                        <div className="w-full h-[200px] md:hidden"></div>

                        <Image
                            src={"/right-side-arrow.webp"}
                            alt="right-side-arrow"
                            width={100}
                            height={100}
                            className={`w-15 h-15 md:w-25 md:h-25 transition-all duration-1000 ease-out delay-300
                        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
                        />

                        <div
                            className={`text-xl font-semibold leading-6 mt-4 transition-all duration-1000 ease-out delay-500
                        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            The Jarrdin Member <br /> Web Application
                        </div>

                        <button
                            className={`cursor-pointer bg-[var(--secondary-color)] px-3 py-2 w-50 mt-5
                        transition-all duration-1000 ease-out delay-700
                        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            View Project
                        </button>
                    </div>
                </div>
            </section>
            <section
                id="all-works"
                ref={allWorksRef}
                className={`px-8 mt-20 mb-6 transition-all duration-1000 ${
                    visibleAllWorks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <div className="flex flex-col relative mx-auto max-w-[1240px]">
                    <div className="container-filter-works flex gap-2 md:gap-5 items-start w-full font-sans text-gray-400 text-sm md:text-base whitespace-nowrap">
                        <div>Filter by</div>
                        <div className="flex flex-wrap md:flex-nowrap gap-3">
                            {categorys.map((category, index) => (
                                <div
                                    key={index}
                                    className={`text-center cursor-pointer relative transition-all ease-in-out duration-300`}
                                >
                                    <div className="flex gap-2 transition-all">
                                        <span
                                            className={`flex gap-1 hover:text-[var(--primary-color)] duration-300 transition-all ${
                                                activeCategory === category
                                                    ? "text-[var(--primary-color)]"
                                                    : ""
                                            }`}
                                            onClick={() => setActiveCategory(category)}
                                        >
                                            {category}
                                            <span className="text-[12px] opacity-60">
                                                {category === "All"
                                                    ? works.length
                                                    : works.filter((w) =>
                                                          w.category.includes(category)
                                                      ).length}
                                            </span>
                                        </span>
                                        {index < categorys.length - 1 && <span>/</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10`}>
                        {paginatedData.map((work, i) => {
                            if (i < 3) {
                                return (
                                    <div
                                        key={i}
                                        className={`group cursor-pointer overflow-hidden rounded-lg transition-all duration-1000 hover:border-[var(--primary-color)] ${
                                            visibleAllWorks
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-4"
                                        }`}
                                        style={{ transitionDelay: `${i * 300}ms` }}
                                    >
                                        <div className="relative w-full h-52 overflow-hidden rounded-t-lg">
                                            <Image
                                                src={work.image}
                                                alt={work.title}
                                                fill
                                                className="object-cover transition-all duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        <div className="bg-[#080b14] p-6">
                                            <h3 className="text-lg font-semibold text-white">
                                                {work.title}
                                            </h3>
                                            <p className="relative h-5 overflow-hidden text-sm text-gray-400 font-sans">
                                                <span className="absolute inset-0 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                                                    {work.category}
                                                </span>

                                                <span className="absolute inset-0 translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                                    View Project →
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                );
                            }

                            // untuk i >= 3 hitung pola
                            const j = i - 3;
                            const largePattern = [0]; // pola 4-item cycle: j%4 === 0
                            const large =
                                largePattern.includes(j % 4) || largePattern.includes(j % 7);
                            return (
                                <div
                                    key={i}
                                    className={`
                                        group cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:border-[var(--primary-color)] ${
                                            visibleAllWorks
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-4"
                                        }
                                        ${large ? "lg:col-span-2 lg:row-span-2" : ""}
                                    `}
                                    style={{ transitionDelay: `${i * 300}ms` }}
                                >
                                    <div
                                        className={`relative w-full ${
                                            large ? "h-52 lg:h-135" : "h-52"
                                        } overflow-hidden rounded-t-lg`}
                                    >
                                        <Image
                                            src={work.image}
                                            alt={work.title}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="bg-[#080b14] p-6">
                                        <h3 className="text-lg font-semibold text-white">
                                            {work.title}
                                        </h3>

                                        <p className="relative h-5 overflow-hidden text-sm text-gray-400 font-sans">
                                            <span className="absolute inset-0 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                                                {work.category}
                                            </span>

                                            <span className="absolute inset-0 translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                                View Project →
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <Pagination
                    totalRows={totalRows}
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                    onPageChange={(page) => {
                        setCurrentPage(page);
                        document
                            .getElementById("all-works")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                />
            </section>
        </>
    );
}

export default Work;
