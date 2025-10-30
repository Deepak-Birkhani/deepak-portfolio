import Tilt from "react-parallax-tilt";
import { useMemo } from "react";
import { useSheet } from "../data/useSheet";
import AnimatedSection from "./AnimatedSection";

const SHEET_SKILLS_ENDPOINT =
  "https://api.sheetbest.com/sheets/812fc082-7575-4536-96da-0f943ab67648/tabs/skills";

export default function Skills() {
  const { data: rows, loading, error } = useSheet(SHEET_SKILLS_ENDPOINT);

  const skills = useMemo(() => {
    if (!rows || !Array.isArray(rows)) return [];
    return rows.map((r) => ({
      name: r.name || "",
      category: r.category || "",
      icon: r.icon || "",
      level: r.level || "",
    }));
  }, [rows]);

  if (loading)
    return (
      <AnimatedSection>
        <section className="py-16 text-center text-gray-600">
          <p>Loading skills...</p>
        </section>
      </AnimatedSection>
    );

  if (error)
    return (
      <AnimatedSection>
        <section className="py-16 text-center text-red-600">
          <p>⚠️ Failed to load skills</p>
        </section>
      </AnimatedSection>
    );

  return (
    <AnimatedSection>
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-3xl font-bold mb-8 text-indigo-600 text-center">
            Skills
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((s, i) => (
              <AnimatedSection delay={i * 0.1} key={i}>
                <div className="bg-white shadow rounded-xl p-4 text-center hover:shadow-lg transition">
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    scale={1.05}
                    transitionSpeed={2000}
                    className="bg-white rounded-xl shadow hover:shadow-lg p-4"
                  >
                  <img
                    src={s.icon}
                    alt={s.name}
                    className="h-16 w-16 mx-auto mb-3 object-contain"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/80?text=Skill+Icon")
                    }
                  />
                  <h4 className="text-lg font-semibold">{s.name}</h4>
                  <p className="text-sm text-gray-500">{s.category}</p>
                  <p className="text-xs mt-1 text-indigo-600 font-medium">
                    {s.level}
                  </p>
                  </Tilt>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
