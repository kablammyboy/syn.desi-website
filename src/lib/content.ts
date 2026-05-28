/**
 * Single source of truth for site copy.
 * Transcribed verbatim from the existing syn.desi homepage.
 * See /content/site-content.md for sourcing notes.
 */

export const company = {
  name: "Syndesi IT Solutions",
  tagline:
    "Your trusted partner in technology consultation, implementation, and management.",
  phone: "(904) 661-0006",
  phoneHref: "tel:+19046610006",
  email: "support@syn.desi",
  emailHref: "mailto:support@syn.desi",
  location: "Jacksonville, Florida",
  serviceArea: "Serving all of Florida, Georgia, and beyond.",
  yearFounded: 2022,
} as const;

export const nav = [
  { label: "Why Syndesi", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
] as const;

export const why = [
  {
    title: "Outsourcing That Drives Organizational Productivity",
    body: "Syndesi IT Solutions provides fast and responsive technical consultation, implementation, and support that allow you to use technology as a tool to drive business growth. Outsourcing your day-to-day management, maintenance, and support of your organization's IT infrastructure to Syndesi ensures the efficiency of your technology and workforce.",
  },
  {
    title: "Unparalleled Experience in the Industry",
    body: "We have decades of combined experience in the Information Technology field. We've managed any small-business setup you can imagine. From one user to hundreds. We have experience and certification with Apple, Microsoft, Linux, and more.",
  },
  {
    title: "Geographical Area of Service",
    body: "Syndesi is based in Jacksonville, Florida. We service all of Florida, Georgia, and beyond. Depending on the type of IT support you require, we can handle things remotely or on-site at your physical location.",
  },
] as const;

export const excellence = [
  {
    title: "4-hour ticket response",
    body: "Responses within four hours for all service ticket requests.",
  },
  {
    title: "1-hour critical response",
    body: "Responses within one hour for critical issues reported by our clients, or detected by our monitoring software.",
  },
  {
    title: "A dedicated engineer",
    body: "Direct contact with your assigned Support Engineer. No messy phone trees or frustrating ticket creation processes.",
  },
  {
    title: "Full-fleet management",
    body: "Full-fleet remote management, antivirus deployment / central monitoring for all managed workstations.",
  },
  {
    title: "Network-wide protection",
    body: "Network-wide antivirus / antimalware / ransomware protection for your entire corporate network systems.",
  },
] as const;

export const services = [
  {
    title: "Technology Consultation",
    body: "Fast, responsive guidance to help you make the right technology decisions for your business.",
  },
  {
    title: "Implementation",
    body: "Deployment and setup of the systems and infrastructure your team relies on, done right the first time.",
  },
  {
    title: "Management & Support",
    body: "Outsourced day-to-day management, maintenance, and support of your IT infrastructure.",
  },
  {
    title: "Remote Management & Monitoring",
    body: "Full-fleet remote management of all managed workstations, with central monitoring.",
  },
  {
    title: "Cybersecurity",
    body: "Antivirus, antimalware, and ransomware protection across your entire corporate network.",
  },
  {
    title: "Remote & On-Site Support",
    body: "Whatever the need, we handle things remotely or on-site at your physical location.",
  },
] as const;

export const platforms = ["Apple", "Microsoft", "Linux", "and more"] as const;
