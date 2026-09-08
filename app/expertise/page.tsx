import Link from "next/link";
import { ArrowRight, Compass, HardHat, Cog, LineChart, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/Ui";
import { Hero } from "@/components/Hero";
import { Icon3DBadge } from "@/components/Icons3D";

export const metadata = {
  title: "Expertise | Nexus Energy",
  description: "Development, engineering, construction, and operations expertise across the full project lifecycle.",
};

const CAPABILITIES = [
  {
    icon: Compass,
    title: "Origination & Development",
    body: "We identify sites, secure land rights, and navigate permitting and interconnection years before a single turbine or panel is installed.",
  },
  {
    icon: Cog,
    title: "Engineering & Procurement",
    body: "In-house engineering teams design projects for the specific terrain, grid, and regulatory environment they'll operate in — not a one-size-fits-all template.",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    body: "We manage contractors and supply chains directly, keeping projects on schedule and on budget from groundbreaking to commissioning.",
  },
  {
    icon: LineChart,
    title: "Asset Management & Analytics",
    body: "Once operating, every project is monitored in real time, with performance data feeding back into how we design the next one.",
  },
  {
    icon: ShieldCheck,
    title: "EHS & Compliance",
    body: "Safety and environmental compliance are built into every phase of a project, not bolted on at the end.",
  },
];

export default function ExpertisePage() {
  return (
    <div>
      <Hero
        image="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
        imageAlt="A large industrial power plant with smokestacks under a blue sky"
        eyebrow="Expertise"
        title="We are developers at heart — with the expertise to execute."
        subtitle="Every project we build passes through the same in-house teams: development, engineering, construction, and long-term operations. That continuity is what lets us take on complex, multi-year infrastructure with confidence."
      />

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading eyebrow="Our Capabilities" title="One team, from first survey to last kilowatt-hour." />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="border border-[var(--color-border)] p-7">
                <Icon3DBadge icon={c.icon} size={48} className="mb-4" />
                <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{c.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-muted)]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <SectionHeading
            eyebrow="Why It Matters"
            title="Vertical integration means fewer handoffs, faster problem-solving."
            subtitle="When development, engineering, and operations sit inside the same company, issues get caught earlier and projects perform closer to plan for their full operating life."
          />
          <div className="flex md:justify-end">
            <Link href="/projects" className="btn-primary">
              See It in Our Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
