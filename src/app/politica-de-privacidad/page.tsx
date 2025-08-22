
"use client";

import React from 'react';
import { BottomNav } from '@/components/landing/BottomNav';
import { Footer } from '@/components/landing/Footer';

const PrivacyPolicyPage = () => {
    return (
        <div className="bg-background text-white min-h-screen">
            <BottomNav />
            <main className="container mx-auto px-4 py-24 pt-32">
                <h1 className="font-headline text-4xl md:text-5xl text-primary mb-8">Política de Privacidad</h1>
                <div className="space-y-6 text-white/80 prose prose-invert max-w-none">
                    <p>Última actualización: 25 de julio de 2024</p>
                    
                    <p>
                        Bienvenido a El tapete de Hero. Nos tomamos muy en serio su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web. Por favor, lea esta política de privacidad cuidadosamente. Si no está de acuerdo con los términos de esta política de privacidad, por favor no acceda al sitio.
                    </p>

                    <h2 className="text-2xl font-headline text-primary pt-4">Recopilación de su información</h2>
                    <p>
                        Podemos recopilar información sobre usted de varias maneras. La información que podemos recopilar en el Sitio incluye:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Datos personales:</strong> Información de identificación personal, como su nombre, dirección de correo electrónico y número de teléfono, que usted nos proporciona voluntariamente cuando se registra en el Sitio o elige participar en diversas actividades relacionadas con el Sitio, como boletines informativos y foros de mensajes.
                        </li>
                        <li>
                            <strong>Datos derivados:</strong> Información que nuestros servidores recopilan automáticamente cuando accede al Sitio, como su dirección IP, su tipo de navegador, su sistema operativo, sus horas de acceso y las páginas que ha visto directamente antes y después de acceder al Sitio.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-headline text-primary pt-4">Uso de su información</h2>
                    <p>
                        Tener información precisa sobre usted nos permite brindarle una experiencia fluida, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre usted a través del Sitio para:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Crear y gestionar su cuenta.</li>
                        <li>Enviarle un boletín informativo.</li>
                        <li>Aumentar la eficiencia y el funcionamiento del Sitio.</li>
                        <li>Analizar el uso y las tendencias para mejorar su experiencia con el Sitio.</li>
                    </ul>

                    <h2 className="text-2xl font-headline text-primary pt-4">Divulgación de su información</h2>
                    <p>
                        No compartiremos su información con terceros excepto en las siguientes situaciones:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Por ley o para proteger derechos:</strong> Si creemos que la divulgación de información sobre usted es necesaria para responder a un proceso legal, para investigar o remediar posibles violaciones de nuestras políticas, o para proteger los derechos, la propiedad y la seguridad de otros, podemos compartir su información según lo permita o exija cualquier ley, norma o regulación aplicable.
                        </li>
                        <li>
                            <strong>Proveedores de servicios de terceros:</strong> Podemos compartir su información con terceros que realizan servicios para nosotros o en nuestro nombre, incluido el procesamiento de pagos, el análisis de datos, el envío de correos electrónicos, los servicios de alojamiento, el servicio al cliente y la asistencia de marketing.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-headline text-primary pt-4">Seguridad de su información</h2>
                    <p>
                        Utilizamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger su información personal. Si bien hemos tomado medidas razonables para proteger la información personal que nos proporciona, tenga en cuenta que a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable, y no se puede garantizar ningún método de transmisión de datos contra ninguna intercepción u otro tipo de uso indebido.
                    </p>

                    <h2 className="text-2xl font-headline text-primary pt-4">Contacto</h2>
                    <p>
                        Si tiene preguntas o comentarios sobre esta Política de Privacidad, por favor contáctenos a través de nuestro canal de Telegram.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
