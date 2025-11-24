export function TechBadges({ items }) {
    return (
        <section className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                Tech Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
                {items.map((item) => (
                    <span
                        key={item}
                        className="rounded-full border border-white/10 bg-gradient-to-r from-[var(--hint-color1)]/40 to-[var(--hint-color2)]/40 px-4 py-1 text-sm font-medium text-white shadow-[0_0_20px_rgba(234,34,100,0.25)]"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </section>
    );
}

