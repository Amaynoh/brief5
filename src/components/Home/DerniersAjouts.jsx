import React, { useState } from 'react';
import CeramTech from "../../assets/CeramTech.png";
import RestorArch from "../../assets/RestorArch.png";
import TextileTech from "../../assets/TextileTec.png";
import Heritage3D from "../../assets/Heritage3D.png"; 
import Pagination from "../../components/Pagination";

function DerniersAjouts() {
  const projets = [
    {
      id: 1,
      titre: "CeramTech",
      description: "Innovation dans la céramique traditionnelle",
      image: CeramTech,
      categorie: "Artisanat",
      couleurCategorie: "bg-[#6B8E23]" 
    },
    {
      id: 2,
      titre: "RestorArch",
      description: "Restauration numérique du patrimoine",
      image: RestorArch,
      categorie: "Architecture",
      couleurCategorie: "bg-[#D2691E]" 
    },
    {
      id: 3,
      titre: "TextileTech",
      description: "Modernisation de l'artisanat textile",
      image: TextileTech,
      categorie: "Artisanat",
      couleurCategorie: "bg-[#6B8E23]"
    },
    {
      id: 4,
      titre: "Heritage3D",
      description: "Scan 3D pour la conservation",
      image: Heritage3D,
      categorie: "Restauration",
      couleurCategorie: "bg-[#D2691E]"
    }
  ];

  // Pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 2; // nombre de projets par page
  const totalPages = Math.ceil(projets.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = projets.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-orange-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-orange-900">
            Derniers ajouts
          </h2>
          <a 
            href="#" 
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            Voir tout
          </a>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((projet) => (
            <div 
              key={projet.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={projet.image} 
                  alt={projet.titre}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Contenu */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-orange-900 mb-2">
                  {projet.titre}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {projet.description}
                </p>
                {/* Badge toujours en bas */}
                <div className="mt-auto">
                  <span className={`inline-block ${projet.couleurCategorie} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {projet.categorie}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onChange={setPage}
        />
      </div>
    </div>
  );
}

export default DerniersAjouts;



