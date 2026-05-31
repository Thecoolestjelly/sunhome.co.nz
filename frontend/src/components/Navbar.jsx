import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "../mock";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/colours", label: "Colour Samples" },
  { to: "/gallery", label: "Gallery" },
  { to: "/sinks", label: "Sinks & Edges" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,padding] duration-500 ${
        scrolled
          ? "bg-[#FAF8F3]/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#FAF8F3] font-serif text-lg leading-none group-hover:bg-[#B8956A] transition-colors duration-300">
            S
          </div>
          <div className="leading-tight">
            <div className="font-serif text-[#1A1A1A] text-lg tracking-wide">Sunhome</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B]">Stone · Auckland</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-[13px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive ? "text-[#1A1A1A]" : "text-[#4A4A4A] hover:text-[#1A1A1A]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#B8956A] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <a
          href={`tel:${SITE.phone.replace(/\s/g, "")}`}
          className="hidden lg:inline-flex items-center gap-2 text-[13px] text-[#1A1A1A] border border-[#1A1A1A]/15 rounded-full px-4 py-2 hover:border-[#B8956A] hover:text-[#B8956A] transition-colors duration-300"
        >
          <Phone className="w-3.5 h-3.5" />
          {SITE.phone}
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-[#1A1A1A] p-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#FAF8F3] border-t border-[#E5E0D5] px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.2em] ${
                  isActive ? "text-[#B8956A]" : "text-[#1A1A1A]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-[#1A1A1A] pt-2 border-t border-[#E5E0D5]"
          >
            <Phone className="w-4 h-4" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
