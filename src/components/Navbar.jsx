import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    if (isOpen) setHeight(`${navItems.length * 48}px`);
    else setHeight("0px");

    // Optional: track scroll to update active link
    const handleScroll = () => {
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[120rem] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white">
              <rect width="20" height="14" x="2" y="3" rx="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <span className="text-2xl font-heading font-bold text-midnight-navy">
            ZoShow
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ name, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative font-paragraph transition-colors duration-300 ${
                active === id
                  ? "text-blue-600"
                  : "text-midnight-navy/80 hover:text-blue-600"
              }`}>
              {name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  active === id ? "w-full" : ""
                }`}></span>
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-midnight-navy"
          onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{ maxHeight: height }}
        className="md:hidden overflow-hidden transition-all duration-500 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 flex flex-col gap-4 py-4">
          {navItems.map(({ name, id }, idx) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block font-paragraph text-midnight-navy/90 hover:text-blue-600 transition-all duration-300"
              style={{ transitionDelay: `${idx * 100}ms` }}>
              {name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
