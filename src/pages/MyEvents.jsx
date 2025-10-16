import React from 'react';
import patrimoineRabat from "../assets/patrimoine-rabat.png";
import architectureDurable from "../assets/architecture-durable.png";
import artisanatMarocain from "../assets/artisanat-marocain.png";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      status: "Inscrit",
      title: "Atelier sur l'architecture durable",
      date: "15 juillet 2024",
      location: "Centre des arts de Marrakech",
      image: architectureDurable, // ✅ nom corrigé
      action: "Se désinscrire",
      actionType: "unregister",
    },
    {
      id: 2,
      status: "Inscrit",
      title: "Conférence sur l'artisanat marocain",
      date: "22 juillet 2024",
      location: "Palais des congrès de Fès",
      image: artisanatMarocain, // ✅ nom corrigé
      action: "Se désinscrire",
      actionType: "unregister",
    },
    {
      id: 3,
      status: "À venir",
      title: "Restauration du patrimoine : techniques et défis",
      date: "8 juillet 2024",
      location: "Site historique de Rabat",
      image: patrimoineRabat, // ✅ nom corrigé
      action: "Participer",
      actionType: "register",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-slate-900">Mes événements</h1>
          <p className="mt-2 text-slate-600">
            Gérez vos inscriptions et découvrez de nouveaux événements
          </p>
        </div>
      </header>

      {/* Events Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image */}
            <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <span
                className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold text-white ${
                  event.status === "Inscrit" ? "bg-green-700" : "bg-orange-600"
                }`}
              >
                {event.status}
              </span>
            </div>

            {/* Content */}
            <div className="md:w-3/5 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-blue-600 cursor-pointer">
                  {event.title}
                </h2>
                <div className="space-y-3 mb-6 text-slate-600">
                  <div className="flex items-center">
                    <span className="mr-3">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  className={`px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition duration-200 ${
                    event.actionType === "unregister"
                      ? "bg-green-700 hover:opacity-90"
                      : "bg-orange-600 hover:opacity-90"
                  }`}
                >
                  {event.action}
                </button>
                <button className="font-medium text-orange-600 hover:underline">
                  Voir les détails →
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        <div className="mt-12 text-center">
          <p className="text-slate-500">Vous avez vu tous vos événements</p>
          <button className="mt-4 px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg bg-orange-600 hover:opacity-90 transition duration-200">
            Découvrir plus d'événements
          </button>
        </div>
      </main>
    </div>
  );
}
