
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-dark-lighter">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Eykeshops Mídia Top. Todos os direitos reservados.
        </p>
        <div className="mt-4 text-xs text-gray-500">
          <p>Este site não é afiliado ao TikTok ou CapCut. Todos os resultados mostrados são reais, 
            mas individuais e podem variar de pessoa para pessoa.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
