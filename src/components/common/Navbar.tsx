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
    const [currentHue, setCurrentHue] = useState<number>(220);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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
        <div className={cn("py-4 px-0 mx:px-4 sticky h-[80px] top-0 z-50 duration-[.8s] border-b border-transparent transition-all", isScrolled ? "backdrop-blur-lg bg-background/65 border-white-400/25 shadow-2xl dark:shadow-accent-600/15 shadow-accent-400/10" : "")}>
            <div className="h-full flex container justify-between items-center w-full  mx-auto z-50 px-4" >
                <Link href={"/"} className="h-3/4 shine active:*:shadow">
                    <Logo className="h-full" />
                </Link>
                <div className="flex flex-row gap-2 sm:gap-4 text-md md:text-lg ">
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
                <span className="flex justify-center items-center ">
                    <HueSlider className="rounded-e-none" hue={currentHue} onValueChange={handleChange} />
                    <ModeToggle className="rounded-s-none" />
                </span>
            </div >
        </div >
    )
};
