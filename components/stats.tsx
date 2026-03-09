const stats = [
  { value: "120+", label: "Проектов запущено" },
  { value: "98%", label: "Довольных клиентов" },
  { value: "5 лет", label: "На рынке" },
  { value: "3×", label: "Средний рост конверсии" },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
              {s.value}
            </div>
            <div className="text-white/40 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}