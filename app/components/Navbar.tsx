"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-2xl shadow-lg shadow-black/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="transition duration-300 hover:scale-105"
        >
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            <span className="text-[#F5F5F5]">Nat</span>
            <span className="text-[#C8A96A]">FlipsWhips</span>
          </h1>

          <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#C7CBD1]">
            Vehicle Sales • Mobile Detailing
          </p>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-[#C7CBD1]">

          <a href="#" className="transition duration-300 hover:text-[#C8A96A]">
            Home
          </a>

          <a href="#services" className="transition duration-300 hover:text-[#C8A96A]">
            Services
          </a>

          <a href="#packages" className="transition duration-300 hover:text-[#C8A96A]">
            Packages
          </a>

          <a href="#inventory" className="transition duration-300 hover:text-[#C8A96A]">
            Inventory
          </a>

          <a href="#about" className="transition duration-300 hover:text-[#C8A96A]">
            About
          </a>

          <a href="#reviews" className="transition duration-300 hover:text-[#C8A96A]">
            Reviews
          </a>

          <a href="#contact" className="transition duration-300 hover:text-[#C8A96A]">
            Contact
          </a>

        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">

          <a
            href="/book"
            className="rounded-full border border-[#C8A96A] px-6 py-3 font-semibold text-[#C8A96A] transition-all duration-300 hover:bg-[#C8A96A] hover:text-black"
          >
            Book Online
          </a>

          <a
            href="tel:5203056529"
            className="rounded-full bg-[#C8A96A] px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C8A96A]/40"
          >
            Call Now
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-[#F5F5F5] lg:hidden"
        >
          ☰
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#090909] lg:hidden">

          <div className="flex flex-col space-y-5 p-6 text-lg">

            <a href="#" onClick={closeMenu}>
              Home
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#packages" onClick={closeMenu}>
              Packages
            </a>

            <a href="#inventory" onClick={closeMenu}>
              Inventory
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#reviews" onClick={closeMenu}>
              Reviews
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="/book"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-[#C8A96A] py-4 text-center font-semibold text-black"
            >
              Book Online
            </a>

            <a
              href="tel:5203056529"
              className="rounded-xl border border-[#C8A96A] py-4 text-center font-semibold text-[#C8A96A]"
            >
              Call Now
            </a>

          </div>

        </div>
      )}
    </header>
  );
}