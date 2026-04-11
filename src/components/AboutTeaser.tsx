'use client'



import CustomButton from "./CustomButton";
import { AtIcon, BriefcaseIcon, ReadCvLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Link as NavLink } from "@/i18n/navigation";

export default function AboutTeaser() {
    const t = useTranslations("home.teaser");
    const locale = useLocale();
    return (
        <section className="container mx-auto my-50 sm:my-60 md:my-70 lg:my-80 flex justify-center items-center flex-col gap-8 relative">
            <span className="absolute w-[1200px] h-[600px] max-w-[96vw]   bg-accent-500/25 object-center rounded-full mask-radial-[50%_50%] mask-radial-from-0%  -z-50" />
            <Image src={"/images/home/siluette.png"} height={200} width={200} alt="Alessio's siluette" className="w-60 mask-b-from-50% mask-b-to-90%  brightness-0 invert dark:invert-0 -top-28 select-none [image-select: none]  absolute " />
            <h1 className="text-center font-sans text-3xl md:text-4xl font-light z-1 px-6">{t("r1")}<br /><span className="italic font-serif">{t("r2")}</span></h1>
            <div className="flex flex-row gap-3  justify-center items-center">
                {/* cta */}
                <NavLink href={"/about"} className="z-0  md:text-lg">
                    <CustomButton className="flex gap-1 items-center justify-center -z-1 " variant="solid"><AtIcon />{t("b1")}</CustomButton>
                </NavLink>
                {/* secondary button */}
                {locale === "it"
                    ? <NavLink href={"/projects"} target="_blank" className="z-0 md:text-lg">
                        <CustomButton className="flex gap-1 items-center justify-center -z-1 " variant="outline"><BriefcaseIcon />{t("b2")}</CustomButton>
                    </NavLink>
                    : <Link href={"/files/alessio-capecchi-cv.pdf"} target="_blank" className="z-0 md:text-lg">
                        <CustomButton className="flex gap-1 items-center justify-center -z-1 " variant="outline"><ReadCvLogoIcon />{t("b2")}</CustomButton>
                    </Link>
                }

            </div>
        </section>
    )
};
