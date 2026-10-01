import Container from "./Container";
import CTAButton from "./CTAButton";
import BrandLogo from "./BrandLogo";
import Reveal from "./Reveal";
import { offer, offerItems } from "@/lib/site";

export default function OfferSection() {
  return (
    <section id="oferta" className="bg-cream py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/12 bg-paper shadow-[0_40px_90px_-60px_rgba(23,20,17,0.5)] sm:rounded-[2.5rem]">
            {/* Faixa da marca com a logo */}
            <div className="relative flex items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#221D19_0%,#171411_100%)] px-6 py-7 sm:px-12 sm:py-8">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 -top-28 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(216,195,155,0.16),transparent_65%)]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-champagne/10"
              />
              <BrandLogo width={172} className="relative" />
            </div>

            <div className="px-6 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
              <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Conteúdo do treinamento */}
                <div className="lg:col-span-6">
                  <Reveal>
                    <h2 className="eyebrow flex items-center gap-3 text-gold">
                      <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
                      Seu acesso ao método
                    </h2>
                  </Reveal>

                  <Reveal delay={60}>
                    <div className="mt-7 border-t border-ink/12 pt-7">
                      <p className="eyebrow text-[0.62rem] text-ink-soft">Você terá acesso a:</p>
                      <ul className="mt-6 space-y-3.5">
                        {offerItems.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-[0.95rem] leading-[1.6] text-ink"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 16 16"
                              fill="none"
                              className="mt-1 h-3.5 w-3.5 shrink-0 text-gold"
                            >
                              <path
                                d="M3.5 8.5 6.5 11.5 12.5 5"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>

                {/* Investimento */}
                <div className="lg:col-span-6">
                  <Reveal delay={100}>
                    <div className="floating-card flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream/85 ring-1 ring-ink/10 lg:rounded-[2rem]">
                      <div className="relative overflow-hidden rounded-t-[1.75rem] bg-[linear-gradient(155deg,#F3EDE2_0%,#E6DBC8_45%,#DCCDB2_100%)] px-6 py-8 text-center sm:px-9 sm:py-10 lg:rounded-t-[2rem]">
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:radial-gradient(circle_at_18%_22%,rgba(184,155,98,0.28),transparent_42%),radial-gradient(circle_at_82%_78%,rgba(216,195,155,0.55),transparent_46%),radial-gradient(circle_at_60%_10%,rgba(255,255,255,0.5),transparent_38%)]"
                        />
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 rounded-t-[1.75rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-18px_34px_-24px_rgba(23,20,17,0.35)] lg:rounded-t-[2rem]"
                        />

                        <div className="relative">
                          <p className="eyebrow flex items-center justify-center gap-3 text-ink/55">
                            <span aria-hidden="true" className="h-px w-7 bg-gold/60" />
                            Investimento
                            <span aria-hidden="true" className="h-px w-7 bg-gold/60" />
                          </p>

                          <p className="mt-5 font-display font-semibold text-[3.4rem] leading-[0.92] text-ink drop-shadow-[0_2px_10px_rgba(184,155,98,0.35)] sm:text-[4.2rem] lg:text-[4.6rem]">
                            {offer.price}
                          </p>

                          <p className="mt-4 text-[0.8rem] text-ink/65">
                            Pagamento único • acesso ao treinamento online.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col gap-7 px-6 py-7 sm:px-9 sm:py-8">
                        <div>
                          <p className="text-[0.76rem] uppercase tracking-[0.13em] text-ink-soft">
                            Formas de pagamento
                          </p>
                          <div className="mt-3.5 flex flex-wrap items-center gap-2">
                            {["Pix", "Cartão de crédito", "Boleto"].map((method) => (
                              <span
                                key={method}
                                className="rounded-full border border-ink/12 bg-paper/70 px-3.5 py-1.5 text-[0.74rem] text-ink-soft"
                              >
                                {method}
                              </span>
                            ))}
                          </div>
                          <p className="mt-3 text-[0.72rem] leading-[1.6] text-ink-soft/80">
                            Placeholder: confirmar as opções disponíveis na plataforma de checkout.
                          </p>
                        </div>

                        <div className="mt-auto">
                          <CTAButton variant="forest" size="lg" fullWidth withLock>
                            Quero garantir meu acesso
                          </CTAButton>
                          <p className="mt-4 flex items-center justify-center gap-2 text-center text-[0.76rem] text-ink-soft">
                            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-forest/50" />
                            Pagamento processado com segurança pela {offer.platform}.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
