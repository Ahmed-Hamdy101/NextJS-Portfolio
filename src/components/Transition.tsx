import React from 'react';
import { motion } from "framer-motion";

const Transition = () => {
    return (
        <>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{ x: "-100%", width: "100%" }}
                transition={{ duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{ x: "-100%", width: "100%" }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{ x: "-100%", width: "100%" }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }}
            />
        </>
    );
};

export default Transition;