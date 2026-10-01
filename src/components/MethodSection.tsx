import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { methodItems } from "@/lib/site";

export default function MethodSection() {
  return (
    <section id="metodo" className="bg-paper py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="O método"
          title="Do planejamento ao acabamento do loiro."
          description="Um treinamento direto ao ponto para aperfeiçoar etapas decisivas no resultado das mechas."
        />

        <div className="mt-16 lg:mt-24">
          {methodItems.map((item, index) => {
            const reversed = index % 2 === 1;

            return (
              <Reveal key={item.index} delay={index * 60}>
                <article
                  className={[
                    "grid gap-8 border-t border-ink/10 py-12 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-16",
                    index === methodItems.length - 1 ? "border-b" : "",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "flex flex-col gap-5 lg:col-span-6 lg:px-2",
                      reversed ? "lg:order-2 lg:items-end lg:text-right" : "",
                    ].join(" ")}
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-[1.5rem] leading-none text-gold lg:text-[1.8rem]"
                    >
                      {item.index}
                    </span>
                    <h3
                      className={[
                        "max-w-[18ch] text-[1.5rem] leading-[1.18] text-ink sm:text-[1.85rem] lg:text-[2.15rem]",
                        reversed ? "lg:max-w-[16ch]" : "",
                      ].join(" ")}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={[
                        "max-w-[46ch] text-[0.97rem] leading-[1.8] text-ink-soft",
                        reversed ? "lg:ml-auto" : "",
                      ].join(" ")}
                    >
                      {item.description}
                    </p>
                    <span
                      aria-hidden="true"
                      className={[
                        "hidden h-px w-16 bg-gold/50 lg:block",
                        reversed ? "lg:ml-auto lg:mr-0" : "",
                      ].join(" ")}
                    />
                  </div>

                  {item.image ? (
                    <div
                      className={[
                        "relative aspect-[4/5] w-full overflow-hidden bg-sand lg:col-span-6 lg:max-h-[520px]",
                        reversed ? "lg:order-1" : "",
                      ].join(" ")}
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        fill
                        sizes="(max-width: 1024px) 94vw, 46vw"
                        className="reveal-media object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent"
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className={[
                        "hidden lg:col-span-6 lg:block",
                        reversed ? "lg:order-1" : "",
                      ].join(" ")}
                    >
                      <div className="relative ml-auto h-[280px] w-full max-w-[420px] border border-ink/10 bg-cream/60 lg:ml-0">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 font-display text-[5rem] leading-none text-gold/25 lg:text-[7rem]">
                          {item.index}
                        </span>
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 eyebrow text-[0.58rem] text-ink-soft/60">
                          Inserir imagem técnica
                        </span>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}