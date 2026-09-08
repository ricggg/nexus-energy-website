import type { Technology } from "@/lib/technologies";
import { Icon3DFlame, Icon3DSun, Icon3DWind, Icon3DBattery, Icon3DBolt, Icon3DGauge } from "@/components/Icons3D";

const ICONS: Record<Technology["icon"], (props: { size?: number; className?: string }) => JSX.Element> = {
  flame: Icon3DFlame,
  sun: Icon3DSun,
  wind: Icon3DWind,
  battery: Icon3DBattery,
  zap: Icon3DBolt,
  gauge: Icon3DGauge,
};

export function TechIcon({ icon, size = 22, className }: { icon: Technology["icon"]; size?: number; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon size={size} className={className} />;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-3xl font-bold leading-tight md:text-4xl ${
          light ? "text-[var(--color-text-on-dark)]" : "text-[var(--color-text)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[15px] leading-relaxed ${light ? "text-[var(--color-text-on-dark-muted)]" : "text-[var(--color-text-muted)]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function StatBlock({ value, label, light }: { value: string; label: string; light?: boolean }) {
  return (
    <div>
      <div className={`font-display text-3xl font-bold md:text-4xl ${light ? "text-[var(--color-text-on-dark)]" : "text-[var(--color-primary)]"}`}>
        {value}
      </div>
      <div className={`mt-1 text-[13px] uppercase tracking-wide ${light ? "text-[var(--color-text-on-dark-muted)]" : "text-[var(--color-text-muted)]"}`}>
        {label}
      </div>
    </div>
  );
}
