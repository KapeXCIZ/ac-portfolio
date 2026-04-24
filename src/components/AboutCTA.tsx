import { useState, useEffect } from "react";
import Form from "./Form";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import AnimeText from "./common/AnimeText";

export default function AboutCTA() {
    const [success, setSuccess] = useState(false);
    const t = useTranslations("form")

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
            }, 15000);
            return () => clearTimeout(timer);
        }
    }, [success]);


    return (
        <section id="form" className="relative bg-background  pb-10">
            <div className="mx-auto max-w-[1000px]  container sm:px-10 md:px-16 lg:px-20 ">
                <div className={cn("bg-foreground/3 border-b relative border-t sm:border p-10 sm:rounded-4xl sm:shadow-xl transition-colors duration-400 ease-in-out", success && "border-green-500/70 bg-linear-to-t from-green-300/10 to bg-foreground/5")}>
                    <AnimeText className="text-5xl md:text-6xl mb-6 text-left md:text-center font-light font-deco ">{t("getInTouch")}</AnimeText>
                    <Form success={success} setSuccess={setSuccess} />
                </div>
            </div>
        </section>
    )
};
