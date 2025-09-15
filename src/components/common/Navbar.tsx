'use client'

import Link from "next/link";
import Logo from "../Logo";
import { ModeToggle } from "../ModeToggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HueSlider from "../HueSlider";


export default function Navbar() {
    const currPage = usePathname();
    const [currentHue, setCurrentHue] = useState<number>(310);

    // Slider passes an array of numbers; take the first value
    const handleChange = (value: number[]) => {
        const v = value?.[0];
        if (typeof v === 'number') setCurrentHue(v);
        console.log(currentHue);
    }

    useEffect(() => {
        const root = document.querySelector<HTMLElement>(':root');
        root?.style.setProperty('--hue', String(currentHue));
    }, [currentHue])

    return (
        <div className="h-[10vh] md:h-20  position-sticky top-0 flex  justify-between items-center w-full container mx-auto py-4 px-4 ">
            <Link href={"/"} className="h-3/4 shine active:*:shadow">
                <Logo className="h-full" />
            </Link>
            <div className="flex flex-row gap-4 text-md md:text-lg ">
                <Link href={"/home"} className={cn("underlineHover  active:scale-90  transition-[scale] duration-150 ease-in-out ", currPage == "/home" ? "underlineHoverActive" : "")}>
                    Home
                </Link>
                <Link href={"/projects"} className={cn("underlineHover active:scale-90  transition-[scale] duration-150 ease-in-out", currPage == "/projects" ? "underlineHoverActive" : "")}>
                    Projects
                </Link>
                <Link href={"/about"} className={cn("underlineHover active:scale-90  transition-[scale] duration-150 ease-in-out ", currPage == "/about" ? "underlineHoverActive" : "")}>
                    About
                </Link>
            </div>
            <span className="flex justify-center items-center gap-2">
                <HueSlider hue={currentHue} onValueChange={handleChange} />
                <ModeToggle />
            </span>
        </div >
    )
};
