import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_SLIDES, buildEnquiryMailto } from "../mock";

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const n = HERO_SLIDES.length;

  const next = useCallback(() => setI((p) => (p + 1) % n), [n]);
  const prev = useCallback(() => setI((p) => (p - 1 + n) % n), [n]);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#0E0E0E]">
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
              i === idx ? "scale-[1.08]" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/80" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-24 lg:pb-32">
        <div className="max-w-3xl">
          {HERO_SLIDES.map((s, idx) => (
            <div
              key={idx}
              className={`transition-all duration-[1100ms] ease-out ${
                i === idx
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-6 pointer-events-none absolute"
              }`}
            >
              <div className="inline-flex items-center gap-3 mb-6 bg-black/30 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8956A]" />
                <span className="text-white text-[11px] uppercase tracking-[0.35em]">{s.eyebrow}</span>
              </div>
              <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-7" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}>
                {s.title}
              </h1>
              <p className="text-white text-base md:text-lg max-w-xl leading-relaxed mb-10" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.55)' }}>
                {s.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={buildEnquiryMailto({ subject: "Free Estimate Request" })}
                  className="inline-flex items-center gap-2 bg-[#FAF8F3] text-[#1A1A1A] px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:bg-[#B8956A] hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Get a Free Estimate
                </a>
                <Link
                  to="/colours"
                  className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
                >
                  View Colour Samples
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute z-10 bottom-8 right-6 lg:right-10 flex items-center gap-4">
        <button
          aria-label="Previous"
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300 flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300 flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute z-10 bottom-12 left-6 lg:left-10 flex items-center gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className="group flex items-center"
          >
            <span
              className={`block h-px transition-all duration-500 ${
                i === idx ? "w-12 bg-[#B8956A]" : "w-6 bg-white/40 group-hover:bg-white"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-white/30 relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-4 bg-[#B8956A] animate-[scrollCue_2.2s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>
  );
}
