import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStartupAsync } from "../../features/startupsSlice";

export default function AjouterStartupModal({ isOpen, setIsOpen }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(addStartupAsync(data));
      if (addStartupAsync.fulfilled.match(resultAction)) {
        setIsOpen(false);
      } else {
        alert("Erreur ajout startup: " + (resultAction.error?.message || "inconnue"));
      }
    } catch (err) {
      alert("Erreur inattendue");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="relative z-50 bg-white w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 animate-fadeIn">
        <button onClick={() => setIsOpen(false)} className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold">✕</button>
        <h2 className="text-2xl font-semibold mb-6 text-center">Ajouter une Nouvelle Startup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Nom de la Startup</label>
            <input
              type="text"
              placeholder="Nom de la startup"
              {...register("nom", { required: "Ce champ est requis" })}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Secteur d’Activité</label>
            <select
              {...register("secteur", { required: "Veuillez sélectionner un secteur" })}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Sélectionnez un secteur</option>
              <option value="architecture">Architecture</option>
              <option value="artisats">Artisats</option>
              <option value="restauration">Restauration</option>
              <option value="autre">Autre</option>
            </select>
            {errors.secteur && <p className="text-red-500 text-sm mt-1">{errors.secteur.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Description Détaillée</label>
            <textarea
              placeholder="Description détaillée"
              {...register("description", { required: "Ce champ est requis" })}
              className="w-full border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Logo ou Image Représentative</label>
            <input
              type="text"
              placeholder="URL de l'image (ex: https://...) ou HeritageCraft.png"
              {...register("logo")}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium">Coordonnées de Contact</label>
            <input
              type="text"
              placeholder="Email ou téléphone"
              {...register("contact", { required: "Ce champ est requis" })}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-orange-600 text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
          >
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
}

