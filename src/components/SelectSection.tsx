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
            if (target) {

                router.push(target);
            }
        }, 600); // 0.5s = durata animazione
    };

    useEffect(() => {
        setDevAnimating(false);
        setPhotoAnimating(false);
    }, []);


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
        <section className="flex justify-center flex-col px-4 lg:flex-row items-center text-body h-[83vh] gap-6 container *:max-h-[1000px] mx-auto py-4 md:py-10 ">
            <span className="absolute w-full h-full bg-[url(/images/bg-logo-1.png)] bg-center brightness-5 dark:brightness-10 dark:md:brightness-8 opacity-75   invert dark:invert-0 mask-radial-[60%_60%] mask-radial-from-30%   -z-5 " />
            <span className="absolute w-full h-full bg-accent-500/10 mask-radial-[80%_60%] mask-radial-from-30%   -z-4 " />


            <a href="/home"
                onMouseEnter={() => router.prefetch("/home")}
                onClick={(e) => {
                    setDevAnimating(!devAnimating);
                    handleClick(e);
                }}
                className={cn("group min-w-0 text-left overflow-visible dev-selection card h-full w-full flex flex-col justify-start gap-4  text-white/95  flex-[1] transition-[flex] hover:flex-[1.5] rounded-2xl ease-spring duration-(--spring-duration)  relative photography-selection selection  *:z-10 box", devAnimating ? "animating" : "", safari ? "shadow-xl shadow-accent-1000/15 dark:shadow-accent-300/5 " : "")}>
                <span className="w-full h-full overflow-hidden p-6 md:p-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-deco group-hover:tracking-widest transition-all ease-spring duration-(--spring-duration) text-white text-shadow text-nowrap">WEBSITES <br className="block sm:hidden lg:block" />AND APPS</h2>
                    <p className="text-xl leading-tight md:text-2xl  text-white lg:text-white/0 group-hover:text-shadow transition ease-spring duration-(--spring-duration) group-hover:text-white ">Clean code, Sharp pixels and User-first thinking.</p>
                </span>
                <span className="absolute w-full h-2/3 lg:h-1/2 backdrop-blur-xl mask-to-t !z-[0] rounded-xl" />
                <div className="!absolute !-z-30 top-3 inset-0 shadow-color">
                    <Image
                        src="/images/selection/dev-blur.jpg"
                        alt="photo blur"
                        fill
                        className="object-cover w-full h-full blur-md pointer-events-none -z-30 brightness-120 opacity-70"
                    />
                </div>
            </a>

            <a href="https://photo.alessiocapecchi.com/" onMouseEnter={() => router.prefetch("https://photo.alessiocapecchi.com/")} onClick={(e) => {
                setPhotoAnimating(!photoAnimating);
                handleClick(e);
            }} className={cn("group min-w-0 text-left overflow-visible card h-full w-full flex flex-col justify-start gap-4  text-white/95  flex-[.7] transition-[flex] hover:flex-[1.2] rounded-2xl ease-spring duration-(--spring-duration) relative photography-selection selection  *:z-10 ", photoAnimating ? "animating" : "", safari ? "shadow-xl shadow-accent-1000/15 dark:shadow-accent-300/10" : "")}>
                <span className="w-full h-full overflow-hidden p-6 md:p-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-deco group-hover:tracking-widest transition-all ease-spring duration-(--spring-duration) text-white text-shadow">PHOTOGRAPHY</h2>
                    <p className="text-xl leading-tight md:text-2xl  text-white lg:text-white/0 group-hover:text-shadow transition ease-spring duration-(--spring-duration) group-hover:text-white">A visual journey through light, detail, and perspective.</p>
                </span >
                <span className="absolute w-full h-2/3 md:h-1/2 backdrop-blur-md mask-to-t !z-[0] rounded-xl" />
                <div className="!absolute !-z-30 top-3 inset-0 shadow-color">
                    <Image
                        src="/images/selection/foto-blur.jpg"
                        alt="photo blur"
                        fill
                        className="object-cover w-full h-full blur-md pointer-events-none -z-30 brightness-80  opacity-70"
                    />
                </div>
            </a>
        </section>
    )
};
