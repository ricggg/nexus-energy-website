import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS } from "@/lib/news";
import { SectionHeading } from "@/components/Ui";
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "News & Insights | Nexus Energy",
  description: "Press releases, project milestones, and insights from across Nexus Energy.",
};

export default function NewsPage() {
  const [featured, ...rest] = NEWS;

  return (
    <div>
      <Hero
        image="https://images.pexels.com/photos/17789406/pexels-photo-17789406/free-photo-of-field-of-wind-turbines.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
        imageAlt="Row of wind turbines spinning on a clear day"
        eyebrow="News & Insights"
        title="What's happening across Nexus Energy."
      />

      <section className="section-pad">
        <div className="container-page">
          {featured && (
            <Link href={`/news/${featured.slug}`} className="group mb-12 block border border-[var(--color-border)] p-8 md:p-10">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-[var(--color-accent-dark)]">
                Featured · {featured.date} · {featured.category}
              </p>
              <h2 className="font-display text-2xl font-bold leading-snug text-[var(--color-text)] group-hover:text-[var(--color-primary)] md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-muted)]">{featured.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[var(--color-primary)]">
                Read more <ArrowRight size={14} />
              </span>
            </Link>
          )}

          <SectionHeading title="All Articles" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {rest.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="group block border border-[var(--color-border)] p-6">
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
    </div>
  );
}
