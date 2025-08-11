import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

type NavItem = {
  label: string;
  uri: string;
  current: boolean;
};
const navigation: NavItem[] = [
  { uri: "/", label: "Home", current: true },
  { uri: "/games", label: "Games", current: false },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-lg text-white shadow-md z-10 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold cursor-pointer">
              GameSale
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((link) => (
                <NavLink
                  key={link.uri}
                  to={link.uri}
                  className={({ isActive }) =>
                    `hover:text-gray-200 transition ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Botón Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {navigation.map((link) => (
              <NavLink
                key={link.uri}
                to={link.uri}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block hover:bg-blue-500 px-3 py-2 rounded transition ${
                    isActive ? "bg-blue-700" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
