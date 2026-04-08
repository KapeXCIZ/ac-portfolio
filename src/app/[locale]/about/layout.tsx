import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "About",
    description: "About page for Alessio's development portfolio",
    icons: {
        icon: [
            { url: '/../logo.svg', media: '(prefers-color-scheme: dark)' },
        ],
    },
};

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
