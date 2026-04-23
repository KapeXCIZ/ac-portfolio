'use client'

import { CustomNavLink } from "./CustomButton";
import Typewrite from "./Typewrite";
import { AtIcon, BriefcaseIcon, StarFourIcon } from "@phosphor-icons/react";
import { useLocale, useTranslations } from "next-intl";


export default function HomeHero() {
    const t = useTranslations("home.homeHero");
    const tButtons = useTranslations("navbar");
    const locale = useLocale();
    return (
        <>
            <section className=" mx-auto flex items-center justify-center my-8 gap-10 px-6 h-[70vh] relative">
                <span className="absolute w-full h-full bg-[url(/images/bg-logo-1.png)] bg-animation brightness-5 dark:brightness-10 opacity-70   invert dark:invert-0 mask-radial-[50%_60%] mask-radial-from-10% -z-5 " />
                <div className="container mx-auto">
                    <div className="flex flex-col gap-8 py-8 text-center ">
                        <span className="spotlight-text z-1">
                            <h1
                                className="font-deco text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.125em] relative text-foreground"
                            >
                                {t('r1')}
                                <span className="whitespace-nowrap underline decoration-accent-400 text-foreground hover:text-transparent transition-colors duration-200 decoration-[4px] underline-offset-8  [-webkit-text-stroke:1px_color-mix(in_srgb,var(--color-foreground)_100%,transparent)] relative group">
                                    {locale == "it" ?
                                        <>
                                            {t("r11")}
                                        </>
                                        :
                                        <>
                                            <span className="relative">Alessio<StarFourIcon weight="fill" className="absolute text-foreground text-[10px] md:text-[12px] lg:text-[14px] group-hover:opacity-0 sm:bottom-[34%]  md:bottom-[34%] lg:bottom-[38px] transition-opacity duration-200 ease-in-out sm:left-[138px] md:left-[165px] lg:-translate-y-1/5  lg:left-[222px] hidden sm:block" />
                                                <StarFourIcon weight="light" className="absolute text-foreground text-[10px] md:text-[12px] lg:text-[14px] opacity-0 group-hover:opacity-100 sm:bottom-[34%]  md:bottom-[34%] lg:bottom-[38px] transition-opacity duration-200 ease-in-out sm:left-[138px] md:left-[165px] lg:-translate-y-1/5  lg:left-[222px] hidden sm:block" /></span> Capecchi
                                        </>
                                    }
                                </span>
                                <br />
                            </h1>
                            <h2 className="font-serif text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.125em] relative mt-2">
                                {t("r2")}<Typewrite phrases={[t("typewrite.1"), t("typewrite.2"), t("typewrite.3"), t("typewrite.4")]} period={175} id={1} />
                            </h2>
                            <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mt-4">{t("r3.1")}<span className="font-thin">{t("r3.2")}</span><span className="italic  text-foreground">{t("r3.3")}</span><span className="font-normal">{t("r3.4")}</span>{t("r3.5")}</h3>
                        </span>
                        <div className="w-full flex justify-center items-center gap-4 pt-4 *:text-normal sm:*:text-xl *:z-0">
                            <CustomNavLink variant="glow" href={"/projects"} className={"flex gap-1 -z-1"}><BriefcaseIcon /> {tButtons("projects")}</CustomNavLink>
                            <CustomNavLink href={"/about"} variant="outline" className={"flex gap-1 -z-1"}><AtIcon /> {tButtons("about")}</CustomNavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};