import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { NEWS } from "@/lib/news";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = NEWS.find((n) => n.slug === params.slug);
  if (!item) return {};
  return { title: `${item.title} | Nexus Energy`, description: item.excerpt };
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = NEWS.find((n) => n.slug === params.slug);
  if (!item) notFound();

  return (
    <div className="container-page section-pad max-w-3xl">
      <Link href="/news" className="mb-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
        <ArrowLeft size={14} /> All News
      </Link>
      <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-[var(--color-accent-dark)]">
        {item.date} · {item.category}
      </p>
      <h1 className="font-display text-3xl font-bold leading-tight text-[var(--color-text)] md:text-4xl">{item.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">{item.excerpt}</p>
      <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
        <p>
          Nexus Energy continues to expand its footprint across North America, drawing on two
          decades of in-house development, engineering, and operations experience to bring this
          project from early planning to commercial reality.
        </p>
        <p>
          For more information about this announcement, or to speak with our origination team
          about a potential partnership, reach out through our contact page.
        </p>
      </div>
      <Link href="/contact" className="btn-primary mt-8">
        Contact Our Team
      </Link>
    </div>
  );
}
