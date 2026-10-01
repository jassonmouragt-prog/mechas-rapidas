import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import { aboutStats } from "@/lib/site";

export default function AboutFer() {
  return (
    <section id="sobre" className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Imagem */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-gold/45 lg:-left-5 lg:-top-5 lg:h-24 lg:w-24"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
                <Parallax amount={18} className="absolute inset-x-0 -top-[5%] h-[110%]">
                  <Image
                    src="/images/fer-profile.jpg"
                    alt="Fer Gomes, cabeleireira especialista em descoloração, retrato em seu salão"
                    fill
                    sizes="(max-width: 1024px) 94vw, 40vw"
                    className="reveal-media object-cover object-center"
                  />
                </Parallax>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/25 to-transparent"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
                <span className="eyebrow text-[0.6rem] text-ink-soft">Fer Gomes • Americana/SP</span>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
                Sua professora
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="mt-7 max-w-[18ch] text-[2rem] leading-[1.1] text-ink sm:text-[2.6rem] lg:text-[3.15rem]">
                Sua professora não aprendeu isso apenas na teoria.
              </h2>
            </Reveal>

            <Reveal delay={110}>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <p className="font-display text-[1.6rem] leading-none text-ink sm:text-[2rem]">
                  Fer Gomes
                </p>
                <p className="text-[0.9rem] text-ink-soft">Especialista em descoloração e colorimetria.</p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-7 flex flex-col gap-5 border-t border-ink/12 pt-7">
                <p className="max-w-[58ch] text-[0.98rem] leading-[1.85] text-ink-soft sm:text-[1.03rem]">
                  Há mais de 15 anos trabalhando como cabeleireira e há mais de 10 anos à frente do
                  próprio salão em Americana/SP, Fer construiu sua experiência atendendo clientes
                  reais e aperfeiçoando constantemente suas técnicas.
                </p>
                <p className="max-w-[58ch] text-[0.98rem] leading-[1.85] text-ink-soft sm:text-[1.03rem]">
                  Ao longo dessa trajetória, desenvolveu uma visão prática sobre descoloração,
                  colorimetria, construção de mechas e acabamento — conhecimentos que agora são
                  apresentados de forma objetiva dentro do Mechas Rápidas.
                </p>
                <p className="max-w-[58ch] font-display text-[1.08rem] leading-[1.6] text-ink sm:text-[1.15rem]">
                  Seu método nasce da prática diária de salão, dos desafios encontrados em
                  atendimentos reais e da busca constante por resultados mais bonitos, previsíveis e
                  profissionais.
                </p>
              </div>
            </Reveal>

            <Reveal delay={190}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-ink/12 pt-8 lg:grid-cols-4">
                {aboutStats.map((stat) => (
                  <div key={stat.value + stat.label} className="flex flex-col gap-1.5">
                    <dt className="font-display text-[1.15rem] leading-[1.2] text-gold sm:text-[1.3rem]">
                      {stat.value}
                    </dt>
                    <dd className="text-[0.8rem] leading-[1.5] text-ink-soft">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}