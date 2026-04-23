'use client'

import { Link as NavLink } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes } from "react";



const variants = {
    ghost: "hover:bg-accent-500/10 dark:hover:bg-accent-400/20  hover:text-accent-800 dark:hover:text-accent-200 ",
    outline: "border  border-accent-400 hover:bg-accent-450 text-accent-400 hover:text-accent-100 ",
    glow: "bg-white dark:bg-foreground text-black hover:text-white hover:text-shadow-[0_0_6px_var(--color-accent-500)] dark:hover:bg-accent-300 hover:bg-accent-500 hover:border-accent-500/50 shadow-accent-500/50 hover:shadow-accent-550/50 glow",
    solid: " text-white bg-accent-400 dark:bg-accent-600 active:bg-accent-600 dark:active:bg-accent-700 solid-button py-[10px]",
    solidSuccess: "text-white bg-green-400 dark:bg-green-600  solid-button-success py-[10px] "
};

type Variant = "ghost" | "outline" | "glow" | "solid" | "solidSuccess";

const baseStyle = "border border-transparent  transition-all duration-350 rounded-full ease-in-out px-6 py-2  flex justify-center items-center cursor-pointer";

interface BaseProps<T> extends ButtonHTMLAttributes<T> {
    children: React.ReactNode,
    className?: string,
    variant: Variant
}

interface CustomLinkProps extends BaseProps<LinkProps> {
    href: string,
}

export function CustomNavLink({ children, className, variant = "glow", href }: CustomLinkProps) {
    return (
        <NavLink href={href} className={cn(baseStyle, variants[variant], className)}>
            {children}
        </NavLink>
    );
}

export function CustomLink({ children, className, variant = "glow", href }: CustomLinkProps) {
    return (
        <Link href={href} className={cn(baseStyle, variants[variant], className)}>
            {children}
        </Link>
    );
}

export function CustomAnchor({ children, className, variant = "glow", href }: CustomLinkProps) {
    return (
        <a href={href} className={cn(baseStyle, variants[variant], className)}>
            {children}
        </a>
    );
}

export default function CustomButton({ children, className, variant = "glow", ...props }: BaseProps<HTMLButtonElement>) {
    return (
        <button {...props} className={cn(baseStyle, variants[variant], className)}>
            {children}
        </button>
    );
}


