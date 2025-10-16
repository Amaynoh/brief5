import React, { useState } from "react";
import imHero from "../../assets/imHero.png";
import AjouterStartupModal from "../Home/AjoutStartups"; 

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="w-full h-screen bg-[#FFE5B4] p-12 flex items-center relative">
      {/* Partie texte */}
      <div className="w-1/2 pr-6">
        <h2 className="text-4xl font-bold mb-4">
          Connectons l'innovation au patrimoine marocain
        </h2>
        <p className="mb-6 text-lg">
          Découvrez les startups qui révolutionnent l’architecture, l’artisanat 
          et la restauration du patrimoine au Maroc
        </p>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Rechercher une startup..." 
            className="p-2 border rounded flex-1"
          />
          <button className="bg-orange-800 text-white px-4 py-2 rounded">
            Rechercher
          </button>
        </div>
        <button 
          onClick={() => setShowForm(true)} 
          className="mt-6 bg-orange-800 text-white px-4 py-2 rounded"
        >
          Publier ma startup
        </button>
      </div>

      {/* Partie image */}
      <div className="w-1/2 flex justify-center">
        <img 
          src={imHero} 
          alt="Innovation et patrimoine" 
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Modal du formulaire */}
      <AjouterStartupModal isOpen={showForm} setIsOpen={setShowForm} />
    </section>
  );
}
