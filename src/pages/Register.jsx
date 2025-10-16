import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const password = watch("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Enregistre l'utilisateur avec le rôle sélectionné
    dispatch(
      loginUser({
        fullName: data.fullName,
        role: data.role, // <-- ici on prend le rôle choisi
        email: data.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Créer un compte
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nom complet */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom complet
            </label>
            <input
              {...register("fullName", { required: "Nom requis" })}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Ex: Amina Habab"
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email", { required: "Email requis" })}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="exemple@mail.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Mot de passe requis" })}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-orange-600"
              >
                {showPassword ? "Masquer" : "Voir"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Sélecteur de rôle */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sélectionnez votre rôle
            </label>
            <select
              {...register("role", { required: "Rôle requis" })}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
            >
              <option value="">-- Choisissez un rôle --</option>
              <option value="admin">Admin</option>
              <option value="startup">Startup</option>
              <option value="investisseur">Investisseur</option>
            </select>
            {errors.role && (
              <p className="text-red-600 text-sm">{errors.role.message}</p>
            )}
          </div>

          {/* Bouton d'inscription */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
          >
            S'inscrire
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-orange-600 hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

