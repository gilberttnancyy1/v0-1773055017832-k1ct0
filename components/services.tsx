const services = [
  {
    icon: "✦",
    title: "UI/UX Дизайн",
    desc: "Интерфейсы, которые интуитивно понятны и визуально безупречны. От вайрфреймов до финального пикселя.",
    tags: ["Figma", "Prototyping", "Research"],
  },
  {
    icon: "⬡",
    title: "Веб-разработка",
    desc: "Быстрые, масштабируемые приложения на современном стеке. Next.js, TypeScript, и всё что нужно.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: "◈",
    title: "Брендинг",
    desc: "Создаём уникальную идентичность бренда, которая выделяется и запоминается надолго.",
    tags: ["Логотип", "Гайдлайн", "Айдентика"],
  },
  {
    icon: "◎",
    title: "Motion Design",
    desc: "Анимации и интерактивность, которые оживляют продукт и делают опыт незабываемым.",
    tags: ["After Effects", "Lottie", "GSAP"],
  },
  {
    icon: "⟡",
    title: "SEO & Аналитика",
    desc: "Оптимизируем видимость в поиске и настраиваем аналитику для принятия решений на основе данных.",
    tags: ["Core Web Vitals", "GA4", "Schema"],
  },
  {
    icon: "⬢",
    title: "Поддержка",
    desc: "Не бросаем после запуска. Мониторинг, обновления и развитие продукта на постоянной основе.",
    tags: ["24/7", "SLA", "Roadmap"],
  },
];

export default function Services() {
  return (
    <section id="услуги" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">
            Что мы делаем
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            Полный цикл
            <br />
            <span className="gradient-text">создания продукта</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="text-3xl mb-4 text-violet-400">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full bg-white/5 text-white/40 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}