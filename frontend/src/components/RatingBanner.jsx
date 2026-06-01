import React from "react";
import { Star, ExternalLink } from "lucide-react";
import StarRating from "./StarRating";
import { SITE } from "../mock";

export default function RatingBanner({ variant = "light" }) {
  const dark = variant === "dark";
  return (
    <a
      href="https://www.google.com/maps/place/Sunhome+Group+Ltd/"
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 lg:gap-5 px-5 lg:px-6 py-3 lg:py-4 rounded-full border transition-colors duration-300 ${
        dark
          ? "bg-white/5 border-white/15 hover:bg-white/10 text-white"
          : "bg-white border-[#E5E0D5] hover:border-[#B8956A] text-[#1A1A1A]"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="font-serif text-2xl lg:text-3xl leading-none">{SITE.rating.google}</div>
        <StarRating value={SITE.rating.google} size={16} />
      </div>
      <div className={`hidden sm:block h-8 w-px ${dark ? "bg-white/15" : "bg-[#E5E0D5]"}`} />
      <div className="flex flex-col leading-tight">
        <div className="text-xs uppercase tracking-[0.25em] text-[#B8956A]">Google Reviews</div>
        <div className={`text-xs ${dark ? "text-white/70" : "text-[#6B6B6B]"}`}>
          {SITE.rating.reviews}+ verified reviews
        </div>
      </div>
      <ExternalLink className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-0.5 ${dark ? "text-white/60" : "text-[#6B6B6B]"}`} />
    </a>
  );
}
