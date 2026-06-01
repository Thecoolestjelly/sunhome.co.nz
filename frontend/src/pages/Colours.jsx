import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Layers, Wallet, Mail } from "lucide-react";
import Reveal from "../components/Reveal";
import EnquireButton from "../components/EnquireButton";
import { buildEnquiryMailto, COLOR_RANGES, FULL_SLABS, BRANDS } from "../mock";

const FEATURES = [
  { icon: ShieldCheck, title: "Harder & Safer", desc: "Engineered quartz — harder, stronger and safer than natural stone." },
  { icon: Sparkles, title: "Easy to Maintain", desc: "Simple wipe-down with warm soapy water. No sealing needed." },
  { icon: Layers, title: "Wide Selection", desc: "Hundreds of colours and finishes in stock and ready to fabricate." },
  { icon: Wallet, title: "Honest Pricing", desc: "Pay only for what you use — the most competitive prices in Auckland." },
];

export default function Colours() {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...COLOR_RANGES.map((r) => r.name)];

  return (
    <div className="bg-[#FAF8F3]">
      {/* Page header */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-6">Project Quartz</div>
            <h1 className="font-serif text-[#1A1A1A] text-5xl lg:text-7xl leading-[1.02] mb-6">
              Colour Samples
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-2xl">
              From timeless whites to dramatic veined marbles — explore our complete in-stock range. Visit the East Tamaki showroom to see samples in person.
            </p>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 grid grid-cols-2 gap-4">
            {FEATURES.map((f, idx) => (
              <div key={f.title} className="border border-[#E5E0D5] p-6 bg-white">
                <f.icon className="w-5 h-5 text-[#B8956A] mb-4" />
                <h4 className="font-serif text-[#1A1A1A] text-base mb-2">{f.title}</h4>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[88px] z-30 bg-[#FAF8F3]/95 backdrop-blur-md border-y border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-3 lg:gap-8 py-5">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`text-xs uppercase tracking-[0.22em] pb-2 border-b transition-colors duration-300 ${
                active === t
                  ? "border-[#B8956A] text-[#1A1A1A]"
                  : "border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Colour grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24">
          {COLOR_RANGES.filter((r) => active === "All" || r.name === active).map((range) => (
            <div key={range.name}>
              <Reveal className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-3">{range.name}</div>
                  <h2 className="font-serif text-[#1A1A1A] text-3xl lg:text-4xl">{range.blurb}</h2>
                </div>
                <div className="text-[#6B6B6B] text-sm">{range.colors.length} colours available</div>
              </Reveal>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {range.colors.map((c, idx) => (
                  <Reveal key={c.name} delay={idx * 60}>
                    <div className="group cursor-pointer">
                      <div className="overflow-hidden aspect-square bg-[#F2EEE6] mb-4 relative">
                        <img
                          src={c.image}
                          alt={c.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/40 transition-colors duration-500 flex items-end justify-center p-4">
                          <a
                            href={buildEnquiryMailto({ subject: `Enquiry — ${c.name}`, colour: c.name })}
                            className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 inline-flex items-center gap-2 bg-[#FAF8F3] text-[#1A1A1A] px-4 py-2.5 rounded-full text-[10px] uppercase tracking-[0.22em] hover:bg-[#B8956A] hover:text-white"
                          >
                            <Mail className="w-3 h-3" />
                            Enquire
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-[#1A1A1A] text-base">{c.name}</span>
                        <ArrowRight className="w-4 h-4 text-[#B8956A] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full slabs */}
      <section className="py-24 lg:py-32 bg-[#F2EEE6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-5">In Stock</div>
            <h2 className="font-serif text-[#1A1A1A] text-4xl lg:text-5xl leading-[1.1]">
              Full slab preview
            </h2>
            <p className="text-[#4A4A4A] mt-5 leading-relaxed">
              See the full pattern, veining and movement of each stone before you decide.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {FULL_SLABS.map((s, idx) => (
              <Reveal key={s.name} delay={idx * 80}>
                <div className="group bg-white overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 lg:p-7 flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-[#1A1A1A] text-xl mb-1">{s.name}</h3>
                      <div className="text-[#6B6B6B] text-xs uppercase tracking-[0.22em]">{s.note}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#B8956A] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <p className="font-serif text-[#1A1A1A] text-xl lg:text-2xl max-w-3xl mx-auto">
              We also supply the full Caesarstone, Silestone, Uniquartz, Trendstone and Y&J Stone colour ranges.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
            {BRANDS.map((b) => (
              <div key={b.name} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img src={b.logo} alt={b.name} className="max-h-10 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1A1A1A]">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-white text-3xl lg:text-5xl mb-8 leading-tight">
            Visit the showroom to feel the stone.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <EnquireButton variant="accent" subject="Showroom Visit Request">
              Email Sales to Book
            </EnquireButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
            >
              See Contact Info
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
