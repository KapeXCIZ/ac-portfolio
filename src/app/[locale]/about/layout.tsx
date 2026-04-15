import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('about.title'),         // cambia il namespace per ogni pagina
        description: t('about.description'),
        icons: {
            icon: [
                { url: '/logo.svg', media: '(prefers-color-scheme: dark)' },
            ],
        },
    };
}

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    )
};
