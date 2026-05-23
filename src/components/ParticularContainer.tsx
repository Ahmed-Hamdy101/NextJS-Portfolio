import React, { useEffect, useRef } from "react";

/**
 * Performance optimizations:
 * 1. Batch all particle dots into ONE beginPath → fill call (eliminates N draw calls/frame)
 * 2. Spatial grid bucketing for connectParticles — O(n) instead of O(n²)
 * 3. Visibility API pauses animation when tab is hidden
 * 4. Debounced resize handler
 * 5. Reduced particle count on mobile
 */

const PARTICLE_COUNT_DESKTOP = 45;
const PARTICLE_COUNT_MOBILE = 22;
const CONNECTION_DISTANCE = 130;
const CELL_SIZE = CONNECTION_DISTANCE;

interface ParticleData {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

const ParticularContainer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let paused = false;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

        const particles: ParticleData[] = [];

        const initParticles = () => {
            particles.length = 0;
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.8,
                    speedX: (Math.random() - 0.5) * 0.4,
                    speedY: (Math.random() - 0.5) * 0.4,
                    opacity: Math.random() * 0.4 + 0.1,
                });
            }
        };
        initParticles();

        type Grid = Map<string, number[]>;

        const buildGrid = (): Grid => {
            const grid: Grid = new Map();
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const cx = Math.floor(p.x / CELL_SIZE);
                const cy = Math.floor(p.y / CELL_SIZE);
                const key = `${cx},${cy}`;
                if (!grid.has(key)) grid.set(key, []);
                grid.get(key)!.push(i);
            }
            return grid;
        };

        const connectParticles = () => {
            const grid = buildGrid();
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const cx = Math.floor(p.x / CELL_SIZE);
                const cy = Math.floor(p.y / CELL_SIZE);

                for (let nx = cx - 1; nx <= cx + 1; nx++) {
                    for (let ny = cy - 1; ny <= cy + 1; ny++) {
                        const neighbors = grid.get(`${nx},${ny}`);
                        if (!neighbors) continue;

                        for (const j of neighbors) {
                            if (j <= i) continue;
                            const q = particles[j];
                            const dx = p.x - q.x;
                            const dy = p.y - q.y;
                            const distSq = dx * dx + dy * dy;

                            if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
                                const alpha = 0.1 * (1 - Math.sqrt(distSq) / CONNECTION_DISTANCE);
                                ctx.strokeStyle = `rgba(147,51,234,${alpha.toFixed(3)})`;
                                ctx.beginPath();
                                ctx.moveTo(p.x, p.y);
                                ctx.lineTo(q.x, q.y);
                                ctx.stroke();
                            }
                        }
                    }
                }
            }
        };

        // Group particles by opacity bucket to minimize fillStyle changes
        const animate = () => {
            if (paused) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update positions first
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.x > canvas.width)  p.x = 0;
                if (p.x < 0)             p.x = canvas.width;
                if (p.y > canvas.height) p.y = 0;
                if (p.y < 0)             p.y = canvas.height;
            }

            // Batch draw all dots in ONE path per opacity group — massive draw call reduction
            // Sort into ~4 opacity buckets to limit fillStyle changes
            const buckets: Record<string, ParticleData[]> = {};
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const key = p.opacity.toFixed(1);
                if (!buckets[key]) buckets[key] = [];
                buckets[key].push(p);
            }

            for (const [opacityKey, group] of Object.entries(buckets)) {
                ctx.fillStyle = `rgba(239,68,68,${opacityKey})`;
                ctx.beginPath();
                for (const p of group) {
                    ctx.moveTo(p.x + p.size, p.y);
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                }
                ctx.fill();
            }

            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleVisibility = () => { paused = document.hidden; };
        document.addEventListener("visibilitychange", handleVisibility);

        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setCanvasSize();
                initParticles();
            }, 150);
        };
        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimer);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            aria-hidden="true"
            style={{ zIndex: 0 }}
        />
    );
};

export default ParticularContainer;
