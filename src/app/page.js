import { Header, Hero, ScrollToTop, Expertise, Work } from "@/components";

export default function Home() {
    return (
        <div id="page" className="site">
            <Header />
            <Hero />
            <Expertise />
            <Work />
            <ScrollToTop />
        </div>
    );
}
