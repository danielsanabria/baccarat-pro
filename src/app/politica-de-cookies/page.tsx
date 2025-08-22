
"use client";

import React from 'react';
import { BottomNav } from '@/components/landing/BottomNav';
import { Footer } from '@/components/landing/Footer';

const CookiesPolicyPage = () => {
    return (
        <div className="bg-background text-white min-h-screen">
            <BottomNav />
            <main className="container mx-auto px-4 py-24 pt-32">
                <h1 className="font-headline text-4xl md:text-5xl text-primary mb-8">Política de Cookies</h1>
                <div className="space-y-6 text-white/80 prose prose-invert max-w-none">
                    <p>Última actualización: 25 de julio de 2024</p>
                    
                    <h2 className="text-2xl font-headline text-primary pt-4">¿Qué son las cookies?</h2>
                    <p>
                        Una cookie es un pequeño archivo de texto que un sitio web almacena en su ordenador o dispositivo móvil cuando usted visita el sitio. Permite que el sitio web recuerde sus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y otras preferencias de visualización) durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que regrese al sitio o navegue de una página a otra.
                    </p>

                    <h2 className="text-2xl font-headline text-primary pt-4">¿Cómo usamos las cookies?</h2>
                    <p>
                        En El tapete de Hero, utilizamos cookies para los siguientes propósitos:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Cookies de Preferencias:</strong> Utilizamos una cookie (`cookie_consent`) para recordar su elección sobre el consentimiento de cookies. Esta es una cookie esencial para cumplir con la normativa y no tener que preguntarle en cada visita.
                        </li>
                        <li>
                            <strong>Cookies de Análisis (si se aceptan):</strong> Si usted da su consentimiento, utilizamos cookies de terceros (Vercel Analytics y Vercel Speed Insights) para recopilar información sobre cómo los visitantes utilizan nuestro sitio web. Recopilamos información de forma anónima, incluyendo el número de visitantes al sitio, de dónde provienen los visitantes y las páginas que visitaron. Utilizamos esta información para compilar informes y para ayudarnos a mejorar el sitio.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-headline text-primary pt-4">Tipos de Cookies que Utilizamos</h2>
                    <ul className="list-disc pl-6 space-y-2">
                         <li>
                            <strong>Cookies Esenciales:</strong> Estas cookies son estrictamente necesarias para proporcionarle los servicios disponibles a través de nuestro sitio web y para usar algunas de sus funciones. La cookie `cookie_consent` es un ejemplo.
                        </li>
                        <li>
                            <strong>Cookies de Rendimiento y Análisis:</strong> Estas cookies recopilan información que se utiliza de forma agregada para ayudarnos a comprender cómo se está utilizando nuestro sitio web o cuán efectivas son nuestras campañas de marketing. Solo se activan si usted las acepta explícitamente a través de nuestro banner de cookies.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-headline text-primary pt-4">Control de Cookies</h2>
                    <p>
                        Usted tiene el control total sobre las cookies. Al visitar nuestro sitio por primera vez, le pedimos su consentimiento para utilizar cookies no esenciales a través de un banner. Puede aceptar o rechazar su uso. Su elección se almacenará para futuras visitas.
                    </p>
                    <p>
                        Además, puede controlar y/o eliminar las cookies como desee. Para más detalles, consulte <a href="https://aboutcookies.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">aboutcookies.org</a>. Puede eliminar todas las cookies que ya están en su ordenador y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen.
                    </p>

                    <h2 className="text-2xl font-headline text-primary pt-4">Cambios en la Política de Cookies</h2>
                     <p>
                        Podemos actualizar esta Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Por lo tanto, le recomendamos que vuelva a visitar esta página periódicamente para mantenerse informado sobre nuestro uso de cookies y tecnologías relacionadas.
                    </p>

                    <h2 className="text-2xl font-headline text-primary pt-4">Contacto</h2>
                    <p>
                        Si tiene alguna pregunta sobre nuestro uso de cookies, por favor contáctenos a través de nuestro canal de Telegram.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CookiesPolicyPage;
