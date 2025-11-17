import { ScrollToTop } from "@/components/global";
import { Header, Hero, Expertise, Work, Experience, Contact } from "@/components/section";

export default function Home() {
    return (
        <div id="page" className="site">
            <Header />
            <Hero />
            <Expertise />
            <Work />
            <Experience />
            <Contact />
            <ScrollToTop />
        </div>
    );
}
