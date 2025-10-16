import React from "react";
import EventCard from "./EventCard";
import architectureWorkshop from "../../assets/architecture-workshop.png";
import heritageConference from "../../assets/heritage-conference.png";
import potteryFestival from "../../assets/pottery-festival.png";

export default function EventsList({ selectedCategory, selectedCity }) {
  const events = [
    {
      id: 1,
      title: "Atelier Architecture Traditionnelle",
      description: "Découvrez les techniques ancestrales de construction et leur adaptation moderne",
      date: "15 Nov 2024",
      location: "Casablanca",
      participants: "24 participants",
      category: "Architecture",
      image: architectureWorkshop
    },
    {
      id: 2,
      title: "Festival de la Poterie",
      description: "Rencontrez les maîtres potiers et découvrez l'art de la céramique marocaine",
      date: "22 Nov 2024",
      location: "Salé",
      participants: "18 participants",
      category: "Artisanat",
      image: potteryFestival
    },
    {
      id: 3,
      title: "Conférence Restauration du Patrimoine",
      description: "Techniques modernes pour la préservation des monuments historiques",
      date: "28 Nov 2024",
      location: "Rabat",
      participants: "32 participants",
      category: "Restauration",
      image: heritageConference
    }
  ];

  const filteredEvents = events.filter(event => {
    return (selectedCategory === "Toutes les catégories" || event.category === selectedCategory)
        && (selectedCity === "Toutes les villes" || event.location === selectedCity);
  });

  return (
    <div className="space-y-4">
      {filteredEvents.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Aucun événement trouvé.</p>
      ) : (
        filteredEvents.map(event => <EventCard key={event.id} {...event} />)
      )}
    </div>
  );
}



