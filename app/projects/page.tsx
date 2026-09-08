"use client";

import { useState } from "react";
import { PROJECTS, PROJECT_STATS, TECH_FILTERS } from "@/lib/projects";
import { SectionHeading, StatBlock } from "@/components/Ui";
import { Hero } from "@/components/Hero";

const STATUS_COLOR: Record<string, string> = {
  Operating: "var(--color-primary)",
  "Under Construction": "var(--color-accent-dark)",
  "In Development": "var(--color-sky)",
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof TECH_FILTERS)[number]>("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.technology === filter);

  return (
    <div>
      <Hero
        image="https://images.pexels.com/photos/414967/pexels-photo-414967.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
        imageAlt="Electricity pylons silhouetted against a dramatic sunset sky"
        eyebrow="Projects"
        title="A global portfolio, built and operated in-house."
      >
        <div className="grid max-w-md grid-cols-3 gap-8">
          <StatBlock light value={PROJECT_STATS.projects} label="Projects" />
          <StatBlock light value={`${PROJECT_STATS.gigawatts} GW`} label="Capacity" />
          <StatBlock light value={PROJECT_STATS.continents} label="Continents" />
        </div>
      </Hero>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading title="Browse our projects" />

          <div className="mt-8 flex flex-wrap gap-2">
            {TECH_FILTERS.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 text-[12px] font-bold uppercase tracking-wide transition-colors ${
                  filter === t
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border-strong)] text-[11px] uppercase tracking-wide text-[var(--color-text-faint)]">
                  <th className="py-3 pr-4">Project</th>
                  <th className="py-3 pr-4">Location</th>
                  <th className="py-3 pr-4">Technology</th>
                  <th className="py-3 pr-4">Capacity</th>
                  <th className="py-3 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.name} className="border-b border-[var(--color-border)]">
                    <td className="py-4 pr-4 font-semibold text-[var(--color-text)]">{p.name}</td>
                    <td className="py-4 pr-4 text-[var(--color-text-muted)]">{p.location}</td>
                    <td className="py-4 pr-4 text-[var(--color-text-muted)]">{p.technology}</td>
                    <td className="py-4 pr-4 text-[var(--color-text-muted)]">{p.capacity}</td>
                    <td className="py-4 pr-4">
                      <span
                        className="inline-block px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
                        style={{ background: STATUS_COLOR[p.status] }}
                      >
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-[var(--color-text-faint)]">
                      No projects match this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
