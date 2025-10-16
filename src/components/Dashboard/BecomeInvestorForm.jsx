import React from "react";
import { useForm } from "react-hook-form";

export default function BecomeInvestorForm({ onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Formulaire envoyé !");
    onClose(); // ferme le formulaire
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-[#F5F1E8] p-8 rounded-lg shadow-md w-full max-w-md relative"
      >
        <button 
          type="button" 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Devenir Investisseur
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Nom</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Votre nom"
          />
          {errors.name && <span className="text-red-500 text-sm">Ce champ est requis</span>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Votre email"
          />
          {errors.email && <span className="text-red-500 text-sm">Ce champ est requis</span>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Montant</label>
          <input
            type="number"
            {...register("amount", { required: true, min: 100 })}
            className="w-full p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Montant minimum 100"
          />
          {errors.amount && <span className="text-red-500 text-sm">Veuillez entrer un montant valide</span>}
        </div>

        <button
          type="submit"
          className="w-full bg-[#6B8E23] text-white p-2 rounded font-bold hover:bg-green-700 transition-colors"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
