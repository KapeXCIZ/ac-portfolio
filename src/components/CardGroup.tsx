'use client'

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react';

// Images from Figma
import Image from 'next/image';
import CustomButton from './CustomButton';
import { Link } from '@/i18n/navigation';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface CardGroupProps {
    leftImg: string;
    middleImg: string;
    rightImg: string;
    url: string;
    translations: string,
}

export default function CardGroup({ leftImg, middleImg, rightImg, url, translations }: CardGroupProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const rawMouseX = useMotionValue(0);
    const rawMouseY = useMotionValue(0);
    const t = useTranslations(translations);

    const mouseX = useSpring(rawMouseX, { stiffness: 80, damping: 30 });
    const mouseY = useSpring(rawMouseY, { stiffness: 80, damping: 30 });
    const mouseXdamp = useSpring(rawMouseX, { stiffness: 80, damping: 60 });
    const mouseYdamp = useSpring(rawMouseY, { stiffness: 80, damping: 60 });


    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            rawMouseX.set(x * 15);
            rawMouseY.set(y * 15);
        };

        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, [rawMouseX, rawMouseY]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        skipInitialAnimation: true,
        stiffness: 50,
        duration: 300,
        damping: 20,
    });



    // Parallax:
    // Middle card is normal (no offset relative to container)
    // Left card is faster (moves up more)
    const leftY = useTransform(scaleX, [0, 1], [130, -130]);
    // Right card is slower (moves up less, appearing to lag or move down relative to others)
    const rightY = useTransform(scaleX, [0, 1], [-100, 110]);

    const leftYCombined = useTransform(
        [leftY, mouseY],
        ([ly, my]: number[]) => ly + my
    );

    const rightYCombined = useTransform(
        [rightY, mouseY],
        ([ry, my]: number[]) => ry + my
    );

    return (
        <div ref={containerRef} className="relative w-full max-w-7xl mx-auto  flex flex-col items-center justify-center py-10">
            <span className={cn("absolute size-[90vw] sm:size-[70vw] max-w-[1000px] max-h-[1000px] md:size-[60vw] lg:size-[50vw]  bg-accent-500/25  top-1/2  -translate-y-1/2 rounded-full mask-radial-[50%_50%] mask-radial-from-0%  -z-50 hidden lg:block ")} />
            <div className='flex justify-center '>
                <motion.span style={{ x: mouseX, y: mouseY }} className='z-10 w-fit  shadow-xl/5 mx-16 text-center p-4 px-10 rounded-full  bg-background/70 dark:bg-background/40 backdrop-blur-md border m-6 text-2xl lg:text-4xl font-deco'>{t("h1")} <span className='underline hover:decoration-wavy whitespace-nowrap underline-offset-2 decoration-2 decoration-accent-500'>{t('h2')}</span></motion.span>
            </div>
            <div className="relative w-full h-full flex items-center justify-center">

                {/* Left Card - Tilted, less opaque, faster scroll */}
                <motion.div
                    style={{
                        y: leftYCombined,
                        x: mouseX,       // mouse orizzontale
                    }}
                    className="absolute left-[5%] md:left-[10%] z-0 -rotate-15 brightness-90 pointer-events-none"
                >
                    <div className="w-[200px] md:w-[500px] border aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-accent-500/10">
                        <Image width={1000} height={1000} src={leftImg} alt="Left project" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                {/* Right Card - Tilted, less opaque, slower scroll */}
                <motion.div
                    style={{
                        y: rightYCombined,
                        x: mouseX,       // mouse orizzontale
                    }}
                    className="absolute right-[5%] md:right-[10%] z-0 rotate-15 brightness-80 pointer-events-none"
                >
                    <div className="w-[225px] md:w-[550px] border aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-accent-500/10">
                        <Image width={1000} height={1000} src={rightImg} alt="Right project" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                {/* Middle Card - Normal scroll, prominent */}
                <motion.div
                    style={{
                        y: mouseYdamp,
                        x: mouseXdamp,       // mouse orizzontale
                    }}
                    className="relative z-10">
                    <div className="w-[300px] md:w-[700px] border aspect-4/3  rounded-3xl overflow-hidden shadow-2xl shadow-accent-500/20 ">
                        <Image width={1000} height={1000} src={middleImg} alt="Main project" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </div>

            {/* Visit Button with Glow */}
            <div className="relative mt-10 z-20 flex flex-row gap-3">
                <Link href={url} >
                    <CustomButton variant='glow' className="flex justify-center items-center gap-2"><ArrowUpRightIcon weight="bold" />Visit</CustomButton>
                </Link>
            </div>
        </div>
    );
};


export function Section() {
    return (<>
        <section className="relative w-full min-h-screen overflow-hidden">
            <div className="relative z-10 md:pt-10 flex flex-col items-center">
                {/* First Section */}
                <CardGroup
                    middleImg={"/images/projects/t&t-1.png"}
                    leftImg={"/images/projects/t&t-2.png"}
                    rightImg={"/images/projects/t&t-3.png"}
                    url="https://www.teachandtaste.it/"
                    translations='projects.1'
                />

                {/* Spacer */}
                <div className="h-16 md:h-32" />

                {/* Second Section */}
                <CardGroup
                    middleImg={"/images/projects/ag-1.png"}
                    leftImg={"/images/projects/ag-2.png"}
                    rightImg={"/images/projects/ag-3.png"}
                    url="https://www.adreanigiovanni.com/"
                    translations='projects.2'
                />

                {/* Footer Padding */}
                <div className="h-32 md:h-64" />
            </div>
        </section>
    </>)
}