const stats = [
  { value: "584k", label: "إجمالي التبرعات" },
  { value: "322", label: "الحملات المغلقة" },
  { value: "469k", label: "أشخاص سعداء" },
  { value: "46+", label: "متطوعونا" },
];

export default function StatsCard() {
  return (
    <div className="container mx-auto max-w-7xl bg-[#201e1e] border border-border text-white rounded-[20px] shadow-lg p-10 h-fit absolute lg:-bottom-20 -bottom-28 z-40 lg:m-0 m-5">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:divide-x divide-white/20 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <span className="text-5xl font-bold opacity-75">{stat.value}</span>
            <span className="text-lg">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
