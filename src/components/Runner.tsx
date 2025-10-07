import { cn } from "@/lib/utils";
import { ReactNode } from "react"

export default function Runner({ reverse = false, className = "", words }: { reverse?: boolean, className?: string, words: string[] }) {
    const classNameConst = `runner absolute  top-1/2 -translate-y-1/2 flex flex-row uppercase font-serif text-[6em] md:text-[8em] lg:text-[10em] lg:leading-[.8] text-transparent strokeme font-[900]  tracking-[4px] text-nowrap *:me-8 pointer-events-none select-none w-max ${!reverse ? "text-scroll-y" : "text-scroll-y-reverse"}`;

    return (
        <div className={cn("w-full relative overflow-hidden mask-x-from-90% mask-x-to-100% h-[6em] md:h-[8em] lg:h-[10em] my-4", className)}>
            <div className={classNameConst}>
                {words.map((el, key): ReactNode => {
                    return (
                        <span key={key}>{el}</span>
                    )
                })}
                {words.map((el, key): ReactNode => {
                    return (
                        <span className="" key={key}>{el}</span>
                    )
                })}
            </div>
        </div>
    )
};
