import type { ReactNode } from "react";

export function Hero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden text-[var(--color-text-on-dark)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, rgba(8,42,28,0.94) 0%, rgba(15,69,48,0.90) 48%, rgba(21,82,58,0.85) 100%)",
        }}
      />
      <div className="container-page section-pad relative z-10">
        {eyebrow && <p className="eyebrow mb-4 !text-[var(--color-accent)]">{eyebrow}</p>}
        {title && <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h1>}
        {subtitle && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-on-dark-muted)] md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className={title ? "mt-8" : ""}>{children}</div>}
      </div>
    </section>
  );
}
