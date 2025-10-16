import React from "react";

export default function Pagination({ totalPages, currentPage, onChange }) {
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  // Limite les pages visibles (facultatif)
  const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-6 select-none">
      {/* Bouton précédent */}
      <button
        onClick={() => !prevDisabled && onChange(currentPage - 1)}
        disabled={prevDisabled}
        className={`px-3 py-1 rounded-lg border ${
          prevDisabled
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white hover:bg-orange-100 text-orange-600 border-orange-400"
        }`}
      >
        ⬅️ Précédent
      </button>

      {/* Numéros de page */}
      {visiblePages.map((num) => (
        <button
          key={num}
          onClick={() => onChange(num)}
          className={`w-8 h-8 flex items-center justify-center rounded-lg border ${
            currentPage === num
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-white hover:bg-orange-100 text-orange-600 border-orange-400"
          }`}
        >
          {num}
        </button>
      ))}

      {/* Bouton suivant */}
      <button
        onClick={() => !nextDisabled && onChange(currentPage + 1)}
        disabled={nextDisabled}
        className={`px-3 py-1 rounded-lg border ${
          nextDisabled
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white hover:bg-orange-100 text-orange-600 border-orange-400"
        }`}
      >
        Suivant ➡️
      </button>
    </div>
  );
}
