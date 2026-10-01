import Image from "next/image";
import Container from "./Container";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";

const PILLARS = [
  "Mais segurança na execução.",
  "Mais domínio sobre o resultado.",
  "Mais agilidade no atendimento.",
  "Mais confiança para valorizar o seu trabalho.",
];

export default function TransformationSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/background-blonde.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
      </div>

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-champagne/85">
                <span aria-hidden="true" className="h-px w-8 bg-champagne/50" />
                Mais domínio. Mais segurança.
              </p>
            </Reveal>

            <Reveal delay={70}>
              <h2 className="mt-7 max-w-[20ch] text-[1.95rem] leading-[1.14] text-paper sm:text-[2.6rem] lg:text-[3.1rem]">
                Imagine terminar um atendimento, olhar o resultado e pensar:
              </h2>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-8 max-w-[17ch] font-display text-[2.1rem] leading-[1.18] text-champagne italic sm:text-[2.9rem] lg:text-[3.5rem] lg:leading-[1.12]">
                “Era exatamente assim que eu queria que ficasse.”
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5 lg:items-end lg:pb-2">
            <Reveal delay={180}>
              <ul className="w-full space-y-0 lg:max-w-[26rem]">
                {PILLARS.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-center gap-4 border-t border-paper/15 py-4 text-[0.95rem] leading-[1.5] text-paper/85 last:border-b"
                  >
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-champagne" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10">
                <CTAButton variant="champagne" size="lg">
                  Quero aprender com a Fer
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}