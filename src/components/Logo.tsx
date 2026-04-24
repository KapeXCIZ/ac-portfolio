'use client'

import { cn } from "@/lib/utils"

type Variant = "base" | "color";

const variants: Record<Variant, string> = {
    color: "stroke-[30] stroke-accent-700  fill-accent-200 dark:fill-accent-900 dark:stroke-accent-300",
    base: "fill-foreground"
};

interface LogoProps {
    variant?: Variant;
    className?: string;
}

export default function Logo({ variant = "base", className = "" }: LogoProps) {
    return (
        <svg width="2177" height="1000" viewBox="0 0 2177 1000" className={cn("w-20 md:w-auto", variants[variant], className)} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1413.95 816.488L1557.08 588H1808.67L1550.59 1000H1277.17L764.52 182.547L495.198 612H751.39L819.713 503.052L945.021 702.863L886.613 796H636L636.627 795H380.434L251.873 1000H0L627.127 0H901.912L1413.95 816.488ZM1918.92 412H1667.33L1810.15 184H1270.41L1209.62 280.928L1084.32 81.1152L1135.19 0H2177L1918.92 412Z"
            />
        </svg>
    )
};
