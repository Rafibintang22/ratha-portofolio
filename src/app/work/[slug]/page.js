import { notFound } from "next/navigation";
import Link from "next/link";

import { ProjectHighlights, ProjectIntro, TechBadges, ImageGallery } from "@/components/workDetail";
import { getWorkBySlug, workDetails } from "@/data/workDetails";

export function generateStaticParams() {
    return workDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const work = getWorkBySlug(slug);
    if (!work) return {};

    return {
        title: `${work.title} • Work Detail`,
        description: work.description,
        openGraph: {
            title: work.title,
            description: work.description,
            images: work.images?.length ? [{ url: work.images[0] }] : undefined,
        },
    };
}

export default async function WorkDetailPage({ params }) {
    const { slug } = await params;
    const work = getWorkBySlug(slug);

    if (!work) notFound();

    return (
        <main className="min-h-screen bg-[var(--background)] px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto flex max-w-6xl flex-col gap-12">
                <Link
                    href="/#work"
                    className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
                >
                    <span className="text-lg transition group-hover:-translate-x-0.5">←</span>
                    Back to work
                </Link>

                <ProjectIntro
                    title={work.title}
                    description={work.description}
                    metadata={work.metadata}
                />

                <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                    <ProjectHighlights items={work.highlights} />
                    <TechBadges items={work.technologies} />
                </div>

                <ImageGallery images={work.images} />
            </div>
        </main>
    );
}
