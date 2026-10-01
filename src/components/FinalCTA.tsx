import Image from "next/image";
import Container from "./Container";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";

const BENEFITS = ["Acesso imediato", "Compra segura", "7 dias de garantia"];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/background-blonde.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/95 via-ink/85 to-ink/60" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-start lg:max-w-[46rem] lg:items-start">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-champagne/85">
              <span aria-hidden="true" className="h-px w-8 bg-champagne/50" />
              Próximo passo
            </p>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="mt-7 max-w-[20ch] text-[2rem] leading-[1.12] text-paper sm:text-[2.6rem] lg:text-[3.15rem]">
              Seu próximo resultado pode começar com uma nova forma de executar a técnica.
            </h2>
          </Reveal>

          <Reveal delay={130}>
            <p className="mt-7 max-w-[52ch] text-[1rem] leading-[1.8] text-paper/75">
              Aprenda com Fer Gomes uma abordagem prática para construção de mechas, esfumado,
              tonalização e finalização.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10">
              <CTAButton variant="champagne" size="lg">
                Quero começar agora
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={230}>
            <ul className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.11em] text-paper/65"
                >
                  <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-champagne" />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}