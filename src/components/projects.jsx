import Tilt from "react-parallax-tilt";
import { useMemo } from "react";
import { useSheet } from "../data/useSheet";

// 🔗 Your live SheetBest endpoint
const SHEET_PROJECTS_ENDPOINT =
  "https://api.sheetbest.com/sheets/812fc082-7575-4536-96da-0f943ab67648";

export default function Projects() {
  const { data: rows, loading, error } = useSheet(SHEET_PROJECTS_ENDPOINT);

  // 🧠 Map the sheet rows into project objects
  const projects = useMemo(() => {
    if (!rows || !Array.isArray(rows)) return [];
    return rows.map((r) => ({
      title: r.title || "",
      desc: r.desc || "",
      img: r.img || "",
      tech: (r.tech || "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      link: r.link || "#",
    }));
  }, [rows]);

  // 🔄 Loading and error states
  if (loading)
    return (
      <section className="py-16 text-center text-gray-600">
        <p>Loading projects...</p>
      </section>
    );

  if (error)
    return (
      <section className="py-16 text-center text-red-600">
        <p>⚠️ Failed to load projects</p>
      </section>
    );

  // ✅ Main render
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h3 className="text-3xl font-bold mb-8 text-indigo-600">Projects</h3>

        {projects.length === 0 ? (
          <p className="text-center text-gray-500">No projects found.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                transitionSpeed={2500}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-40 w-full object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-800">
                  {p.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2 flex-grow">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 border text-xs rounded-full text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 text-sm font-medium hover:underline"
                >
                  View on GitHub →
                </a>
              </Tilt>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
