import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-header",
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

export const metadata = {
    metadataBase: new URL("https://rafibintang.com"),

    title: "Rafi Bintang — Software Engineer & Frontend Developer",

    description:
        "Portfolio resmi Rafi Bintang, seorang Software Engineer dan Frontend Developer yang berfokus pada pembuatan aplikasi web modern, antarmuka interaktif, dan pengembangan sistem digital.",

    keywords: [
        "Rafi Bintang",
        "Software Engineer",
        "Frontend Developer",
        "Web Developer",
        "React Developer",
        "Next.js Developer",
        "UI UX Designer",
        "Fullstack Developer",
        "Portfolio Rafi Bintang",
    ],

    authors: [{ name: "Rafi Bintang" }],
    creator: "Rafi Bintang",
    publisher: "Rafi Bintang",

    robots: "index, follow",

    openGraph: {
        title: "Rafi Bintang — Software Engineer & Frontend Developer",
        description:
            "Eksplor portfolio dan karya Rafi Bintang dalam pengembangan web modern, interaksi UI/UX, dan arsitektur sistem.",
        url: "/",
        siteName: "Rafi Bintang Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Preview Portfolio Rafi Bintang",
            },
        ],
        locale: "id_ID",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Rafi Bintang — Software Engineer & Frontend Developer",
        description:
            "Portfolio resmi Rafi Bintang yang berisi karya, pengalaman, dan project pengembangan web.",
        images: ["/og-image.png"],
    },

    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon0.svg", type: "image/svg+xml" },
            { url: "/icon1.png", sizes: "512x512", type: "image/png" },
        ],
        apple: "/apple-icon.png",
    },

    manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Tambahan RealFaviconGenerator */}
                <meta name="apple-mobile-web-app-title" content="Ratha's Portofolio" />
            </head>

            <body
                className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${robotoMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
