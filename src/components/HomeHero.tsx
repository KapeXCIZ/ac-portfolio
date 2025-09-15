'use client'

import CustomButton from "./CustomButton";
import Link from "next/link";
import Typewrite from "./Typewrite";

export default function HomeHero() {


    return (
        <section className="container mx-auto flex items-center justify-center my-10 gap-10 px-6 h-[70vh] relative">
            <span className="absolute w-full h-full bg-[url(/images/bg-logo-1.png)] bg-center brightness-5 dark:brightness-10 dark:md:brightness-8  invert dark:invert-0 mask-radial-[60%_60%] mask-radial-from-10%   -z-5 " />
            <div className="flex flex-col gap-8 py-8 text-center ">
                <span className="spotlight-text">
                    <h1 className="font-deco text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.125em] ">Hi, I&#39;m <span className="underline decoration-accent-400 decoration-[4px] underline-offset-8 hover:decoration-wavy ">Alessio Capecchi</span><br /><span className="font-serif text-accent-[--foreground]">Web <Typewrite phrases={["Developer.", "Wizard.", "Designer."]} period={200} id={1} /></span></h1>
                    <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[200]">I build <span className="">clean</span>, fast, user-focused web applications</h2>
                </span>
                <div className="w-full flex justify-center items-center gap-4 pt-4 *:text-xl">
                    <Link href={"/projects"} >
                        <CustomButton variant="glow" className={""}>Projects</CustomButton>
                    </Link>
                    <Link href={"/about"} >
                        <CustomButton variant="outline" className={""}>About</CustomButton>
                    </Link>
                </div>
            </div>
        </section>
    )
};
