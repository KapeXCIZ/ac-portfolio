'use client'

import { ReactNode, useEffect, useRef } from "react"
import { createTimeline, stagger, splitText, animate, spring } from 'animejs';
import { useInView } from "motion/react";



interface AnimeTextProps {
    children: ReactNode;
    className?: string;
}

export default function AnimeText({ children, className }: AnimeTextProps) {
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(paragraphRef, { once: true });

    useEffect(() => {
        // Verifichiamo che l'elemento esista (non sia null)
        if (paragraphRef.current && isInView) {
            const split = splitText(paragraphRef.current);
            split.addEffect(({ lines, words, chars }) => animate([lines, words, chars], {

            }));
            createTimeline({
                loop: false,
                defaults: { ease: spring({ bounce: .4, duration: 350 }), duration: 750 }
            })
                .add(split.words, {
                    y: [() => '100%', '0%'],
                    opacity: [() => '0', '100%'],
                }, stagger(50))
                .init();
        }
    }, [isInView]);


    return (
        <p className={className} ref={paragraphRef}>
            {children}
        </p>
    )
};
