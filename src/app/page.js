import { ScrollToTop } from "@/components/global";
import { Header, Hero, Expertise, Work } from "@/components/section";

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
