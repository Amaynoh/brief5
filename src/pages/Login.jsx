import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { loginUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(loginUser({ fullName: "Utilisateur", role: "guest", email: data.email }));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Bienvenue</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Email</label>
            <input type="email" {...register("email", { required: "Email requis" })} className="w-full px-3 py-2 border rounded" />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label>Mot de passe</label>
            <input type="password" {...register("password", { required: "Mot de passe requis" })} className="w-full px-3 py-2 border rounded" />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>
          <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

