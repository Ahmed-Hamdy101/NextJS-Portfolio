import { motion, Variants } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Circles from "@/components/Circle";
import Head from "next/head";
import { useState, useMemo } from "react";
import {
    HiMiniCalendarDays,
    HiMiniClock,
    HiMiniCheckCircle,
    HiMiniVideoCamera,
    HiMiniArrowTopRightOnSquare,
} from "react-icons/hi2";

// ── helpers ────────────────────────────────────────────────────────────────────

/** Returns YYYY-MM-DD for today */
const todayStr = () => {
    const d = new Date();
    return d.toISOString().split("T")[0];
};

/** Returns YYYY-MM-DD for N days from now */
const maxDateStr = (days = 60) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split("T")[0];
};

const DURATIONS = [
    { label: "15 min", value: "15" },
    { label: "30 min", value: "30" },
    { label: "45 min", value: "45" },
    { label: "60 min", value: "60" },
];

/** Available time slots 09:00-20:00 every 30 min */
const TIME_SLOTS = Array.from({ length: 23 }, (_, i) => {
    const totalMins = 9 * 60 + i * 30;
    const h = Math.floor(totalMins / 60);
    const m = totalMins % 60;
    const value = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    const label = new Date(`1970-01-01T${value}:00`).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
    });
    return { value, label };
});

// ── types ─────────────────────────────────────────────────────────────────────

type Step = "form" | "success";

interface FormState {
    name: string;
    email: string;
    date: string;
    time: string;
    duration: string;
    note: string;
}

interface SuccessState {
    meetLink: string | null;
    calendarLink: string | null;
    name: string;
    date: string;
    time: string;
    duration: string;
}

// ── component ─────────────────────────────────────────────────────────────────

const SchedulePage = () => {
    const [step, setStep] = useState<Step>("form");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successData, setSuccessData] = useState<SuccessState | null>(null);

    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        date: "",
        time: "",
        duration: "30",
        note: "",
    });

    const set = (field: keyof FormState) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

    // Formatted labels for success screen
    const dateLabel = useMemo(() => {
        if (!form.date) return "";
        return new Date(`${form.date}T12:00:00`).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }, [form.date]);

    const timeLabel = useMemo(() => {
        if (!form.time) return "";
        return new Date(`1970-01-01T${form.time}:00`).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }, [form.time]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const res = await fetch("/api/schedule", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                }),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.error || "Scheduling failed.");
            }

            setSuccessData({
                meetLink: data.meetLink,
                calendarLink: data.calendarLink,
                name: form.name,
                date: form.date,
                time: form.time,
                duration: form.duration,
            });
            setStep("success");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

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

                    {/* ── FORM ─────────────────────────────────────────────────────── */}
                    {step === "form" && (
                        <motion.div
                            variants={fadeIn("up", 0.4) as unknown as Variants}
                            initial="hidden"
                            animate="show"
                            className="glass-panel rounded-[2rem] p-8 lg:p-12 shadow-2xl"
                        >
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {error && (
                                    <div className="p-4 rounded-xl text-xs font-black uppercase tracking-wider bg-red-500/10 border border-red-500/20 text-red-400">
                                        {error}
                                    </div>
                                )}

                                {/* Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block mb-2 text-xs font-black uppercase tracking-[0.15em] text-gray-400 group-focus-within:text-red-400 transition-colors duration-300">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={set("name")}
                                            placeholder="Your name"
                                            className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 text-white placeholder-gray-600 transition-all duration-300 text-sm font-light"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block mb-2 text-xs font-black uppercase tracking-[0.15em] text-gray-400 group-focus-within:text-red-400 transition-colors duration-300">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={set("email")}
                                            placeholder="your@email.com"
                                            className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 text-white placeholder-gray-600 transition-all duration-300 text-sm font-light"
                                        />
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="group">
                                    <label className="block mb-2 text-xs font-black uppercase tracking-[0.15em] text-gray-400 group-focus-within:text-red-400 transition-colors duration-300">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        value={form.date}
                                        onChange={set("date")}
                                        min={todayStr()}
                                        max={maxDateStr(60)}
                                        className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 text-white transition-all duration-300 text-sm font-light [color-scheme:dark]"
                                    />
                                </div>

                                {/* Time + Duration */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block mb-2 text-xs font-black uppercase tracking-[0.15em] text-gray-400 group-focus-within:text-red-400 transition-colors duration-300">
                                            Time Slot
                                        </label>
                                        <select
                                            required
                                            value={form.time}
                                            onChange={set("time")}
                                            className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 text-white transition-all duration-300 text-sm font-light appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="bg-[#09090b]">
                                                Select a time…
                                            </option>
                                            {TIME_SLOTS.map((slot) => (
                                                <option
                                                    key={slot.value}
                                                    value={slot.value}
                                                    className="bg-[#09090b]"
                                                >
                                                    {slot.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="group">
                                        <label className="block mb-2 text-xs font-black uppercase tracking-[0.15em] text-gray-400 group-focus-within:text-red-400 transition-colors duration-300">
                                            Duration
                                        </label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {DURATIONS.map((d) => (
                                                <button
                                                    key={d.value}
                                                    type="button"
                                                    onClick={() =>
                                                        setForm((prev) => ({ ...prev, duration: d.value }))
                                                    }
                                                    className={`py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 border ${
                                                        form.duration === d.value
                                                            ? "bg-gradient-to-r from-red-500/20 to-purple-600/20 border-red-500/40 text-red-400"
                                                            : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-gray-200 hover:border-white/20"
                                                    }`}
                                                >
                                                    {d.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Note */}
                                <div className="group">
                                    <label className="block mb-2 text-xs font-black uppercase tracking-[0.15em] text-gray-400 group-focus-within:text-red-400 transition-colors duration-300">
                                        Agenda / Note{" "}
                                        <span className="normal-case text-gray-600 font-normal ml-1">
                                            (optional)
                                        </span>
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={form.note}
                                        onChange={set("note")}
                                        placeholder="What would you like to discuss?"
                                        className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 text-white placeholder-gray-600 resize-none transition-all duration-300 text-sm font-light leading-relaxed"
                                    />
                                </div>

                                {/* Timezone note */}
                                <p className="text-gray-600 text-xs text-center">
                                    Times shown in your local timezone. A Google Meet link will be
                                    generated automatically.
                                </p>

                                {/* Submit */}
                                <motion.button
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white rounded-xl font-black uppercase tracking-[0.15em] text-sm shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-500 ${
                                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                >
                                    <HiMiniCalendarDays className={`text-lg ${isSubmitting ? "animate-pulse" : ""}`} />
                                    {isSubmitting ? "Scheduling…" : "Confirm Meeting"}
                                </motion.button>
                            </form>
                        </motion.div>
                    )}

                    {/* ── SUCCESS ───────────────────────────────────────────────────── */}
                    {step === "success" && successData && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="glass-panel rounded-[2rem] p-8 lg:p-12 shadow-2xl text-center"
                        >
                            <div className="flex justify-center mb-6">
                                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30">
                                    <HiMiniCheckCircle className="text-green-400 text-4xl" />
                                </span>
                            </div>

                            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
                                Meeting Confirmed!
                            </h2>
                            <p className="text-gray-400 text-sm mb-8 font-light">
                                A calendar invite and confirmation email have been sent to your inbox.
                            </p>

                            {/* Summary */}
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-8 text-left space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <HiMiniCalendarDays className="text-red-400 text-lg flex-shrink-0" />
                                    <span className="text-gray-300">{dateLabel}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <HiMiniClock className="text-purple-400 text-lg flex-shrink-0" />
                                    <span className="text-gray-300">
                                        {timeLabel} &nbsp;·&nbsp; {successData.duration} minutes
                                    </span>
                                </div>
                                {successData.meetLink && (
                                    <div className="flex items-center gap-3 text-sm">
                                        <HiMiniVideoCamera className="text-blue-400 text-lg flex-shrink-0" />
                                        <a
                                            href={successData.meetLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline underline-offset-2 truncate"
                                        >
                                            Join Google Meet
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                {successData.calendarLink && (
                                    <a
                                        href={successData.calendarLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-xl font-black uppercase tracking-[0.12em] text-xs shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300"
                                    >
                                        <HiMiniArrowTopRightOnSquare />
                                        View in Calendar
                                    </a>
                                )}
                                    <button
                                    onClick={() => {
                                        setStep("form");
                                        setForm({ name: "", email: "", date: "", time: "", duration: "30", note: "" });
                                        setSuccessData(null);
                                    }}
                                    className="flex-1 px-6 py-4 bg-white/[0.02] border border-white/10 text-gray-400 hover:text-gray-200 hover:border-white/20 rounded-xl font-black uppercase tracking-[0.12em] text-xs transition-all duration-300"
                                >
                                    Schedule Another
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SchedulePage;
