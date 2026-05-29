import { Gauge, Award, MapPin } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { FeatureCard } from "./feature-card";
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
          {why.map((item, i) => (
            <FeatureCard
              key={item.title}
              icon={icons[i]}
              title={item.title}
              body={item.body}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
