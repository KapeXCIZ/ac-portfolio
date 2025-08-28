'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SelectSection() {
    const [devAnimating, setDevAnimating] = useState(false);
    const [photoAnimating, setPhotoAnimating] = useState(false);
    const [safari, setSafari] = useState(false);

    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); // blocca l’azione del link
        const target = e.currentTarget.getAttribute("href"); // "/photo.alessiocapecchi.com"
        // fai partire animazione qui (es. aggiungi una classe CSS)

        setTimeout(() => {
            if (target) (
                router.push(target));
        }, 600); // 0.5s = durata animazione
    };

    useEffect(() => {
        // Rileva Safari (desktop e mobile)
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (isSafari) {
            setSafari(true);
            document.querySelectorAll('.shadow-color').forEach(el => {
                (el as HTMLElement).style.display = 'none';
            });
        }
    }, []);

    return (
        <section className="flex justify-center flex-col px-4 lg:flex-row items-center text-body h-[90vh] gap-6 container mx-auto py-4 md:py-10 ">
            <a href="/about" onMouseEnter={() => router.prefetch("/about")} onClick={(e) => {
                setDevAnimating(!devAnimating);
                handleClick(e);
            }} className={cn("group cursor-pointer min-w-0 text-left overflow-visible dev-selection card h-full w-full flex flex-col justify-start gap-4 bg-accent-800 text-white/95  flex-[1] transition-[flex] hover:flex-[1.5] rounded-2xl ease-spring duration-(--spring-duration)  relative photography-selection selection  *:z-10", devAnimating ? "animating" : "", safari ? "shadow-xl shadow-accent-400/20 " : "")}>
                <span className="w-full h-full overflow-hidden p-10">
                    <h2 className="text-5xl xl:text-7xl font-deco group-hover:tracking-widest transition-all ease-spring duration-(--spring-duration) text-white text-shadow">WEB<br />DEVELOPMENT</h2>
                    <p className="text-2xl  text-white/0 group-hover:text-shadow transition ease-spring duration-(--spring-duration) group-hover:text-white">Clean code, Sharp pixels and User-first thinking.</p>
                </span>
                <span className="absolute w-full h-1/2 backdrop-blur-lg mask-to-t !z-[0] rounded-xl" />
                <div className="!absolute !-z-30 top-2 inset-0 shadow-color">
                    <Image
                        src="/images/dev-blur.jpg"
                        alt="photo blur"
                        fill
                        className="object-cover w-full h-full blur-md pointer-events-none -z-30 brightness-120"
                    />
                </div>
            </a>
            <a href="https://photo.alessiocapecchi.com/" onMouseEnter={() => router.prefetch("https://photo.alessiocapecchi.com/")} onClick={(e) => {
                setPhotoAnimating(!photoAnimating);
                handleClick(e);
            }} className={cn("group cursor-pointer min-w-0 text-left overflow-visible card h-full w-full flex flex-col justify-start gap-4 bg-accent-800 text-white/95  flex-[1] transition-[flex] hover:flex-[1.5] rounded-2xl ease-spring duration-(--spring-duration) relative photography-selection selection  *:z-10 ", photoAnimating ? "animating" : "", safari ? "shadow-xl shadow-accent-400/20" : "")}>
                <span className="w-full h-full overflow-hidden p-10">
                    <h2 className="text-5xl xl:text-7xl font-deco group-hover:tracking-widest transition-all ease-spring duration-(--spring-duration) text-white text-shadow">PHOTOGRAPY</h2>
                    <p className="text-2xl  text-white/0 group-hover:text-shadow transition ease-spring duration-(--spring-duration) group-hover:text-white">A visual journey through light, detail, and perspective.</p>
                </span >
                <span className="absolute w-full h-1/2 backdrop-blur-lg mask-to-t !z-[0] rounded-xl" />

                <div className="!absolute !-z-30 top-2 inset-0 shadow-color">
                    <Image
                        src="/images/foto-blur.jpg"
                        alt="photo blur"
                        fill
                        className="object-cover w-full h-full blur-md pointer-events-none -z-30 brightness-80 "
                    />
                </div>
            </a>
        </section>
    )
};
