import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { studentResults, testimonials } from "@/lib/site";

export default function TestimonialsSection() {
  return (
    <section id="prova-social" className="bg-paper py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Quem aprende, aplica"
          title="Resultados que não precisam de uma promessa exagerada."
          description="Aqui entram depoimentos, mensagens e resultados reais de profissionais que aplicaram o conteúdo."
        />

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((item, index) => (
            <Reveal key={item.src} delay={index * 70}>
              <figure className="floating-card flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-cream/70 p-6 hover:border-gold/50 sm:p-7">
                  <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-sand">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="flex flex-col">
                    <span className="font-display text-[1.02rem] leading-tight text-ink">
                      {item.namePlaceholder}
                    </span>
                    <span className="mt-0.5 text-[0.76rem] text-ink-soft">{item.rolePlaceholder}</span>
                  </figcaption>
                </div>

                <blockquote className="mt-6 flex-1 font-display text-[1.02rem] leading-[1.65] text-ink-soft italic">
                  “{item.placeholder}”
                </blockquote>

                <p className="mt-6 border-t border-ink/10 pt-4 text-[0.68rem] uppercase tracking-[0.14em] text-gold/90">
                  Texto provisório
                </p>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60}>
          <div className="mt-16 lg:mt-24">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-gold/55" />
              <h3 className="eyebrow text-[0.62rem] text-ink-soft">Resultados de alunas</h3>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5">
              {studentResults.map((result, index) => (
                <Reveal key={result.src} delay={index * 70}>
                  <figure className="group relative aspect-[4/5] w-full overflow-hidden bg-sand">
                    <Image
                      src={result.src}
                      alt={result.alt}
                      fill
                      sizes="(max-width: 640px) 94vw, 31vw"
                      className="reveal-media object-cover"
                    />
                    <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.16em] text-champagne">
                      {result.label}
                    </span>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>

            <p className="mt-6 max-w-[60ch] text-[0.8rem] leading-[1.7] text-ink-soft">
              Área reservada para resultados reais de alunas. Substituir as imagens e os textos
              provisórios assim que os materiais forem enviados.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
