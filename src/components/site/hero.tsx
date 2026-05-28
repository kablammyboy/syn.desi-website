"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { asset } from "@/lib/utils";
import { company } from "@/lib/content";
import { CodeRain } from "./code-rain";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#04060a]"
    >
      {/* Slow glowing code rain */}
      <CodeRain className="pointer-events-none absolute inset-0 h-full w-full" />

      {/* Center vignette keeps the logo crisp; bottom fade blends into the page */}
      <div
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_center,rgba(4,6,10,0.92)_0%,rgba(4,6,10,0.55)_45%,transparent_80%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 flex justify-center"
          >
            <Image
              src={asset("/brand/logo-white.png")}
              alt={company.name}
              width={2000}
              height={864}
              priority
              className="h-auto w-[min(90vw,520px)]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-balance text-lg text-muted sm:text-xl"
          >
            {company.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-strong sm:w-auto"
            >
              Get in touch
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={company.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 font-medium text-foreground transition-colors hover:border-accent sm:w-auto"
            >
              <Phone className="size-4" />
              {company.phone}
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 font-mono text-xs uppercase tracking-widest text-muted"
          >
            {company.serviceArea}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
