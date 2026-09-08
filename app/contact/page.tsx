import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/Ui";
import { Hero } from "@/components/Hero";
import { Icon3DBadge } from "@/components/Icons3D";

export const metadata = {
  title: "Contact Us | Nexus Energy",
  description: "Get in touch with Nexus Energy's development, customer, and careers teams.",
};

export default function ContactPage() {
  return (
    <div>
      <Hero
        image="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
        imageAlt="Sleek modern solar panels under a vibrant blue sky with clouds"
        eyebrow="Contact"
        title="Let's talk about your energy goals."
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading title="Get in touch" />
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-3">
                <Icon3DBadge icon={MapPin} size={38} iconSize={18} />
                <div>
                  <div className="font-semibold text-[var(--color-text)]">Headquarters</div>
                  <div className="text-[14px] text-[var(--color-text-muted)]">1 Riverfront Plaza, Chicago, IL 60606</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon3DBadge icon={Phone} size={38} iconSize={18} colors={["#c9f2dd", "#159a56", "#0c7a41"]} />
                <div>
                  <div className="font-semibold text-[var(--color-text)]">Phone</div>
                  <div className="text-[14px] text-[var(--color-text-muted)]">(312) 555-0142</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon3DBadge icon={Mail} size={38} iconSize={18} colors={["#fdf0a8", "#f2c318", "#a9860c"]} />
                <div>
                  <div className="font-semibold text-[var(--color-text)]">Email</div>
                  <div className="text-[14px] text-[var(--color-text-muted)]">info@nexusenergyadvisors.example</div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-sm outline-none focus:border-[var(--color-primary)]" placeholder="First name" />
              <input className="border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-sm outline-none focus:border-[var(--color-primary)]" placeholder="Last name" />
            </div>
            <input className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-sm outline-none focus:border-[var(--color-primary)]" placeholder="Email address" type="email" />
            <input className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-sm outline-none focus:border-[var(--color-primary)]" placeholder="Company" />
            <textarea className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-sm outline-none focus:border-[var(--color-primary)]" placeholder="How can we help?" rows={5} />
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
