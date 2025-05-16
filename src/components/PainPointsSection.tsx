
import React from 'react';
import { X } from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [
    "Falta de renda ou grana curta todo fim do mês.",
    "Cansaço de tentativas frustradas de ganhar dinheiro online.",
    "Insegurança sobre como começar do zero.",
    "Medo de aparecer ou não saber editar vídeos.",
    "Depender só do salário ou do emprego fixo."
  ];

  return (
    <section className="section bg-dark" id="problems">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            As <span className="text-gradient">dores</span> que você vai eliminar
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chega de sofrer com estes problemas que impedem você de prosperar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {painPoints.map((pain, index) => (
            <div key={index} className="pain-card">
              <div className="flex items-center mb-3">
                <div className="bg-red-500/20 p-1 rounded-full mr-3">
                  <X className="h-4 w-4 text-red-500" />
                </div>
                <h3 className="font-semibold text-lg">Problema {index + 1}</h3>
              </div>
              <p>{pain}</p>
              <div className="mt-4 h-1 w-full bg-dark-light overflow-hidden">
                <div className="h-full w-full bg-gold-gradient shine-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
