import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { asset } from "@/lib/utils";
import { company, nav } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Image
              src={asset("/brand/logo-white.png")}
              alt={company.name}
              width={2000}
              height={864}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-sm text-muted">{company.tagline}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Navigate
            </p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Contact
            </p>
            <Link href={company.phoneHref} className="text-sm text-muted hover:text-foreground">
              {company.phone}
            </Link>
            <Link href={company.emailHref} className="text-sm text-muted hover:text-foreground">
              {company.email}
            </Link>
            <p className="text-sm text-muted">{company.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 font-mono text-xs uppercase tracking-widest text-muted sm:flex-row">
          <p>
            © {company.yearFounded}–{year} {company.name}
          </p>
          <Link
            href="#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
