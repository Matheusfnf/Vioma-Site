import React from 'react';
import { LeafyGreen, BarChart3, Droplets, Sun } from 'lucide-react';

const features = [
  {
    icon: LeafyGreen,
    title: 'Agricultura Sustentável',
    description: 'Implementamos práticas ecológicas que preservam recursos naturais e promovem a biodiversidade.'
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados',
    description: 'Tome decisões informadas com nossas ferramentas avançadas de análise de dados agrícolas.'
  },
  {
    icon: Droplets,
    title: 'Irrigação Inteligente',
    description: 'Otimize o uso da água com sistemas de irrigação baseados em IA e monitoramento do solo.'
  },
  {
    icon: Sun,
    title: 'Otimização de Colheita',
    description: 'Maximize a produção através da agricultura de precisão e controle ambiental.'
  }
];

export function Features() {
  return (
    <div className="bg-white py-24" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nossas Soluções
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções agrícolas completas projetadas para o agricultor moderno
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-600 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-transparent transition-colors">
                <feature.icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}