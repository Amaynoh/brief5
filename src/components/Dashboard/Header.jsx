import React, { useState } from 'react';
import heritageBuilding from "../../assets/heritage-building.png"; 
import BecomeInvestorForm from "../Dashboard/BecomeInvestorForm"; 

export default function Header() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-amber-50 py-16 px-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            L'écosystème digital du patrimoine marocain
          </h1>
          <p className="text-amber-800 mb-6 max-w-xl">
            Connecter, préserver, promouvoir et partager notre héritage culturel marocain, 
            enrichissant le présent et la restauration patrimoniale
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-amber-900 text-white px-6 py-2 rounded hover:bg-amber-800">
              Découvrir startups
            </button>
            <button 
              onClick={() => setShowForm(true)}
              className="border-2 border-amber-900 text-amber-900 px-6 py-2 rounded hover:bg-amber-100"
            >
              Devenir investisseur
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img 
            src={heritageBuilding} 
            alt="Heritage marocain" 
            className="rounded-lg shadow-lg w-full max-w-md h-64 object-cover"
          />
        </div>
      </div>

      {/* Formulaire popup */}
      {showForm && <BecomeInvestorForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
