import React from "react";
import { motion } from "framer-motion";

/**
 * Performance fix: replaced 3 overlapping full-screen animated divs with 1.
 * The original had 3 staggered layers all animating width + x simultaneously —
 * that's 3 compositor layers doing layout-triggering animations on every navigation.
 * Single layer with a cleaner easing achieves the same wipe effect at 1/3 the GPU cost.
 */
const Transition = () => {
    return (
        <motion.div
            className="fixed inset-0 z-30 bg-[#0a0a14] origin-right pointer-events-none"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: "left" }}
        />
    );
};

export default Transition;
