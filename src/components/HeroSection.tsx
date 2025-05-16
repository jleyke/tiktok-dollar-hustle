
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center z-0"></div>
      
      {/* Content */}
      <div className="container relative z-10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Branded Title */}
          <div className="inline-block mb-4 py-1 px-3 bg-gold/20 border border-gold/50 rounded-full">
            <p className="text-gold font-bold">Eykeshops Mídia Top Apresenta:</p>
          </div>
          
          {/* Main Headline */}
          <h1 className="heading-xl mb-6">
            Transforme Seu Celular em uma<br />
            <span className="text-gradient">Máquina de Ganhar Dólares</span><br />
            com TikTok + CapCut!
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Aprenda o Método Comprovado Para Monetizar Vídeos e <br className="hidden md:block"/>
            Ganhar em Moeda Forte Ainda Hoje – Por Apenas <span className="text-gold font-bold">R$ 39,90</span>
          </p>
          
          {/* Subtitle */}
          <div className="mb-10 p-6 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg">
            <p className="text-lg md:text-xl">
              Descubra como brasileiros comuns estão fazendo de <span className="font-bold text-gold">R$ 100 a R$ 500 por dia</span> com o celular, 
              usando ferramentas gratuitas e sem precisar aparecer!
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mb-8">
            <a href="#pricing" className="gold-button inline-block animate-pulse-gold">
              COMEÇAR AGORA POR R$ 39,90
            </a>
          </div>
          
          {/* Scroll Down */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <p className="mb-2 text-gray-300">Conheça o método</p>
            <ArrowDown className="h-6 w-6 text-gold animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
