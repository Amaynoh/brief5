import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white py-10  bottom-0">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo Maroc Digital Hub" className="h-10" />
            <h1 className="text-xl font-bold text-white">
              Maroc Digital Hub
            </h1>
          </div>
          <p className="mt-2 text-sm">
            Connecter l'innovation au patrimoine marocain
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#">
              <FaFacebookF className="text-xl hover:text-gray-300 transition-colors" />
            </a>
            <a href="#">
              <FaTwitter className="text-xl hover:text-gray-300 transition-colors" />
            </a>
            <a href="#">
              <FaLinkedinIn className="text-xl hover:text-gray-300 transition-colors" />
            </a>
            <a href="#">
              <FaInstagram className="text-xl hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Plateforme */}
        <div>
          <h3 className="font-semibold mb-3">Plateforme</h3>
          <ul className="space-y-2 text-sm">
  <li><Link to="/startups" className="hover:underline">Startups</Link></li>
  <li><Link to="/investisseurs" className="hover:underline">Investisseurs</Link></li>
  <li><Link to="/evenements" className="hover:underline">Événements</Link></li>
  <li><Link to="/ressources" className="hover:underline">Ressources</Link></li>
</ul>
        </div>
        {/* Support */}
         <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Centre d'aide</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Mentions légales</a></li>
          </ul>
        </div>
 {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">Restez informé des dernières innovations</p>
          <form className="flex">
            <input
  type="email"
  placeholder="Votre email"
  className="px-3 py-2 rounded-l-md bg-white text-black w-full focus:outline-none"
/>
<button
  type="submit"
  className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors"
>
  S'abonner
</button>
          </form>
        </div>
      </div>
      
      {/* Bas de page */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm">
        © 2025 Maroc Digital Hub. Tous droits réservés.
      </div>
    </footer>
  );
}
