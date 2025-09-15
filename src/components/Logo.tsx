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
        <svg viewBox="-15 -15 2580 1030" xmlns="http://www.w3.org/2000/svg" className={cn("w-20 md:w-auto", variants[variant], className)} >
            <path
                d="M1590.83 802H1796.03L1923.19 599H2174.78L1923.59 1000H1463.13L960.171 198H754.829L502.097 601H952.223L1012.06 505.579L1138 706.396L1079.3 800H377.299L251.873 1000H0L627.127 0H1087.87L1590.83 802ZM2298.81 401H2047.22L2174.38 198H1456.83L1403.93 282.338L1278 81.5225L1329.12 0H2550L2298.81 401Z" />
        </svg>
    )
};
