import Link from "next/link";
import type { ReactNode } from "react";
import { checkoutUrl } from "@/lib/site";

type Variant = "dark" | "light" | "champagne" | "outline" | "forest";
type Size = "sm" | "md" | "lg";

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  withArrow?: boolean;
  withLock?: boolean;
};

const base = [
  "cta-button group/cta relative inline-flex select-none items-center justify-center gap-2.5",
  "overflow-hidden rounded-full font-medium tracking-[0.02em]",
  "transition-[transform,box-shadow,background-color,color,border-color] duration-300",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none",
  // brilho interno superior: dá volume sem parecer plástico
  "before:absolute before:inset-0 before:rounded-full before:content-['']",
  "before:bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0)_58%)]",
].join(" ");

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.14em]",
  md: "px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]",
  lg: "px-8 py-4.5 text-[0.78rem] uppercase tracking-[0.16em] sm:px-10 sm:py-5",
};

const variants: Record<Variant, string> = {
  dark: [
    "bg-[linear-gradient(180deg,#2B2521_0%,#211C19_38%,#171411_100%)]",
    "text-paper ring-1 ring-ink",
    "shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_2px_6px_-2px_rgba(23,20,17,0.55),0_14px_30px_-12px_rgba(23,20,17,0.5)]",
    "hover:bg-[linear-gradient(180deg,#3A322C_0%,#2A2320_38%,#1C1815_100%)]",
    "hover:shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_4px_10px_-2px_rgba(23,20,17,0.55),0_22px_44px_-14px_rgba(23,20,17,0.55)]",
    "active:shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_1px_4px_-1px_rgba(23,20,17,0.5)]",
  ].join(" "),
  light: [
    "bg-[linear-gradient(180deg,#FFFFFF_0%,#FDFBF7_55%,#F6F1E9_100%)]",
    "text-ink ring-1 ring-ink/10",
    "shadow-[0_1px_0_0_rgba(255,255,255,0.9)_inset,0_1px_3px_-1px_rgba(23,20,17,0.12),0_10px_24px_-14px_rgba(23,20,17,0.35)]",
    "hover:ring-gold/45",
    "hover:bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFEFC_55%,#FAF6EF_100%)]",
    "hover:shadow-[0_1px_0_0_rgba(255,255,255,1)_inset,0_2px_6px_-1px_rgba(23,20,17,0.14),0_18px_36px_-16px_rgba(23,20,17,0.4)]",
  ].join(" "),
  champagne: [
    "bg-[linear-gradient(180deg,#E7D7B8_0%,#D8C39B_42%,#C4AB7D_100%)]",
    "text-ink ring-1 ring-[#B89B62]/55",
    "shadow-[0_1px_0_0_rgba(255,255,255,0.65)_inset,0_1px_4px_-1px_rgba(120,98,58,0.3),0_12px_28px_-14px_rgba(184,155,98,0.6)]",
    "hover:bg-[linear-gradient(180deg,#F0E2C8_0%,#E0CCAA_42%,#CBB488_100%)]",
    "hover:shadow-[0_1px_0_0_rgba(255,255,255,0.8)_inset,0_2px_8px_-1px_rgba(120,98,58,0.32),0_22px_44px_-16px_rgba(184,155,98,0.65)]",
    "active:shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset,0_1px_3px_-1px_rgba(120,98,58,0.3)]",
  ].join(" "),
  outline: [
    "bg-[linear-gradient(180deg,rgba(248,245,239,0.9)_0%,rgba(239,233,223,0.55)_100%)]",
    "text-ink ring-1 ring-ink/20",
    "shadow-[0_1px_2px_-1px_rgba(23,20,17,0.14),0_8px_20px_-16px_rgba(23,20,17,0.4)]",
    "hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(239,233,223,0.6)_100%)]",
    "hover:ring-gold/70",
    "hover:shadow-[0_1px_3px_-1px_rgba(23,20,17,0.16),0_16px_32px_-18px_rgba(23,20,17,0.45)]",
  ].join(" "),
  forest: [
    "bg-[linear-gradient(180deg,#2E5745_0%,#234233_45%,#16281F_100%)]",
    "text-paper ring-1 ring-forest-deep/60",
    "shadow-[0_1px_0_0_rgba(255,255,255,0.14)_inset,0_2px_6px_-2px_rgba(22,40,31,0.6),0_16px_34px_-14px_rgba(31,58,46,0.65)]",
    "hover:bg-[linear-gradient(180deg,#396855_0%,#2A4B3A_45%,#1B3126_100%)]",
    "hover:shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_4px_10px_-2px_rgba(22,40,31,0.6),0_26px_50px_-16px_rgba(31,58,46,0.7)]",
    "active:shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_1px_4px_-1px_rgba(22,40,31,0.55)]",
  ].join(" "),
};

export default function CTAButton({
  children,
  href = checkoutUrl,
  variant = "dark",
  size = "md",
  fullWidth = false,
  className = "",
  withArrow = true,
  withLock = false,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={[base, sizes[size], variants[variant], fullWidth ? "w-full" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {withLock ? <LockIcon /> : null}
      <span className="relative">{children}</span>
      {withArrow ? <ArrowIcon /> : null}
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="relative h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover/cta:translate-x-1"
    >
      <path
        d="M3.5 10h12m0 0-4.2-4.2M15.5 10l-4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="relative h-3.5 w-3.5 shrink-0"
    >
      <rect
        x="3"
        y="7"
        width="10"
        height="6.5"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M5.75 7V5.5a2.25 2.25 0 1 1 4.5 0V7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
