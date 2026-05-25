// Framer Motion animation variants
// Delays are intentionally small — large delays (0.3–0.8s) make pages feel
// slow even when the JS is already loaded and the component is mounted.

export const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number) => {
    return {
        hidden: {
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                // Cap delay at 0.2s max — longer delays make content invisible too long
                duration: 0.35,
                delay: Math.min(delay * 0.4, 0.2),
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    } as const;
};
