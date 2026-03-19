"use client";

const techCategories = [
  {
    category: "Frontend",
    accent: "rgba(59,130,246,0.15)",
    border: "rgba(59,130,246,0.2)",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    accent: "rgba(34,197,94,0.12)",
    border: "rgba(34,197,94,0.2)",
    techs: ["Node.js", "Python", "Go", "Laravel", "Express", "FastAPI"],
  },
  {
    category: "Mobile",
    accent: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.2)",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    category: "Bases de Datos",
    accent: "rgba(249,115,22,0.12)",
    border: "rgba(249,115,22,0.2)",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    accent: "rgba(192,28,28,0.12)",
    border: "rgba(192,28,28,0.2)",
    techs: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Nginx"],
  },
  {
    category: "Herramientas",
    accent: "rgba(234,179,8,0.12)",
    border: "rgba(234,179,8,0.2)",
    techs: ["Git", "Figma", "Postman", "Jira", "VS Code", "Linux"],
  },
];

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(192,28,28,0.4), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(192,28,28,0.4), transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              color: "#C01C1C",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            — Stack Tecnológico —
          </span>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#F0F0F0",
              marginBottom: "1rem",
            }}
          >
            Las herramientas de{" "}
            <span className="gradient-text">nuestro arsenal</span>
          </h2>
          <p style={{ color: "#9A9A9A", fontSize: "1.05rem", maxWidth: "580px", margin: "0 auto", lineHeight: 1.75 }}>
            Dominamos un stack tecnológico amplio y actualizado para adaptarnos
            a las necesidades específicas de cada proyecto.
          </p>
        </div>

        {/* Tech Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className="card-glow"
              style={{
                borderRadius: "1rem",
                border: `1px solid ${cat.border}`,
                background: `linear-gradient(135deg, ${cat.accent}, rgba(10,10,10,0.5))`,
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  color: "#F0F0F0",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  marginBottom: "1.25rem",
                }}
              >
                {cat.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "0.375rem 0.75rem",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      borderRadius: "0.5rem",
                      backgroundColor: "rgba(10,10,10,0.6)",
                      color: "#F0F0F0",
                      border: "1px solid rgba(42,42,42,0.4)",
                      transition: "border-color 0.2s ease",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "4rem",
            textAlign: "center",
            padding: "2rem",
            borderRadius: "1rem",
            backgroundColor: "#1A1A1A",
            border: "1px solid rgba(42,42,42,0.4)",
          }}
        >
          <p style={{ color: "#9A9A9A", marginBottom: "1rem", fontSize: "0.95rem" }}>
            ¿Tienes un stack específico en mente?{" "}
            <strong style={{ color: "#F0F0F0" }}>Nos adaptamos a tus necesidades.</strong>
          </p>
          <a
            href="#contacto"
            style={{
              color: "#C01C1C",
              fontWeight: 600,
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            Hablemos de tu proyecto →
          </a>
        </div>
      </div>
    </section>
  );
}
