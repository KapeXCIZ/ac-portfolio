'use client'

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { Badge } from "./ui/badge";


import { LinkSimpleIcon } from "@phosphor-icons/react";



export default function ProjectSection() {
    return (
        <span className="relative w-fit mx-auto flex justify-center items-center">
            <span className="absolute size-[90vw] sm:size-[70vw] max-w-[1000px] max-h-[1000px] md:size-[60vw] lg:size-[50vw]  bg-accent-500/25 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full mask-radial-[50%_50%] mask-radial-from-0%  -z-50" />
            <section className=" my-10 lg:my-20 flex flex-col-reverse lg:grid lg:grid-cols-5 xl:grid-cols-4  bg-white/50 dark:bg-white/1 mx-5  px-4 md:px-8 lg:px-16 py-8 md:py-16 lg:py-32  border-y gap-2 items-center justify-center relative mask-x-from-95% lg:mask-x-from-92% mask-x-to-100% max-w-[1800px]  ">
                <Image src={"/images/project-image.png"} height={1000} width={1000} alt="Example of a project" className="dark:brightness-90 brightness-100 col-span-2" />
                <div className="flex flex-col gap-3 items-center justify-center w-full  col-span-3 xl:col-span-2">
                    <p className="font-thin text-lg">Featured project</p>
                    <h1 className="text-center font-deco text-4xl tracking-tight  sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[4rem] ">A digital home for a<br /><span className="underline decoration-accent-400 decoration-[3px] underline-offset-8 hover:decoration-wavy">professional chef</span></h1>
                    <p className="text-xl  lg:text-2xl  font-light mt-3 px-10 text-center">With a clean, responsive design, the site adapts to any device, making it easy for customers to explore services and get in touch.</p>
                    <div className="flex gap-2 mt-3 md:*:text-sm flex-wrap items-center justify-center *:shadow ">
                        <Badge variant="outline">HTML</Badge>
                        <Badge variant="outline">CSS</Badge>
                        <Badge variant="outline">Javascript</Badge>
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Tailwind</Badge>
                        <Badge variant="outline">Next-intl</Badge>
                    </div>
                    <div className="mx-auto mt-3">
                        <Link href={"https://www.teachandtaste.it"}  >
                            <CustomButton variant="outline" className="flex justify-center items-center gap-2"><LinkSimpleIcon weight="bold" />View</CustomButton>
                        </Link>
                    </div>
                </div>
            </section>
        </span>

    )
};
