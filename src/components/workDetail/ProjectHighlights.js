export function ProjectHighlights({ items }) {
    if (!items?.length) return null;

    return (
        <section className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white">Highlights</h2>
            <ol className="mt-6 space-y-5 text-base text-gray-200">
                {items.map((item, index) => (
                    <li key={item} className="flex gap-4">
                        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--secondary-color)]">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <p>{item}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}

