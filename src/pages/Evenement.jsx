import React, { useState } from "react";
import EventsHeader from "../components/Events/EventHeadre";
import EventsList from "../components/Events/EventsList";
import Sidebar from "../components/Events/Sidebar";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes les catégories");
  const [selectedCity, setSelectedCity] = useState("Toutes les villes");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <EventsHeader 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
            <EventsList 
              selectedCategory={selectedCategory}
              selectedCity={selectedCity}
            />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

