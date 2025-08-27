import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('hero');

  const sections = ['home', 'about', 'rooms', 'gallery', 'contact'];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
    setIsOpen(false); // close mobile menu
  };

  // Update active link on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 100; // offset
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <img
          src="/mainlogo.png"
          alt="NamoStay Logo"
          className="h-12 w-auto cursor-pointer 
             hover:scale-105 hover:brightness-110 
             transition-transform duration-300 ease-in-out 
             drop-shadow-md rounded-full"
          onClick={() => handleScroll('home')}
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {sections.map((id) => (
            <li
              key={id}
              onClick={() => handleScroll(id)}
              className={`cursor-pointer relative px-2 py-1 hover:text-indigo-600 transition 
                ${
                  active === id
                    ? 'text-indigo-700 font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-indigo-600 after:rounded-full'
                    : ''
                }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t animate-slide-down">
          <ul className="flex flex-col space-y-4 px-6 py-6 font-medium text-gray-700">
            {sections.map((id) => (
              <li
                key={id}
                className="cursor-pointer hover:text-indigo-600 transition"
                onClick={() => handleScroll(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
