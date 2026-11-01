import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* ---------- Brand mark ---------- */
export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Banarasi Dudh Dairy emblem">
      <defs>
        <linearGradient id="bddGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5DFA6" />
          <stop offset="45%" stopColor="#D6A63B" />
          <stop offset="100%" stopColor="#A87A1E" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#720D16" />
      <circle cx="32" cy="32" r="27" fill="none" stroke="url(#bddGold)" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="22.5" fill="none" stroke="url(#bddGold)" strokeWidth="0.7" strokeDasharray="2 2.6" />
      {/* Devanagari "ब" monogram */}
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontFamily="'Noto Sans Devanagari', serif"
        fontSize="27"
        fontWeight="700"
        fill="url(#bddGold)"
      >
        ब
      </text>
    </svg>
  );
}

/* ---------- WhatsApp ---------- */
export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.116-.198.058-.371-.03-.52-.087-.148-.662-1.595-.906-2.183-.238-.573-.48-.623-.66-.633-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ---------- UI icons ---------- */
export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2.5 2.5 0 0 1-2.7 2.5C10.9 18.4 5.6 13.1 4 5.7A2.5 2.5 0 0 1 6.5 3Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5 9 17 19.5 6.5" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 6.5h10v9h-10z" />
      <path d="M12.5 9.5h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="2" />
      <circle cx="16.5" cy="17.5" r="2" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.7l5.9-.8Z" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 5.5 16 12l-6.5 6.5" />
    </svg>
  );
}

/* ---------- Service icons ---------- */
const servicePaths: Record<string, ReactElement> = {
  sweets: (
    <>
      <circle cx="12" cy="13" r="6.5" />
      <path d="M8.6 9.6c.9.7 2 .7 2.9 0M12.5 9.6c.9.7 2 .7 2.9 0M9.5 15.2c1.5 1 3.5 1 5 0" />
      <path d="M7 20.5h10" />
    </>
  ),
  variety: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </>
  ),
  bulk: (
    <>
      <path d="M3.5 8.5 12 4l8.5 4.5-8.5 4.5z" />
      <path d="M3.5 8.5v7L12 20l8.5-4.5v-7" />
      <path d="M12 13v7" />
    </>
  ),
  gift: (
    <>
      <rect x="3.5" y="9" width="17" height="11" rx="1.5" />
      <path d="M3.5 13h17M12 9v11" />
      <path d="M12 9C10.5 6.5 8.5 6 7.5 7.2 6.6 8.4 8 9.6 12 9ZM12 9c1.5-2.5 3.5-3 4.5-1.8C17.4 8.4 16 9.6 12 9Z" />
    </>
  ),
  delivery: (
    <>
      <path d="M2.5 6.5h10v9h-10z" />
      <path d="M12.5 9.5h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="2" />
      <circle cx="16.5" cy="17.5" r="2" />
    </>
  ),
  special: (
    <>
      <path d="M12 3.5l2.2 4.8 5.3.7-3.9 3.7.9 5.2-4.5-2.5-4.5 2.5.9-5.2-3.9-3.7 5.3-.7Z" />
      <path d="M18.5 16.5l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7Z" />
    </>
  ),
};

export function ServiceIcon({ name, className = "h-7 w-7" }: { name: string; className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      {servicePaths[name] ?? servicePaths.sweets}
    </svg>
  );
}
