import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "../mock";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-[#B8956A] flex items-center justify-center text-[#1A1A1A] font-serif text-lg">
              S
            </div>
            <div>
              <div className="font-serif text-xl text-[#FAF8F3]">Sunhome Group</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#B8956A]">Est. 2008</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[#A6A39C] max-w-xs">
            Auckland's trusted stone fabricator — premium engineered quartz and natural stone, crafted with precision since 2008.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#B8956A] mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[#B8956A] transition-colors">Home</Link></li>
            <li><Link to="/colours" className="hover:text-[#B8956A] transition-colors">Colour Samples</Link></li>
            <li><Link to="/gallery" className="hover:text-[#B8956A] transition-colors">Gallery</Link></li>
            <li><Link to="/sinks" className="hover:text-[#B8956A] transition-colors">Sinks & Edges</Link></li>
            <li><Link to="/contact" className="hover:text-[#B8956A] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#B8956A] mb-5">Get In Touch</h4>
          <ul className="space-y-4 text-sm text-[#A6A39C]">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[#B8956A]" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#B8956A]" />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-[#FAF8F3] transition-colors">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#B8956A]" />
              <a href={`mailto:${SITE.email}`} className="hover:text-[#FAF8F3] transition-colors">{SITE.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#B8956A] mb-5">Showroom Hours</h4>
          <ul className="space-y-3 text-sm text-[#A6A39C]">
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-[#B8956A]" />
              <div>
                <div className="text-[#FAF8F3] mb-1">Showroom</div>
                <div>{SITE.hours.showroom}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-[#B8956A]" />
              <div>
                <div className="text-[#FAF8F3] mb-1">Pick Up</div>
                <div>{SITE.hours.pickup}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#6B6B6B]">
          <div>© {new Date().getFullYear()} Sunhome Group Ltd. All rights reserved.</div>
          <div className="tracking-[0.2em] uppercase">Auckland · New Zealand</div>
        </div>
      </div>
    </footer>
  );
}
