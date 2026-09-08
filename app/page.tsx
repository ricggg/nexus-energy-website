import Link from "next/link";
import { ArrowRight, Users2 } from "lucide-react";
import { TECHNOLOGIES } from "@/lib/technologies";
import { PROJECT_STATS } from "@/lib/projects";
import { NEWS } from "@/lib/news";
import { SectionHeading, StatBlock, TechIcon } from "@/components/Ui";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <Hero
        image="https://images.pexels.com/photos/112846/pexels-photo-112846.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
        imageAlt="Wind turbines generating renewable energy in an open field under a clear blue sky"
        eyebrow="Energy Innovation. Trusted Execution."
        title="Powering North America's energy transition."
        subtitle="Nexus Energy is one of the largest privately held independent power producers in North America. We develop, build, and operate the generation and infrastructure that keeps the grid reliable — today and for decades to come."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/expertise" className="btn-primary !bg-[var(--color-accent)] !text-[var(--color-ink)] hover:!bg-[var(--color-accent-dark)]">
            See How We Work <ArrowRight size={16} />
          </Link>
          <Link href="/projects" className="btn-outline text-[var(--color-text-on-dark)]">
            <span>View Our Projects</span>
          </Link>
        </div>
      </Hero>

      {/* Intro strip */}
      <section className="section-pad">
        <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
          <SectionHeading
            eyebrow="Expertise"
            title="We are developers at heart."
            subtitle="With the know-how and in-house expertise to take a project from a raw idea to a fully operating energy center — and the discipline to run it reliably for decades after."
          />
          <div>
            <Link href="/expertise" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
              See how we work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-page">
          <SectionHeading
            eyebrow="Energy Technologies"
            title="Empowering you with a broad array of energy technologies."
            subtitle="From dispatchable natural gas to solar, wind, storage, transmission, and geothermal, we deliver on our customers' goals today, tomorrow, and in the future."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
            {TECHNOLOGIES.map((tech) => (
              <Link
                key={tech.slug}
                href={`/energy/${tech.slug}`}
                className="group flex flex-col justify-between bg-[var(--color-surface-elevated)] transition-colors"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--color-primary)]/20" />
                  <TechIcon icon={tech.icon} size={22} className="absolute bottom-3 left-3 text-white drop-shadow" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{tech.name}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-muted)]">{tech.summary}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-wide text-[var(--color-primary)] group-hover:text-[var(--color-accent-dark)]">
                    Learn more <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Project stats */}
      <section className="relative overflow-hidden section-pad text-[var(--color-text-on-dark)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/9989519/pexels-photo-9989519.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
          alt="High-voltage transmission tower against a clear sky"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(155deg, rgba(8,42,28,0.95) 0%, rgba(15,69,48,0.92) 55%, rgba(21,82,58,0.88) 100%)" }}
        />
        <div className="container-page relative z-10">
          <p className="eyebrow mb-6 !text-[var(--color-accent)]">Projects</p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <StatBlock light value={PROJECT_STATS.projects} label="Projects" />
            <StatBlock light value={`${PROJECT_STATS.gigawatts} GW`} label="Total Capacity" />
            <StatBlock light value={PROJECT_STATS.continents} label="Continents" />
          </div>
          <Link href="/projects" className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[var(--color-accent)]">
            See our projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Partner quotes */}
      <section className="section-pad">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <blockquote className="border border-[var(--color-border)] p-8">
            <Users2 className="mb-4 text-[var(--color-accent)]" size={24} />
            <p className="font-display text-lg leading-relaxed text-[var(--color-text)]">
              "We partner with communities and landowners across the country to deliver jobs,
              meaningful tax revenue, and long-term lease payments — while bringing low-cost,
              reliable energy to the customers who need it."
            </p>
            <footer className="mt-5 text-[13px] font-semibold text-[var(--color-text-muted)]">
              Senior Vice President, Development
            </footer>
            <Link href="/partners" className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Communities <ArrowRight size={13} />
            </Link>
          </blockquote>
          <blockquote className="border border-[var(--color-border)] p-8">
            <Users2 className="mb-4 text-[var(--color-accent)]" size={24} />
            <p className="font-display text-lg leading-relaxed text-[var(--color-text)]">
              "Our long-term partnerships with customers represent their trust in our ability to
              reliably meet their energy goals, backed by deep engineering expertise and a wide
              range of technologies."
            </p>
            <footer className="mt-5 text-[13px] font-semibold text-[var(--color-text-muted)]">
              Executive Vice President, Origination
            </footer>
            <Link href="/partners" className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Customers <ArrowRight size={13} />
            </Link>
          </blockquote>
        </div>
      </section>

      {/* News */}
      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-page">
          <div className="mb-10 flex items-end justify-between">
            <SectionHeading eyebrow="News & Insights" title="What's happening across Nexus Energy." />
            <Link href="/news" className="hidden text-sm font-bold uppercase tracking-wide text-[var(--color-primary)] md:inline-flex md:items-center md:gap-2">
              All news <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {NEWS.slice(0, 3).map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="group block border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-[var(--color-accent-dark)]">
                  {item.date} · {item.category}
                </p>
                <h3 className="font-display text-base font-bold leading-snug text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-muted)]">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section-pad">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <SectionHeading
            eyebrow="Careers"
            title="Join us in building the energy future."
            subtitle="At Nexus Energy, innovation is driven by a diverse team of engineers, developers, and operators dedicated to delivering reliable, affordable energy at scale."
          />
          <div className="flex md:justify-end">
            <Link href="/careers" className="btn-primary">
              See What We're All About <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
