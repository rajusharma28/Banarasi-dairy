import { BUSINESS, DEFAULT_WA_MESSAGE, waLink } from "../data/business";
import { WhatsAppIcon } from "./Icons";

/** Floating WhatsApp enquiry button — visible on every page. */
export function WhatsAppFab() {
  return (
    <a
      href={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-5 text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-all duration-300 hover:bg-[#1ebe5b] hover:shadow-[0_14px_36px_-6px_rgba(37,211,102,0.7)] sm:bottom-7 sm:right-7"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
        <WhatsAppIcon className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold tracking-wide">Enquire Now</span>
    </a>
  );
}
