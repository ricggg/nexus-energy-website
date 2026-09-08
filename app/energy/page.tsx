import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TECHNOLOGIES } from "@/lib/technologies";
import { TechIcon } from "@/components/Ui";
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "Energy Technologies | Nexus Energy",
  description: "Natural gas, solar, wind, storage, transmission, and geothermal — the full mix of technologies Nexus Energy develops, builds, and operates.",
};

export default function EnergyTechnologiesPage() {
  return (
    <div>
      <Hero
        image="https://images.pexels.com/photos/6876536/pexels-photo-6876536.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
        imageAlt="A sprawling solar farm with blue solar panels under a vibrant sky"
        eyebrow="Energy Technologies"
        title="A broad, complementary mix of generation and infrastructure."
        subtitle="No single technology can meet every grid's needs. We develop across the full mix — so our customers get the right resource for their goals, not just the one we happen to sell."
      />

      <section className="section-pad">
        <div className="container-page grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGIES.map((tech) => (
            <Link
              key={tech.slug}
              href={`/energy/${tech.slug}`}
              className="group flex flex-col justify-between bg-[var(--color-surface-elevated)]"
            >
              <div className="relative h-44 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/15" />
                <TechIcon icon={tech.icon} size={24} className="absolute bottom-3 left-3 text-white drop-shadow" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-7">
                <div>
                  <h2 className="font-display text-xl font-bold text-[var(--color-text)]">{tech.name}</h2>
                  <p className="mt-2 text-sm italic text-[var(--color-text-muted)]">{tech.tagline}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-muted)]">{tech.summary}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-wide text-[var(--color-primary)] group-hover:text-[var(--color-accent-dark)]">
                  Learn more <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
