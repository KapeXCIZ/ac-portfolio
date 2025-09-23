'use client'

import Link from "next/link";
import CustomButton from "./CustomButton";
import { AtIcon, ReadCvLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function AboutTeaser() {
    return (
        <section className="container mx-auto my-50 flex justify-center items-center flex-col gap-6 relative">
            <span className="absolute w-[1200px] h-[600px] max-w-screen   bg-accent-500/25 left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full mask-radial-[50%_50%] mask-radial-from-0%  -z-50" />

            <Image src={"/images/imm-p-2.png"} height={200} width={200} alt="" className="w-[400px] mask-b-from-50% mask-b-to-90%  brightness-0 invert dark:invert-0 -top-28  absolute " />
            <h1 className="text-center font-sans text-4xl font-light z-1 ">Behind every project there’s curiosity, dedication, and a journey in progress.<br /><span className="italic font-serif">Discover who I am and what drives me to create.</span></h1>
            <div className="flex flex-row gap-2">
                <Link href={"/about"} className="z-0 text-lg">
                    <CustomButton className="flex gap-1 items-center justify-center -z-1 " variant="solid"><AtIcon />About</CustomButton>
                </Link>
                <Link href={"/files/CV.pdf"} target="_blank" className="z-0 text-lg">
                    <CustomButton className="flex gap-1 items-center justify-center -z-1 " variant="outline"><ReadCvLogoIcon />CV</CustomButton>
                </Link>
            </div>
        </section>
    )
};
