import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { SITE, buildEnquiryMailto } from "../mock";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,padding] duration-500 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E5E0D5] ${
        scrolled ? "py-2 shadow-sm" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between gap-4">
        {/* Logo — transparent PNG, sized large for visibility */}
        <Link to="/" className="flex items-center group shrink-0" aria-label="Sunhome Group Ltd home">
          <img
            src={SITE.logo}
            alt="Sunhome Group Ltd"
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-[13px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive ? "text-[#1A1A1A] font-medium" : "text-[#1A1A1A]/75 hover:text-[#1A1A1A]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#1A1A1A] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-[12px] text-[#1A1A1A] border border-[#1A1A1A]/15 rounded-full px-4 py-2 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF8F3] transition-colors duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            {SITE.phone}
          </a>
          <a
            href={buildEnquiryMailto({ subject: "Website Enquiry" })}
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] bg-[#1A1A1A] text-[#FAF8F3] rounded-full px-4 py-2 hover:bg-[#B8956A] transition-colors duration-300"
          >
            <Mail className="w-3.5 h-3.5" />
            Enquire
          </a>
        </div>

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
                  isActive ? "text-[#1A1A1A] font-medium" : "text-[#1A1A1A]/75"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-[#E5E0D5] flex flex-col gap-3">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-[#1A1A1A]"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <a
              href={buildEnquiryMailto({ subject: "Website Enquiry" })}
              className="flex items-center gap-2 text-sm text-[#1A1A1A]"
            >
              <Mail className="w-4 h-4" />
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
