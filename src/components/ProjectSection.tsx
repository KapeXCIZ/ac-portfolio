'use client'

import Image from "next/image";
import { CustomNavLink } from "./CustomButton";
import { Badge } from "./ui/badge";


import { ArrowUpRightIcon, BriefcaseIcon, StarFourIcon } from "@phosphor-icons/react";
import Runner from "./Runner";
import { useRef } from "react";

import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import AnimeText from "./common/AnimeText";

interface ProjectSectionProps {
    runnerUp: string[];
    runnerDown: string[];
    imageSrc: string;
    imageAlt: string;
    projectUrl: string;
    itLabels: string[];
    enLabels: string[];
    translations: string;
    reverse?: boolean;
}

export default function ProjectSection({
    runnerUp,
    runnerDown,
    imageSrc,
    imageAlt,
    projectUrl,
    itLabels,
    enLabels,
    translations,
    reverse
}: ProjectSectionProps) {
    const t = useTranslations(translations);
    const locale = useLocale();


    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const scaleX = useSpring(scrollYProgress, {
        skipInitialAnimation: true,

        stiffness: 30,
    });

    const rot = useTransform(scaleX, [0, 1], [500, -500]);
    const rotRev = useTransform(scaleX, [0, 1], [-500, 500])

    return (
        <span className="relative w-fit mx-auto flex flex-col justify-center items-center mt-20">
            <span className={cn("absolute size-[90vw] sm:size-[70vw] max-w-[1000px] max-h-[1000px] md:size-[60vw] lg:size-[50vw]  bg-accent-500/25  top-1/2  -translate-y-1/2 rounded-full mask-radial-[50%_50%] mask-radial-from-0%  -z-50 hidden lg:block ", reverse ? "right-1/5 translate-x-1/3" : "left-1/5 -translate-x-1/3")} />

            <section ref={containerRef} className="bg-white/50 dark:bg-white/1 mx-5  px-4 md:px-8 lg:px-16 py-12  border-y  relative mask-x-from-95% lg:mask-x-from-92% mask-x-to-100% max-w-[1800px]  ">
                <Runner className="strokeme " words={runnerUp} />
                <div className="my-0 flex flex-col-reverse lg:grid lg:grid-cols-5 xl:grid-cols-4 gap-6 items-center justify-center">

                    <Image src={imageSrc} height={600} width={1000} alt={imageAlt} className={cn("dark:brightness-90 brightness-100 col-span-2", reverse ? "order-2" : "")} />
                    <div className="flex flex-col gap-3 items-center justify-center w-full mt-4 lg:mt-0  col-span-3 xl:col-span-2">
                        <p className="font-thin text-lg flex flex-row gap-2 items-center "><motion.span style={{ rotate: rot }}><StarFourIcon weight="thin" /></motion.span> {t("featured")} <motion.span style={{ rotate: rotRev }}><StarFourIcon weight="thin" /></motion.span></p>
                        <h1 className="text-center font-deco  tracking-tight  text-5xl md:text-6xl lg:text-7xl lg:leading-16 ">{t("h1")}<br /><span className="underline decoration-accent-400 decoration-[3px] underline-offset-8 hover:decoration-wavy">{t("h2")}</span></h1>
                        <AnimeText className="text-xl  lg:text-2xl  font-light mt-3 px-0 md:px-6 text-center">{t("desc")}</AnimeText>
                        <div className="flex gap-2 mt-3 md:*:text-sm *:text-muted-foreground flex-wrap items-center justify-center  *:bg-white/0 dark:*:bg-white/0 *:border-foreground/15 dark:*:border-white/15 z-1">
                            {
                                locale == "en"
                                    ? enLabels.map((el, index) => <Badge key={index} variant="outline">{el}</Badge>)
                                    : itLabels.map((el, index) => <Badge key={index} variant="outline">{el}</Badge>)
                            }
                        </div>
                        <div className="mx-auto mt-3 flex gap-3 text-normal">
                            <CustomNavLink href={projectUrl} variant="glow" className="flex justify-center items-center gap-2"><ArrowUpRightIcon weight="bold" />{t("b1")}</CustomNavLink>
                            <CustomNavLink href={"/about#form"} variant="outline" className="flex justify-center items-center gap-2 text-accent-400"><BriefcaseIcon weight="bold" />{t("b2")}</CustomNavLink>
                        </div>
                    </div>
                </div>
                <Runner words={runnerDown} reverse={true} />
            </section>
        </span >

    )
};
