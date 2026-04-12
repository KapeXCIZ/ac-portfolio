'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react';

// Images from Figma
import Image from 'next/image';
import CustomButton from './CustomButton';
import { Link } from '@/i18n/navigation';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import { Badge } from './ui/badge';

interface CardGroupProps {
    leftImg: string;
    middleImg: string;
    rightImg: string;
    leftImgMobile: string;
    middleImgMobile: string;
    rightImgMobile: string;
    url: string;
    translations: string,
    labels: LabelObj;
}

interface LabelObj {
    enLabels: string[], itLabels: string[];
}

export default function CardGroup({ leftImg, middleImg, rightImg, leftImgMobile, middleImgMobile, rightImgMobile, url, labels, translations }: CardGroupProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const rawMouseX = useMotionValue(0);
    const rawMouseY = useMotionValue(0);
    const t = useTranslations(translations);
    const locale = useLocale();
    const { enLabels, itLabels } = labels;

    const mouseX = useSpring(rawMouseX, { stiffness: 80, damping: 30 });
    const mouseY = useSpring(rawMouseY, { stiffness: 80, damping: 30 });
    const mouseXdamp = useSpring(rawMouseX, { stiffness: 80, damping: 60 });
    const mouseYdamp = useSpring(rawMouseY, { stiffness: 80, damping: 60 });
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    }, []);


    useEffect(() => {
        if (isTouchDevice) return;
        const handleMouse = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            rawMouseX.set(x * 15);
            rawMouseY.set(y * 15);
        };

        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, [rawMouseX, rawMouseY, isTouchDevice]);

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
                <motion.span style={{ x: mouseX, y: mouseY }} className='z-10 w-fit  shadow-xl/5 mx-16 text-center py-3 md:py-4 px-6 md:px-10 rounded-full  bg-background/70 dark:bg-background/40 backdrop-blur-md border m-4 text-3xl lg:text-4xl font-deco'><span className='hidden md:inline-block'>{t("h1")}&nbsp;</span><span className='underline hover:decoration-wavy whitespace-nowrap underline-offset-2 decoration-2 decoration-accent-500 '>{t('h2')}</span></motion.span>
            </div>
            <Link href={url} className="relative w-full h-full flex items-center justify-center group">

                {/* Left Card - Tilted, less opaque, faster scroll */}
                <motion.div
                    style={{
                        y: leftYCombined,
                        x: mouseX,       // mouse orizzontale
                    }}
                    className="absolute left-[10%] sm:left-[15%] md:left-[10%]  z-0 -rotate-15 brightness-90 pointer-events-none"
                >
                    <div className="min-h-[300px] h-[45vh] max-h-[450px] lg:max-h-[700px] border aspect-1/2  md:aspect-4/3 rounded-4xl overflow-hidden shadow-2xl shadow-accent-500/10">
                        <Image width={500} height={500} src={leftImg} alt="Left project" className="w-full h-full object-cover object-top hidden md:block" />
                        <Image width={500} height={1000} src={leftImgMobile} alt="Left project" className="w-full h-full object-cover object-top block md:hidden" />

                    </div>
                </motion.div>

                {/* Right Card - Tilted, less opaque, slower scroll */}
                <motion.div
                    style={{
                        y: rightYCombined,
                        x: mouseX,       // mouse orizzontale
                    }}
                    className="absolute right-[10%] sm:right-[15%] md:right-[10%]  z-0 rotate-15 brightness-80 pointer-events-none"
                >
                    <div className="min-h-[350px] h-[50vh] max-h-[500px] lg:max-h-[750px]  border aspect-1/2  md:aspect-4/3 rounded-4xl overflow-hidden shadow-2xl shadow-accent-500/10">
                        <Image width={1000} height={1000} src={rightImg} alt="Right project" className="w-full h-full object-cover object-top hidden md:block" />
                        <Image width={550} height={1100} src={rightImgMobile} alt="Right project" className="w-full h-full object-cover object-top block md:hidden" />

                    </div>
                </motion.div>

                {/* Middle Card - Normal scroll, prominent */}
                <motion.div
                    style={{
                        y: mouseYdamp,
                        x: mouseXdamp,       // mouse orizzontale
                    }}
                    className="relative z-10">
                    <div className="min-h-[400px] h-[60vh] max-h-[550px] lg:max-h-[800px]   border   aspect-1/2  md:aspect-4/3  rounded-4xl overflow-hidden shadow-2xl shadow-accent-500/20 ">
                        <Image width={1000} height={1000} src={middleImg} alt="Main project" className="w-full h-full object-cover object-top hidden md:block" />
                        <Image width={700} height={1400} src={middleImgMobile} alt="Main project" className="w-full h-full object-cover object-top block md:hidden" />

                    </div>
                </motion.div>
            </Link>
            <motion.div
                style={{
                    y: mouseYdamp,
                    x: mouseXdamp,       // mouse orizzontale
                }}
                className="hidden md:flex gap-2 z-10 mt-3 md:*:text-sm *:text-foreground flex-wrap items-center justify-center  *:bg-background/70 *:shadow-xs *:backdrop-blur-md *:border-foreground/15 dark:*:border-white/15 ">
                {
                    locale == "en"
                        ? enLabels.map((el, index) => <Badge key={index} variant="outline">{el}</Badge>)
                        : itLabels.map((el, index) => <Badge key={index} variant="outline">{el}</Badge>)
                }
            </motion.div>
            {/* Visit Button with Glow */}
            <div className="relative mt-10 z-1 flex flex-row gap-3 ">
                <Link href={url} >
                    <CustomButton variant='glow' className="flex justify-center items-center gap-2"><ArrowUpRightIcon weight="bold" />Visit</CustomButton>
                </Link>
            </div>
        </div>
    );
};


export function Section({ projectLabels }: { projectLabels: LabelObj[] }) {
    return (
        <>
            <section className="relative w-full min-h-screen overflow-hidden">
                <div className="relative z-10 md:pt-10 flex flex-col items-center">
                    {/* First Section */}
                    <CardGroup
                        middleImg={"/images/projects/t&t-1.png"}
                        leftImg={"/images/projects/t&t-2.png"}
                        rightImg={"/images/projects/t&t-3.png"}
                        middleImgMobile={"/images/projects/t&t-1-mobile.png"}
                        leftImgMobile={"/images/projects/t&t-2-mobile.png"}
                        rightImgMobile={"/images/projects/t&t-3-mobile.png"}
                        url="https://www.teachandtaste.it/"
                        translations='projects.1'
                        labels={projectLabels[0]}
                    />

                    {/* Spacer */}
                    <div className=" md:h-32" />

                    {/* Second Section */}
                    <CardGroup
                        middleImg={"/images/projects/ag-1.png"}
                        leftImg={"/images/projects/ag-2.png"}
                        rightImg={"/images/projects/ag-3.png"}
                        middleImgMobile={"/images/projects/ag-1-mobile.png"}
                        leftImgMobile={"/images/projects/ag-2-mobile.png"}
                        rightImgMobile={"/images/projects/ag-3-mobile.png"}
                        url="https://www.adreanigiovanni.com/"
                        translations='projects.2'
                        labels={projectLabels[1]}
                    />

                    {/* Footer Padding */}
                    <div className="h-32 md:h-64" />
                </div>
            </section>
        </>)
}