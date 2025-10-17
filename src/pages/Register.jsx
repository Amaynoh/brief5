import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAsync, clearMessages } from "../features/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, successMessage } = useSelector((state) => state.auth);
  const password = watch("password");

  // Nettoyer les messages quand on quitte la page
  useEffect(() => {
    return () => dispatch(clearMessages());
  }, [dispatch]);

  const onSubmit = async (data) => {
    const { fullName, email, password, role } = data;
    const resultAction = await dispatch(registerUserAsync({ fullName, email, password, role }));
    
    if (registerUserAsync.fulfilled.match(resultAction)) {
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Inscription</h1>

        {error && <p className="text-red-600 text-center font-medium">{error}</p>}
        {successMessage && (
          <p className="text-green-600 text-center font-medium">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom complet</label>
            <input
              type="text"
              {...register("fullName", { required: "Nom complet requis" })}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { 
                required: "Email requis",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Format d'email invalide"
                }
              })}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              {...register("password", { 
                required: "Mot de passe requis",
                minLength: {
                  value: 3,
                  message: "Le mot de passe doit contenir au moins 3 caractères"
                }
              })}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
            <input
              type="password"
              {...register("confirmPassword", { 
                required: "Confirmation du mot de passe requise",
                validate: (value) => value === password || "Les mots de passe ne correspondent pas"
              })}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Type de compte</label>
            <select
              {...register("role", { required: "Veuillez sélectionner un type de compte" })}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">-- Sélectionnez --</option>
              <option value="startup">Startup</option>
              <option value="investisseur">Investisseur</option>
            </select>
            {errors.role && (
              <p className="text-red-600 text-sm mt-1">{errors.role.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-800 text-white py-2 rounded hover:bg-orange-700 transition disabled:opacity-50"
          >
            {loading ? "Inscription en cours..." : "S'inscrire"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Déjà un compte ?{" "}
          <Link to="/login" className="text-orange-800 hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}

