import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Ruler, Wrench, Droplets, Sparkles, ShieldCheck, ChevronRight, Mail } from "lucide-react";
import Reveal from "../components/Reveal";
import EnquireButton from "../components/EnquireButton";
import { SINKS, SINK_TYPES, THICKNESSES, COLOR_RANGES, TEXT } from "../mock";

const EDGES = [
  {
    title: "Butt Joint",
    desc: "Classic flat joint where two stone pieces meet. Strong, clean and budget-friendly.",
    image: "/assets/sunhome/edge-butt-joint.jpg",
  },
  {
    title: "Mitered Joint",
    desc: "Two angled cuts joined at 45° — creating a seamless thick edge with hidden joinery.",
    image: "/assets/sunhome/edge-mitered-joint.jpg",
  },
  {
    title: "Waterfall End",
    desc: "Stone flows from benchtop down to the floor — a striking architectural detail.",
    image: "/assets/sunhome/edge-waterfall-end.jpg",
  },
];

const allColourNames = COLOR_RANGES.flatMap((r) => r.colors.map((c) => c.name));

export default function Sinks() {
  return (
    <div className="bg-[#FAF8F3]">
      {/* Header */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-7">
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-6">{TEXT.sinks.label}</div>
            <h1 className="font-serif text-[#1A1A1A] text-5xl lg:text-7xl leading-[1.02]">
              {TEXT.sinks.headline}
            </h1>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5">
            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              {TEXT.sinks.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sink Pricing Cards */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="w-5 h-5 text-[#B8956A]" />
                <h2 className="font-serif text-[#1A1A1A] text-3xl lg:text-4xl">{TEXT.sinks.pricingLabel}</h2>
              </div>
              <p className="text-[#6B6B6B] text-sm max-w-xl">{TEXT.sinks.pricingHelper}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#6B6B6B] uppercase tracking-[0.2em]">
              <ShieldCheck className="w-4 h-4 text-[#B8956A]" />
              {TEXT.sinks.pricingBadge}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {SINKS.map((s, idx) => (
              <Reveal key={s.model} delay={idx * 70}>
                <SinkCard sink={s} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 bg-white border border-[#E5E0D5] p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <div className="text-[#B8956A] text-xs uppercase tracking-[0.3em] mb-2">{TEXT.sinks.helpBoxEyebrow}</div>
              <p className="text-[#1A1A1A] font-serif text-xl">{TEXT.sinks.helpBoxTitle}</p>
            </div>
            <EnquireButton subject="Sink Sizing Help" notes="Please help me choose the right sink — my cabinet width is: " variant="primary">
              {TEXT.sinks.helpBoxButton}
            </EnquireButton>
          </Reveal>
        </div>
      </section>

      {/* Mount style */}
      <section className="py-16 lg:py-24 bg-[#F2EEE6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex items-center gap-3 mb-12">
            <Sparkles className="w-5 h-5 text-[#B8956A]" />
            <h2 className="font-serif text-[#1A1A1A] text-3xl lg:text-4xl">{TEXT.sinks.mountStylesTitle}</h2>
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
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex items-center gap-3 mb-12">
            <Wrench className="w-5 h-5 text-[#B8956A]" />
            <h2 className="font-serif text-[#1A1A1A] text-3xl lg:text-4xl">{TEXT.sinks.edgesTitle}</h2>
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
      <section className="py-20 lg:py-28 bg-[#F2EEE6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <Ruler className="w-5 h-5 text-[#B8956A]" />
              <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em]">{TEXT.sinks.thicknessLabel}</div>
            </div>
            <h2 className="font-serif text-[#1A1A1A] text-4xl lg:text-5xl leading-[1.1] mb-5">
              {TEXT.sinks.thicknessHeadline}
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              {TEXT.sinks.thicknessParagraph}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#E5E0D5] border border-[#E5E0D5]">
            {THICKNESSES.map((t, idx) => (
              <Reveal key={t.mm} delay={idx * 60}>
                <div className="relative bg-[#FAF8F3] p-8 lg:p-10 h-full hover:bg-white transition-colors duration-500">
                  {t.popular && (
                    <span className="absolute top-4 right-4 bg-[#B8956A] text-white text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full">
                      Popular
                    </span>
                  )}
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
          <div className="text-[#B8956A] text-xs uppercase tracking-[0.4em] mb-6">{TEXT.sinks.ctaLabel}</div>
          <h2 className="font-serif text-white text-4xl lg:text-5xl leading-tight mb-8">
            {TEXT.sinks.ctaHeadline}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <EnquireButton variant="light" subject="Full Kitchen Quote">
              {TEXT.sinks.ctaPrimary}
            </EnquireButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
            >
              {TEXT.sinks.ctaSecondary}
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function SinkCard({ sink }) {
  const [colour, setColour] = useState("");

  const enquiryNotes = colour ? `Preferred benchtop colour: ${colour}` : "";

  return (
    <div className="group bg-white border border-[#E5E0D5] overflow-hidden h-full flex flex-col hover:border-[#B8956A] transition-colors duration-500">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EEE6]">
        <img
          src={sink.image}
          alt={`${sink.model} stainless steel sink`}
          loading="lazy"
          className="w-full h-full object-contain p-6 transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        {sink.isNew && (
          <span className="absolute top-4 left-4 bg-[#B8956A] text-white text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded-full">
            New
          </span>
        )}
      </div>

      <div className="p-6 lg:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="text-[#B8956A] text-[10px] uppercase tracking-[0.3em] mb-1">Model</div>
            <h3 className="font-serif text-[#1A1A1A] text-2xl leading-none">{sink.model}</h3>
          </div>
          <div className="text-right">
            <div className="font-serif text-[#1A1A1A] text-2xl leading-none">{sink.price}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#6B6B6B] mt-1">{sink.priceNote}</div>
          </div>
        </div>

        <div className="text-sm text-[#4A4A4A] mb-5">{sink.style}</div>

        <dl className="space-y-2 text-xs mb-5 border-t border-[#E5E0D5] pt-4">
          <Row k="Overall" v={sink.overall} />
          <Row k="Bowl" v={sink.bowl} />
          <Row k="Depth" v={sink.depth} />
          <Row k="Fits" v={sink.cabinet} />
          <Row k="Material" v={sink.material} />
          <Row k="Install" v={sink.install} />
          {sink.note && <Row k="Note" v={sink.note} />}
        </dl>

        {sink.blackOption && (
          <div className="text-xs text-[#B8956A] bg-[#B8956A]/10 px-3 py-2 rounded-sm mb-5">
            ● Black finish available {sink.blackOption}
          </div>
        )}

        {/* Optional colour selector for the email body */}
        <div className="mb-4">
          <label className="block text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B] mb-2">
            Benchtop colour (optional)
          </label>
          <select
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            className="w-full bg-[#FAF8F3] border border-[#E5E0D5] text-sm py-2.5 px-3 text-[#1A1A1A] focus:outline-none focus:border-[#B8956A] transition-colors"
          >
            <option value="">— Pick a colour to include in email —</option>
            {allColourNames.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <EnquireButton
            subject={`Sink Enquiry — ${sink.model}`}
            sink={`${sink.model} (${sink.style}, ${sink.overall})`}
            colour={colour}
            variant="primary"
            fullWidth
          >
            Enquire by Email
          </EnquireButton>
          <div className="text-[10px] text-[#6B6B6B] text-center">{sink.warranty} warranty · Sink waste incl.</div>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex items-start justify-between gap-3 text-[#4A4A4A]">
      <dt className="uppercase tracking-[0.2em] text-[10px] text-[#6B6B6B] shrink-0 pt-0.5">{k}</dt>
      <dd className="text-right text-[#1A1A1A]">{v}</dd>
    </div>
  );
}
