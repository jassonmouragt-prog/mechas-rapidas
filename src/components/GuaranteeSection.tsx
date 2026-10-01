import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="bg-paper py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <Image
              src="/images/guarantee-7-days.webp"
              alt="Selo premium de 7 dias de garantia"
              width={640}
              height={640}
              sizes="(max-width: 639px) 240px, (max-width: 1023px) 280px, 320px"
              className="mx-auto h-auto w-[240px] max-w-full sm:w-[280px] lg:w-[320px]"
            />
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
                Garantia
              </p>
            </Reveal>

            <Reveal delay={110}>
              <h2 className="mt-7 max-w-[20ch] text-[1.9rem] leading-[1.14] text-ink sm:text-[2.5rem] lg:text-[2.95rem]">
                Você tem 7 dias para conhecer o treinamento.
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-7 max-w-[58ch] border-t border-ink/12 pt-7">
                <p className="text-[0.98rem] leading-[1.85] text-ink-soft sm:text-[1.03rem]">
                  Entre no treinamento, conheça o conteúdo e comece seus estudos. Caso decida que o
                  curso não faz sentido para você dentro do período de garantia, poderá solicitar o
                  reembolso conforme as condições da plataforma.
                </p>
                <p className="mt-5 text-[0.82rem] text-ink-soft">Compra processada pela Hotmart.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
