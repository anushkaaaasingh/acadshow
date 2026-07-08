const HomeCard = () => {
  const stats = [
    { label: "Publications", value: "10" },
    { label: "Articles", value: "12" },
    { label: "Workshops", value: "6" },
  ];

  const highlights = [
    "Researcher profiles and expertise",
    "Recent publications and articles",
    "Workshop calendars and academic events",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-violet-200 bg-white p-6 text-center shadow-lg shadow-violet-100"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
                {item.label}
              </p>
              <p className="mt-3 text-4xl font-bold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[1.75rem] bg-gradient-to-br from-[#3b0d68] to-[#7c3aed] p-8 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-100">
            What you can explore
          </p>
          <ul className="mt-6 space-y-4 text-lg text-violet-50">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
