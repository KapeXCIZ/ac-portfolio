'use client'
import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { CaretDoubleDownIcon, CompassToolIcon, DatabaseIcon } from "@phosphor-icons/react";
import { ReactIcon } from "./icons/ReactIcon";
import { NextIcon } from "./icons/NextIcon";
import { HtmlIcon } from "./icons/HtmlIcon";
import { JsIcon } from "./icons/JsIcon";
import { TsIcon } from "./icons/TsIcon";
import { CssIcon } from "./icons/CssIcon";
import { TwIcon } from "./icons/TwIcon";
import { JavaIcon } from "./icons/JavaIcon";
import { SqlIcon } from "./icons/SqlIcon";
import { NodeIcon } from "./icons/NodeIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import { VercelIcon } from "./icons/VercelIcon";
import { PsIcon } from "./icons/PsIcon";
import { LrIcon } from "./icons/LrIcon";

export default function AboutContent() {
    return (
        <div className="w-full  bg-background-2 backdrop-blur-2xl border-t  z-0   px-10 md:px-16 lg:px-20 rounded-t-[4em] md:rounded-t-[6em] lg:rounded-t-[8em] xl:rounded-t-[10em] py-10 pt-10 flex items-center justify-center gap-8 flex-col mx-auto ">
            <div className="container ">
                <CaretDoubleDownIcon className="text-5xl mx-auto opacity-30 mb-22 xl:mb-30 animate-bounce animation-duration-[2.5s]" />
                <section className="flex gap-4 flex-col pb-16">
                    <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif">Get to know me</h1>
                    <p className="font-thin text-2xl lg:text-3xl text-secondary-foreground/90 text-justify">I’m Alessio Capecchi, a Computer Science student at the <Link className="underline decoration-2 underline-offset-4 decoration-accent-400/60 hover:decoration-accent-500 " href={"https://www.unipi.it/"}>University of Pisa</Link>  and aspiring web developer. My approach blends technical precision with a creative eye, shaped by my passion for photography. Just as I frame light and perspective through the lens, I design and build digital experiences that are both functional and visually engaging.</p>
                </section>
                <section className="flex flex-col gap-4">
                    <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif">Skills and tools</h2>
                    <div className="grid grid-cols-3 max-w-9/12 mx-auto gap-10">
                        <div className="bg-gradient-to-t from-accent-450/30 to-accent-900/50 border border-accent-100/20  rounded-4xl">
                            <Image src={"/images/about/1.png"} height={5530} width={3122} alt="satisfied alessio" className="" />
                        </div>
                        <div className="grid   grid-cols-1 col-span-2 gap-1 md:gap-4 lg:gap-6 justify-center items-center font-mono *:bg-foreground/5">
                            <div className="border backdrop-blur-3xl rounded-4xl h-fit min-h-full p-4 ">
                                <h3 className="text-2xl font-mono w-fit mx-auto mb-4 flex flex-row justify-center items-center gap-1 -rotate-90 absolute -left-21 top-1/2 text-foreground/20 -translate-y-1/2">FRONT-END</h3>
                                <div className="flex flex-col gap-2 justify-center items-start *:bg-accent-200/80 *:text-2xl *:text-black">
                                    <Badge ><ReactIcon />React.js</Badge>
                                    <Badge><NextIcon /> Next.js</Badge>
                                    <Badge><HtmlIcon /> HTML</Badge>
                                    <Badge><JsIcon /> Javascript</Badge>
                                    <Badge><TsIcon /> Typescript</Badge>
                                    <Badge><CssIcon /> CSS</Badge>
                                    <Badge><TwIcon /> Tailwind.css</Badge>

                                </div>
                            </div>
                            <div className="border backdrop-blur-3xl rounded-4xl h-fit min-h-full p-4 ">
                                <h3 className="text-2xl font-sans w-fit mx-auto mb-4 flex flex-row justify-center items-center gap-1"><DatabaseIcon />BACK-END</h3>
                                <div className="flex flex-wrap gap-2 justify-center items-center">
                                    <Badge><JavaIcon /> Java</Badge>
                                    <Badge><SqlIcon />SQL</Badge>
                                    <Badge><NodeIcon /> Node.js</Badge>
                                </div>
                            </div>
                            <div className="border backdrop-blur-3xl rounded-4xl h-fit min-h-full p-4">
                                <h3 className="text-2xl font-sans w-fit mx-auto mb-4 flex flex-row justify-center items-center gap-1"><CompassToolIcon />OTHER</h3>
                                <div className="flex flex-wrap gap-2 justify-center items-center">
                                    <Badge ><FigmaIcon /> Figma</Badge>
                                    <Badge><VercelIcon className="dark:invert-0 invert-100" /> Vercel</Badge>
                                    <Badge><PsIcon /> Photoshop</Badge>
                                    <Badge><LrIcon /> Lightroom</Badge>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>

        </div>
    )
};
