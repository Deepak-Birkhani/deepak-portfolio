export default function Education() {
  const data = [
    {
      title: "Bachelor of Technology (CSE)",
      place: "Graphic Era Hill University",
      year: "2022–2026 | CGPA: 9.01",
      img: "/gehu.webp",
    },
    {
      title: "Intermediate",
      place: "Ever Green Sr. Sec. School",
      year: "2021 | 89.6%",
      img: "/egsss.webp",
    },
    {
      title: "High School",
      place: "Ever Green Sr. Sec. School",
      year: "2019 | 95.2%",
      img: "/egsss.webp",
    },
  ];

  return (
    <section id="education" className="py-16 max-w-6xl mx-auto px-8">
      <h3 className="text-3xl font-bold mb-8 text-indigo-600">Education</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((ed) => (
          <div key={ed.title} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <img src={ed.img} alt={ed.title} className="h-32 w-full object-cover rounded-lg mb-3" />
            <h4 className="font-semibold">{ed.title}</h4>
            <p className="text-gray-700 text-sm">{ed.place}</p>
            <p className="text-xs text-gray-500">{ed.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
