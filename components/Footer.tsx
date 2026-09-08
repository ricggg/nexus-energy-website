import Link from "next/link";
import Image from "next/image";
import { TECHNOLOGIES } from "@/lib/technologies";
import { Icon3DLinkedIn, Icon3DX, Icon3DFacebook } from "@/components/Icons3D";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Energy Technologies",
    links: TECHNOLOGIES.map((t) => ({ label: t.name, href: `/energy/${t.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "Expertise", href: "/expertise" },
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/services" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Who We Are",
    links: [
      { label: "Our People", href: "/who-we-are#people" },
      { label: "Leadership", href: "/who-we-are#leadership" },
      { label: "Our History", href: "/who-we-are#history" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "News & Insights",
    links: [
      { label: "News & Press Releases", href: "/news" },
      { label: "Insights", href: "/news?category=Insight" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center" aria-label="Nexus Energy Advisors home">
              <Image
                src="/logo.png"
                alt="Nexus Energy Advisors"
                width={1190}
                height={552}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-muted)]">
              North America's largest privately held independent power producer and energy
              infrastructure developer.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="transition-transform hover:-translate-y-0.5">
                <Icon3DLinkedIn size={26} />
              </a>
              <a href="#" aria-label="X (Twitter)" className="transition-transform hover:-translate-y-0.5">
                <Icon3DX size={26} />
              </a>
              <a href="#" aria-label="Facebook" className="transition-transform hover:-translate-y-0.5">
                <Icon3DFacebook size={26} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-[12px] font-bold uppercase tracking-wide text-[var(--color-text)]">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 text-[12px] text-[var(--color-text-faint)] md:flex-row">
          <span>© {new Date().getFullYear()} Nexus Energy LLC. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[var(--color-primary)]">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--color-primary)]">Terms of Service</Link>
            <Link href="/compliance" className="hover:text-[var(--color-primary)]">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
