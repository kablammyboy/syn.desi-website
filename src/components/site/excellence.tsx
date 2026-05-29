import { Clock, Zap, UserCheck, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { FeatureCard } from "./feature-card";
import { excellence } from "@/lib/content";

const icons = [Clock, Zap, UserCheck, MonitorSmartphone, ShieldCheck];

export function Excellence() {
  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Operational excellence"
          title="Service commitments we're proud of"
          subtitle="Direct, accountable support — without the phone trees."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excellence.map((item, i) => (
            <FeatureCard
              key={item.title}
              icon={icons[i]}
              title={item.title}
              body={item.body}
              delay={(i % 3) * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
