import {
  Lightbulb,
  Wrench,
  Headset,
  MonitorCog,
  ShieldCheck,
  LaptopMinimal,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { FeatureCard } from "./feature-card";
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
          {services.map((item, i) => (
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
