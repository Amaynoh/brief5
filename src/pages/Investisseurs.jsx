import { useState } from "react";
import StatsBar from "../components/investisseurs/StatsBar";
import InvestorCard from "../components/investisseurs/InvestorCard";

export default function Investors() {
  // 🔹 Liste complète des investisseurs et centres d’investissement
  const investors = [
    {
      name: "Riyassa Heritage Fund",
      sector: "Restauration du patrimoine",
      description:
        "Fonds d’investissement dédié aux projets de conservation, restauration et valorisation du patrimoine marocain.",
      website: "www.riyassa.ma",
      stage: "Seed, Série A",
      location: "Casablanca, Maroc",
    },
    {
      name: "Atlas Architecture Partners",
      sector: "Architecture",
      description:
        "Soutient les bureaux d’architecture qui allient savoir-faire marocain et innovation durable.",
      website: "www.atlasarchi.ma",
      stage: "Série A, Série B",
      location: "Rabat, Maroc",
    },
    {
      name: "Oasis Artisanat Fund",
      sector: "Artisanat",
      description:
        "Investit dans les artisans et les startups qui modernisent les métiers d’art marocains.",
      website: "www.oasisartisanat.ma",
      stage: "Seed",
      location: "Marrakech, Maroc",
    },
    {
      name: "Centre Marocain du Patrimoine",
      sector: "Restauration du patrimoine",
      description:
        "Un centre de financement et d’accompagnement pour les projets de sauvegarde du patrimoine bâti.",
      website: "www.cmp.ma",
      stage: "Subvention & accompagnement",
      location: "Fès, Maroc",
    },
    {
      name: "Architek Studio Fund",
      sector: "Architecture",
      description:
        "Aide les jeunes architectes à concrétiser leurs idées à travers des bourses et un accompagnement technique.",
      website: "www.architek.ma",
      stage: "Incubation",
      location: "Casablanca, Maroc",
    },
    {
      name: "Maison des Métiers d’Art",
      sector: "Artisanat",
      description:
        "Centre d’investissement et de formation dédié à la transmission et à la modernisation de l’artisanat marocain.",
      website: "www.mma.ma",
      stage: "Seed, Série A",
      location: "Tétouan, Maroc",
    },
    {
      name: "Fondation Dar Al Fan",
      sector: "Artisanat",
      description:
        "Partenaire clé pour les artisans et designers marocains, soutenant la création d’ateliers et la vente à l’international.",
      website: "www.daralfan.ma",
      stage: "Soutien culturel",
      location: "Essaouira, Maroc",
    },
    {
      name: "Heritage Green Initiative",
      sector: "Restauration du patrimoine",
      description:
        "Investit dans la réhabilitation durable du patrimoine architectural à travers des technologies vertes.",
      website: "www.hgi.ma",
      stage: "Série A",
      location: "Chefchaouen, Maroc",
    },
  ];

  // 🔹 États pour le filtre et la recherche
  const [filtre, setFiltre] = useState("Tous");
  const [recherche, setRecherche] = useState("");

  // 🔹 Catégories de filtre
  const categories = ["Tous", "Architecture", "Artisanat", "Restauration du patrimoine"];

  // 🔹 Filtrage combiné
  const investorsFiltres = investors.filter((inv) => {
    const matchSecteur = filtre === "Tous" || inv.sector === filtre;
    const matchRecherche = inv.name.toLowerCase().includes(recherche.toLowerCase());
    return matchSecteur && matchRecherche;
  });

  return (
    <div className="bg-[#FAF5EE] min-h-screen pb-20">
      {/* 🔸 Titre principal */}
      <div className="text-center pt-10">
        <h1 className="text-3xl font-bold text-[#8B4513] mb-3">Investisseurs & Centres</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez les acteurs qui soutiennent le développement de l’architecture, de l’artisanat 
          et de la restauration du patrimoine au Maroc.
        </p>
      </div>

      {/* 🔸 Barre de statistiques */}
      <StatsBar />

      {/* 🔸 Barre de recherche */}
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="🔍 Rechercher un investisseur ou centre..."
          className="w-96 px-4 py-2 border border-[#8B4513] rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
      </div>

      {/* 🔸 Filtres */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltre(cat)}
            className={`px-5 py-2 rounded-full border transition-all duration-200 ${
              filtre === cat
                ? "bg-[#8B4513] text-white border-[#8B4513]"
                : "bg-white text-[#8B4513] border-[#8B4513] hover:bg-[#8B4513] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔸 Liste des investisseurs filtrés */}
      <div className="max-w-5xl mx-auto px-6 mt-10 space-y-6">
        {investorsFiltres.length > 0 ? (
          investorsFiltres.map((inv, i) => <InvestorCard key={i} {...inv} />)
        ) : (
          <p className="text-center text-gray-600">
            Aucun résultat trouvé pour cette recherche.
          </p>
        )}
      </div>
    </div>
  );
}
