// Framer Motion animation variants
// Perf: duration reduced from 1.2s → 0.5s; travel distance from 80px → 30px.
// Snappier perceived performance with same visual style.

export const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number) => {
    return {
        hidden: {
            y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
            x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.5,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    } as const;
};
