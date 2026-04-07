'use client'

import Image from "next/image"

export default function SingleProjectCard({ url, rotation, opacity, translate, alt }: { url: string, rotation: number, opacity: number, translate: number, alt: string }) {


    return (
        <div className="rounded-4xl">
            <Image src={url} alt={alt} className={`absolute rounded-4xl bg-cover  w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[${rotation}deg] opacity-[${opacity}%] translate-y-[${translate}]`} width={1000} height={600} />
        </div>
    )
};
