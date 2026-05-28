import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { company } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border bg-circuit py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Get in touch
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to make technology work for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Reach out and you&apos;ll talk directly to a Support Engineer — no
            phone trees, no friction. We respond to every request within four
            hours.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={company.emailHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-strong sm:w-auto"
            >
              <Mail className="size-4" />
              {company.email}
            </Link>
            <Link
              href={company.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 font-medium text-foreground transition-colors hover:border-accent sm:w-auto"
            >
              <Phone className="size-4" />
              {company.phone}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Phone, label: "Call", value: company.phone, href: company.phoneHref },
              { icon: Mail, label: "Email", value: company.email, href: company.emailHref },
              { icon: MapPin, label: "Based in", value: company.location },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-surface p-6 text-left"
              >
                <Icon className="size-5 text-accent" />
                <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                  {label}
                </p>
                {href ? (
                  <Link
                    href={href}
                    className="mt-1 inline-flex items-center gap-1 font-medium hover:text-accent"
                  >
                    {value}
                    <ArrowRight className="size-3.5" />
                  </Link>
                ) : (
                  <p className="mt-1 font-medium">{value}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
