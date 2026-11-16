"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About Us" },
    { href: "#footer", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-[rgba(196,98,29,0.15)] bg-[rgba(245,236,215,0.95)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "shadow-[0_4px_30px_gray]" : ""
        }`}
    >
      <div className="mx-auto flex max-w-300 items-center justify-between gap-8 px-6 md:px-12 py-3">
        <Link
          href="/"
          className="font-[serif] text-3xl font-bold tracking-[-0.02em] text-[#3B1F0E]"
        >
          REST<span className="text-[#C4621D]">AURANT</span>
        </Link>

        <nav className="hidden min-[900px]:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-10 list-none">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative inline-block text-[12px] uppercase tracking-[0.2em] font-semibold text-[#5C3318] transition-colors duration-300 hover:text-[#C4621D] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#C4621D] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="min-[900px]:hidden flex flex-col justify-center items-center gap-1.5 p-2 w-10 h-10 relative"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#3B1F0E] transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3B1F0E] transition-all duration-300 ease-in-out ${menuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3B1F0E] transition-all duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      <div
        className={`min-[900px]:hidden grid transition-all duration-200 ease-in-out border-[rgba(196,98,29,0.15)] ${menuOpen ? "grid-rows-[1fr] border-t opacity-100" : "grid-rows-[0fr] border-t-0 opacity-0"
          }`}
      >
        <nav className="overflow-hidden">
          <ul className="flex flex-col items-center gap-5 py-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[12px] uppercase tracking-[0.2em] font-semibold text-[#5C3318] hover:text-[#C4621D] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}