export function ProjectIntro({ title, description, metadata }) {
    return (
        <section className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                    Feature Project
                </p>
                <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                    {title}
                </h1>
                <p className="text-base text-gray-200 md:text-lg">{description}</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
                <dl className="space-y-4 text-sm text-gray-300">
                    {Object.entries(metadata).map(([key, value]) => (
                        <div
                            key={key}
                            className="flex items-center justify-between border-b border-white/5 pb-3 last:border-none last:pb-0"
                        >
                            <dt className="uppercase tracking-wider text-xs text-gray-400">
                                {key}
                            </dt>
                            <dd className="font-medium text-white">{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

