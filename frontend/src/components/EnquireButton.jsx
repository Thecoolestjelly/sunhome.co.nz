import React, { useState } from "react";
import { Mail, Copy, X, ExternalLink, CheckCircle2 } from "lucide-react";
import { buildEnquiryMailto, SITE } from "../mock";

/**
 * "Enquire" button that works EVERYWHERE — including PCs without a default
 * mail app. Opens a polished dialog with:
 *   • the pre-filled subject + message
 *   • "Copy email & message" (one-click clipboard)
 *   • "Open in Mail app" (mailto: fallback for devices that support it)
 *   • The email address Sales@sunhome.co.nz front and centre
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
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const subjectFull = `[Website Enquiry] ${subject}`;
  const bodyLines = [
    "Hi Sunhome team,",
    "",
    "I'd like to enquire about a stone benchtop with the following details:",
    "",
    colour ? `• Colour / Stone: ${colour}` : null,
    size ? `• Size / Layout: ${size}` : null,
    thickness ? `• Thickness: ${thickness}` : null,
    sink ? `• Sink Model: ${sink}` : null,
    notes ? `• Notes: ${notes}` : null,
    "",
    "Please get back to me with a quote.",
    "",
    "Thanks,",
  ].filter(Boolean).join("\n");

  const mailtoHref = buildEnquiryMailto({ subject, colour, size, thickness, sink, notes });
  const copyText = `To: ${SITE.email}\nSubject: ${subjectFull}\n\n${bodyLines}`;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback for browsers without clipboard API
      const ta = document.createElement("textarea");
      ta.value = copyText;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); setCopied(true); setTimeout(() => setCopied(false), 2200); } catch (_) { /* ignore */ }
      ta.remove();
    }
  };

  const base = "inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] transition-colors duration-300 rounded-full";
  const sizeCls = "px-7 py-3.5";
  const widthCls = fullWidth ? "w-full" : "";
  const styles = {
    primary:     "bg-[#1A1A1A] text-[#FAF8F3] hover:bg-[#B8956A]",
    light:       "bg-[#FAF8F3] text-[#1A1A1A] hover:bg-[#B8956A] hover:text-white",
    accent:      "bg-[#B8956A] text-white hover:bg-[#1A1A1A]",
    outline:     "border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#B8956A] hover:text-[#B8956A]",
    outlineDark: "border border-white/30 text-white hover:bg-white hover:text-[#1A1A1A]",
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${base} ${sizeCls} ${widthCls} ${styles[variant] || styles.primary} ${className}`}
      >
        <Mail className="w-3.5 h-3.5" />
        {children || "Enquire by Email"}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-[#0A0A0A]/70 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#FAF8F3] w-full max-w-xl rounded-sm shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#1A1A1A]/15 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF8F3] transition-colors flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-7 lg:p-9 border-b border-[#E5E0D5]">
              <div className="text-[#B8956A] text-[10px] uppercase tracking-[0.3em] mb-3">Send Enquiry</div>
              <h3 className="font-serif text-[#1A1A1A] text-2xl lg:text-3xl mb-2">Email Sunhome Sales</h3>
              <a href={`mailto:${SITE.email}`} className="text-sm text-[#1A1A1A] hover:text-[#B8956A] transition-colors break-all">
                {SITE.email}
              </a>
            </div>

            <div className="p-7 lg:p-9 space-y-5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B] mb-2">Subject</div>
                <div className="text-sm text-[#1A1A1A] bg-white border border-[#E5E0D5] px-4 py-3">{subjectFull}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B] mb-2">Message</div>
                <pre className="text-sm text-[#1A1A1A] bg-white border border-[#E5E0D5] px-4 py-3 whitespace-pre-wrap font-sans max-h-56 overflow-y-auto">{bodyLines}</pre>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#FAF8F3] px-5 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[#B8956A] transition-colors"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied to clipboard" : "Copy email & message"}
                </button>
                <a
                  href={mailtoHref}
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/20 text-[#1A1A1A] px-5 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] hover:border-[#B8956A] hover:text-[#B8956A] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Mail app
                </a>
              </div>

              <p className="text-[11px] leading-relaxed text-[#6B6B6B] text-center pt-2">
                &ldquo;Open in Mail app&rdquo; works if you have an email program set up. Otherwise, use <strong>Copy email &amp; message</strong> and paste into Gmail / Outlook / Yahoo on the web.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
