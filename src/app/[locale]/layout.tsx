import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Providers from '@/components/context/shared/providers';
import { hasLocale, Locale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

import { getTranslations } from 'next-intl/server';
import Header from '@/components/shared/layout/headr';

// Locale function props
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

// Metadata
export async function generateMetadata({
  params,
}: {
  params: LocaleLayoutProps['params'];
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const title = t('app-title');

  return {
    title,
  };
}

// Static Params
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Main LocalLayout
async function LocalLayout({ children, params }: LocaleLayoutProps) {
  const paramsLocale = await params;
  const locale = paramsLocale.locale;

  // Handle locales not found error
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

// Default locale layout to wrap by suspense
export default function LocaleLayout(props: LocaleLayoutProps) {
  return (
    <Suspense fallback={null}>
      <LocalLayout {...props} />
    </Suspense>
  );
}
