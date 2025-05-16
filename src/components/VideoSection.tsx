
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="section bg-dark-lighter py-20" id="video">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            Assista ao vídeo abaixo e entenda por que <span className="text-gradient">agora</span> é o momento perfeito
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja como o método funciona e por que centenas de brasileiros já estão lucrando
          </p>
        </div>
        
        {/* Video Player Placeholder */}
        <div className="max-w-4xl mx-auto relative">
          <div className="aspect-video bg-black/50 rounded-xl overflow-hidden border border-gold/30 shadow-lg shadow-gold/20">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gold/80 rounded-full flex items-center justify-center mx-auto hover:bg-gold cursor-pointer transition-all duration-300">
                  <Play className="h-10 w-10 text-black" fill="black" />
                </div>
                <p className="mt-4 text-xl font-medium">Clique para assistir o vídeo</p>
                <p className="text-sm text-gray-400 mt-1">Depoimentos, resultados e explicação do método</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Proof */}
        <div className="mt-10 text-center">
          <p className="text-xl md:text-2xl">
            <span className="text-gold font-bold">+ de 500 alunos</span> já estão transformando seus celulares em <span className="text-gold font-bold">máquinas de lucro</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
