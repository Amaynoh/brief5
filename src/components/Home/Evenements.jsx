import React from "react";

const Evenements = () => {
  const events = [
    {
      date: "15 DÉC",
      title: "Forum Innovation Patrimoine",
      place: "Casablanca • 14:00 - 18:00",
      link: "#",
    },
    {
      date: "22 DÉC",
      title: "Atelier Artisanat Digital",
      place: "Marrakech • 14:00 - 16:00",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-orange-50 py-12">
      <div className="px-6 mx-auto">
        <h2 className="text-center text-2xl font-bold text-orange-900">
          Événements à venir
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex bg-white border border-gray-200 rounded-lg p-4 shadow"
            >
              {/* Bloc Date */}
              <div className="bg-[#D2691E] text-white rounded-lg p-3 text-center w-20">
                <span className="text-lg font-bold">{event.date}</span>
              </div>

              {/* Détails */}
              <div className="flex-grow ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.place}</p>
                <a
                  href={event.link}
                  className="text-[#6B8E23] font-medium mt-2 inline-block"
                >
                  S'inscrire
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="text-orange-900 text-center block mt-8 font-semibold"
        >
          Voir tous les événements
        </a>
      </div>
    </section>
  );
};

export default Evenements;
