import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Transition from "@/components/Transition";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <Layout>
            <AnimatePresence mode="wait">
                <div key={router.route} className="h-full relative">
                    <Transition />
                    <Component {...pageProps} />
                </div>
            </AnimatePresence>
        </Layout>
    );
}