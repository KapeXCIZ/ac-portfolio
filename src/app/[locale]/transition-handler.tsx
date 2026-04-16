'use client'

import { AnimatePresence } from "motion/react";
import { easeInOut, motion } from "framer-motion";
import { usePathname } from "@/i18n/navigation";
import FrozenRoute from "@/components/common/FrozenRoute";
import { ReactNode, useLayoutEffect } from "react";
import { useLenis } from "lenis/react";


export default function TransitionHandler({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const baseInitial = { opacity: 0 }
    const lenis = useLenis();
    const variants = {
        home: { ...baseInitial, filter: "blur(10px)", y: 20 },
        about: { ...baseInitial },
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    useLayoutEffect(() => {
        const hash = window.location.hash;
        if (hash && lenis) {
            const timeoutId = setTimeout(() => {
                lenis.scrollTo(hash, {
                    offset: -100,
                    duration: 1,
                    immediate: false,
                    easing: easeInOut
                });
            }, 900);
            return () => clearTimeout(timeoutId);
        }
    }, [pathname, lenis]);



    return (
        <AnimatePresence mode="wait" initial={true}>
            <motion.main
                key={pathname}
                initial={pathname !== '/about' ? variants.home : variants.about}
                animate={pathname !== '/about' ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 1 }}

                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="overscroll-auto mt-20 font-sans relate"
            >
                <FrozenRoute>
                    {children}
                </FrozenRoute>
            </motion.main>
        </AnimatePresence >
    );
}