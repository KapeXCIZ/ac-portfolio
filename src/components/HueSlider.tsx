'use client'

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Slider } from "./ui/slider"
import { PaintBucketIcon } from "@phosphor-icons/react";

export default function HueSlider({
    hue,
    className,
    onValueChange, // now expects (value: number[]) => void
}: {
    hue: number;
    className?: string
    onValueChange?: (value: number[]) => void;
}) {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className={className ? className : ""} asChild>
                    <Button variant="outline" size="icon" >
                        <PaintBucketIcon weight="duotone" className="text-accent-600 dark:text-accent-300" />
                        <span className="sr-only">Toggle theme color</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {/* use onValueChange for Radix-like Slider that gives an array of numbers */}
                    <DropdownMenuItem>
                        <Slider className="py-2" defaultValue={[hue]} max={360} step={1} onValueChange={onValueChange} />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
};
