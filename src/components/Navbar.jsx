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
  const handleCloseMenu = () => setMenuOpen(false);

  const renderLinks = () => {
    const links = [
      { to: "/", label: "Accueil" },
      { to: "/startups", label: "Startups" },
      { to: "/investisseurs", label: "Investisseurs" },
      { to: "/evenement", label: "Événements" },
      { to: "/myevents", label: "My Événements" },
    ];
    if (isAuthenticated && user?.role === "admin") {
      links.push({ to: "/dashboard", label: "Dashboard" });
    }

    return links.map((link) => (
      <li key={link.to}>
        <NavLink
          to={link.to}
          onClick={handleCloseMenu}
          className={({ isActive }) =>
            isActive ? "text-orange-800 underline" : "hover:text-orange-800 hover:underline"
          }
        >
          {link.label}
        </NavLink>
      </li>
    ));
  };

  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10" />
        <h1 className="text-xl font-bold text-orange-800">Maroc Digital Hub</h1>
      </div>

      <ul className="hidden md:flex gap-6">{renderLinks()}</ul>

      <div className="hidden md:flex gap-4 items-center">
        {isAuthenticated && user ? (
          <>
            <p className="text-gray-800 font-medium">
              👋 {user.fullName || user.email} ({user.role})
            </p>
            <button
              onClick={() => dispatch(logoutUser())}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="bg-orange-800 text-white px-4 py-2 rounded">
              Connexion
            </NavLink>
            <NavLink to="/register" className="bg-orange-800 text-white px-4 py-2 rounded">
              Inscription
            </NavLink>
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
          <ul className="flex flex-col gap-4">{renderLinks()}</ul>
          <div className="flex flex-col gap-2 mt-4">
            {isAuthenticated && user ? (
              <>
                <p className="text-gray-800 font-medium">
                  👋 {user.fullName || user.email} ({user.role})
                </p>
                <button
                  onClick={() => {
                    dispatch(logoutUser());
                    handleCloseMenu();
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  onClick={handleCloseMenu}
                  className="bg-orange-800 text-white px-4 py-2 rounded text-center"
                >
                  Connexion
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={handleCloseMenu}
                  className="bg-orange-800 text-white px-4 py-2 rounded text-center"
                >
                  Inscription
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

