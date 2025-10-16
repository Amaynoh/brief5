import React from 'react';

export default function Statistics() {
  const stats = [
    { icon: '🏛️', number: '127', label: 'Startups en ligne sur le site', color: 'bg-amber-100' },
    { icon: '🎯', number: '43', label: 'Partenariats actifs', color: 'bg-gray-100' },
    { icon: '👥', number: '2,947', label: 'Partenaires', color: 'bg-amber-100' }
  ];

  return (
    <div className="bg-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-amber-900 mb-2">
          Tableau de bord
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Statistiques en temps réel de nos initiatives
        </p>
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} p-8 rounded-lg text-center`}>
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-amber-900 mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
