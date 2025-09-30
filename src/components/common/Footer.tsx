'use client'

import { CopyrightIcon, EnvelopeSimpleIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, SparkleIcon } from "@phosphor-icons/react"
import Link from "next/link";


export default function Footer() {
    const date = new Date();


    return (
        <>
            <div className="w-full flex flex-col   gap-2 md:gap-1 md:grid md:grid-cols-5 py-4 px-6  text-foreground/50 justify-between">
                <div className=" flex flex-row gap-1 items-center font-light order-2 md:order-1 col-span-2">
                    <h1>ALESSIO CAPECCHI</h1>
                    <CopyrightIcon />
                    <h1>{date.getFullYear()}</h1>
                </div>
                <div className="flex flex-row gap-2 justify-start md:justify-center text-2xl items-center  *:hover:text-foreground  *:transition-colors *:duration-300 *:ease-in-out order-1 md:order-2">
                    <Link href={"https://www.instagram.com/alessio_capecchi/"} >
                        <InstagramLogoIcon />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/alessio-capecchi-629a00270/"}>
                        <LinkedinLogoIcon />
                    </Link>
                    <Link href={"https://github.com/KapeXCIZ"} >
                        <GithubLogoIcon />
                    </Link>
                    <a href="mailto:alessio.capecchi.18@gmail.com">
                        <EnvelopeSimpleIcon />
                    </a>
                </div>
                <div className="flex flex-row gap-1 items-center md:justify-end font-light order-3 col-span-2 ">
                    <h1>DESIGN & DEV</h1>
                    <SparkleIcon />
                    <h1>ALESSIO CAPECCHI</h1>
                </div>
            </div>
        </>
    )
}