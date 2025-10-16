import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/authSlice";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10" />
        <h1 className="text-xl font-bold text-orange-800">Maroc Digital Hub</h1>
      </div>

      <ul className="hidden md:flex gap-6">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-orange-800 underline" : "hover:text-orange-800 hover:underline"}>Accueil</NavLink></li>
        <li><NavLink to="/startups" className={({ isActive }) => isActive ? "text-orange-800 underline" : "hover:text-orange-800 hover:underline"}>Startups</NavLink></li>
        <li><NavLink to="/investisseurs" className={({ isActive }) => isActive ? "text-orange-800 underline" : "hover:text-orange-800 hover:underline"}>Investisseurs</NavLink></li>
        <li><NavLink to="/evenement" className={({ isActive }) => isActive ? "text-orange-800 underline" : "hover:text-orange-800 hover:underline"}>Événements</NavLink></li>
        <li><NavLink to="/forum" className={({ isActive }) => isActive ? "text-orange-800 underline" : "hover:text-orange-800 hover:underline"}>Forum</NavLink></li>
      </ul>

      <div className="hidden md:flex gap-4 items-center">
        {isAuthenticated && user ? (
          <>
            <p className="text-gray-800 font-medium">👋 {user.fullName} ({user.role})</p>
            <button onClick={() => dispatch(logoutUser())} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Déconnexion</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="bg-orange-800 text-white px-4 py-2 rounded">Connexion</NavLink>
            <NavLink to="/register" className="bg-orange-800 text-white px-4 py-2 rounded">Inscription</NavLink>
          </>
        )}
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col gap-4 md:hidden z-50">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Accueil</NavLink>
          <NavLink to="/startups" onClick={() => setMenuOpen(false)}>Startups</NavLink>
          <NavLink to="/investisseurs" onClick={() => setMenuOpen(false)}>Investisseurs</NavLink>
          <NavLink to="/evenement" onClick={() => setMenuOpen(false)}>Événements</NavLink>
          <NavLink to="/forum" onClick={() => setMenuOpen(false)}>Forum</NavLink>

          <div className="flex flex-col gap-2 mt-4">
            {isAuthenticated && user ? (
              <>
                <p className="text-gray-800 font-medium">👋 {user.fullName} ({user.role})</p>
                <button onClick={() => { dispatch(logoutUser()); setMenuOpen(false); }} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Déconnexion</button>
              </>
            ) : (
              <>
                <NavLink to="/login" onClick={() => setMenuOpen(false)} className="bg-orange-800 text-white px-4 py-2 rounded text-center">Connexion</NavLink>
                <NavLink to="/register" onClick={() => setMenuOpen(false)} className="bg-orange-800 text-white px-4 py-2 rounded text-center">Inscription</NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
