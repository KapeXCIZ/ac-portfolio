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
import 'lenis/dist/lenis.css';
import { ReactLenis } from 'lenis/react';



export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

const myFont = localFont({
	src: '../Edensor.otf',
	variable: "--font-deco"
})





import { getTranslations } from 'next-intl/server';
import TransitionHandler from "./transition-handler";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'metadata' });

	return {
		title: t('home.title'),         // cambia il namespace per ogni pagina
		description: t('home.description'),
		icons: {
			icon: [
				{ url: '/logo.svg', media: '(prefers-color-scheme: dark)' },
			],
		},
	};
}


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
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<NextIntlClientProvider messages={messages}>
							<ReactLenis root options={{
								lerp: 0.1, // Più basso è, più è fluido (ma più "lento")
								duration: 1.5,
								smoothWheel: true,
								// Rendi Lenis prioritario per le animazioni
								syncTouch: false,
								anchors: true,
							}} >
								<Navbar />
								<TransitionHandler>
									{children}
								</TransitionHandler>
								<Footer />
							</ReactLenis>
						</NextIntlClientProvider>
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
