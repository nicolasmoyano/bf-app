"use client";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Features", "About", "Works", "Services", "Pricing"];

  return (
    <div className="w-full mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="w-fit mx-auto px-8 py-4 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 shadow-lg shadow-slate-900/50">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white text-md font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-800"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-300" />
            ) : (
              <Menu className="h-6 w-6 text-slate-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 mt-2 px-4">
            <div className="rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-800 shadow-lg shadow-slate-900/50 p-4">
              <ul className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-300 hover:text-white text-md font-medium transition-colors duration-200 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
