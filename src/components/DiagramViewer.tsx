"use client";

import { useState } from "react";

interface DiagramItem {
    label: string;
    src: string;
}

interface DiagramViewerProps {
    diagrams: DiagramItem[];
    accent: string;
}

export default function DiagramViewer({ diagrams, accent }: DiagramViewerProps) {
    const [active, setActive] = useState(0);

    if (!diagrams.length) return null;
    const current = diagrams[active];

    return (
        <div className="glass-panel rounded-[2rem] overflow-hidden">
            <div className="flex flex-wrap gap-2 p-5 border-b border-white/[0.06]">
                {diagrams.map((d, i) => (
                    <button
                        key={d.src}
                        onClick={() => setActive(i)}
                        className={`px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-300 border ${
                            i === active
                                ? "text-white border-transparent"
                                : "text-gray-500 border-white/[0.08] hover:text-gray-300 hover:border-white/20"
                        }`}
                        style={i === active ? { background: accent } : undefined}
                    >
                        {d.label}
                    </button>
                ))}
            </div>

            <a
                href={current.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full bg-white/[0.02] p-6 sm:p-10 max-h-[70vh] overflow-auto"
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={current.src} alt={current.label} className="w-full h-auto mx-auto" />
            </a>

            <p className="text-center text-gray-600 text-[10px] font-medium px-8 py-5">
                Click the diagram to open it full size
            </p>
        </div>
    );
}
