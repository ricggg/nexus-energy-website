import Link from "next/link";
import { ArrowRight, Award, Users } from "lucide-react";
import { Icon3DBadge } from "@/components/Icons3D";
import { SectionHeading } from "@/components/Ui";
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "Who We Are | Nexus Energy",
  description: "Our people, our history, and the leadership team building Nexus Energy.",
};

const LEADERSHIP = [
  { name: "Elena Marsh", title: "Founder & Chief Executive Officer" },
  { name: "David Okafor", title: "President & Chief Operating Officer" },
  { name: "Priya Chandran", title: "Chief Financial Officer" },
  { name: "Tomas Reyes", title: "Executive Vice President, Origination" },
];

const HISTORY_ITEMS = [
  { year: "2003", text: "Founded in Chicago with a single wind development project." },
  { year: "2009", text: "Crossed 1,000 MW of operating wind capacity across the Midwest." },
  { year: "2014", text: "Entered utility-scale solar development." },
  { year: "2019", text: "Launched a dedicated battery storage division." },
  { year: "2023", text: "Began development of long-haul transmission infrastructure." },
  { year: "2026", text: "Expanded into geothermal, reaching 34 GW of total capacity under development or in operation." },
];

export default function WhoWeArePage() {
  return (
    <div>
      <Hero
        image="https://images.pexels.com/photos/19205947/pexels-photo-19205947/free-photo-of-solar-panels-on-a-desert.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
        imageAlt="A vast solar farm in a desert setting under clear blue skies"
        eyebrow="Who We Are"
        title="A team of developers, engineers, and operators."
        subtitle="More than 2,600 people across North America, Europe, and Asia — dedicated to empowering the world with reliable, affordable energy."
      />

      <section id="people" className="section-pad scroll-mt-20">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <SectionHeading
            eyebrow="Our People"
            title="Our growing team is our greatest asset."
            subtitle="From land agents and permitting specialists to control-room engineers and safety officers, our people bring the on-the-ground expertise that turns plans into operating energy centers."
          />
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-display text-3xl font-bold text-[var(--color-primary)]">2,600+</div>
              <div className="text-[13px] uppercase tracking-wide text-[var(--color-text-muted)]">Employees</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-[var(--color-primary)]">15+</div>
              <div className="text-[13px] uppercase tracking-wide text-[var(--color-text-muted)]">Countries</div>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="section-pad scroll-mt-20 bg-[var(--color-surface)]">
        <div className="container-page">
          <SectionHeading eyebrow="Leadership" title="The team steering Nexus Energy." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((l) => (
              <div key={l.name} className="border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
                <Icon3DBadge icon={Users} size={40} className="mb-3" />
                <h3 className="font-display text-base font-bold text-[var(--color-text)]">{l.name}</h3>
                <p className="mt-1 text-[13px] text-[var(--color-text-muted)]">{l.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="section-pad scroll-mt-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our History" title="Two decades of building." />
          <div className="mt-10 space-y-6 border-l-2 border-[var(--color-border-strong)] pl-6">
            {HISTORY_ITEMS.map((h) => (
              <div key={h.year} className="relative">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-[var(--color-accent)]" />
                <div className="font-display text-lg font-bold text-[var(--color-primary)]">{h.year}</div>
                <p className="text-[14px] text-[var(--color-text-muted)]">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <Icon3DBadge icon={Award} size={48} className="mb-4" colors={["#fdf0a8", "#f2c318", "#a9860c"]} />
            <SectionHeading eyebrow="Awards" title="Recognized across the industry." subtitle="Named a top clean-energy employer and honored for community partnership and safety performance by leading industry associations." />
          </div>
          <div className="flex md:justify-end">
            <Link href="/careers" className="btn-primary">
              See Open Roles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
