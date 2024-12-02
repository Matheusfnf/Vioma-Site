import React from 'react';
import { Sprout } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Vioma Agro</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-green-600">Soluções</a>
            <a href="#products" className="text-gray-600 hover:text-green-600">Produtos</a>
            <a href="#about" className="text-gray-600 hover:text-green-600">Sobre</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600">Contato</a>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Começar
          </button>
        </div>
      </div>
    </nav>
  );
}