'use client'
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";



export default function ContextualLink() {
    const t = useTranslations("home.context");
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const switchLocale = (newLocale: 'en' | 'it') => {
        router.replace(pathname, { locale: newLocale });
    };
    return (
        <>
            <div className="w-full text-left md:text-center mb-6 text-muted-foreground/50 z-50">
                {t("text")} <button className="cursor-pointer underline hover:text-foreground transition" onClick={() => switchLocale(locale === 'en' ? 'it' : 'en')} > {t("button")}</button>
            </div>
        </>
    )
};
