"use client";

import {
    CopyrightIcon,
    EnvelopeSimpleIcon,
    GithubLogoIcon,
    LinkedinLogoIcon,
    MoonIcon,
    ReadCvLogoIcon,
    SparkleIcon,
    SunIcon,
} from "@phosphor-icons/react";
import { Link as NavLink } from "@/i18n/navigation";
import ContextualLink from "../ContextualLink";
import Link from "next/link";
import { useTheme } from "next-themes";


export default function Footer() {
    const date = new Date();
    const { setTheme, theme } = useTheme();

    return (
        <footer className="w-full py-4 px-6 bg-background  z-50 relative">
            <ContextualLink />
            <button aria-label="Toggle language (IT/EN)" className="p-3 border rounded-full absolute md:hidden z-60 hover:bg-foreground/5 transition bottom-4 right-6 " onClick={() => setTheme(theme === "dark" ? "light" : "dark")} >
                {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </button>
            <div className="flex flex-col  z-50  gap-2 md:gap-1 md:grid md:grid-cols-5  relative text-foreground/50 justify-between">
                {/* <span className="w-full left-0 h-[150%] bottom-0 absolute opacity-25 dark:opacity-30 pointer-events-none  -z-20 reveal-bg">
                    <span className="w-full left-0 h-full bottom-0  absolute   -z-20 overflow-hidden ">
                        <span className="w-full left-0 h-full bottom-0 bg-topography absolute" />
                    </span>
                </span> */}
                <div className=" flex flex-row gap-1 items-center font-light order-2 md:order-1 col-span-2">
                    <h1>ALESSIO CAPECCHI</h1>
                    <CopyrightIcon />
                    <h1>{date.getFullYear()}</h1>
                </div>
                <div className="flex flex-row gap-2 justify-start md:justify-center text-2xl items-center  *:hover:text-foreground  *:transition-colors *:duration-300 *:ease-in-out order-1 md:order-2">
                    <Link aria-label="Open Alessio's CV" rel="noopener noreferrer" href={"/files/alessio-capecchi-cv.pdf"}>
                        <ReadCvLogoIcon weight="light" />
                    </Link>
                    <NavLink aria-label="Visit Alessio's Linkedin account" href={"https://www.linkedin.com/in/alessio-capecchi"}>
                        <LinkedinLogoIcon weight="light" />
                    </NavLink>
                    <NavLink aria-label="Visit Alessio's Github account" href={"https://github.com/KapeXCIZ"}>
                        <GithubLogoIcon weight="light" />
                    </NavLink>
                    <a aria-label="Send an email to hello@alessiocapecchi.com" href="mailto:hello@alessiocapecchi.com">
                        <EnvelopeSimpleIcon weight="light" />
                    </a>
                </div>
                <div className="flex flex-row gap-1 items-center md:justify-end font-light order-3 col-span-2 ">
                    <h1>DESIGN & DEV</h1>
                    <SparkleIcon />
                    <h1>ALESSIO CAPECCHI</h1>
                </div>
            </div>
        </footer>
    );
}
