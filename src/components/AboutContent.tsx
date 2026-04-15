'use client'
// import { Badge } from "./ui/badge";
import {
    CaretDoubleDownIcon,
    QuotesIcon,
} from "@phosphor-icons/react";
import { useLocale, useTranslations } from "next-intl";
// import { ReactIcon } from "./icons/ReactIcon";
// import { NextIcon } from "./icons/NextIcon";
// import { HtmlIcon } from "./icons/HtmlIcon";
// import { JsIcon } from "./icons/JsIcon";
// import { TsIcon } from "./icons/TsIcon";
// import { CssIcon } from "./icons/CssIcon";
// import { TwIcon } from "./icons/TwIcon";
// import { JavaIcon } from "./icons/JavaIcon";
// import { SqlIcon } from "./icons/SqlIcon";
// import { NodeIcon } from "./icons/NodeIcon";
// import { FigmaIcon } from "./icons/FigmaIcon";
// import { VercelIcon } from "./icons/VercelIcon";
// import { PsIcon } from "./icons/PsIcon";
// import { LrIcon } from "./icons/LrIcon";

export default function AboutContent() {
    const t = useTranslations("about");
    const locale = useLocale();
    return (
        <div className="w-full  backdrop-blur-2xl border-t   bg-linear-to-b from-background-2 to-background   z-0    rounded-t-[4em] md:rounded-t-[6em] lg:rounded-t-[8em] xl:rounded-t-[10em] pt-10  flex items-center justify-center gap-8 flex-col mx-auto ">
            <div className="container max-w-[1000px] px-10 md:px-16 lg:px-20">
                <CaretDoubleDownIcon className="text-5xl mx-auto opacity-30 my-10 animate-bounce animation-duration-[2.5s]" />
                <section className="flex gap-5 flex-col pb-16 mx-auto">
                    <h1 className=" text-5xl md:text-6xl text-left  xl:text-7xl font-deco mb-6">{t("h1")}</h1>
                    <p className="font-sans font-light text-2xl lg:text-3xl text-secondary-foreground/60 text-left">{t("text.p1")}</p>
                    {locale === "en" && <p className="font-sans font-light text-2xl lg:text-3xl text-secondary-foreground/60 text-left">{t("text.p2")}</p>}
                    <p className="font-sans font-light text-accent-foreground text-2xl lg:text-3xl inline-block relative py-10 md:text-center  my-2"><QuotesIcon weight="light" className="absolute top-0 left-0" />{t("text.bigP")}<QuotesIcon weight="light" className="absolute bottom-0 right-0" /></p>
                    <p className="font-sans font-light text-2xl lg:text-3xl text-secondary-foreground/60 text-left">{t("text.p3")}</p>
                    <p className="font-sans font-light text-2xl lg:text-3xl text-secondary-foreground/60 text-left">{t("text.p4")}</p>
                </section>
                {/* <section className="flex flex-col gap-4">
                    <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif">Skills and tools</h2>
                </section> */}
            </div>

        </div>
    )
};
