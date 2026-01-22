import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function VisitorHeader() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl font-semibold transition
     ${
       isActive
         ? "bg-indigo-600 text-white shadow-md"
         : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
     }`;

  return (
    <header className="sticky top-0 z-50">
      {/* ✅ Glass Header */}
      <div className="backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* ✅ LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
              L
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">
              Learners
            </h1>
          </Link>

          {/* ✅ Desktop Nav */}
          <ul className="hidden md:flex items-center gap-3 text-sm">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={navLinkClass}>
                Register
              </NavLink>
            </li>
          </ul>

          {/* ✅ Right Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/register"
              className="px-5 py-2 rounded-xl bg-gray-100 text-gray-800 font-bold hover:bg-gray-200 transition"
            >
              Join Now
            </Link>

            <Link to="/login">
              <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold shadow-md hover:bg-emerald-500 hover:shadow-lg transition">
                Login
              </button>
            </Link>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
          >
            {open ? "✖" : "☰"}
          </button>
        </nav>

        {/* ✅ Mobile Dropdown */}
        {open && (
          <div className="md:hidden px-4 pb-4">
            <div className="bg-white rounded-2xl shadow-lg p-4 space-y-3">
              <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={navLinkClass}
              >
                About
              </NavLink>

              <NavLink
                to="/register"
                onClick={() => setOpen(false)}
                className={navLinkClass}
              >
                Register
              </NavLink>

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block text-center px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold shadow-md hover:bg-emerald-500 transition"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default VisitorHeader;
