import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Reveal from "../components/Reveal";
import RatingBanner from "../components/RatingBanner";
import EnquireButton from "../components/EnquireButton";
import { SITE, TEXT } from "../mock";

export default function Contact() {
  return (
    <div className="bg-[#FAF8F3]">
      {/* Header */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-6">{TEXT.contact.label}</div>
            <h1 className="font-serif text-[#1A1A1A] text-5xl lg:text-7xl leading-[1.02] mb-6 max-w-3xl">
              {TEXT.contact.headline}
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-2xl mb-8">
              {TEXT.contact.intro}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <EnquireButton variant="primary" subject="General Enquiry">
                {TEXT.contact.primaryBtn}
              </EnquireButton>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 border border-[#1A1A1A]/20 text-[#1A1A1A] px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] hover:border-[#B8956A] hover:text-[#B8956A] transition-colors duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                Call {SITE.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4">
            <RatingBanner />
          </Reveal>
        </div>
      </section>

      {/* Info + Hero Photo */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — info */}
          <Reveal className="lg:col-span-5 space-y-10">
            {[
              { icon: MapPin, title: TEXT.contact.info.visitTitle, lines: [SITE.address, TEXT.contact.info.visitExtra] },
              { icon: Phone,  title: TEXT.contact.info.callTitle,  lines: [`${SITE.phone}`, `${SITE.mobile}`] },
              { icon: Mail,   title: TEXT.contact.info.emailTitle, lines: [SITE.email] },
              { icon: Clock,  title: TEXT.contact.info.hoursTitle, lines: [`${TEXT.contact.info.hoursShowroom}: ${SITE.hours.showroom}`, `${TEXT.contact.info.hoursPickup}: ${SITE.hours.pickup}`] },
            ].map((b) => (
              <div key={b.title} className="flex gap-5">
                <div className="w-12 h-12 border border-[#E5E0D5] flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-[#B8956A]" />
                </div>
                <div>
                  <h3 className="font-serif text-[#1A1A1A] text-xl mb-2">{b.title}</h3>
                  {b.lines.map((l) => (
                    <p key={l} className="text-[#6B6B6B] text-sm leading-relaxed">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <EnquireButton subject="Quote Request" variant="primary" fullWidth>
                Email Sales for a Free Quote
              </EnquireButton>
            </div>
          </Reveal>

          {/* Right — large benchtop hero photo */}
          <Reveal delay={150} className="lg:col-span-7">
            <div className="relative h-full min-h-[520px] lg:min-h-[640px] overflow-hidden">
              <img
                src="/assets/colors/cal-kitchen.jpg"
                alt="Premium Calacatta White stone benchtop installed in an Auckland kitchen"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                <div className="text-[#B8956A] text-[10px] uppercase tracking-[0.35em] mb-3">Crafted in Auckland</div>
                <p className="font-serif text-white text-2xl lg:text-4xl leading-[1.15] max-w-md mb-6" style={{ textShadow: '0 2px 18px rgba(0,0,0,0.4)' }}>
                  Premium stone benchtops, finished by hand in our Ōtara workshop.
                </p>
                <EnquireButton subject="Quote Request from Contact" variant="light">
                  Get a Free Estimate
                </EnquireButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="aspect-[16/7] w-full overflow-hidden border border-[#E5E0D5]">
              <iframe
                title="Sunhome Group Ltd location"
                src="https://www.google.com/maps?q=1C%20Birmingham%20Road%2C%20%C5%8Ctara%2C%20Auckland%202013%2C%20New%20Zealand&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
