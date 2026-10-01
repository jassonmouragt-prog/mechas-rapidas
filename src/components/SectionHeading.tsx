import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  highlight?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  eyebrowClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  tone = "light",
  className = "",
  eyebrowClassName = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={[
        "flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      ].join(" ")}
    >
      {eyebrow ? (
        <Reveal>
          <p
            className={[
              "eyebrow flex items-center gap-3",
              isDark ? "text-champagne/85" : "text-gold",
              align === "center" ? "justify-center" : "",
              eyebrowClassName,
            ].join(" ")}
          >
            <span
              aria-hidden="true"
              className={[
                "h-px w-8 shrink-0",
                isDark ? "bg-champagne/50" : "bg-gold/50",
              ].join(" ")}
            />
            {eyebrow}
          </p>
        </Reveal>
      ) : null}

      <Reveal delay={60}>
        <h2
          className={[
            "max-w-[20ch] text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-[3.4rem]",
            isDark ? "text-paper" : "text-ink",
            align === "center" ? "max-w-[24ch] mx-auto" : "",
          ].join(" ")}
        >
          {title}
          {highlight ? (
            <>
              {" "}
              <span className={isDark ? "text-champagne italic" : "text-gold italic"}>
                {highlight}
              </span>
            </>
          ) : null}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={120}>
          <p
            className={[
              "max-w-[58ch] text-[0.98rem] leading-[1.75] sm:text-[1.05rem]",
              isDark ? "text-paper/70" : "text-ink-soft",
            ].join(" ")}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}