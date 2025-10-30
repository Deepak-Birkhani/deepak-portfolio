export default function Portfolio() {
  const projects = [
    {
      title: "PicShot",
      desc: "AI-based image captioning & enhancement app built using Flask and BLIP.",
      tech: ["Python", "Flask", "Transformers"],
      link: "https://github.com/Deepak-Birkhani/PicShot",
    },
    {
      title: "Fake News Detection",
      desc: "ML-based classifier using TF-IDF and Logistic Regression.",
      tech: ["Python", "Scikit-Learn", "NLP"],
      link: "https://github.com/Deepak-Birkhani/FAKE-NEWS-DETECTION",
    },
    {
      title: "Medicine Recommendation System",
      desc: "Recommender for prescriptions using SVM and Flask UI.",
      tech: ["Python", "Flask", "SVM"],
      link: "https://github.com/Deepak-Birkhani/medicine_recommendation_system",
    },
  ];

  const skills = [
    "C++", "Python", "JavaScript", "React", "Tailwind", "Flask", "Machine Learning", "NLP"
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-5xl mx-auto p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Deepak Birkhani</h1>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section>
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Deepak 👋</h2>
          <p className="text-lg text-gray-700 mb-6">
            A Computer Science student at Graphic Era Hill University passionate about 
            Machine Learning, NLP, and Web Development. I love building practical AI-driven solutions.
          </p>
        </section>

        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="block p-5 bg-white rounded-xl border hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-1">{p.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="text-gray-700">
            📧 <a href="mailto:thebug12321@gmail.com" className="text-indigo-600">thebug12321@gmail.com</a>
          </p>
          <p>🌐 <a href="https://github.com/Deepak-Birkhani" target="_blank" className="text-indigo-600">GitHub</a></p>
        </section>
      </main>
    </div>
  );
}
