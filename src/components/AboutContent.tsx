'use client'
import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { CaretDoubleDownIcon } from "@phosphor-icons/react";

export default function AboutContent() {
    return (
        <div className="w-full   bg-background backdrop-blur-2xl z-1 border-t mask-none  xl:mask-x-from-92% xl:mask-x-to-100% px-10 md:px-16 lg:px-20  2xl:container py-10 pt-10 flex gap-8 flex-col mx-auto ">
            <div className="container">
                <CaretDoubleDownIcon className="text-5xl mx-auto opacity-30 mb-22 xl:mb-30 animate-bounce animation-duration-[2.5s]" />
                <section className="flex gap-4 flex-col pb-16">
                    <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif">Get to know me</h1>
                    <p className="font-thin text-2xl lg:text-3xl text-secondary-foreground/90 text-justify">I’m Alessio Capecchi, a Computer Science student at the <Link className="underline decoration-2 underline-offset-4 decoration-accent-400/60 hover:decoration-accent-500" href={"https://www.unipi.it/"}>University of Pisa</Link>  and aspiring web developer. My approach blends technical precision with a creative eye, shaped by my passion for photography. Just as I frame light and perspective through the lens, I design and build digital experiences that are both functional and visually engaging.</p>
                </section>
                <section className="flex flex-col gap-4">
                    <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif">Skills and tools</h2>
                    <div className="grid grid-cols-3 max-w-9/12 mx-auto gap-6">

                        <div className="grid  grid-cols-1 col-span-2 gap-2 md:gap-4 lg:gap-8 justify-center items-center font-mono *:bg-foreground/5">
                            <div className="border backdrop-blur-3xl rounded-4xl h-fit min-h-full p-4 ">
                                <h3 className="text-2xl font-serif w-fit mx-auto mb-4">FRONT-END</h3>
                                <div className="flex flex-wrap gap-2 justify-center items-center">
                                    <Badge > React.js</Badge>
                                    <Badge>Next.js</Badge>
                                    <Badge>HTML</Badge>
                                    <Badge>Javascript</Badge>
                                    <Badge>Typescript</Badge>
                                    <Badge>CSS</Badge>
                                    <Badge>Tailwind.css</Badge>
                                </div>
                            </div>
                            <div className="border backdrop-blur-3xl rounded-4xl h-fit min-h-full p-4">
                                <h3 className="text-2xl font-serif w-fit mx-auto mb-4">BACK-END</h3>
                                <div className="flex flex-wrap gap-2 justify-center items-center">
                                    <Badge>Java</Badge>
                                    <Badge>SQL</Badge>
                                    <Badge>Node.js</Badge>
                                </div>
                            </div>
                            <div className="border backdrop-blur-3xl rounded-4xl h-fit min-h-full p-4">
                                <h3 className="text-2xl font-serif w-fit mx-auto mb-4">OTHER</h3>
                                <div className="flex flex-wrap gap-2 justify-center items-center">
                                    <Badge>Figma</Badge>
                                    <Badge>Vercel</Badge>
                                    <Badge>Photoshop</Badge>
                                    <Badge>Lightroom</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-t from-accent-450/30 to-accent-900/50 border border-accent-100/20  rounded-4xl">
                            <Image src={"/images/about/1.png"} height={5530} width={3122} alt="satisfied alessio" className="" />
                        </div>

                    </div>
                </section>
            </div>

        </div>
    )
};
