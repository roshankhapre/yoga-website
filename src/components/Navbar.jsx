const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/60 backdrop-blur-lg shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-pink-600 tracking-tight">
          YogaSteni
        </h1>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
          <a href="#workshops" className="hover:text-pink-600 transition">
            Workshops
          </a>
          <a href="#themes" className="hover:text-pink-600 transition">
            Themes
          </a>
          <a href="#testimonials" className="hover:text-pink-600 transition">
            Reviews
          </a>
          <a href="#contact" className="hover:text-pink-600 transition">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#signup"
          className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:from-pink-600 hover:to-purple-700 transition transform hover:scale-105"
        >
          Enroll Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
