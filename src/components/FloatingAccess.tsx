"use client";

import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";
import { offer } from "@/lib/site";

export default function FloatingAccess() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    const offerSection = document.getElementById("oferta");
    const footer = document.querySelector("footer");
    if (!hero || !offerSection || !footer || !("IntersectionObserver" in window)) return;

    const update = () => {
      const heroPassed = hero.getBoundingClientRect().bottom <= 0;
      const offerRect = offerSection.getBoundingClientRect();
      const offerVisible = offerRect.top < window.innerHeight && offerRect.bottom > 0;
      const footerVisible = footer.getBoundingClientRect().top < window.innerHeight;
      setVisible(heroPassed && !offerVisible && !footerVisible);
    };

    const observer = new IntersectionObserver(update, { threshold: 0 });
    [hero, offerSection, footer].forEach((element) => observer.observe(element));
    update();
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-label="Acesso rápido ao treinamento"
      aria-hidden={!visible}
      inert={!visible}
      data-visible={visible}
      className="floating-access pointer-events-none fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <div className="pointer-events-auto flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-3 shadow-[0_12px_40px_-12px_rgba(23,20,17,0.25)]">
        <div className="hidden pl-2 sm:block">
          <p className="text-xs text-ink-soft">Mechas Rápidas</p>
          <p className="mt-1 text-lg font-semibold text-ink">{offer.price}</p>
        </div>
        <CTAButton variant="forest" className="w-full sm:w-auto">
          Quero meu acesso
        </CTAButton>
      </div>
    </aside>
  );
}
