import Image from "next/image";

export function ImageGallery({ images }) {
    if (!images?.length) return null;

    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">Visuals</h2>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                    {String(images.length).padStart(2, "0")} Shots
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {images.map((src, index) => (
                    <figure
                        key={src}
                        className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0e1424] shadow-2xl ${
                            index === 0 ? "md:col-span-2" : ""
                        }`}
                    >
                        <div className="relative h-60 w-full md:h-80">
                            <Image
                                src={src}
                                alt="Project preview"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={index === 0}
                            />
                        </div>
                        <figcaption className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                            Shot {index + 1}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

