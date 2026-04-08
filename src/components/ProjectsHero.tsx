'use client'

import { useTranslations } from "next-intl"




export default function ProjectsHero() {
    const t = useTranslations("projects.hero")

    return (
        <div className="w-full px-4 text-center flex justify-center items-center mt-10">
            <h1 className="text-9xl font-deco glow-text text-foreground">{t("h1")}</h1>
        </div>
    )
}; 
