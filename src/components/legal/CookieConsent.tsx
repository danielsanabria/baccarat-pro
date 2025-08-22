
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';

export const CookieConsent = ({ setConsent }: { setConsent: (consent: boolean) => void }) => {
    const [showBanner, setShowBanner] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === null) {
            setShowBanner(true);
        } else {
            setConsent(JSON.parse(consent));
        }
    }, [setConsent]);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'true');
        setShowBanner(false);
        setConsent(true);
    };

    const handleReject = () => {
        localStorage.setItem('cookie_consent', 'false');
        setShowBanner(false);
        setConsent(false);
    };

    if (!showBanner) {
        return null;
    }

    const bannerClasses = `fixed z-50 left-4 right-4 p-4 rounded-lg bg-card/80 backdrop-blur-lg border border-primary/20 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in-0 ${
      isMobile ? 'top-4' : 'bottom-4'
    }`;

    return (
        <div className={bannerClasses}>
            <p className="text-sm text-white/80">
                Utilizamos cookies para mejorar tu experiencia y analizar el tráfico. Al hacer clic en "Aceptar", aceptas nuestro uso de cookies. Consulta nuestra{' '}
                <Link href="/politica-de-cookies" className="underline hover:text-primary">
                    Política de Cookies
                </Link>
                .
            </p>
            <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="sm" onClick={handleReject}>Rechazar</Button>
                <Button size="sm" onClick={handleAccept}>Aceptar</Button>
            </div>
        </div>
    );
};
