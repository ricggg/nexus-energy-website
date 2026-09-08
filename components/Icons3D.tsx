/* Custom 3D-style icon set: gradients, soft shadows, and specular highlights
   give these a glossy, dimensional look instead of flat line icons. */

import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

function Defs({ id, colors }: { id: string; colors: [string, string, string] }) {
  return (
    <defs>
      <linearGradient id={`${id}-body`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="55%" stopColor={colors[1]} />
        <stop offset="100%" stopColor={colors[2]} />
      </linearGradient>
      <radialGradient id={`${id}-sheen`} cx="30%" cy="25%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
        <stop offset="45%" stopColor="#ffffff" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <filter id={`${id}-shadow`} x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.2" floodColor="#000" floodOpacity="0.35" />
      </filter>
    </defs>
  );
}

const wrap = (size: number) => ({ width: size, height: size, viewBox: "0 0 64 64" });

export function Icon3DFlame({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg {...wrap(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <Defs id="flame" colors={["#ffcf7a", "#f2932c", "#b4590c"]} />
      <g filter="url(#flame-shadow)">
        <path
          d="M32 4c3 8-4 11-4 18 0 4 3 6 6 6 4 0 6-3 6-7 6 6 10 14 10 21 0 12-9 21-18 21S14 54 14 42c0-9 5-15 9-21 1 6 4 9 7 9 4 0 6-3 5-8-2-8-4-12-3-18z"
          fill={`url(#flame-body)`}
        />
        <path
          d="M32 4c3 8-4 11-4 18 0 4 3 6 6 6 4 0 6-3 6-7 6 6 10 14 10 21 0 12-9 21-18 21S14 54 14 42c0-9 5-15 9-21 1 6 4 9 7 9 4 0 6-3 5-8-2-8-4-12-3-18z"
          fill="url(#flame-sheen)"
        />
      </g>
    </svg>
  );
}

export function Icon3DSun({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg {...wrap(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <Defs id="sun" colors={["#fff1a8", "#ffc93c", "#e08a0a"]} />
      <g filter="url(#sun-shadow)">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 32 + Math.cos(angle) * 20;
          const y1 = 32 + Math.sin(angle) * 20;
          const x2 = 32 + Math.cos(angle) * 27;
          const y2 = 32 + Math.sin(angle) * 27;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#sun-body)" strokeWidth="4.5" strokeLinecap="round" />
          );
        })}
        <circle cx="32" cy="32" r="15" fill="url(#sun-body)" />
        <circle cx="32" cy="32" r="15" fill="url(#sun-sheen)" />
      </g>
    </svg>
  );
}

export function Icon3DWind({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg {...wrap(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <Defs id="wind" colors={["#dff3ff", "#8fd0f0", "#3a8fb8"]} />
      <g filter="url(#wind-shadow)">
        <rect x="30" y="30" width="4" height="30" rx="2" fill="url(#wind-body)" />
        <g>
          <path d="M32 30c0-10 8-16 16-16 2 0 3 3 1 5-6 6-11 7-17 11z" fill="url(#wind-body)" />
          <path d="M32 30c-8-5-9-14-4-20 1.5-2 4-1 4 1 0 8 2 13 0 19z" fill="url(#wind-body)" />
          <path d="M32 30c9 3 12 12 9 19-1 2-4 2-5 0-3-7-6-12-4-19z" fill="url(#wind-body)" />
        </g>
        <circle cx="32" cy="30" r="3.4" fill="url(#wind-body)" />
        <path d="M32 30c0-10 8-16 16-16 2 0 3 3 1 5-6 6-11 7-17 11z" fill="url(#wind-sheen)" />
      </g>
    </svg>
  );
}

export function Icon3DBattery({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg {...wrap(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <Defs id="batt" colors={["#c9f7d6", "#4fc985", "#1f8a52"]} />
      <g filter="url(#batt-shadow)">
        <rect x="12" y="18" width="34" height="28" rx="5" fill="url(#batt-body)" />
        <rect x="46" y="26" width="6" height="12" rx="2" fill="url(#batt-body)" />
        <rect x="12" y="18" width="34" height="28" rx="5" fill="url(#batt-sheen)" />
        <path d="M31 22l-9 13h6l-3 9 10-14h-6z" fill="#ffffff" opacity="0.9" />
      </g>
    </svg>
  );
}

export function Icon3DBolt({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg {...wrap(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <Defs id="bolt" colors={["#fff3b0", "#ffcf3a", "#d98c0a"]} />
      <g filter="url(#bolt-shadow)">
        <path d="M36 4L14 36h12l-4 24 24-34H34z" fill="url(#bolt-body)" />
        <path d="M36 4L14 36h12l-4 24 24-34H34z" fill="url(#bolt-sheen)" />
      </g>
    </svg>
  );
}

export function Icon3DGauge({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg {...wrap(size)} className={className} xmlns="http://www.w3.org/2000/svg">
      <Defs id="gauge" colors={["#ffd8c2", "#f2794f", "#a83a1c"]} />
      <g filter="url(#gauge-shadow)">
        <circle cx="32" cy="34" r="22" fill="url(#gauge-body)" />
        <circle cx="32" cy="34" r="22" fill="url(#gauge-sheen)" />
        <circle cx="32" cy="34" r="16" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="4 5" />
        <line x1="32" y1="34" x2="42" y2="24" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="34" r="3.5" fill="#ffffff" />
      </g>
    </svg>
  );
}

/* ── Social icons: glossy brand-colored badges ─────────────────────── */

export function Icon3DLinkedIn({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <Defs id="li" colors={["#7ec2ff", "#0a66c2", "#054179"]} />
      <g filter="url(#li-shadow)">
        <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#li-body)" />
        <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#li-sheen)" />
        <rect x="15" y="25" width="8" height="26" rx="2" fill="#fff" />
        <circle cx="19" cy="16" r="5" fill="#fff" />
        <path
          d="M30 25h8v4c1.6-2.8 4.8-4.6 8.4-4.6 7 0 9.6 4.4 9.6 12V51h-8V38c0-4-1.4-6.6-5-6.6-3 0-4.8 2-5.6 4-0.3 0.7-0.4 1.6-0.4 2.6v13h-8V25z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

export function Icon3DX({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <Defs id="x" colors={["#4a4a4a", "#1a1a1a", "#000000"]} />
      <g filter="url(#x-shadow)">
        <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#x-body)" />
        <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#x-sheen)" />
        <path
          d="M18 16l12.4 16.6L18 48h5.4l9.9-11.6L41.2 48H48L35 30.6 46.8 16h-5.4l-9 10.6L23 16h-5z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

export function Icon3DFacebook({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <Defs id="fb" colors={["#7ea6ff", "#1877f2", "#0a4bab"]} />
      <g filter="url(#fb-shadow)">
        <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#fb-body)" />
        <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#fb-sheen)" />
        <path
          d="M36 51V34h6l1-7h-7v-4.5c0-2 .6-3.5 3.5-3.5H43v-6.3C42 12.5 40 12 36.9 12 30.9 12 27 15.6 27 22v5H21v7h6v17h9z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

/* ── Generic 3D badge: wraps any lucide (or other) line icon in a glossy,
   gradient-filled rounded square with depth, so the whole icon set reads
   as dimensional rather than flat outlines. ─────────────────────────── */

let badgeCount = 0;

export function Icon3DBadge({
  icon: LineIcon,
  size = 44,
  iconSize,
  colors = ["#bfe3ff", "#2f6feb", "#123a8f"],
  rounded = "rounded-2xl",
  className,
}: {
  icon: ComponentType<LucideProps>;
  size?: number;
  iconSize?: number;
  colors?: [string, string, string];
  rounded?: string;
  className?: string;
}) {
  const id = `badge-${++badgeCount}`;
  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center ${rounded} ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(155deg, ${colors[0]}, ${colors[1]} 55%, ${colors[2]})`,
        boxShadow: `0 6px 14px -4px ${colors[2]}66, inset 0 1px 0 rgba(255,255,255,0.4)`,
      }}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${rounded}`}
        style={{
          background: "radial-gradient(circle at 30% 22%, rgba(255,255,255,0.65), rgba(255,255,255,0.05) 45%, transparent 70%)",
        }}
      />
      <LineIcon size={iconSize ?? Math.round(size * 0.5)} className="relative text-white" strokeWidth={2.25} />
    </div>
  );
}
