import { Clock, Zap, UserCheck, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { excellence } from "@/lib/content";

const icons = [Clock, Zap, UserCheck, MonitorSmartphone, ShieldCheck];

export function Excellence() {
  return (
    <section className="relative border-t border-border bg-grid py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Operational excellence"
          title="Service commitments we're proud of"
          subtitle="Direct, accountable support — without the phone trees."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excellence.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <article className="flex h-full gap-4 rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm">
                  <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
