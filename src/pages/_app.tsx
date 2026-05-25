import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Transition from "@/components/Transition";
import { AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta",
    weight: "variable",
});

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <div className={`${plusJakarta.variable} font-sans`}>
            <Layout>
                <AnimatePresence mode="wait">
                    <div key={router.route} className="h-full relative">
                        <Transition />
                        <Component {...pageProps} />
                    </div>
                </AnimatePresence>
            </Layout>
        </div>
    );
}