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
    const maxScrollBlur = 500;
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




    for (let i = 0; i < nElements; i++) {
        elements.push(<span key={i} style={{ marginBlockStart: `${margin * i}px`, opacity: `${(nElements - i) * percentage}%`, zIndex: nElements - i }} className={`absolute   duration-1200 font-deco text-[240px] tracking-[0] leading-[1em] ease-in-out pointer-events-none select-none left-1/2 -translate-x-1/2 ms-[.125em]`} >ALESSIO</span>);
    }

    return (
        <div className={cn("relative h-[75vh] max-h-[650px]  md:max-h-[800px] -z-40   overflow-y-hidden w-full flex flex-col justify-end items-center max-w-screen overflow-x-hidden transition duration-300 ease-in-out", !imageVisible ? "opacity-0" : "opacity-100")} >
            <div className="fixed h-[75vh] max-h-[650px] top-20 md:max-h-[800px]  w-full flex flex-col justify-start  items-center -z-10" style={{ filter: `blur(${imageBlur}px)` }}>

                <div aria-hidden className={cn(" flex flex-col absolute top-0  w-full h-full text-accent-700 dark:text-accent-200    *:tracking-[.125em] *:md:tracking-[.175em]  *:xl:tracking-[.25em]  -z-50 ", collapsed ? "*:m-0! *:tracking-[0em] *:md:tracking-[0em] *:xl:tracking-[0em] " : "")}>
                    {elements}
                </div>
                <div className={cn("relative isolate w-full h-full  opacity-100 transition-opacity duration-300 ", !imageVisible ? "opacity-0" : "")}>
                    <Image src={"/images/about/1.png"} width={1000} height={1500} alt="Thoughtful Alessio" className={cn("h-[600px] max-h-[70vh] md:h-[75vh]  px-4 absolute  left-1/2 w-auto  -translate-x-1/2 bottom-0    saturate-100 dark:saturate-85  duration-500 ease-in  md:max-h-[800px]  brightness-115 dark:brightness-100   peer opacity-100 -z-1 contrast-90 dark:contrast-110")} />
                    <Image src={"/images/about/1-blur.png"} width={20} height={30} alt="Thoughtful Alessio blur" loading="eager" className={cn(" md:h-[75vh] absolute px-4  contrast-0    w-fit left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2 duration-800  max-h-[800px]  brightness-100 dark:brightness-100 ease-in-out -z-2 saturate-0 blur-xl ", collapsed ? "opacity-0" : "opacity-75 dark:opacity-10")} />
                    <span className={cn("w-[65%] max-w-[500px] h-[80%] bg-accent-450/20 dark:bg-accent-550/15  ease-in-out transition duration-700 rounded-[100%] blur-[100px] absolute top-3/5 -translate-y-1/2 left-1/2 -translate-x-1/2  -z-10 ", collapsed ? "bg-accent-450/40 dark:bg-accent-550/35 blur-[140px]" : "")} />

                </div>
            </div>
        </div>
    )
};
