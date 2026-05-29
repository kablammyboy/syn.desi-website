import type { LucideIcon } from "lucide-react";
import { Reveal } from "./reveal";

/**
 * Tall, feathered-frame card used across the Why / Excellence / Services
 * sections. Visual treatment lives in the `.card-feathered` class.
 */
export function FeatureCard({
  icon: Icon,
  title,
  body,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card-feathered h-full">
        <Icon className="mb-6 size-6 text-accent" strokeWidth={1.75} />
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
      </article>
    </Reveal>
  );
}
