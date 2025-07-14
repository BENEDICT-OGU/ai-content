import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 ${
        darkMode ? "bg-dark/90" : "bg-light/90"
      } backdrop-blur-md border-b ${
        darkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span
                className={`text-2xl font-bold ${
                  darkMode ? "text-secondary" : "text-primary"
                }`}
              >
                NexusAI
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                to="/dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode
                    ? "text-light hover:bg-gray-800"
                    : "text-dark hover:bg-gray-100"
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/templates"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode
                    ? "text-light hover:bg-gray-800"
                    : "text-dark hover:bg-gray-100"
                }`}
              >
                Templates
              </Link>
              <Link
                to="/analytics"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode
                    ? "text-light hover:bg-gray-800"
                    : "text-dark hover:bg-gray-100"
                }`}
              >
                Analytics
              </Link>
              <Link
                to="/team"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode
                    ? "text-light hover:bg-gray-800"
                    : "text-dark hover:bg-gray-100"
                }`}
              >
                Team
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 text-yellow-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full focus:outline-none"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <button
              className={`hidden md:block px-4 py-2 rounded-md text-sm font-medium ${
                darkMode
                  ? "bg-primary hover:bg-purple-700"
                  : "bg-accent hover:bg-red-500"
              } text-white`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/dashboard"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode
                  ? "text-light hover:bg-gray-800"
                  : "text-dark hover:bg-gray-100"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/templates"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode
                  ? "text-light hover:bg-gray-800"
                  : "text-dark hover:bg-gray-100"
              }`}
            >
              Templates
            </Link>
            <Link
              to="/analytics"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode
                  ? "text-light hover:bg-gray-800"
                  : "text-dark hover:bg-gray-100"
              }`}
            >
              Analytics
            </Link>
            <Link
              to="/team"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode
                  ? "text-light hover:bg-gray-800"
                  : "text-dark hover:bg-gray-100"
              }`}
            >
              Team
            </Link>
            <Link to="/get-started">
              <button
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  darkMode
                    ? "bg-primary hover:bg-purple-700"
                    : "bg-accent hover:bg-red-500"
                } text-white mt-2`}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
