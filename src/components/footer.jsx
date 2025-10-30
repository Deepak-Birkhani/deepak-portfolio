export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8">
        <div>
          <h4 className="text-xl font-bold text-white mb-2">Deepak's Portfolio</h4>
          <p className="text-sm">
            Thank you for visiting my personal portfolio website.
            Connect with me on socials. Keep rising 🚀
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            {["Home","About","Education","Skills","Projects","Certificates","Contact"].map(l=>(
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-indigo-400">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Contact Info</h4>
          <ul className="text-sm space-y-1">
            <li>📞 +91 7466819132</li>
            <li>📧 thebug12321@gmail.com</li>
            <li>📍 Haldwani, Uttarakhand</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs mt-8">© 2025 Deepak Birkhani. All rights reserved.</p>
    </footer>
  );
}
