import { motion, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import Head from "next/head";
import { HiMiniCalendarDays } from "react-icons/hi2";
import ScheduleForm from "@/components/ScheduleForm";

const SchedulePage = () => {
    return (
        <>
            <Head>
                <title>Schedule a Meeting | Ahmed Hamdy — Full Stack Engineer</title>
                <meta
                    name="description"
                    content="Book a 1-on-1 meeting with Ahmed Hamdy, Full Stack Engineer. Pick a time that works for you — a Google Calendar invite and Meet link will be sent automatically."
                />
                <link rel="canonical" href="https://ahmedhamdy101.is-a.dev/schedule" />
            </Head>

            <div className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-[#020204]">
                <Circles />

                <div className="w-full max-w-2xl z-10 pt-16">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-6"
                        >
                            <HiMiniCalendarDays className="text-red-400 text-base" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300">
                                30-day availability
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeIn("down", 0.2) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter"
                        >
                            Schedule a Call
                        </motion.h1>
                        <motion.p
                            variants={fadeIn("down", 0.3) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            className="text-gray-400 text-lg max-w-xl mx-auto font-light tracking-tight"
                        >
                            Pick a date and time — a Google Calendar invite with a Meet link lands in
                            your inbox instantly.
                        </motion.p>
                    </div>

                    {/* Form Component */}
                    <ScheduleForm />
                </div>
            </div>
        </>
    );
};

export default SchedulePage;
