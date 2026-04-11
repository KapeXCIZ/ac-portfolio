'use client'

import { Link, usePathname } from "@/i18n/navigation";
import Logo from "../Logo";
import { ModeToggle } from "../ModeToggle";
import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";
import HueSlider from "../HueSlider";
import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, ReadCvLogoIcon } from "@phosphor-icons/react";
import { useTranslations } from "use-intl";
import CustomButton from "../CustomButton";


export default function Navbar() {
    const currPage = usePathname();
    const [currentHue, setCurrentHue] = useState<number>(220);
    const [isScrolled, setIsScrolled] = useState(false);
    const locale = useTranslations("navbar")

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        setIsScrolled(window.scrollY > 40);


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
        <>
            <nav className={cn("py-4 px-0 mx:px-4 fixed w-full h-20 top-0 z-50 duration-[.8s] border-b border-transparent transition-all ", isScrolled ? "backdrop-blur-lg bg-background/65 border-white-400/25 shadow-2xl dark:shadow-accent-600/15 shadow-accent-400/10" : "")}>
                <div className="h-full flex grid-cols-3 container justify-between relative items-center w-full  mx-auto z-50 px-4" >
                    <div className="hidden sm:block h-3/4  flex-initial basis-3xs">
                        <Link href={"/"} className="w-fit">
                            <Logo className="h-full  opacity-90 hover:opacity-100 transition ease-in-out" />
                        </Link>
                    </div>
                    <div className="flex flex-row mx-auto flex-none gap-4 text-md md:text-lg ">
                        <Link href={"/"} className={cn("underlineHover  active:scale-90  transition-[scale] duration-150 ease-in-out ", currPage == "/" ? "underlineHoverActive" : "")}>
                            {locale("home")}
                        </Link>
                        <Link href={"/projects"} className={cn("underlineHover active:scale-90  transition-[scale] duration-150 ease-in-out", currPage == "/projects" ? "underlineHoverActive" : "")}>
                            {locale("projects")}
                        </Link>
                        <Link href={"/about"} className={cn("underlineHover active:scale-90  transition-[scale] duration-150 ease-in-out ", currPage == "/about" ? "underlineHoverActive" : "")}>
                            {locale("about")}
                        </Link>
                        <Link href={"/links"} className={cn("underlineHover active:scale-90  transition-[scale] duration-150 ease-in-out ", currPage == "/links" ? "underlineHoverActive" : "")}>
                            {locale("links")}
                        </Link>
                    </div>
                    <span className="hidden sm:flex justify-end items-center flex-initial basis-3xs">
                        <div className=" justify-center items-center text-xl  me-3 hidden lg:flex  *:p-1 ">
                            <CustomButton variant="ghost">
                                <Link href={"/files/alessio-capecchi-cv.pdf"}>
                                    <ReadCvLogoIcon />
                                </Link>
                            </CustomButton>
                            <CustomButton variant="ghost">
                                <Link href={"https://www.linkedin.com/in/alessio-capecchi"}>
                                    <LinkedinLogoIcon />
                                </Link>
                            </CustomButton>
                            <CustomButton variant="ghost">
                                <Link href={"https://github.com/KapeXCIZ"} >
                                    <GithubLogoIcon />
                                </Link>
                            </CustomButton>
                            <CustomButton variant="ghost">
                                <a href="mailto:hello@alessiocapecchi.com">
                                    <EnvelopeSimpleIcon />
                                </a>
                            </CustomButton>
                        </div>
                        <HueSlider className="rounded-e-none" hue={currentHue} onValueChange={handleChange} />
                        <ModeToggle className="rounded-s-none" />
                    </span>

                </div >
            </nav >


        </>
    )
};
