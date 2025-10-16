import React, { useState } from "react";
import OrganiserEvent from "./OrganiserEvent";

export default function EventsHeader({ selectedCategory, setSelectedCategory, selectedCity, setSelectedCity }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: '#8B8B47' }}>
            Événements
          </h1>
          <p className="text-gray-600 mt-1">
            Découvrez les événements dédiés au patrimoine et à l'innovation
          </p>
        </div>

        {/* Bouton pour ouvrir le formulaire */}
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-[#6B8E23] text-white rounded hover:bg-[#558218] transition"
        >
          Organiser un Événement
        </button>
      </div>

      {/* Filtres et recherche */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <span className="text-sm text-gray-600 flex items-center gap-1">
          <span>▼</span> Filtrer par :
        </span>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option>Toutes les catégories</option>
          <option>Architecture</option>
          <option>Artisanat</option>
          <option>Restauration</option>
        </select>
        <select 
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option>Toutes les villes</option>
          <option>Casablanca</option>
          <option>Salé</option>
          <option>Rabat</option>
          <option>Fès</option>
        </select>
        <div className="flex-1 relative">
          <input 
            type="search" 
            placeholder="Rechercher un événement..."
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 pl-10"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Formulaire modal */}
      {showForm && <OrganiserEvent setIsOpen={setShowForm} />}
    </div>
  );
}



