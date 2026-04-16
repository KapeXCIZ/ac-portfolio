import { useState, useEffect } from "react";
import Form from "./Form";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function AboutCTA() {
    const [success, setSuccess] = useState(false);
    const t = useTranslations("form")

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [success]);


    return (
        <section id="form" className="relative bg-background  pb-10">
            <div className="mx-auto max-w-[1000px] container sm:px-10 md:px-16 lg:px-20 ">
                <div className={cn("bg-foreground/3 border-b border-t sm:border p-10 sm:rounded-4xl shadow-xl transition-colors duration-400 ease-in-out", success && "border-green-500/70 bg-linear-to-t from-green-300/10 to bg-foreground/5")}>
                    <h1 className="text-5xl md:text-6xl mb-6 text-center font-light font-deco flex flex-row justify-center items-center">{t("getInTouch")}</h1>
                    <Form success={success} setSuccess={setSuccess} />
                </div>
            </div>
        </section>
    )
};
