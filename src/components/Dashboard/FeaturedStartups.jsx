import React from 'react';
import Startup1 from "../../assets/startup1.png"
import Startup2 from "../../assets/startup2.png"
import Startup3 from "../../assets/startup3.png"

export default function FeaturedStartups() {
  const startups = [
    { image: Startup1, name: 'Heritage Restora', description: 'Plateforme digitale pour la restauration de patrimoine historique et culturel', rating: '4.2' },
    { image: Startup2, name: 'Artisan Connect', description: 'Connecter les artisans marocains avec des marchés internationaux et locaux', rating: '4.8' },
    { image: Startup3, name: 'Heritage Tours', description: 'Expériences immersives guidées à travers le patrimoine culturel marocain', rating: '4.7' }
  ];

  return (
    <div className="bg-amber-50 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-amber-900 mb-2">
          Startups en vedette
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Parcourez les innovations architecturales cette semaine
        </p>
        <div className="grid grid-cols-3 gap-6">
          {startups.map((startup, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={startup.image}
                alt={startup.name}
                className="w-full h-48 object-cover"
                onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'}
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-amber-900">{startup.name}</h3>
                  <span className="text-yellow-600">⭐ {startup.rating}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{startup.description}</p>
                <button className="bg-amber-900 text-white px-4 py-2 rounded text-sm w-full hover:bg-amber-800">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
