import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('projects.title'),
        description: t('projects.description'),
        icons: {
            icon: [
                { url: '/logo.svg', media: '(prefers-color-scheme: dark)' },
            ],
        },
    };
}

export default function ProjectsLayout({
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
