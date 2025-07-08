import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'


export const metadata: Metadata = {
  title: "Alessio Capecchi",
  description: "Home page for Alessio's websites",
  icons: {
    icon: [
      { url: '/logo.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <head >
          <meta name="apple-mobile-web-app-title" content="AC" />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}


