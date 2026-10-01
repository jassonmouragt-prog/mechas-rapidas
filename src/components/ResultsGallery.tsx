import Image from "next/image";
import Container from "./Container";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Parallax from "./Parallax";
import { results } from "@/lib/site";

type FrameProps = {
  src: string;
  alt: string;
  label: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  parallaxAmount?: number;
};

function Frame({
  src,
  alt,
  label,
  sizes,
  className = "",
  priority = false,
  parallaxAmount,
}: FrameProps) {
  const media = (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className="reveal-media object-cover"
    />
  );

  return (
    <figure className={`reveal-media-wrap group relative h-full w-full overflow-hidden bg-sand ${className}`}>
      {parallaxAmount ? (
        <Parallax amount={parallaxAmount} className="absolute inset-x-0 -top-[5%] h-[110%]">
          {media}
        </Parallax>
      ) : (
        media
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <figcaption className="absolute left-4 bottom-4 flex items-center gap-2 sm:left-5 sm:bottom-5">
        <span aria-hidden="true" className="h-px w-5 bg-champagne/80" />
        <span className="eyebrow text-[0.56rem] text-champagne sm:text-[0.6rem]">{label}</span>
      </figcaption>
    </figure>
  );
}

export default function ResultsGallery() {
  const [first, second, third, fourth] = results;

  return (
    <section id="resultados" className="bg-cream py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="O resultado fala"
          title="Não é apenas sobre fazer mechas mais rápido."
          highlight="É sobre entregar um resultado que valoriza o seu nome."
        />

        <div className="mt-14 grid gap-4 sm:gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-7">
            <Frame
              src={first.src}
              alt={first.alt}
              label={first.label}
              sizes="(max-width: 640px) 94vw, (max-width: 1024px) 94vw, 58vw"
              className="aspect-[6/5] sm:aspect-[7/5] lg:aspect-auto lg:h-full"
              parallaxAmount={18}
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-5 lg:gap-6">
            <Reveal delay={80}>
              <Frame
                src={second.src}
                alt={second.alt}
                label={second.label}
                sizes="(max-width: 640px) 94vw, (max-width: 1024px) 47vw, 22vw"
                className="aspect-[4/5]"
                parallaxAmount={16}
              />
            </Reveal>
            <Reveal delay={140}>
              <Frame
                src={third.src}
                alt={third.alt}
                label={third.label}
                sizes="(max-width: 640px) 94vw, (max-width: 1024px) 47vw, 22vw"
                className="aspect-[4/5]"
                parallaxAmount={16}
              />
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-12">
            <Frame
              src={fourth.src}
              alt={fourth.alt}
              label={fourth.label}
              sizes="(max-width: 1024px) 94vw, 96vw"
              className="aspect-[16/9] sm:aspect-[21/9]"
              parallaxAmount={14}
            />
          </Reveal>
        </div>

        <Reveal delay={60}>
          <p className="mt-6 max-w-[60ch] text-[0.8rem] leading-[1.7] text-ink-soft">
            Imagens ilustrativas de estrutura. Substituir pelos registros reais de antes e depois,
            com autorização das clientes.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex justify-center lg:mt-12">
            <CTAButton size="lg">Quero aprender essa técnica</CTAButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}