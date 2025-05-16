
import React from 'react';

const Header = () => {
  return (
    <header className="py-4 md:py-6 bg-dark-lighter relative z-10">
      <div className="container flex justify-center md:justify-between items-center">
        <div className="text-xl md:text-2xl font-display font-bold">
          <span className="text-white">Eyke</span>
          <span className="text-gold">shops</span>
        </div>
        <div className="hidden md:block">
          <button className="bg-gold hover:bg-gold-light text-black font-bold py-2 px-6 rounded-md 
                            transition-all duration-300 transform hover:scale-105">
            Garantir Acesso
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
