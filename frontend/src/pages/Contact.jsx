import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import { SITE } from "../mock";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.subject || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    // store locally as mock
    try {
      const prev = JSON.parse(localStorage.getItem("sunhome_enquiries") || "[]");
      prev.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("sunhome_enquiries", JSON.stringify(prev));
    } catch (e2) { /* ignore */ }
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#FAF8F3]">
      {/* Header */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-6">Get In Touch</div>
            <h1 className="font-serif text-[#1A1A1A] text-5xl lg:text-7xl leading-[1.02] mb-6 max-w-3xl">
              Let's bring your project to life.
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-2xl">
              Visit our East Tamaki showroom, give us a call, or send a message — we usually reply the same business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info & form */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — info */}
          <Reveal className="lg:col-span-5 space-y-10">
            {[
              { icon: MapPin, title: "Visit the Showroom", lines: [SITE.address, "(Behind the wine shop, entrance off East Tamaki Road, left-hand driveway of the liquor shop.)"] },
              { icon: Phone, title: "Call Us", lines: [`${SITE.phone}`, `${SITE.mobile}`] },
              { icon: Mail, title: "Email Us", lines: [SITE.email] },
              { icon: Clock, title: "Hours", lines: [`Showroom: ${SITE.hours.showroom}`, `Pick Up: ${SITE.hours.pickup}`] },
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
          </Reveal>

          {/* Right — form */}
          <Reveal delay={150} className="lg:col-span-7">
            <div className="bg-white border border-[#E5E0D5] p-8 lg:p-12">
              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="w-14 h-14 text-[#B8956A] mx-auto mb-6" />
                  <h3 className="font-serif text-[#1A1A1A] text-3xl mb-4">Thank you.</h3>
                  <p className="text-[#6B6B6B] leading-relaxed max-w-md mx-auto mb-8">
                    Your enquiry has been received. We'll respond to you shortly. For urgent matters, please call {SITE.phone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-[0.25em] text-[#B8956A] hover:text-[#1A1A1A] transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="text-[#B8956A] text-xs uppercase tracking-[0.35em] mb-2">Request a Quote</div>
                  <h2 className="font-serif text-[#1A1A1A] text-3xl lg:text-4xl mb-6">Send us a message</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name *" name="name" value={form.name} onChange={onChange} />
                    <Field label="Email *" name="email" type="email" value={form.email} onChange={onChange} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Phone *" name="phone" value={form.phone} onChange={onChange} />
                    <Field label="Subject *" name="subject" value={form.subject} onChange={onChange} />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#6B6B6B] mb-2">
                      Comment or Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={5}
                      className="w-full bg-transparent border-b border-[#E5E0D5] py-3 text-[#1A1A1A] focus:outline-none focus:border-[#B8956A] transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-[#1A1A1A] text-[#FAF8F3] px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-[#B8956A] transition-colors duration-300"
                  >
                    Send Request
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-[#6B6B6B]">* Required fields</p>
                </form>
              )}
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
                src="https://www.google.com/maps?q=Unit%20C%201%20Birmingham%20Road%2C%20East%20Tamaki%2C%20Auckland&output=embed"
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

function Field({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.22em] text-[#6B6B6B] mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-[#E5E0D5] py-3 text-[#1A1A1A] focus:outline-none focus:border-[#B8956A] transition-colors"
      />
    </div>
  );
}
