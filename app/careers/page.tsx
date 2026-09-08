import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, HeartHandshake, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/Ui";
import { Hero } from "@/components/Hero";
import { Icon3DBadge } from "@/components/Icons3D";

export const metadata = {
  title: "Careers | Nexus Energy",
  description: "Join Nexus Energy and help build the energy infrastructure of the future.",
};

const OPENINGS = [
  { title: "Senior Development Manager, Wind", location: "Chicago, IL", dept: "Development" },
  { title: "Transmission Permitting Lead", location: "Denver, CO", dept: "Development" },
  { title: "Solar O&M Field Technician", location: "Multiple, TX", dept: "Operations" },
  { title: "Battery Storage Engineer", location: "Remote, USA", dept: "Engineering" },
  { title: "EHS Manager", location: "Chicago, IL", dept: "Safety & Compliance" },
  { title: "Data Analyst, Asset Performance", location: "Toronto, ON", dept: "Analytics" },
];

const PERKS = [
  { icon: HeartHandshake, title: "Comprehensive Benefits", body: "Medical, dental, vision, and a 401(k) match from day one." },
  { icon: GraduationCap, title: "Growth & Development", body: "Tuition support and internal mobility across development, engineering, and operations." },
  { icon: Briefcase, title: "Meaningful Work", body: "Every role connects directly to gigawatts of clean energy reaching the grid." },
];

export default function CareersPage() {
  return (
    <div>
      <Hero
        image="https://images.pexels.com/photos/243137/pexels-photo-243137.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
        imageAlt="Modern wind turbine generators located on a grassy field in the countryside"
        eyebrow="Careers"
        title="Join us in building the energy future."
        subtitle="Innovation at Nexus Energy is driven by a unique array of ideas and perspectives. Our growing team is dedicated to empowering the world with reliable, affordable energy."
      />

      <section className="section-pad">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {PERKS.map((p) => (
            <div key={p.title} className="border border-[var(--color-border)] p-7">
              <Icon3DBadge icon={p.icon} size={48} className="mb-4" />
              <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-muted)]">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-page">
          <SectionHeading eyebrow="Open Roles" title="Current opportunities" />
          <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {OPENINGS.map((o) => (
              <div key={o.title} className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-base font-bold text-[var(--color-text)]">{o.title}</h3>
                  <div className="mt-1 flex items-center gap-4 text-[13px] text-[var(--color-text-muted)]">
                    <span className="inline-flex items-center gap-1"><MapPin size={13} /> {o.location}</span>
                    <span>{o.dept}</span>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-wide text-[var(--color-primary)]">
                  Apply <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
