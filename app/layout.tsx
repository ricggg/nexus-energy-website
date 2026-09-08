import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nexus Energy | Energy Innovation. Trusted Execution.",
  description:
    "Nexus Energy is a leading privately held independent power producer and energy infrastructure developer, delivering natural gas, solar, wind, storage, transmission, and geothermal projects across North America.",
  metadataBase: new URL("https://nexusenergyadvisors.example"),
  keywords: [
    "independent power producer",
    "renewable energy developer",
    "utility scale solar",
    "wind energy developer",
    "battery storage",
    "transmission infrastructure",
    "clean energy company",
  ],
  openGraph: {
    title: "Nexus Energy | Energy Innovation. Trusted Execution.",
    description:
      "A leading privately held independent power producer and energy infrastructure developer.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nexus Energy | Energy Innovation. Trusted Execution.",
    description:
      "A leading privately held independent power producer and energy infrastructure developer.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased" style={{ background: "var(--color-bg)" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
