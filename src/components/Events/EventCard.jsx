import React from "react";

export default function EventCard({ title, description, date, location, participants, category, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex gap-4 p-4 hover:shadow-lg transition-shadow">
      <img 
        src={image || "/assets/event-default.jpg"} 
        alt={title}
        className="w-44 h-32 object-cover rounded"
      />
      <div className="flex-1 flex flex-col">
        <span 
          className="inline-block text-white text-xs px-3 py-1 rounded-full mb-3 w-fit"
          style={{ backgroundColor: '#8B8B47' }}
        >
          {category}
        </span>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <span>📅</span>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>👥</span>
            <span>{participants}</span>
          </div>
        </div>

        <button 
          className="text-white px-5 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity w-fit"
          style={{ backgroundColor: '#8B5A3C' }}
        >
          Participer
        </button>
      </div>
    </div>
  );
}
