'use client'

import CustomButton from "./CustomButton";
import Link from "next/link";
import Typewrite from "./Typewrite";
import { AtIcon, BriefcaseIcon } from "@phosphor-icons/react";


export default function HomeHero() {


    return (
        <>
            <section className=" mx-auto flex items-center justify-center my-8 gap-10 px-6 h-[70vh] relative">
                <span className="absolute w-full h-full bg-[url(/images/bg-logo-1.png)] bg-center brightness-5 dark:brightness-10 opacity-70   invert dark:invert-0 mask-radial-[50%_60%] mask-radial-from-10% -z-5 " />
                <div className="container mx-auto">

                    <div className="flex flex-col gap-8 py-8 text-center ">
                        <span className="spotlight-text z-1">
                            <h1 className="font-deco text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.125em] relative text-foreground"><span className="relative">Hi</span>, I&#39;m <span className="underline decoration-accent-400 decoration-[4px] underline-offset-8 hover:decoration-wavy ">Alessio Capecchi</span><br /><span className="font-serif text-accent-[--foreground]">Web <Typewrite phrases={["Developer.", "Wizard.", "Designer.", "Magician."]} period={170} id={1} /></span></h1>
                            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[200]">I build <span className="font-thin ">clean</span>, <span className="italic">fast</span>, <span className="font-[400]">user-focused</span> web applications</h2>
                        </span>
                        <div className="w-full flex justify-center items-center gap-4 pt-4 *:text-xl *:z-0">
                            <Link href={"/projects"} >
                                <CustomButton variant="glow" className={"flex gap-1 -z-1"}><BriefcaseIcon /> Projects</CustomButton>
                            </Link>
                            <Link href={"/about"} >
                                <CustomButton variant="outline" className={"flex gap-1 -z-1"}><AtIcon /> About</CustomButton>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
};
