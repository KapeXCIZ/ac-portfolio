'use client'

import { cn } from "@/lib/utils";

const variants = {
    ghost: "hover:bg-accent-500/10 dark:hover:bg-accent-400/20  hover:text-accent-800 dark:hover:text-accent-200 ",
    outline: "border  border-accent-400 hover:bg-accent-450 text-accent-400 hover:text-accent-100 ",
    glow: "bg-white dark:bg-foreground text-black hover:text-white dark:hover:bg-accent-400 hover:bg-accent-500 hover:border-accent-500/50 shadow-accent-500/50 hover:shadow-accent-550/50 glow",
    solid: "bg-accent-450 text-white hover:text-white hover:bg-accent-500   active:bg-accent-600",

};

export default function CustomButton({ children, className = "", variant = "glow", ...props }) {
    return (
        <button {...props} className={cn("border border-transparent transition duration-300 rounded-full ease-in-out px-6 py-2  flex justify-center items-center cursor-pointer ", variants[variant], className)}>
            {children}
        </button>
    );
}
