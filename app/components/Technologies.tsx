"use client";

const techCategories = [
  {
    category: "Frontend",
    bgClass: "from-blue-500/15",
    borderClass: "border-blue-500/20",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    bgClass: "from-green-500/12",
    borderClass: "border-green-500/20",
    techs: ["Node.js", "Python", "Go", "Laravel", "Express", "FastAPI"],
  },
  {
    category: "Mobile",
    bgClass: "from-purple-500/12",
    borderClass: "border-purple-500/20",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    category: "Bases de Datos",
    bgClass: "from-orange-500/12",
    borderClass: "border-orange-500/20",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    bgClass: "from-ghost-red/12",
    borderClass: "border-ghost-red/20",
    techs: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Nginx"],
  },
  {
    category: "Herramientas",
    bgClass: "from-yellow-500/12",
    borderClass: "border-yellow-500/20",
    techs: ["Git", "Figma", "Postman", "Jira", "VS Code", "Linux"],
  },
];

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      className="py-28 px-6 bg-ghost-dark-2 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ghost-red/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ghost-red/40 to-transparent" />

      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <span className="inline-block text-ghost-red text-xs font-semibold tracking-widest uppercase mb-4">
            — Stack Tecnológico —
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-ghost-text mb-4">
            Las herramientas de{" "}
            <span className="gradient-text">nuestro arsenal</span>
          </h2>
          <p className="text-ghost-text-muted text-[1.05rem] max-w-[580px] mx-auto leading-[1.75]">
            Dominamos un stack tecnológico amplio y actualizado para adaptarnos
            a las necesidades específicas de cada proyecto.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className={`card-glow animate-on-scroll rounded-2xl border ${cat.borderClass} bg-gradient-to-br ${cat.bgClass} to-ghost-dark/50 p-6`}
            >
              <h3 className="font-display text-ghost-text font-bold text-[1.05rem] mb-5">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-ghost-dark/60 text-ghost-text border border-ghost-gray/40 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-ghost-dark-3 border border-ghost-gray/40">
          <p className="text-ghost-text-muted mb-4 text-[0.95rem]">
            ¿Tienes un stack específico en mente?{" "}
            <strong className="text-ghost-text">Nos adaptamos a tus necesidades.</strong>
          </p>
          <a
            href="#contacto"
            className="text-ghost-red font-semibold no-underline transition-colors duration-200 hover:text-ghost-red-light"
          >
            Hablemos de tu proyecto →
          </a>
        </div>
      </div>
    </section>
  );
}
