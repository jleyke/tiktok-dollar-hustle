
import React from 'react';
import { Check, DollarSign } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="section bg-dark py-20" id="pricing">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 py-1 px-3 bg-gold/20 border border-gold/50 rounded-full">
            <p className="text-gold font-bold">Oferta Limitada por Tempo Limitado</p>
          </div>
          <h2 className="heading-lg mb-4">
            Comece <span className="text-gradient">Hoje Mesmo</span> Por Apenas
          </h2>
          
          <div className="flex flex-col items-center justify-center space-y-1">
            <p className="text-gray-400 line-through text-xl">De R$ 197,00 por</p>
            <p className="text-6xl md:text-7xl font-display font-bold">
              <span className="text-gold">R$ 39,90</span>
            </p>
            <p className="text-gray-300">Pagamento único • Acesso vitalício</p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto price-card">
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-display font-bold">Curso Completo</h3>
              <p className="text-gray-300">TikTok + CapCut ($$$)</p>
            </div>
            <div className="bg-gold text-black font-bold py-2 px-4 rounded-full text-sm">
              MELHOR OFERTA
            </div>
          </div>
          
          <ul className="space-y-4 mb-8">
            {[
              "Acesso vitalício ao curso completo",
              "Todas as atualizações futuras inclusas",
              "Grupo exclusivo de alunos no WhatsApp",
              "Templates prontos para CapCut",
              "Suporte direto com a equipe",
              "Bônus: Lista de 100 nichos lucrativos"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="mr-3 bg-gold/20 p-1 rounded-full">
                  <Check className="h-5 w-5 text-gold" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col items-center">
            <button className="gold-button w-full text-lg mb-4">
              QUERO COMEÇAR AGORA E LUCRAR COM TIKTOK + CAPCUT!
            </button>
            <div className="flex items-center justify-center space-x-2 text-gray-300 text-sm">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="8" r="1" fill="currentColor"/>
              </svg>
              <span>Pagamento 100% seguro via PIX ou cartão</span>
            </div>
          </div>
        </div>
        
        {/* Guarantee */}
        <div className="mt-12 max-w-3xl mx-auto text-center py-6 px-4 border border-white/10 rounded-lg bg-dark-lighter">
          <div className="flex flex-col md:flex-row items-center justify-center mb-4">
            <div className="bg-gold/20 p-3 rounded-full mb-4 md:mb-0 md:mr-6">
              <DollarSign className="h-8 w-8 text-gold" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold">Garantia de 7 dias ou seu dinheiro de volta</h3>
          </div>
          <p className="text-gray-300">
            Se em até 7 dias você não estiver satisfeito com o conteúdo ou achar que o método não funciona, 
            basta solicitar reembolso e devolveremos 100% do seu investimento, sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
