"use client";

import { useId, useState } from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import { faqItems } from "@/lib/site";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
                Perguntas frequentes
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-7 max-w-[14ch] text-[1.9rem] leading-[1.14] text-ink sm:text-[2.4rem] lg:text-[2.8rem]">
                Antes de começar.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-ink/12">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const buttonId = `${baseId}-faq-${index}`;
                const panelId = `${baseId}-panel-${index}`;

                return (
                  <li key={item.question} className="border-b border-ink/12">
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-300 hover:text-gold sm:py-6"
                      >
                        <span className="max-w-[46ch] text-[1rem] leading-[1.5] text-ink sm:text-[1.08rem]">
                          {item.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className={[
                            "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                            isOpen
                              ? "rotate-45 border-gold bg-gold text-paper"
                              : "border-ink/20 text-ink-soft",
                          ].join(" ")}
                        >
                          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                            <path
                              d="M8 3.5v9M3.5 8h9"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="pb-6 pr-12"
                    >
                      <p className="max-w-[62ch] text-[0.95rem] leading-[1.85] text-ink-soft">
                        {item.answer}
                      </p>
                      {item.pending ? (
                        <p className="mt-4 inline-flex rounded-full border border-gold/45 px-3.5 py-1.5 text-[0.66rem] uppercase tracking-[0.14em] text-gold">
                          Resposta pendente de confirmação da Fer
                        </p>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}