import { useMemo } from "react";
import { useSheet } from "../data/useSheet";
import AnimatedSection from "./AnimatedSection";

const SHEET_CERTIFICATES_ENDPOINT =
  "https://api.sheetbest.com/sheets/812fc082-7575-4536-96da-0f943ab67648/tabs/certificates";

export default function Certificates() {
  const { data: rows, loading, error } = useSheet(SHEET_CERTIFICATES_ENDPOINT);

  const certificates = useMemo(() => {
    if (!rows || !Array.isArray(rows)) return [];
    return rows.map((r) => ({
      title: r.title || "",
      issuer: r.issuer || "",
      img: r.img || "",
      link: r.link || "#",
    }));
  }, [rows]);

  if (loading)
    return (
      <AnimatedSection>
        <section className="py-16 text-center text-gray-600">
          <p>Loading certificates...</p>
        </section>
      </AnimatedSection>
    );

  if (error)
    return (
      <AnimatedSection>
        <section className="py-16 text-center text-red-600">
          <p>⚠️ Failed to load certificates</p>
        </section>
      </AnimatedSection>
    );

  return (
    <AnimatedSection>
      <section id="certificates" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-3xl font-bold mb-8 text-indigo-600 text-center">
            Certifications
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((c, i) => (
              <AnimatedSection delay={i * 0.1} key={c.title}>
                <div className="bg-gray-50 rounded-2xl shadow p-4 text-center hover:shadow-lg transition">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-40 w-full object-contain rounded-lg mb-4"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/400x200?text=Certificate")
                    }
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {c.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{c.issuer}</p>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-indigo-600 text-sm font-medium hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
