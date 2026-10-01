import Container from "./Container";
import Reveal from "./Reveal";
import { authorityItems } from "@/lib/site";

export default function AuthorityStrip() {
  const experience = authorityItems.slice(0, 2);
  const specialties = authorityItems.slice(2);

  return (
    <section aria-labelledby="authority-heading" className="bg-cream py-12 sm:py-16 lg:py-20">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] bg-ink text-paper shadow-[0_24px_60px_-36px_rgba(23,20,17,0.45)] sm:rounded-[2rem]">
            <div className="relative px-6 pt-8 pb-9 sm:px-10 sm:py-11 lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-x-16 lg:px-12 lg:py-12">
              <div className="lg:row-span-2">
              <span aria-hidden="true" className="mb-6 block h-px w-12 bg-champagne/60" />
              <h2 id="authority-heading" className="max-w-[20ch] font-[family-name:var(--font-playfair)] text-[1.9rem] leading-[1.18] sm:text-[2.4rem] lg:text-[2.6rem]">
                Experiência de salão.
                <span className="mt-2 block text-champagne italic">Conhecimento aplicado.</span>
              </h2>
              <p className="mt-6 text-sm font-medium text-paper/90">Fer Gomes</p>
              <p className="mt-2 text-xs tracking-[0.08em] text-paper/65">Americana / SP</p>
              </div>

              <dl className="mt-9 grid grid-cols-2 gap-6 sm:mt-10 sm:gap-10 lg:mt-0">
                {experience.map((item) => (
                  <div key={item.value} className="flex min-w-0 flex-col">
                    <dt className="order-2 mt-3 max-w-[20ch] text-[0.85rem] font-medium leading-[1.6] text-paper/90 sm:text-[0.95rem]">
                      {item.label}
                    </dt>
                    <dd className="order-1 font-[family-name:var(--font-playfair)] text-[3.4rem] leading-none tracking-[-0.035em] text-champagne sm:text-[4rem]">
                      <span className="mr-1 align-middle text-[0.55em] text-champagne/75">+</span>{item.value.slice(1)}
                    </dd>
                    <dd className="order-3 mt-2 text-xs leading-[1.6] text-paper/65 sm:text-[0.8rem]">{item.detail}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-8 space-y-5 border-t border-champagne/20 pt-7 sm:mt-9">
                {specialties.map((item) => (
                  <li key={item.value} className="flex items-start gap-3">
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-champagne">
                      <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-[0.9rem] font-medium leading-[1.5] text-paper">{item.value} {item.label}</p>
                      <p className="mt-1 text-[0.8rem] leading-[1.6] text-paper/65">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
