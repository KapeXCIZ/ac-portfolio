import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';          // ← import da 'next-intl', non da server
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    return {
        locale,   // ← obbligatorio in v4
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});