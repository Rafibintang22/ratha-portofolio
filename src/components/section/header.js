"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
    const navMenu = [
        { no: 1, title: "// home", link: "/#home" },
        { no: 2, title: "// expertise", link: "/#expertise" },
        { no: 3, title: "// work", link: "/#work" },
        { no: 4, title: "// experince", link: "/#experince" },
        { no: 5, title: "// contact", link: "/#contact" },
    ];
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShow(true); // tampilkan nav setelah scroll 200px
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="absolute left-0 right-0 z-20">
                <div className="flex items-center lg:justify-between h-[14vh] px-8">
                    <button
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#2d2f38] backdrop-blur-md"
                        onClick={() => setOpen(true)}
                    >
                        <div className="flex flex-col gap-[6px]">
                            <span className="w-4 h-[2px] bg-white"></span>
                            <span className="w-4 h-[2px] bg-white"></span>
                        </div>
                    </button>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            className="hover:opacity-80"
                            src="/Ratha.png"
                            alt="Logo"
                            width={160}
                            height={40}
                        />
                    </Link>
                    <nav className="hidden lg:flex -translate-x-[50%] group">
                        <ul className="flex items-center gap-14">
                            {navMenu.map((m, i) => (
                                <li
                                    key={i}
                                    className={`
                                text-center cursor-pointer relative transition-all ease-in-out duration-300
                                opacity-100 group-hover:opacity-40   
                                hover:opacity-100 hover:scale-105 text-white`}
                                >
                                    <span className="block text-[10px] opacity-60 mb-0.5 text-end transition-all">
                                        0{m.no}
                                    </span>
                                    <Link href={m.link} className="text-[16px] transition-all">
                                        {m.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setOpen(false)}
            />
            {/* sidebar */}
            <aside
                className={`text-black fixed top-0 left-0 h-full w-[90%] bg-white shadow-xl z-50 p-6 transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <button onClick={() => setOpen(false)} className="text-2xl mb-10">
                    ✕
                </button>

                <ul className="flex flex-col gap-3">
                    {navMenu.map((m, i) => (
                        <li key={i}>
                            <Link
                                href={m.link}
                                onClick={() => setOpen(false)}
                                className="flex flex-col"
                            >
                                <span className="text-[12px] opacity-60">{m.number}</span>
                                <span>{m.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="text-sm mt-[25px]">
                    © 2025. Designed and built with passion by Rafi Bintang. All rights reserved.
                </p>
            </aside>

            {/* Hanya untuk layar lg */}
            <header
                className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md transition-transform duration-300 ${
                    show ? "translate-y-0 shadow-md" : "-translate-y-full"
                }`}
            >
                <nav className="mx-auto flex w-full max-w-6xl items-center justify-center h-16 group">
                    <ul className="flex items-center gap-12">
                        {navMenu.map((m, i) => (
                            <li
                                key={i}
                                className={`
                                text-center cursor-pointer relative transition-all ease-in-out duration-300
                                opacity-100 group-hover:opacity-40   
                                hover:opacity-100 hover:scale-105 text-[var(--primary-color)]`}
                            >
                                <span className="block text-[10px] opacity-60 mb-0.5 text-end transition-all">
                                    0{m.no}
                                </span>
                                <Link href={m.link} className="transition-all">
                                    {m.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
