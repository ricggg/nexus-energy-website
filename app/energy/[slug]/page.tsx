import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { TECHNOLOGIES, getTechnology } from "@/lib/technologies";
import { TechIcon, StatBlock } from "@/components/Ui";
import { Hero } from "@/components/Hero";

export function generateStaticParams() {
  return TECHNOLOGIES.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tech = getTechnology(params.slug);
  if (!tech) return {};
  return {
    title: `${tech.name} | Nexus Energy`,
    description: tech.summary,
  };
}

export default function TechnologyPage({ params }: { params: { slug: string } }) {
  const tech = getTechnology(params.slug);
  if (!tech) notFound();

  const others = TECHNOLOGIES.filter((t) => t.slug !== tech.slug);

  return (
    <div>
      <Hero image={tech.image} imageAlt={tech.name}>
        <Link href="/energy" className="mb-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-accent)]">
          <ArrowLeft size={14} /> All Technologies
        </Link>
        <TechIcon icon={tech.icon} size={36} className="mb-5 text-[var(--color-accent)]" />
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">{tech.name}</h1>
        <p className="mt-4 max-w-xl text-lg italic text-[var(--color-text-on-dark-muted)]">{tech.tagline}</p>
      </Hero>

      <section className="section-pad">
        <div className="container-page grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            {tech.body.map((p, i) => (
              <p key={i} className="mb-5 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                {p}
              </p>
            ))}
            <Link href="/contact" className="btn-primary mt-4">
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-8 border-l border-[var(--color-border)] pl-8">
            {tech.stats.map((s) => (
              <StatBlock key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-page">
          <h3 className="mb-8 font-display text-xl font-bold text-[var(--color-text)]">Explore other technologies</h3>
          <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
            {others.map((t) => (
              <Link key={t.slug} href={`/energy/${t.slug}`} className="group bg-[var(--color-surface-elevated)] p-6">
                <TechIcon icon={t.icon} size={22} className="mb-3 text-[var(--color-accent)]" />
                <h4 className="font-display text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">{t.name}</h4>
                <p className="mt-1 text-[13px] text-[var(--color-text-muted)]">{t.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
