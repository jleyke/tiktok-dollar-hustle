
import React from 'react';
import { Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    "Como criar vídeos virais com o CapCut mesmo sendo iniciante.",
    "Como usar o algoritmo do TikTok a seu favor para explodir em visualizações.",
    "Como encontrar oportunidades de monetização em dólar — sem precisar vender nada.",
    "Métodos para lucrar com parcerias, fundos de criadores, tráfego e muito mais!",
    "Estratégias para criar conteúdo sem mostrar o rosto.",
    "Acesso vitalício, atualizações constantes e grupo secreto dos alunos Eykeshops Mídia Top."
  ];

  return (
    <section className="section bg-dark-lighter" id="benefits">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            O que você vai <span className="text-gradient">aprender</span> nesse curso exclusivo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um método prático e comprovado para ganhar em dólar usando apenas seu celular
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card flex items-start">
              <div className="mr-4 mt-1 bg-gold rounded-full p-1 flex-shrink-0">
                <Check className="h-5 w-5 text-black" />
              </div>
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
