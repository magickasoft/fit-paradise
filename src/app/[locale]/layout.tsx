import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { YandexMetricaProvider } from '@artginzburg/next-ym'
import { routing } from '@/i18n/routing'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fit-paradise — здоровье, фитнес и правильное питание',
  description:
    'Fit-paradise — сайт с полезными статьями о здоровье, программами тренировок и советами по правильному питанию. Достигайте своих целей с умом и удовольствием!',
  keywords: [
    'фитнес',
    'тренировки',
    'здоровье',
    'правильное питание',
    'полезные статьи',
    'программы тренировок',
    'упражнения дома',
    'тренер онлайн',
    'питание и диета',
    'спорт',
    'активный образ жизни',
    'здоровый образ жизни',
    'фитнес советы',
    'фитнес планы',
    'тело и здоровье',
    'здоровое питание',
    'мотивация',
    'сила и выносливость',
    'фитнес для новичков',
    'fit-paradise',
  ].join(', '),
}

export interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

// export async function generateMetadata(props: Omit<LocaleLayoutProps, 'children'>): Promise<{ title: string }> {
//   const { locale } = await props.params

//   const t = await getTranslations({ locale, namespace: 'localeLayout' })

//   return {
//     // title: t('title'),
//   }
// }

export default async function LocaleLayout({ children, params }: Readonly<LocaleLayoutProps>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="yandex-verification" content="2e7fe2a2d1794de6" />
        <Script
          id="remove-extra-attributes"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              var remove = function() {
              var b = document.body;
                if (b) {
                  b.removeAttribute('cz-shortcut-listen');
                }
              };
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', remove, { once: true });
              } else {
                remove();
              }
            })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <YandexMetricaProvider>
            <Header />
            {children}
            <Footer />
          </YandexMetricaProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
