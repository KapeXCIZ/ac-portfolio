'use client'

import { CopyrightIcon, SparkleIcon } from "@phosphor-icons/react"


export default function Footer() {
    const date = new Date();


    return (
        <>
            <div className="w-full flex justify-between flex-col gap-3 sm:gap-0 sm:flex-row py-4 px-10  text-foreground/50">
                <div className=" flex flex-row gap-1 items-center font-light">
                    <h1>ALESSIO CAPECCHI</h1>
                    <CopyrightIcon />
                    <h1>{date.getFullYear()}</h1>
                </div>
                <div className="flex flex-row gap-1 items-center font-light">
                    <h1>DESIGN & DEV</h1>
                    <SparkleIcon />
                    <h1>ALESSIO CAPECCHI</h1>
                </div>
            </div>
        </>
    )
}