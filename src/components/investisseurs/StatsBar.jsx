export default function StatsBar() {
  const stats = [
    { label: "Investisseurs inscrits", value: 24 },
    { label: "Montant total investi", value: "2.45M MAD" },
    { label: "Startups financées", value: 92 },
    { label: "Nouveaux ce mois-ci", value: 8 },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {stats.map((s, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm p-4 w-48 text-center border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-[#8B4513]">{s.value}</h3>
          <p className="text-gray-600 text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
