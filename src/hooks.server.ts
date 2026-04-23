import { paraglideMiddleware } from '$lib/paraglide/server.js';
import { locales, baseLocale } from '$lib/paraglide/runtime.js';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
  const url = new URL(event.request.url);

  // Only intercept the bare root path
  if (url.pathname === '/') {
    const acceptLanguage = event.request.headers.get('accept-language') ?? '';
    const locale = parseAcceptLanguage(acceptLanguage);

    return new Response(null, {
      status: 307,
      headers: { Location: `/${locale}` },
    });
  }

  return paraglideMiddleware(event.request, ({ request }) => {
    return resolve({ ...event, request });
  });
};

function parseAcceptLanguage(header: string): string {
  // Parse "fi-FI,fi;q=0.9,en-US;q=0.8,en;q=0.7" into ordered language codes
  const preferred = header
    .split(',')
    .map((part) => {
      const [lang, q] = part.trim().split(';q=');
      return { lang: lang.split('-')[0].toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .map((entry) => entry.lang);

  // Return first supported locale, fall back to baseLocale
  return preferred.find((lang) => locales.includes(lang as "en" | "fi")) ?? baseLocale;
}
