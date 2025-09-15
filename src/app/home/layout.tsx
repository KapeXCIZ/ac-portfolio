import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Home",
    description: "Home page for Alessio's development portfolio",
    icons: {
        icon: [
            { url: '/../logo.svg', media: '(prefers-color-scheme: dark)' },
        ],
    },
};

export default function HomeLayout({
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
