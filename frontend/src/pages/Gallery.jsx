import React, { useState, useMemo, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import Reveal from "../components/Reveal";
import { GALLERY, TEXT } from "../mock";

export default function Gallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(GALLERY.map((g) => g.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index in filtered

  const filtered = useMemo(
    () => (active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active)),
    [active]
  );

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <div className="bg-[#FAF8F3]">
      {/* Header */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-6">{TEXT.gallery.label}</div>
            <h1 className="font-serif text-[#1A1A1A] text-5xl lg:text-7xl leading-[1.02] mb-6 max-w-4xl">
              {TEXT.gallery.headline}
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-2xl">
              {TEXT.gallery.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[104px] z-30 bg-[#FAF8F3]/95 backdrop-blur-md border-y border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-3 lg:gap-8 py-5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-xs uppercase tracking-[0.22em] pb-2 border-b transition-colors duration-300 ${
                active === c
                  ? "border-[#B8956A] text-[#1A1A1A]"
                  : "border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]"
              }`}
            >
              {c}
            </button>
          ))}
          <div className="ml-auto text-xs text-[#6B6B6B] uppercase tracking-[0.2em] hidden md:flex items-center gap-2">
            <ImageIcon className="w-3.5 h-3.5" />
            {filtered.length} pieces
          </div>
        </div>
      </div>

      {/* Grid — uniform 4:3 cards, consistent crop */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {filtered.map((g, idx) => (
              <button
                key={`${g.src}-${idx}`}
                onClick={() => setLightbox(idx)}
                className="group relative block aspect-[4/3] w-full overflow-hidden bg-[#F2EEE6] focus:outline-none"
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B8956A] mb-1">{g.category}</div>
                  <div className="font-serif text-white text-base leading-tight text-left">{g.caption}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-sm flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
          <button
            aria-label="Close"
            onClick={close}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#1A1A1A] transition-colors flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-4 lg:left-10 w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#1A1A1A] transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-4 lg:right-10 w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#1A1A1A] transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="max-w-6xl max-h-[85vh] mx-auto px-6 flex flex-col items-center">
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              className="max-w-full max-h-[75vh] object-contain shadow-2xl"
            />
            <div className="mt-6 text-center">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B8956A] mb-2">
                {filtered[lightbox].category} · {lightbox + 1} / {filtered.length}
              </div>
              <div className="font-serif text-white text-xl">{filtered[lightbox].caption}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
