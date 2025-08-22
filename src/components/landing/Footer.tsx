
import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-card/30 text-white/50 text-center p-8 px-4 md:px-8 border-t border-primary/20">
            <div className="container mx-auto">
                <p className="mb-4 text-sm">
                    El contenido de este sitio web es solo para fines informativos y de entretenimiento. El juego puede ser adictivo. Juegue de manera responsable. Debe tener la edad legal para jugar en su jurisdicción. No garantizamos ningún resultado específico.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 text-sm mb-4">
                    <Link href="/politica-de-privacidad" className="hover:text-primary transition-colors">Política de Privacidad</Link>
                    <Link href="/terminos-y-condiciones" className="hover:text-primary transition-colors">Términos y Condiciones</Link>
                    <Link href="/politica-de-cookies" className="hover:text-primary transition-colors">Política de Cookies</Link>
                </div>
                <p className="text-white/80">
                    &copy; 2025 El tapete de Hero. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
