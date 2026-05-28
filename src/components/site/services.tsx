import {
  Lightbulb,
  Wrench,
  Headset,
  MonitorCog,
  ShieldCheck,
  LaptopMinimal,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { services } from "@/lib/content";

const icons = [Lightbulb, Wrench, Headset, MonitorCog, ShieldCheck, LaptopMinimal];

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything your IT needs, under one roof"
          subtitle="From the first consultation to ongoing management, across Apple, Microsoft, Linux, and more."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <article className="group h-full rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent/60">
                  <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-background">
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
