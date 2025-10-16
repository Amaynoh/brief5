export default function InvestorCard({ name, sector, description, website, stage, location }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-[#8B4513]">{name}</h2>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {sector}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{description}</p>

      {/* Infos */}
      <div className="text-sm text-gray-600 mb-4 space-y-1">
        <p>
          <strong>🌐 Site : </strong>
          <a href={`https://${website}`} target="_blank" className="text-blue-600 underline">
            {website}
          </a>
        </p>
        <p>
          <strong>🚀 Stade :</strong> {stage}
        </p>
        <p>
          <strong>📍 Localisation :</strong> {location}
        </p>
      </div>

      {/* Bouton */}
      <button className="bg-[#6B8E23] hover:bg-[#556B2F] text-white px-4 py-2 rounded-md">
        Contacter
      </button>
    </div>
  );
}
