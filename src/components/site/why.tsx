import { Gauge, Award, MapPin } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { why } from "@/lib/content";

const icons = [Gauge, Award, MapPin];

export function Why() {
  return (
    <section id="why" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why partner with Syndesi?"
          title="Technology as a tool to drive business growth"
          subtitle="Proactive IT support and technology management at affordable, consistent monthly rates."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {why.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="h-full rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/60">
                  <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
