import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-plus-jakarta",
    display: "swap",
    preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <div className={`${plusJakarta.variable} font-sans`}>
            <Layout>
                {/*
                  NO Transition component, NO mode="wait".
                  mode="popLayout" → new page mounts immediately,
                  exit fades concurrently — no blocked render.
                  duration 0.12s = imperceptible flash prevention only.
                */}
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={router.route}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.12, ease: "linear" }}
                        className="h-full relative"
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </div>
    );
}
