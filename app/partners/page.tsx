import { Users2, Building2, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/Ui";
import { Hero } from "@/components/Hero";
import { Icon3DBadge } from "@/components/Icons3D";

export const metadata = {
  title: "Partners | Nexus Energy",
  description: "How we partner with communities, customers, and affiliate companies to deliver energy infrastructure.",
};

export default function PartnersPage() {
  return (
    <div>
      <Hero
        image="https://images.pexels.com/photos/5842551/pexels-photo-5842551.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
        imageAlt="Wind turbines in a rural landscape emphasizing renewable energy and sustainability"
        eyebrow="Partners"
        title="Built on long-term relationships, not one-off deals."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div className="border border-[var(--color-border)] p-8">
            <Icon3DBadge icon={Users2} size={48} className="mb-4" />
            <h2 className="font-display text-xl font-bold text-[var(--color-text)]">Communities</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              We partner with communities and landowners across the country to provide jobs,
              meaningful tax revenue, and long-term lease payments — while delivering low-cost,
              reliable energy to the customers who need it. Every project starts with early,
              direct conversations with the people who will live alongside it.
            </p>
          </div>
          <div className="border border-[var(--color-border)] p-8">
            <Icon3DBadge icon={Building2} size={48} className="mb-4" colors={["#c9f2dd", "#159a56", "#0c7a41"]} />
            <h2 className="font-display text-xl font-bold text-[var(--color-text)]">Customers</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              Our long-term partnerships with utilities and corporate customers represent their
              trust in our ability to reliably meet their energy goals — backed by deep
              engineering expertise and a wide range of technologies to match, whatever the
              procurement need.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-page">
          <SectionHeading eyebrow="Affiliates" title="Companies we've built alongside Nexus Energy." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: "Brightline Solar Manufacturing", desc: "A domestic solar panel manufacturing venture supporting U.S. supply chains." },
              { name: "Reclaim Power", desc: "A distributed and community solar platform serving residential and small commercial customers." },
              { name: "Meridian Capital Partners", desc: "A venture capital affiliate investing in climate and energy technology startups." },
            ].map((a) => (
              <div key={a.name} className="border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
                <Icon3DBadge icon={Leaf} size={40} className="mb-3" colors={["#d7f2c2", "#5c9a2e", "#2e5c14"]} />
                <h3 className="font-display text-base font-bold text-[var(--color-text)]">{a.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-muted)]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
