import React, { useState } from "react";
import HeroSection from "../lesStartup/HeroSection";


import HeritageCraft from "../../assets/HeritageCraft.png";
import RestoreAtlas from "../../assets/RestoreAtlas.png";
import ArtisanConnect from "../../assets/ArtisanConnect.png";
import MedinaTech from "../../assets/MedinaTech.jpg";
import ZelligeInnovation from "../../assets/ZelligeInnovation.png";
import HeritageVr from "../../assets/HeritageVr.jpg";
import AtlasRestore from "../../assets/AtlasRestore.png";
import SoukDigital from "../../assets/SoukDigital.jpg";

export default function StartupCards() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const startups = [
    {
      id: 1,
      name: "HeritageCraft",
      description: "Plateforme dédiée à l’artisanat marocain.",
      category: "Artisanat",
      city: "Fès",
      image: HeritageCraft,
    },
    {
      id: 2,
      name: "RestoreAtlas",
      description: "Solutions modernes pour restaurer le patrimoine.",
      category: "Restauration",
      city: "Marrakech",
      image: RestoreAtlas,
    },
    {
      id: 3,
      name: "ArtisanConnect",
      description: "Marketplace reliant artisans et clients.",
      category: "Artisanat",
      city: "Casablanca",
      image: ArtisanConnect,
    },
    {
      id: 4,
      name: "MedinaTech",
      description: "Technologies pour préserver les médinas.",
      category: "Technologie",
      city: "Fès",
      image: MedinaTech,
    },
    {
      id: 5,
      name: "ZelligeInnovation",
      description: "Design moderne inspiré du zellige.",
      category: "Artisanat",
      city: "Marrakech",
      image: ZelligeInnovation,
    },
    {
      id: 6,
      name: "HeritageVr",
      description: "Réalité virtuelle du patrimoine marocain.",
      category: "Technologie",
      city: "Rabat",
      image: HeritageVr,
    },
    {
      id: 7,
      name: "AtlasRestore",
      description: "Formations pour la restauration traditionnelle.",
      category: "Restauration",
      city: "Marrakech",
      image: AtlasRestore,
    },
    {
      id: 8,
      name: "SoukDigital",
      description: "E-commerce des produits artisanaux marocains.",
      category: "Technologie",
      city: "Casablanca",
      image: SoukDigital,
    },
  ];

  const filteredStartups = startups.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !category || s.category === category;
    const matchCity = !city || s.city === city;
    return matchSearch && matchCategory && matchCity;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        onSearch={setSearch}
        onCategoryChange={setCategory}
        onCityChange={setCity}
      />

      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredStartups.length > 0 ? (
          filteredStartups.map((startup) => (
            <div
              key={startup.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={startup.image}
                alt={startup.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {startup.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {startup.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span className="bg-[#8B8B47] text-white px-3 py-1 rounded-full">
                    {startup.category}
                  </span>
                  <span>{startup.city}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Aucune startup trouvée.
          </p>
        )}
      </div>
    </div>
  );
}
