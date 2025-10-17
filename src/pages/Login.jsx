import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync } from "../features/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(loginUserAsync(data));
      if (loginUserAsync.fulfilled.match(resultAction)) {
        const user = resultAction.payload;
        if (user.role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error("Erreur de connexion :", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Connexion</h1>

        {error && <p className="text-red-600 text-center font-medium">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email requis" })}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label>Mot de passe</label>
            <input
              type="password"
              {...register("password", { required: "Mot de passe requis" })}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-800 text-white py-2 rounded hover:bg-orange-700 transition"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        {/* Lien optionnel vers la page d'inscription */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Pas encore de compte ?{" "}
          <Link to="/register" className="text-orange-800 hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}

