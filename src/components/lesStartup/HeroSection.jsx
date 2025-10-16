import React from "react";

export default function HeroSection({ onSearch, onCategoryChange, onCityChange }) {
  return (
    <div className="bg-gradient-to-br from-[#8B8B47] to-[#8B5A3C] text-white py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-3">Catalogue des Startups</h1>
      <p className="text-lg mb-8 opacity-90">
        Découvrez 8 startups marocaines inspirées du patrimoine
      </p>

      {/* Filtres simples */}
      <div className="flex flex-wrap gap-3 justify-center bg-white p-4 rounded-lg shadow-lg text-gray-700">
        <input
          type="text"
          placeholder="Rechercher une startup..."
          className="border rounded-lg px-3 py-2 w-56"
          onChange={(e) => onSearch(e.target.value)}
        />
        <select
          className="border rounded-lg px-3 py-2"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Toutes les catégories</option>
          <option value="Artisanat">Artisanat</option>
          <option value="Restauration">Restauration</option>
          <option value="Technologie">Technologie</option>
        </select>
        <select
          className="border rounded-lg px-3 py-2"
          onChange={(e) => onCityChange(e.target.value)}
        >
          <option value="">Toutes les villes</option>
          <option value="Fès">Fès</option>
          <option value="Marrakech">Marrakech</option>
          <option value="Casablanca">Casablanca</option>
          <option value="Rabat">Rabat</option>
        </select>
      </div>
    </div>
  );
}
