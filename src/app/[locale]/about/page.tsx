'use client'

import AboutContent from "@/components/AboutContent";
import AboutCTA from "@/components/AboutCTA";
import AboutHero from "@/components/AboutHero";
import SkillsGrid from "@/components/SkillsGrid";
import { useLocale } from "next-intl";

export default function AboutPage() {
    const locale = useLocale();

    return (

        <>
            <AboutHero />
            <div className="bg-background">
                <AboutContent />
                {locale === "en" && <SkillsGrid />}
                <AboutCTA />
            </div>
        </>


    )
};
