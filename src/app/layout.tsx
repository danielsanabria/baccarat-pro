
"use client"

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useEffect, useState } from 'react';
import { CookieConsent } from '@/components/legal/CookieConsent';

const siteUrl = 'https://baccarat-pro.com'; // Replace with your actual domain

// Metadata cannot be exported from a client component, so we define it here.
// You can still export metadata from server components within the app directory.
// export const metadata: Metadata = { ... };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent) {
      setCookieConsent(JSON.parse(consent));
    } else {
      setCookieConsent(false);
    }
  }, []);

  return (
    <html lang="es" className="dark">
      <head>
        <title>El Tapete de Hero | Señales y Estrategias para Ganar en Telegram</title>
        <meta name="description" content="Únete a Baccarat Pro y recibe señales de apuestas en tiempo real en nuestro canal de Telegram. Aprende la estrategia definitiva para ganar en Baccarat y maximizar tus ganancias." />
        <meta name="keywords" content="baccarat, estrategia baccarat, ganar baccarat, señales baccarat, telegram baccarat, apuestas online, casino online" />
        <meta name="google-site-verification" content="s20DPzaONOTfWQIAQxyvYn8zLX1zzzpgFr5pVTqhpik" />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Baccarat Pro | Señales y Estrategias para Ganar" />
        <meta property="og:description" content="Recibe señales de Baccarat en tiempo real y empieza a ganar desde hoy. Únete a nuestra comunidad de Telegram." />
        <meta property="og:image" content="https://iili.io/FbANuA7.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Baccarat Pro Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Baccarat Pro | Señales y Estrategias para Ganar" />
        <meta name="twitter:description" content="Recibe señales de Baccarat en tiempo real y empieza a ganar desde hoy. Únete a nuestra comunidad de Telegram." />
        <meta name="twitter:image" content="https://iili.io/FbANuA7.jpg" />
        <link rel="icon" href="https://iili.io/FbANuA7.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1048664624011493');
          fbq('track', 'PageView');
        `}} />
        <noscript><img height="1" width="1" style={{display: 'none'}}
        src="https://www.facebook.com/tr?id=1048664624011493&ev=PageView&noscript=1"
        /></noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-body antialiased">
        <CookieConsent setConsent={setCookieConsent} />
        {children}
        <Toaster />
        {cookieConsent === true && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
