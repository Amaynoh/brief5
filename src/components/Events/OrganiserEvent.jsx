import React from "react";
import { useForm } from "react-hook-form";

const OrganiserEvent = ({ setIsOpen }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#F5F1E8] flex justify-center p-4">
      {/* Formulaire pleine page avec scroll si nécessaire */}
      <div className="w-full max-w-3xl bg-[#F5F1E8] p-8 rounded-lg shadow-lg overflow-y-auto max-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Organiser un Événement
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Partagez votre événement avec la communauté du patrimoine numérique
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Titre */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Titre de l'événement *</label>
            <input
              type="text"
              placeholder="Ex: Forum Architecture Durable"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#6B8E23] focus:outline-none"
              {...register("titre", { required: "Le titre est requis" })}
            />
            {errors.titre && <p className="text-red-600 text-sm">{errors.titre.message}</p>}
          </div>

          {/* Catégorie */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Catégorie *</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#6B8E23] focus:outline-none"
              defaultValue=""
              {...register("categorie", { required: "La catégorie est requise" })}
            >
              <option value="" disabled>Sélectionnez une catégorie</option>
              <option value="architecture">Architecture</option>
              <option value="heritage">Patrimoine</option>
              <option value="digital">Digital</option>
            </select>
            {errors.categorie && <p className="text-red-600 text-sm">{errors.categorie.message}</p>}
          </div>

          {/* Date et heures */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date *</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#6B8E23] focus:outline-none"
                {...register("date", { required: "La date est requise" })}
              />
              {errors.date && <p className="text-red-600 text-sm">{errors.date.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Heure début *</label>
              <input
                type="time"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#6B8E23] focus:outline-none"
                {...register("heureDebut", { required: "L'heure de début est requise" })}
              />
              {errors.heureDebut && <p className="text-red-600 text-sm">{errors.heureDebut.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Heure fin *</label>
              <input
                type="time"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#6B8E23] focus:outline-none"
                {...register("heureFin", { required: "L'heure de fin est requise" })}
              />
              {errors.heureFin && <p className="text-red-600 text-sm">{errors.heureFin.message}</p>}
            </div>
          </div>

          {/* Ville */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Ville *</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#6B8E23] focus:outline-none"
              defaultValue="Casablanca"
              {...register("ville", { required: "La ville est requise" })}
            >
              <option value="Casablanca">Casablanca</option>
              <option value="Rabat">Rabat</option>
              <option value="Marrakech">Marrakech</option>
            </select>
            {errors.ville && <p className="text-red-600 text-sm">{errors.ville.message}</p>}
          </div>

          {/* Lieu précis */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Lieu précis *</label>
            <input
              type="text"
              placeholder="Ex: Palais des Congrès"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#6B8E23] focus:outline-none"
              {...register("lieu", { required: "Le lieu est requis" })}
            />
            {errors.lieu && <p className="text-red-600 text-sm">{errors.lieu.message}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description *</label>
            <textarea
              placeholder="Décrivez votre événement..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#6B8E23] focus:outline-none"
              {...register("description", { required: "La description est requise" })}
            />
            {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-[#6B8E23] text-[#6B8E23] rounded hover:bg-[#6B8E23] hover:text-white transition"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#6B8E23] text-white rounded hover:bg-[#558218] transition"
            >
              + Créer l'événement
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default OrganiserEvent;

