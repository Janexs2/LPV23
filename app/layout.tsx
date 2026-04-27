import type { Metadata } from 'next'
import { Cormorant_Garamond, Poppins } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Joice Mazzini | Nutricionista Especialista em TEA e TDAH',
  description:
    'Nutricionista especialista em saúde integrativa para crianças autistas e com TDAH. Abordagem funcional com foco em neurosuplementação, dieta anti-inflamatória e bem-estar.',
  keywords: [
    'nutricionista autismo',
    'nutricionista TDAH',
    'seletividade alimentar',
    'neurosuplementação',
    'TEA',
    'nutrição funcional',
  ],
  authors: [{ name: 'Joice Mazzini' }],
  openGraph: {
    title: 'Joice Mazzini | Nutricionista Especialista em TEA e TDAH',
    description:
      'Abordagem integrativa para saúde e desenvolvimento de crianças autistas e com TDAH.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-foreground">
        {children}
      </body>
    </html>
  )
}
