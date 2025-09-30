'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutHero() {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const margin = 180;
    const elements = [];
    const nElements = 4;
    const opacity = .6;
    const percentage = (100 / nElements) * opacity;
    useEffect(() => {
        window.setTimeout(() => {
            setCollapsed(false);
        }, 500)
    }, [setCollapsed]);

    for (let i = 0; i < nElements; i++) {
        elements.push(<span key={i} style={{ marginBlockStart: `${margin * i}px`, opacity: `${(nElements - i) * percentage}%`, zIndex: nElements - i }} className={` absolute  transition-all duration-1200 font-deco text-[240px] tracking-[0] leading-[1em] ease-in-out pointer-events-none select-none left-1/2 -translate-x-1/2 ms-[.125em]`} >ALESSIO</span>);
    }

    return (
        <div className="relative  overflow-y-hidden w-full flex flex-col justify-start items-center max-w-screen overflow-x-hidden">
            <div className={cn(" flex flex-col   w-full h-full   *:tracking-[.125em] *:md:tracking-[.175em]  *:xl:tracking-[.25em]  -z-50 ", collapsed ? "*:m-0! *:tracking-[0em] *:md:tracking-[0em] *:xl:tracking-[0em] " : "")}>
                {elements}
            </div>

            <div className="relative isolate w-fit ">
                <Image src={"/images/about/2.png"} width={1000} height={1500} alt="Thoughtful Alessio" className={cn("w-full md:h-[75vh] px-4  saturate-100 transition-all duration-600  max-h-[800px]  brightness-115 dark:brightness-100 opacity-100 peer ", collapsed ? "  opacity-95 dark:brightness-95  " : "")} />
                <span className="w-[120%] h-[90%] bg-accent-450/20 dark:bg-accent-550/15 peer-hover:bg-accent-450/40 peer-hover:dark:bg-accent-550/35 ease-in-out transition duration-700 rounded-[100%] blur-[100px] absolute top-2/3 -translate-y-1/2 left-1/2 -translate-x-1/2  -z-10 " />
            </div>
        </div>
    )
};
