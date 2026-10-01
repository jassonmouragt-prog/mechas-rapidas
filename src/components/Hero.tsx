import Image from "next/image";
import Container from "./Container";
import CTAButton from "./CTAButton";
import BrandLogo from "./BrandLogo";
import Reveal from "./Reveal";
import { assets } from "@/lib/site";

const BENEFITS = ["Acesso imediato", "Curso 100% online", "7 dias de garantia"];

export default function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-cream">
      {/* Banner mobile: assunto no centro, faixa clara na base para as informações */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand lg:hidden">
        <Image
          src={assets.heroMobile}
          alt="Fer Gomes no banner do treinamento Mechas Rápidas"
          fill
          priority
          sizes="100vw"
          className="hero-banner object-cover object-top"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(to_top,#F8F5EF_0%,rgba(248,245,239,0.88)_20%,rgba(248,245,239,0.4)_55%,transparent_100%)]"
        />
      </div>

      {/* Banner desktop: banner ocupa toda a área, assunto à direita, informações à esquerda */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      >
        <Image
          src={assets.heroDesktop}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-banner object-cover object-right"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,20,17,0.55)_0%,rgba(23,20,17,0.35)_34%,rgba(23,20,17,0.08)_58%,transparent_75%)]" />
      </div>

      <Container className="relative pt-12 pb-16 sm:pt-14 lg:flex lg:min-h-[min(86vh,860px)] lg:items-center lg:py-24 xl:min-h-[min(82vh,820px)]">
        <div className="flex flex-col items-center text-center lg:max-w-[37rem] lg:items-start lg:text-left">
          {/* Logo transparente sobre o fundo de cada versão do hero */}
          <Reveal>
            <div className="lg:hidden">
              <BrandLogo width={148} />
            </div>
            <div className="hidden lg:block">
              <BrandLogo width={186} />
            </div>
          </Reveal>

          <Reveal delay={70}>
            <p className="eyebrow mt-9 flex items-center gap-3 text-gold lg:mt-10 lg:text-champagne">
              <span aria-hidden="true" className="h-px w-7 bg-gold/55 lg:bg-champagne/60" />
              <span className="max-w-[24ch]">Treinamento online • Mechas Rápidas</span>
              <span
                aria-hidden="true"
                className="hidden h-px w-7 bg-gold/55 lg:block lg:bg-champagne/60"
              />
            </p>
          </Reveal>

          <Reveal delay={130}>
            <h1 className="mt-7 max-w-[16ch] text-[2.2rem] leading-[1.06] text-ink sm:text-[2.9rem] lg:text-[3.4rem] lg:text-paper lg:leading-[1.08] xl:text-[3.75rem]">
              Domine mechas mais rápidas e entregue{" "}
              <span className="text-gold italic lg:text-champagne">
                loiros que valorizam o seu trabalho.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={190}>
            <p className="mt-7 max-w-[52ch] text-[0.98rem] leading-[1.8] text-ink-soft sm:text-[1.05rem] lg:text-paper/80">
              Aprenda com Fer Gomes a construção das mechas, esfumado de raiz, tonalização e
              finalização para alcançar resultados mais bonitos, precisos e profissionais —
              otimizando o tempo de atendimento no salão.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 w-full sm:w-auto lg:mt-10">
              <CTAButton variant="champagne" size="lg" fullWidth className="sm:w-auto">
                Quero dominar as mechas rápidas
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={290}>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.11em] text-ink-soft lg:text-paper/75"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rotate-45 bg-gold lg:bg-champagne"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={330}>
            <div className="mt-9 flex items-center gap-4 border-t border-ink/12 pt-6 lg:border-paper/20">
              <span aria-hidden="true" className="w-px self-stretch bg-gold/60 lg:bg-champagne/70" />
              <p className="max-w-[34ch] text-[0.85rem] leading-[1.65] text-ink-soft italic lg:text-paper/75">
                Método desenvolvido a partir de mais de 15 anos de experiência profissional.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
