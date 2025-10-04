import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import localFont from 'next/font/local'
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const myFont = localFont({
  src: '/Edensor.otf',
  variable: "--font-deco"
})

export const metadata: Metadata = {
  title: "Alessio Capecchi",
  description: "Select page for Alessio's websites",
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
      <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} ${myFont.variable}`}>
        <head >
          <meta name="apple-mobile-web-app-title" content="AC" />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main>
              <Navbar />
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}


