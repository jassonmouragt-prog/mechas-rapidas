import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { painItems } from "@/lib/site";

export default function PainSection() {
  return (
    <section id="identificacao" className="bg-sand py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Identificação"
          title="Se você trabalha com loiros, provavelmente já viveu pelo menos uma dessas situações."
          description="Dominar a técnica não significa apenas saber descolorir. É conseguir repetir bons resultados com segurança, eficiência e controle."
        />

        <div className="mt-16 lg:mt-24">
          {painItems.map((item, index) => (
            <Reveal key={item.index} delay={index * 60}>
              <article className="group grid gap-4 border-t border-ink/12 py-8 transition-colors duration-500 hover:border-gold/60 sm:grid-cols-[auto_1fr] sm:gap-10 sm:py-10 lg:grid-cols-[7rem_minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
                <span
                  aria-hidden="true"
                  className="font-display text-[1.6rem] leading-none text-gold sm:text-[1.9rem] lg:text-[2.1rem]"
                >
                  {item.index}
                </span>

                <h3 className="max-w-[24ch] text-[1.25rem] leading-[1.28] text-ink sm:text-[1.4rem] lg:text-[1.55rem]">
                  {item.title}
                </h3>

                <p className="max-w-[52ch] text-[0.95rem] leading-[1.8] text-ink-soft lg:pt-1">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={80}>
            <div className="flex gap-5 border-t border-ink/12 pt-8 sm:gap-6 sm:pt-10 lg:pl-[calc(7rem+4rem)]">
              <span aria-hidden="true" className="mt-1 h-px w-10 shrink-0 bg-gold/70" />
              <p className="max-w-[46ch] font-display text-[1.15rem] leading-[1.5] text-ink sm:text-[1.3rem] lg:text-[1.45rem]">
                O Mechas Rápidas foi desenvolvido para transformar técnica em um processo mais
                claro, eficiente e replicável dentro do salão.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}