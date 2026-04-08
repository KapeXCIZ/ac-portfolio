import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import localFont from 'next/font/local'
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import "@/app/globals.css";


export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

const myFont = localFont({
	src: '../Edensor.otf',
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


export default async function LocaleLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params;
	if (!routing.locales.includes(locale as never)) {
		notFound();
	}

	const messages = await getMessages();


	return (
		<>
			<html lang={locale} suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} ${myFont.variable}`}>
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
						<NextIntlClientProvider messages={messages}>
							<Navbar />
							<main className="overscroll-auto mt-20">
								{children}
							</main>
							<Footer />
						</NextIntlClientProvider>
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
