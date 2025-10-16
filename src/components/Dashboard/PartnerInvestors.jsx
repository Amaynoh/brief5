import React from 'react';
import investors from '../../assets/investors.png'

export default function PartnerInvestors() {
  const partners = [
    { icon: '💼', name: 'CFC (INVEST)', description: "Fournir un financement d'amorçage allant de 10-15%", color: 'bg-green-100' },
    { icon: '🏢', name: 'Maroc PME', description: "Financement de la croissance et accompagnement de startups", color: 'bg-orange-100' }
  ];

  return (
    <div className="bg-white py-12 px-8">
      <div className="max-w-6xl mx-auto flex items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Investisseurs partenaires
          </h2>
          <p className="text-gray-600 mb-6">
            Exploration notre réseau d'investisseurs partenaires qui 
            soutiennent la préservation du patrimoine
          </p>
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-4 mb-4">
              <div className={`${partner.color} p-3 rounded-full text-2xl`}>{partner.icon}</div>
              <div>
                <h3 className="font-bold text-amber-900">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </div>
            </div>
          ))}
          <button className="bg-amber-900 text-white px-6 py-2 rounded mt-4 hover:bg-amber-800">
            Voir tous investisseur
          </button>
        </div>
        <div className="flex-1">
          <img 
            src={investors}
            alt="Investisseurs"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
            onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600'}
          />
        </div>
      </div>
    </div>
  );
}
