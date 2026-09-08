import { Server, BarChart3, ShieldAlert, ClipboardList, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/Ui";
import { Hero } from "@/components/Hero";
import { Icon3DBadge } from "@/components/Icons3D";

export const metadata = {
  title: "Nexus Energy Services | Nexus Energy",
  description: "Long-term operations, analytics, and asset management services that keep energy centers performing for decades.",
};

const SERVICES = [
  {
    icon: Server,
    title: "Operations Center of Excellence",
    body: "A 24/7 remote operations team monitors every energy center in our fleet, dispatching field crews the moment performance drifts from plan.",
  },
  {
    icon: ClipboardList,
    title: "Project & Construction Services",
    body: "Dedicated project controls staff track budget, schedule, and quality across every phase of construction, on every project in our pipeline.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Metrics",
    body: "Turbine, panel, and inverter-level data flows into a shared analytics platform that flags underperformance early and benchmarks assets against the fleet.",
  },
  {
    icon: ShieldAlert,
    title: "Environmental, Health & Safety",
    body: "A dedicated EHS team sets and audits safety standards across every site, contractor, and stage of a project's life.",
  },
  {
    icon: Wrench,
    title: "Asset & Maintenance Management",
    body: "Preventive maintenance programs, spare-parts logistics, and warranty management keep equipment running at its rated output for the long haul.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <Hero
        image="https://images.pexels.com/photos/9989519/pexels-photo-9989519.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
        imageAlt="A low angle view of a high-voltage transmission tower against a clear blue sky"
        eyebrow="Nexus Energy Services"
        title="Keeping every energy center performing, decade after decade."
        subtitle="Building a project is only the beginning. Our services teams run the day-to-day operations, maintenance, and analytics that keep our fleet — and our customers' assets — performing at their best."
      />

      <section className="section-pad">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="border border-[var(--color-border)] p-7">
              <Icon3DBadge icon={s.icon} size={48} className="mb-4" colors={["#c9f2dd", "#159a56", "#0c7a41"]} />
              <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-muted)]">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-page">
          <SectionHeading
            eyebrow="By the Numbers"
            title="What our services team keeps running"
          />
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="font-display text-3xl font-bold text-[var(--color-primary)]">210+</div>
              <div className="mt-1 text-[13px] uppercase tracking-wide text-[var(--color-text-muted)]">Assets monitored</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-[var(--color-primary)]">24/7</div>
              <div className="mt-1 text-[13px] uppercase tracking-wide text-[var(--color-text-muted)]">Operations coverage</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-[var(--color-primary)]">98%+</div>
              <div className="mt-1 text-[13px] uppercase tracking-wide text-[var(--color-text-muted)]">Fleet-wide availability</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-[var(--color-primary)]">4</div>
              <div className="mt-1 text-[13px] uppercase tracking-wide text-[var(--color-text-muted)]">Continents supported</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
