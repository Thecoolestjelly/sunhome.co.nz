import React from "react";
import { Link } from "react-router-dom";
import { Check, Ruler, Wrench, Droplets } from "lucide-react";
import Reveal from "../components/Reveal";
import { SINK_TYPES, THICKNESSES } from "../mock";

const EDGES = [
  {
    title: "Butt Joint",
    desc: "Classic flat joint where two stone pieces meet. Strong, clean and budget-friendly.",
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/34-White-Nougat-Butt-joint-water-fall-end-1-scaled.jpg",
  },
  {
    title: "Mitered Joint",
    desc: "Two angled cuts joined at 45° — creating a seamless thick edge with hidden joinery.",
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/1-Calacatta-White-60mm-Miter-Joint-1-scaled.jpg",
  },
  {
    title: "Waterfall End",
    desc: "Stone flows from benchtop down to the floor — a striking architectural detail.",
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Brittanicca-2-1-scaled.jpg",
  },
];

export default function Sinks() {
  return (
    <div className="bg-[#FAF8F3]">
      {/* Header */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-7">
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-6">Sinks, Edges & Joints</div>
            <h1 className="font-serif text-[#1A1A1A] text-5xl lg:text-7xl leading-[1.02]">
              The details that elevate everything.
            </h1>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5">
            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              From the way the sink meets the stone to the angle of the edge — we machine every detail in-house on our 5-axis CNC. Choose what suits your space.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sink types */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex items-center gap-3 mb-12">
            <Droplets className="w-5 h-5 text-[#B8956A]" />
            <h2 className="font-serif text-[#1A1A1A] text-3xl lg:text-4xl">Sink Cut-Outs</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SINK_TYPES.map((s, idx) => (
              <Reveal key={s.title} delay={idx * 100}>
                <div className="group bg-white border border-[#E5E0D5] overflow-hidden h-full flex flex-col hover:border-[#B8956A] transition-colors duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 lg:p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-[#1A1A1A] text-2xl mb-3">{s.title}</h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-2 mt-auto">
                      {s.pros.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-sm text-[#1A1A1A]">
                          <Check className="w-4 h-4 text-[#B8956A]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Edges & Joints */}
      <section className="py-16 lg:py-24 bg-[#F2EEE6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex items-center gap-3 mb-12">
            <Wrench className="w-5 h-5 text-[#B8956A]" />
            <h2 className="font-serif text-[#1A1A1A] text-3xl lg:text-4xl">Edges & Joints</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {EDGES.map((e, idx) => (
              <Reveal key={e.title} delay={idx * 100}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden mb-5">
                    <img
                      src={e.image}
                      alt={e.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-[#1A1A1A] text-2xl mb-2">{e.title}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Thicknesses */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <Ruler className="w-5 h-5 text-[#B8956A]" />
              <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em]">Thickness Options</div>
            </div>
            <h2 className="font-serif text-[#1A1A1A] text-4xl lg:text-5xl leading-[1.1] mb-5">
              From subtle to architectural.
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              We stock and fabricate every common thickness. Most kitchens use 20mm or 30mm — mitered joints make any thickness look monolithic.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#E5E0D5] border border-[#E5E0D5]">
            {THICKNESSES.map((t, idx) => (
              <Reveal key={t.mm} delay={idx * 60}>
                <div className="bg-[#FAF8F3] p-8 lg:p-10 h-full hover:bg-white transition-colors duration-500">
                  <div className="font-serif text-[#1A1A1A] text-4xl lg:text-5xl mb-2">{t.mm}</div>
                  <div className="text-[#B8956A] text-[10px] uppercase tracking-[0.3em] mb-4">{t.label}</div>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{t.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://www.sunhome.co.nz/wp-content/uploads/2023/01/5-Axis-CNC-Machine-scaled.jpg)" }}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/80" />
        <Reveal className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="text-[#B8956A] text-xs uppercase tracking-[0.4em] mb-6">Crafted On-Site</div>
          <h2 className="font-serif text-white text-4xl lg:text-5xl leading-tight mb-8">
            Tell us about your sink, and we'll match it perfectly.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#FAF8F3] text-[#1A1A1A] px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-[#B8956A] hover:text-white transition-colors duration-300"
          >
            Get a Free Estimate
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
