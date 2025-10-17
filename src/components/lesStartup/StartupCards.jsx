import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStartupsAsync } from "../../features/startupsSlice";
import HeroSection from "../lesStartup/HeroSection";

export default function StartupCards() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const { items: startups, loading, error } = useSelector((state) => state.startups);

  useEffect(() => {
    dispatch(fetchStartupsAsync());
  }, [dispatch]);

  const filteredStartups = startups.filter((s) => {
    const matchSearch = s.nom?.toLowerCase().includes(search.toLowerCase()) || s.description?.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !category || s.secteur === category;
    const matchCity = !city || s.city === city;
    return matchSearch && matchCategory && matchCity;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection onSearch={setSearch} onCategoryChange={setCategory} onCityChange={setCity} />

      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <p>Chargement...</p>
        ) : filteredStartups.length > 0 ? (
          filteredStartups.map((startup) => (
            <div key={startup.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src={startup.logo || ""} alt={startup.nom} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{startup.nom}</h3>
                <p className="text-gray-600 mb-4 text-sm">{startup.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span className="bg-[#8B8B47] rounded-full px-3 py-1 text-white">{startup.secteur}</span>
                  <span>{startup.city}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Aucune startup trouvée.</p>
        )}
        {error && <p className="text-red-500 text-center col-span-full">{error}</p>}
      </div>
    </div>
  );
}
