import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Projects",
    description: "Projects page for Alessio's development portfolio",
    icons: {
        icon: [
            { url: '/../logo.svg', media: '(prefers-color-scheme: dark)' },
        ],
    },
};

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
