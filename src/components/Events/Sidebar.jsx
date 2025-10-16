import React from "react";

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>📅</span> Prochains événements
        </h3>
        <div className="space-y-3">
          <div className="border-l-4 pl-3" style={{ borderColor: '#8B8B47' }}>
            <p className="font-semibold text-sm text-gray-800">Pitch Day Startups</p>
            <p className="text-xs text-gray-500">5 Déc 2024 - Marrakech</p>
          </div>
          <div className="border-l-4 pl-3" style={{ borderColor: '#8B8B47' }}>
            <p className="font-semibold text-sm text-gray-800">Forum Innovation</p>
            <p className="text-xs text-gray-500">12 Déc 2024 - Casablanca</p>
          </div>
          <div className="border-l-4 pl-3" style={{ borderColor: '#8B8B47' }}>
            <p className="font-semibold text-sm text-gray-800">Salon de l'Artisanat</p>
            <p className="text-xs text-gray-500">18 Déc 2024 - Fès</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>📊</span> Statistiques
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Événements ce mois</span>
            <span className="font-bold text-xl" style={{ color: '#8B8B47' }}>12</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Participants total</span>
            <span className="font-bold text-xl" style={{ color: '#8B8B47' }}>248</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Startups participantes</span>
            <span className="font-bold text-xl" style={{ color: '#8B8B47' }}>34</span>
          </div>
        </div>
      </div>
    </div>
  );
}

