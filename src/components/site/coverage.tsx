import { MapPin } from "lucide-react";
import { Reveal } from "./reveal";
import { company, platforms } from "@/lib/content";

export function Coverage() {
  return (
    <section id="coverage" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Coverage
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Based in {company.location}, working wherever you are
          </h2>
          <p className="mt-4 max-w-md text-muted">
            {company.serviceArea} Depending on the type of IT support you
            require, we can handle things remotely or on-site at your physical
            location.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
            <MapPin className="size-4 text-accent" />
            {company.location}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <p className="text-sm font-medium text-muted">
              Experience &amp; certification with
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-xl border border-border bg-surface-2 px-5 py-3 text-lg font-semibold"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Decades of combined experience in the Information Technology
              field — we&apos;ve managed any small-business setup you can
              imagine, from one user to hundreds.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
