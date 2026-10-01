import Container from "./Container";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { targetItems } from "@/lib/site";

export default function TargetAudience() {
  return (
    <section id="para-quem" className="bg-sand py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Para quem é"
              title="O Mechas Rápidas é para você que..."
            />

            <Reveal delay={140}>
              <div className="mt-10 border-l border-gold/50 pl-6 lg:mt-12">
                <p className="font-display text-[1.35rem] leading-[1.32] text-ink sm:text-[1.6rem]">
                  Você não precisa descobrir tudo sozinha.
                </p>
                <p className="mt-4 max-w-[38ch] text-[0.95rem] leading-[1.8] text-ink-soft">
                  Aprenda com uma profissional que vive essa rotina de salão há mais de 15 anos.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9">
                <CTAButton size="lg">Quero acessar o treinamento</CTAButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-ink/12">
              {targetItems.map((item, index) => (
                <Reveal key={item} delay={index * 55}>
                  <li className="flex items-start gap-4 border-b border-ink/12 py-5 transition-colors duration-500 hover:border-gold/55 sm:gap-5 sm:py-6">
                    <CheckIcon />
                    <span className="max-w-[52ch] text-[0.98rem] leading-[1.65] text-ink sm:text-[1.06rem]">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/45 text-gold"
    >
      <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
        <path
          d="M3.5 8.5 6.5 11.5 12.5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}