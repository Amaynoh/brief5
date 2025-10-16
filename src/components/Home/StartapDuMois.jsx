import React from "react";
import Startap from "../../assets/Startap.png";

const Startup = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center justify-between text-white p-10 shadow-lg"
      style={{
        background: "linear-gradient(to right, #8B4513, #D2691E)",
      }}
    >
      {/* Texte */}
      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">ZellijTech</h2>
        <p className="text-lg mb-6">
          Révolutionne la création de zelliges traditionnels avec l’impression 3D
          et l’IA pour préserver cet art ancestral.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            className="px-6 py-2 font-semibold rounded-lg text-white"
            style={{ background: "#8B4513" }}
          >
            Découvrir
          </button>
          <button
            className="px-6 py-2 font-semibold rounded-lg text-white"
            style={{ background: "#D2691E" }}
          >
            Investir
          </button>
        </div>
      </div>

      {/* Logo */}
      <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
        <img
          src={Startap}
          alt="Logo ZellijTech"
          className="w-48 h-48 object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default Startup;
