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
        //logo 1
        // <svg viewBox="-15 -15 2580 1030" xmlns="http://www.w3.org/2000/svg" className={cn("w-20 md:w-auto", variants[variant], className)} >
        //     <path
        //         d="M1590.83 802H1796.03L1923.19 599H2174.78L1923.59 1000H1463.13L960.171 198H754.829L502.097 601H952.223L1012.06 505.579L1138 706.396L1079.3 800H377.299L251.873 1000H0L627.127 0H1087.87L1590.83 802ZM2298.81 401H2047.22L2174.38 198H1456.83L1403.93 282.338L1278 81.5225L1329.12 0H2550L2298.81 401Z" />
        // </svg>

        //logo 2
        //         <svg width="2285" height="1072" viewBox="0 0 2285 1072" className={cn("w-20 md:w-auto", variants[variant], className)} xmlns="http://www.w3.org/2000/svg">
        //     <path
        //         d="M941.57 0.108398L1478.8 856.759L1613.52 641.686H1883.04L1613.95 1071.26H1613.32L1343.5 1071.26L806.659 215.233L537.876 643.828H796.186L860.29 541.607L995.202 756.734L932.318 857.009H882.719V857.01H404.185L269.821 1071.26H0L671.748 0.107422L671.681 0H941.639L941.57 0.108398ZM2015.91 429.575H1746.39L1882.62 212.11H1336.75L1280.09 302.458L1145.18 87.332L1199.94 0H2285L2015.91 429.575Z" />
        // </svg>

        //logo 3
        <svg width="2177" height="1000" viewBox="0 0 2177 1000" className={cn("w-20 md:w-auto", variants[variant], className)} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1413.95 816.488L1557.08 588H1808.67L1550.59 1000H1277.17L764.52 182.547L495.198 612H751.39L819.713 503.052L945.021 702.863L886.613 796H636L636.627 795H380.434L251.873 1000H0L627.127 0H901.912L1413.95 816.488ZM1918.92 412H1667.33L1810.15 184H1270.41L1209.62 280.928L1084.32 81.1152L1135.19 0H2177L1918.92 412Z"
            />
        </svg>
    )
};
