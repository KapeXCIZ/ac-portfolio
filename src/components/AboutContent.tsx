'use client'
import Link from "next/link";
// import { Badge } from "./ui/badge";
import { CaretDoubleDownIcon /*, CompassToolIcon, DatabaseIcon*/ } from "@phosphor-icons/react";
// import { ReactIcon } from "./icons/ReactIcon";
// import { NextIcon } from "./icons/NextIcon";
// import { HtmlIcon } from "./icons/HtmlIcon";
// import { JsIcon } from "./icons/JsIcon";
// import { TsIcon } from "./icons/TsIcon";
// import { CssIcon } from "./icons/CssIcon";
// import { TwIcon } from "./icons/TwIcon";
// import { JavaIcon } from "./icons/JavaIcon";
// import { SqlIcon } from "./icons/SqlIcon";
// import { NodeIcon } from "./icons/NodeIcon";
// import { FigmaIcon } from "./icons/FigmaIcon";
// import { VercelIcon } from "./icons/VercelIcon";
// import { PsIcon } from "./icons/PsIcon";
// import { LrIcon } from "./icons/LrIcon";

export default function AboutContent() {
    return (
        <div className="w-full  bg-background-2 backdrop-blur-2xl border-t  z-0   px-10 md:px-16 lg:px-20 rounded-t-[4em] md:rounded-t-[6em] lg:rounded-t-[8em] xl:rounded-t-[10em] py-10 pt-10 flex items-center justify-center gap-8 flex-col mx-auto ">
            <div className="container ">
                <CaretDoubleDownIcon className="text-5xl mx-auto opacity-30 mb-22 xl:mb-30 animate-bounce animation-duration-[2.5s]" />
                <section className="flex gap-4 flex-col pb-16">
                    <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif">Get to know me</h1>
                    <p className="font text-2xl lg:text-3xl text-secondary-foreground/60 text-justify">I’m Alessio Capecchi, a Computer Science student at the <Link className="underline decoration-2 underline-offset-4 decoration-accent-400/60 hover:decoration-accent-500 " href={"https://www.unipi.it/"}>University of Pisa</Link>  and aspiring web developer. My approach blends technical precision with a creative eye, shaped by my passion for photography. Just as I frame light and perspective through the lens, I design and build digital experiences that are both functional and visually engaging.</p>
                </section>
                <section className="flex flex-col gap-4">
                    <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif">Skills and tools</h2>
                    <div className="h-[1000px]"></div>
                </section>
            </div>

        </div>
    )
};
