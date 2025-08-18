import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const siteUrl = 'https://baccarat-pro.com'; // Replace with your actual domain

export const metadata: Metadata = {
  title: 'Baccarat Pro | Señales y Estrategias para Ganar en Telegram',
  description: 'Únete a Baccarat Pro y recibe señales de apuestas en tiempo real en nuestro canal de Telegram. Aprende la estrategia definitiva para ganar en Baccarat y maximizar tus ganancias.',
  keywords: ['baccarat', 'estrategia baccarat', 'ganar baccarat', 'señales baccarat', 'telegram baccarat', 'apuestas online', 'casino online'],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Baccarat Pro | Señales y Estrategias para Ganar',
    description: 'Recibe señales de Baccarat en tiempo real y empieza a ganar desde hoy. Únete a nuestra comunidad de Telegram.',
    images: [
      {
        url: 'https://iili.io/FbANuA7.jpg',
        width: 1200,
        height: 630,
        alt: 'Baccarat Pro Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baccarat Pro | Señales y Estrategias para Ganar',
    description: 'Recibe señales de Baccarat en tiempo real y empieza a ganar desde hoy. Únete a nuestra comunidad de Telegram.',
    images: ['https://iili.io/FbANuA7.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta name="google-site-verification" content="s20DPzaONOTfWQIAQxyvYn8zLX1zzzpgFr5pVTqhpik" />
        <link rel="icon" href="https://iili.io/FbANuA7.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
