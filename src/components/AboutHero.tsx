'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutHero() {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [imageBlur, setImageBlur] = useState<number>(0);
    const [imageVisible, setImageVisible] = useState<boolean>(true);
    const margin = 180;
    const elements = [];
    const nElements = 4;
    const opacity = .6;
    const percentage = (100 / nElements) * opacity;
    const maxScrollBlur = 730;
    const blurInverseRatio = 100;
    useEffect(() => {
        window.setTimeout(() => {
            setCollapsed(false);
        }, 500)
    }, [setCollapsed]);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY < maxScrollBlur) {
                setImageBlur(((window.scrollY / blurInverseRatio)));
            }
            setImageVisible(window.scrollY < maxScrollBlur);

        };
        if (window.scrollY < maxScrollBlur) {
            setImageBlur(((window.scrollY / blurInverseRatio)));
        }
        setImageVisible(window.scrollY < maxScrollBlur);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [setImageBlur]);


    useEffect(() => {
        const root = document.querySelector<HTMLElement>(':root');
        root?.style.setProperty('--about-hero-blur', String(imageBlur + "px"));
    }, [imageBlur])

    for (let i = 0; i < nElements; i++) {
        elements.push(<span key={i} style={{ marginBlockStart: `${margin * i}px`, opacity: `${(nElements - i) * percentage}%`, zIndex: nElements - i }} className={` absolute  transition-all duration-1200 font-deco text-[240px] tracking-[0] leading-[1em] ease-in-out pointer-events-none select-none left-1/2 -translate-x-1/2 ms-[.125em]`} >ALESSIO</span>);
    }

    return (
        <div className="relative h-[75vh] max-h-[800px]   overflow-y-hidden w-full flex flex-col justify-end items-center max-w-screen overflow-x-hidden " >
            <div className="fixed top-20 flex flex-col justify-start items-center h-full blur-(--about-hero-blur)">

                <div className={cn(" flex flex-col absolute top-0  w-full h-full   *:tracking-[.125em] *:md:tracking-[.175em]  *:xl:tracking-[.25em]  -z-50 ", collapsed ? "*:m-0! *:tracking-[0em] *:md:tracking-[0em] *:xl:tracking-[0em] " : "")}>
                    {elements}
                </div>

                <div className={cn("relative isolate w-fit h-full justify-end items-start flex opacity-100 transition-opacity duration-300", !imageVisible ? "opacity-0" : "")}>
                    <Image src={"/images/about/2-blur.png"} width={20} height={30} alt="Thoughtful Alessio blur" loading="eager" className={cn("w-full md:h-[75vh] absolute px-4 blur-lg   transition-all duration-600  max-h-[800px]  brightness-115 dark:brightness-100  saturate-150 ", collapsed ? "opacity-0" : "opacity-75 dark:opacity-100")} />
                    <Image src={"/images/about/2.png"} width={1000} height={1500} alt="Thoughtful Alessio" className={cn("w-full md:h-[75vh] px-4  bottom-0  saturate-100 transition-all duration-500 ease-in  max-h-[800px]  brightness-115 dark:brightness-100  peer opacity-100", collapsed ? "opacity-0" : "")} />

                    <span className={cn("w-[120%] h-[90%] bg-accent-450/20 dark:bg-accent-550/15 peer-hover:bg-accent-450/40 peer-hover:dark:bg-accent-550/35 ease-in-out transition duration-700 rounded-[100%] blur-[100px] absolute top-3/5 -translate-y-1/2 left-1/2 -translate-x-1/2  -z-10 ", collapsed ? "bg-accent-450/40 dark:bg-accent-550/35 blur-[140px]" : "")} />
                </div>
            </div>
        </div>
    )
};
