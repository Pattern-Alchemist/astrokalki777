import './globals.css';
import '../styles/theme.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from '@/lib/i18n';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'AstroKalki',
  description: 'Astro analytics for multi-tenant organizations.'
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const messages = await getTranslations('en');

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <NextIntlClientProvider locale="en" messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
