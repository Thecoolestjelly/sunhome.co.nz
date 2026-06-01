import React from "react";
import { Mail } from "lucide-react";
import { buildEnquiryMailto } from "../mock";

/**
 * Generates a mailto link with pre-filled benchtop / sink details and opens
 * the user's email client. Use anywhere we need a primary "Enquire" action.
 */
export default function EnquireButton({
  subject = "Benchtop Enquiry",
  colour = "",
  size = "",
  thickness = "",
  sink = "",
  notes = "",
  variant = "primary",
  className = "",
  children,
  fullWidth = false,
}) {
  const href = buildEnquiryMailto({ subject, colour, size, thickness, sink, notes });

  const base =
    "inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] transition-colors duration-300 rounded-full";
  const sizeCls = "px-7 py-3.5";
  const widthCls = fullWidth ? "w-full" : "";

  const styles = {
    primary: "bg-[#1A1A1A] text-[#FAF8F3] hover:bg-[#B8956A]",
    light: "bg-[#FAF8F3] text-[#1A1A1A] hover:bg-[#B8956A] hover:text-white",
    accent: "bg-[#B8956A] text-white hover:bg-[#1A1A1A]",
    outline:
      "border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#B8956A] hover:text-[#B8956A]",
    outlineDark:
      "border border-white/30 text-white hover:bg-white hover:text-[#1A1A1A]",
  };

  return (
    <a
      href={href}
      className={`${base} ${sizeCls} ${widthCls} ${styles[variant] || styles.primary} ${className}`}
    >
      <Mail className="w-3.5 h-3.5" />
      {children || "Enquire by Email"}
    </a>
  );
}
