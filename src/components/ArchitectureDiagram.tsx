import { motion } from "framer-motion";
import { HiMiniArrowDown } from "react-icons/hi2";

interface ArchitectureDiagramProps {
    /** Ordered top-to-bottom layers, e.g. ["Client", "Fastify API", "OpenAI API"] */
    layers: string[];
    accent: string;
}

/**
 * Lightweight, dependency-free "flow" diagram for API-only projects that have
 * no UI screenshots to show. Renders each layer as a glass panel connected by
 * an arrow, styled with the project's accent color.
 */
const ArchitectureDiagram = ({ layers, accent }: ArchitectureDiagramProps) => {
    return (
        <div className="flex flex-col items-center gap-3 py-10 px-6">
            {layers.map((layer, i) => (
                <div key={layer} className="flex flex-col items-center gap-3 w-full max-w-sm">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="relative w-full rounded-2xl border px-6 py-4 text-center backdrop-blur-xl"
                        style={{
                            borderColor: accent,
                            background: "rgba(255,255,255,0.02)",
                        }}
                    >
                        <span className="text-sm font-black uppercase tracking-widest text-white">{layer}</span>
                        <div
                            className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.08]"
                            style={{ background: `radial-gradient(circle at 50% 0%, ${accent}, transparent 70%)` }}
                        />
                    </motion.div>
                    {i < layers.length - 1 && (
                        <HiMiniArrowDown className="text-lg" style={{ color: accent, opacity: 0.5 }} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ArchitectureDiagram;
