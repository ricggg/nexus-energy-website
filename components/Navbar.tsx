"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { TECHNOLOGIES } from "@/lib/technologies";

const LINKS = [
  {
    label: "Energy Technologies",
    href: "/energy",
    children: TECHNOLOGIES.map((t) => ({ label: t.name, href: `/energy/${t.slug}` })),
  },
  { label: "Expertise", href: "/expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "News & Insights", href: "/news" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center" aria-label="Nexus Energy Advisors home">
          <Image
            src="/logo.png"
            alt="Nexus Energy Advisors"
            width={1190}
            height={552}
            priority
            className="h-9 w-auto object-contain md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setOpenDrop(link.href)}
              onMouseLeave={() => link.children && setOpenDrop(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown size={13} />}
              </Link>
              {link.children && openDrop === link.href && (
                <div className="absolute left-0 top-full w-56 border border-[var(--color-border)] bg-[var(--color-surface-elevated)] py-2 shadow-lg">
                  {link.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-[13px] font-medium text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 pb-4 lg:hidden">
          {LINKS.map((link) => (
            <div key={link.href} className="border-b border-[var(--color-border)] py-2">
              <Link href={link.href} className="block py-1.5 text-sm font-semibold" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-3 flex flex-col">
                  {link.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="py-1 text-[13px] text-[var(--color-text-muted)]"
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn-primary mt-4 w-full justify-center" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
