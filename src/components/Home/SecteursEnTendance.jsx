import React from "react";

function SectorCard(props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {/* Icône */}
      <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">{props.icon}</span>
      </div>

      {/* Titre */}
      <h3 className="text-xl font-bold text-orange-800 mb-2">{props.title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{props.description}</p>

      {/* Nombre de startups */}
      <div className={`${props.color} text-white px-4 py-2 rounded-full inline-block`}>
        {props.startupCount} startups
      </div>
    </div>
  );
}

// Le composant principal
function SecteursEnTendance() {
  // Liste des secteurs
  const secteurs = [
    {
      icon: "🏗️",
      title: "Architecture",
      description: "Innovation dans le design architectural",
      startupCount: 24,
      color: "bg-orange-500"
    },
    {
      icon: "🔨",
      title: "Artisanat",
      description: "Quand la tradition rencontre la technologie",
      startupCount: 18,
      color: "bg-green-500"
    },
    {
      icon: "🏛️",
      title: "Restauration du patrimoine",
      description: "Préservation du plâtre, zellige et savoir-faire marocains",
      startupCount: 12,
      color: "bg-amber-600"
    }
  ];

  return (
    <div className="bg-orange-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#8B4513" }}>
        Secteurs en tendance
      </h2>

      {/* Affiche une carte pour chaque secteur */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {secteurs.map((secteur, index) => (
          <SectorCard
            key={index}
            icon={secteur.icon}
            title={secteur.title}
            description={secteur.description}
            startupCount={secteur.startupCount}
            color={secteur.color}
          />
        ))}
      </div>
    </div>
  );
}

export default SecteursEnTendance;

