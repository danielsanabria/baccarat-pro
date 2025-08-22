
"use client";

import React from 'react';
import { BottomNav } from '@/components/landing/BottomNav';
import { Footer } from '@/components/landing/Footer';

const TermsAndConditionsPage = () => {
    return (
        <div className="bg-background text-white min-h-screen">
            <BottomNav />
            <main className="container mx-auto px-4 py-24 pt-32">
                <h1 className="font-headline text-4xl md:text-5xl text-primary mb-8">Términos y Condiciones</h1>
                <div className="space-y-6 text-white/80 prose prose-invert max-w-none">
                    <p>Última actualización: 25 de julio de 2024</p>
                    
                    <h2 className="text-2xl font-headline text-primary pt-4">1. Aceptación de los Términos</h2>
                    <p>
                        Al acceder y utilizar el sitio web "El tapete de Hero" (en adelante, "el Sitio"), usted acepta y se compromete a cumplir con estos Términos y Condiciones. Si no está de acuerdo con alguna parte de los términos, no podrá utilizar nuestro servicio.
                    </p>

                    <h2 className="text-2xl font-headline text-primary pt-4">2. Descripción del Servicio</h2>
                    <p>
                        El Sitio proporciona señales y estrategias para el juego de Baccarat con fines informativos y de entretenimiento. No somos un operador de casino ni proporcionamos servicios de juego con dinero real. Los enlaces a casinos de terceros son enlaces de afiliados.
                    </p>

                    <h2 className="text-2xl font-headline text-primary pt-4">3. Juego Responsable</h2>
                    <p>
                        El juego debe ser una actividad de ocio y no una fuente de ingresos. Le recomendamos que juegue de manera responsable y dentro de sus medios. Debe tener la edad legal para jugar en su jurisdicción (generalmente 18 años o más). El juego puede ser adictivo. Si siente que puede tener un problema con el juego, busque ayuda profesional.
                    </p>

                    <h2 className="text-2xl font-headline text-primary pt-4">4. Exención de Responsabilidad de Garantías</h2>
                    <p>
                        El uso del Sitio es bajo su propio riesgo. El servicio se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD". No garantizamos que los resultados que se puedan obtener del uso del servicio sean precisos o fiables. No garantizamos ganancias y no nos hacemos responsables de las pérdidas que puedan derivarse del uso de la información proporcionada en el Sitio o en nuestros canales de comunicación.
                    </p>

                    <h2 className="text-2xl font-headline text-primary pt-4">5. Propiedad Intelectual</h2>
                    <p>
                        El Sitio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de El tapete de Hero y sus licenciantes. El servicio está protegido por derechos de autor, marcas registradas y otras leyes tanto de España como de países extranjeros.
                    </p>
                    
                    <h2 className="text-2xl font-headline text-primary pt-4">6. Enlaces a Otros Sitios Web</h2>
                    <p>
                        Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por El tapete de Hero. No tenemos control ni asumimos responsabilidad por el contenido, las políticas de privacidad o las prácticas de los sitios web o servicios de terceros.
                    </p>

                    <h2 className="text-2xl font-headline text-primary pt-4">7. Cambios en los Términos</h2>
                    <p>
                        Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en any momento. Le notificaremos cualquier cambio publicando los nuevos Términos y Condiciones en esta página.
                    </p>

                     <h2 className="text-2xl font-headline text-primary pt-4">Contacto</h2>
                    <p>
                        Si tiene alguna pregunta sobre estos Términos, por favor contáctenos a través de nuestro canal de Telegram.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsAndConditionsPage;
