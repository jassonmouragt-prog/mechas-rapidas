import Container from "./Container";
import CTAButton from "./CTAButton";
import BrandLogo from "./BrandLogo";

const HEADER_BG = "bg-cream/88 backdrop-blur-[10px]";

export default function Header() {
  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink/[0.07] ${HEADER_BG} supports-[backdrop-filter]:bg-cream/75`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4 py-4 lg:py-5">
          <a
            href="#topo"
            aria-label="Mechas Rápidas — início da página"
            className="shrink-0"
          >
            <BrandLogo width={152} className="!w-[112px] sm:!w-[152px]" />
          </a>

          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="#metodo"
              className="hidden text-[0.72rem] uppercase tracking-[0.16em] text-ink-soft transition-colors duration-300 hover:text-ink md:inline-flex"
            >
              Conheça o treinamento
            </a>
            <CTAButton href="#oferta" size="sm" withArrow={false} className="sm:px-6 sm:py-3">
              Quero começar
            </CTAButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
