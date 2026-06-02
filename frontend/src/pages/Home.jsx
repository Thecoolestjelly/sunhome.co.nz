import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Award, Clock, Cog, BadgeCheck, Users, Tag, ArrowRight, Quote, Star } from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
import Reveal from "../components/Reveal";
import RatingBanner from "../components/RatingBanner";
import StarRating from "../components/StarRating";
import EnquireButton from "../components/EnquireButton";
import { SERVICES, FEATURES, TESTIMONIALS, BRANDS, COLOR_RANGES, SITE, TEXT } from "../mock";

const FEATURE_ICONS = [Award, Clock, Cog, BadgeCheck, Users, Tag];

export default function Home() {
  return (
    <div className="bg-[#FAF8F3]">
      <HeroCarousel />

      {/* Intro / Stats / Rating */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-5">{TEXT.home.whoWeAreLabel}</div>
            <h2 className="font-serif text-[#1A1A1A] text-4xl lg:text-5xl leading-[1.1] mb-6">
              {TEXT.home.whoWeAreHeadline}
            </h2>
            <div className="mt-8">
              <RatingBanner />
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-7">
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-10">
              {TEXT.home.whoWeAreParagraph}
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-[#E5E0D5] pt-10">
              {TEXT.home.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] mb-2">{s.number}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-[#F2EEE6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-5">{TEXT.home.servicesLabel}</div>
            <h2 className="font-serif text-[#1A1A1A] text-4xl lg:text-5xl leading-[1.1]">
              {TEXT.home.servicesHeadline}
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map((s, idx) => (
              <Reveal key={s.num} delay={idx * 100}>
                <div className="group relative overflow-hidden bg-white rounded-sm h-[460px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute top-6 left-6 text-white/70 text-xs tracking-[0.3em] uppercase">{s.num}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-white text-2xl lg:text-3xl mb-3">{s.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-md">{s.desc}</p>
                    <Link
                      to="/gallery"
                      className="inline-flex items-center gap-2 text-[#B8956A] text-xs uppercase tracking-[0.25em] group/btn"
                    >
                      Explore work
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <Reveal className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-5">{TEXT.home.whyLabel}</div>
              <h2 className="font-serif text-[#1A1A1A] text-4xl lg:text-5xl leading-[1.1] mb-6">
                {TEXT.home.whyHeadline}
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                {TEXT.home.whyParagraph}
              </p>
            </Reveal>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {FEATURES.map((f, idx) => {
                const Icon = FEATURE_ICONS[idx];
                return (
                  <Reveal key={f.title} delay={idx * 80}>
                    <div>
                      <div className="w-12 h-12 border border-[#E5E0D5] flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 text-[#B8956A]" />
                      </div>
                      <h3 className="font-serif text-[#1A1A1A] text-xl mb-3">{f.title}</h3>
                      <p className="text-[#6B6B6B] text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Colours — cream + black palette */}
      <section className="py-24 lg:py-32 bg-[#F2EEE6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="text-[#1A1A1A]/60 text-xs uppercase tracking-[0.35em] mb-5">{TEXT.home.featuredLabel}</div>
              <h2 className="font-serif text-[#1A1A1A] text-4xl lg:text-5xl leading-[1.1]">
                {TEXT.home.featuredHeadline}
              </h2>
            </div>
            <Link
              to="/colours"
              className="inline-flex items-center gap-2 text-[#1A1A1A] text-xs uppercase tracking-[0.25em] border-b border-[#1A1A1A] pb-1 hover:text-[#B8956A] hover:border-[#B8956A] transition-colors group"
            >
              {TEXT.home.featuredCta}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {COLOR_RANGES[2].colors.slice(0, 8).map((c, idx) => (
              <Reveal key={c.name} delay={idx * 60}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden aspect-square bg-white border border-[#E5E0D5] mb-4">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base text-[#1A1A1A]">{c.name}</span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/50 opacity-0 group-hover:opacity-100 transition-opacity">View</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-5">{TEXT.home.reviewsLabel}</div>
            <h2 className="font-serif text-[#1A1A1A] text-4xl lg:text-5xl leading-[1.1] mb-5">
              {TEXT.home.reviewsHeadline}
            </h2>
            <p className="text-[#4A4A4A] text-base lg:text-lg leading-relaxed mb-8">
              {TEXT.home.reviewsParagraph}
            </p>
            <div className="flex justify-center">
              <RatingBanner />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-14">
            {TESTIMONIALS.slice(0, 6).map((t, idx) => (
              <Reveal key={t.name} delay={idx * 80}>
                <div className="bg-white border border-[#E5E0D5] p-7 lg:p-8 h-full hover:border-[#B8956A] transition-colors duration-500 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <StarRating value={t.rating} size={16} />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#6B6B6B]">{t.when}</span>
                  </div>
                  <Quote className="w-5 h-5 text-[#B8956A] mb-3" />
                  <p className="text-[#1A1A1A] text-[15px] leading-relaxed mb-6 flex-1">
                    {t.quote}
                  </p>
                  <div className="border-t border-[#E5E0D5] pt-4">
                    <div className="text-[#1A1A1A] text-sm mb-1">{t.name}</div>
                    <div className="text-[#6B6B6B] text-[11px] uppercase tracking-[0.18em]">{t.source}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/place/Sunhome+Group+Ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B8956A] hover:text-[#1A1A1A] transition-colors"
            >
              {TEXT.home.reviewsMoreCta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-[#F2EEE6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-4">{TEXT.home.brandsLabel}</div>
            <p className="font-serif text-[#1A1A1A] text-2xl lg:text-3xl">
              {TEXT.home.brandsHeadline}
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
            {BRANDS.map((b) => (
              <div key={b.name} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img src={b.logo} alt={b.name} className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://www.sunhome.co.nz/wp-content/uploads/2023/01/Calacatta-white-1-1-1024x684.jpg)" }}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/80" />
        <Reveal className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="text-[#B8956A] text-xs uppercase tracking-[0.4em] mb-6">{TEXT.home.ctaLabel}</div>
          <h2 className="font-serif text-white text-4xl lg:text-6xl leading-[1.05] mb-8">
            {TEXT.home.ctaHeadline}
          </h2>
          <p className="text-white/85 text-lg mb-10 leading-relaxed">
            {TEXT.home.ctaParagraph}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <EnquireButton variant="light" subject="Quote Request from Home page">
              {TEXT.home.ctaPrimary}
            </EnquireButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
            >
              {TEXT.home.ctaSecondary}
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
            >
              {TEXT.home.ctaTertiary}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
