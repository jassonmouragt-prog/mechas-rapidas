import Container from "./Container";
import BrandLogo from "./BrandLogo";
import { offer } from "@/lib/site";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-ink py-14 lg:py-18">
      <Container>
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <BrandLogo width={168} />
            <p className="max-w-[26ch] text-[0.85rem] leading-[1.7] text-paper/60">
              {offer.name} • Treinamento online com Fer Gomes.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 lg:items-end lg:text-right">
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.72rem] uppercase tracking-[0.16em] text-paper/60">
              <a href="#" className="transition-colors hover:text-champagne">
                Termos de Uso
              </a>
              <a href="#" className="transition-colors hover:text-champagne">
                Política de Privacidade
              </a>
              <a href="#" className="transition-colors hover:text-champagne">
                Contato
              </a>
            </nav>

            <div className="flex flex-col items-center gap-3 lg:items-end">
              <p className="text-[0.68rem] text-paper/55">
                © {YEAR} Mechas Rápidas. Todos os direitos reservados.
              </p>
              <p className="text-[0.64rem] text-paper/40">
                Este site não é afiliado ao Facebook, Instagram ou Meta.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/10 pt-8">
          <p className="text-center text-[0.62rem] leading-[1.7] text-paper/30">
            Atualizar URLs legais e canal de contato assim que forem definidos pela Fer Gomes.
          </p>
        </div>
      </Container>
    </footer>
  );
}