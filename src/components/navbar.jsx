export default function Navbar() {
  const links = [
    "Home", "About", "Education", "Skills",
    "Projects", "Certificates", "Contact"
  ];
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-indigo-600">दीbug🐞</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-indigo-600">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
