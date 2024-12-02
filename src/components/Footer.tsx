import React from 'react';
import { Sprout, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold text-white">Vioma Agro</span>
            </div>
            <p className="text-gray-400">
              Transformando a agricultura através da inovação e sustentabilidade.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-500">Agricultura Inteligente</a></li>
              <li><a href="#" className="hover:text-green-500">Análise de Dados</a></li>
              <li><a href="#" className="hover:text-green-500">Sistemas de Irrigação</a></li>
              <li><a href="#" className="hover:text-green-500">Sustentabilidade</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-500">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-green-500">Carreiras</a></li>
              <li><a href="#" className="hover:text-green-500">Notícias</a></li>
              <li><a href="#" className="hover:text-green-500">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Conecte-se</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Vioma Agro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}