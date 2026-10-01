/**
 * Configuração central da landing page.
 *
 * TROCAR O CHECKOUT: altere apenas a constante `checkoutUrl` abaixo.
 * Todos os CTAs da página apontam para ela.
 */
export const checkoutUrl = "#";

/** URL da oferta usada nos CTAs. Troque "#" pelo link real da Hotmart. */
export const offer = {
  name: "Mechas Rápidas",
  price: "R$ 19,90",
  priceNote: "pagamento único",
  guarantee: "7 dias",
  platform: "Hotmart",
} as const;

/**
 * Assets de marca e banners.
 * Os banners e a logo são claros (branco/champagne) e por isso dependem
 * de fundos escuros para ler bem.
 */
export const assets = {
  logo: "/images/logo-product.png",
  logoWidth: 1701,
  logoHeight: 738,
  heroDesktop: "/images/banner-hero-desktop.jpg",
  heroMobile: "/images/banner-hero-mobile.jpg",
} as const;

export type AuthorityItem = {
  value: string;
  label: string;
  detail: string;
};

export const authorityItems: AuthorityItem[] = [
  {
    value: "+15",
    label: "Anos de experiência",
    detail: "Prática contínua em salão",
  },
  {
    value: "+10",
    label: "Anos à frente do próprio salão",
    detail: "Em Americana/SP",
  },
  {
    value: "Especialista",
    label: "em descoloração",
    detail: "Leitura de fio e planejamento",
  },
  {
    value: "Colorimetria",
    label: "aplicada à prática",
    detail: "Decisões ligadas ao resultado",
  },
];

export type PainItem = {
  index: string;
  title: string;
  description: string;
};

export const painItems: PainItem[] = [
  {
    index: "01",
    title: "O atendimento demora mais do que deveria.",
    description:
      "Você sabe executar as mechas, mas sente que poderia trabalhar com mais agilidade e organização durante o atendimento.",
  },
  {
    index: "02",
    title: "O resultado nem sempre fica como você imaginou.",
    description:
      "Distribuição, tonalização ou esfumado podem comprometer o acabamento quando o processo não está claro.",
  },
  {
    index: "03",
    title: "Existe insegurança durante a descoloração.",
    description:
      "O medo de comprometer a fibra pode fazer você trabalhar com excesso de cautela ou sem previsibilidade.",
  },
  {
    index: "04",
    title: "Você quer valorizar mais o seu trabalho.",
    description:
      "Mas aumentar o preço sem aumentar a percepção de resultado não resolve o problema.",
  },
];

export type ResultImage = {
  src: string;
  alt: string;
  label: string;
};

export const results: ResultImage[] = [
  {
    src: "/images/result-01.jpg",
    alt: "Resultado real de mechas loiras após processo de descoloração e finalização",
    label: "Resultado real",
  },
  {
    src: "/images/result-02.jpg",
    alt: "Detalhe da técnica de mechas aplicada em cabelo loiro",
    label: "Técnica aplicada",
  },
  {
    src: "/images/result-03.jpg",
    alt: "Acabamento de mechas loiras com tonalização final",
    label: "Antes / depois",
  },
  {
    src: "/images/result-04.jpg",
    alt: "Composição horizontal de resultado de mechas loiras",
    label: "Resultado real",
  },
];

export type MethodItem = {
  index: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const methodItems: MethodItem[] = [
  {
    index: "01",
    title: "Construção das mechas",
    description:
      "Aprenda como estruturar e distribuir as mechas buscando equilíbrio, iluminação e um resultado profissional.",
    image: "/images/technique-01.jpg",
    imageAlt: "Foto técnica da construção das mechas",
  },
  {
    index: "02",
    title: "Esfumado de raiz",
    description:
      "Entenda como construir uma transição mais suave e sofisticada, reduzindo marcações indesejadas.",
    image: "/images/technique-02.jpg",
    imageAlt: "Foto técnica do esfumado de raiz",
  },
  {
    index: "03",
    title: "Tonalização",
    description:
      "Aprenda os fundamentos utilizados para conduzir o tom e chegar ao resultado desejado com mais precisão.",
  },
  {
    index: "04",
    title: "Finalização",
    description:
      "Veja como a finalização pode valorizar ainda mais a técnica e transformar a percepção da cliente sobre o resultado.",
  },
];

export type Testimonial = {
  src: string;
  alt: string;
  /** Texto provisório: substituir pelo depoimento real da aluna. */
  placeholder: string;
  namePlaceholder: string;
  rolePlaceholder: string;
};

export const testimonials: Testimonial[] = [
  {
    src: "/images/testimonial-01.jpg",
    alt: "Retrato da aluna 01 — foto provisória",
    placeholder: "Adicionar aqui depoimento real da aluna.",
    namePlaceholder: "Nome da aluna",
    rolePlaceholder: "Cabeleireira • Cidade/UF",
  },
  {
    src: "/images/testimonial-02.jpg",
    alt: "Retrato da aluna 02 — foto provisória",
    placeholder: "Adicionar aqui depoimento real da aluna.",
    namePlaceholder: "Nome da aluna",
    rolePlaceholder: "Cabeleireira • Cidade/UF",
  },
  {
    src: "/images/testimonial-03.jpg",
    alt: "Retrato da aluna 03 — foto provisória",
    placeholder: "Adicionar aqui depoimento real da aluna.",
    namePlaceholder: "Nome da aluna",
    rolePlaceholder: "Cabeleireira • Cidade/UF",
  },
];

export const studentResults: ResultImage[] = [
  {
    src: "/images/student-result-01.jpg",
    alt: "Resultado de mechas loiras produzido por aluna — foto provisória",
    label: "Resultado de aluna",
  },
  {
    src: "/images/student-result-02.jpg",
    alt: "Resultado de mechas loiras produzido por aluna — foto provisória",
    label: "Resultado de aluna",
  },
  {
    src: "/images/student-result-03.jpg",
    alt: "Resultado de mechas loiras produzido por aluna — foto provisória",
    label: "Resultado de aluna",
  },
];

export const targetItems: string[] = [
  "Já trabalha como cabeleireira e deseja aperfeiçoar seus loiros.",
  "Quer desenvolver mais segurança na execução das mechas.",
  "Deseja melhorar esfumado, tonalização e acabamento.",
  "Quer otimizar o tempo dos atendimentos.",
  "Busca entregar resultados mais consistentes às clientes.",
  "Quer elevar a percepção de valor do próprio trabalho.",
];

export const offerItems: string[] = [
  "Construção das mechas",
  "Esfumado de raiz",
  "Tonalização",
  "Finalização",
  "Conteúdo online",
  "Acesso imediato após a confirmação da compra",
];

export const aboutStats: { value: string; label: string }[] = [
  { value: "+15 anos", label: "de experiência" },
  { value: "+10 anos", label: "de salão próprio" },
  { value: "Especialista", label: "em descoloração" },
  { value: "Experiência", label: "em colorimetria" },
];

export type FaqItem = {
  question: string;
  answer: string;
  /** true quando a resposta ainda depende de confirmação da Fer. */
  pending?: boolean;
};

export const faqItems: FaqItem[] = [
  {
    question: "O Mechas Rápidas é online?",
    answer:
      "Sim. O treinamento é disponibilizado online e pode ser acessado após a confirmação da compra.",
  },
  {
    question: "Preciso já trabalhar como cabeleireira?",
    answer:
      "O conteúdo é direcionado principalmente a profissionais que desejam aperfeiçoar sua execução de mechas e resultados com loiros.",
  },
  {
    question: "O que vou aprender?",
    answer:
      "O treinamento aborda construção das mechas, esfumado de raiz, tonalização e finalização.",
  },
  {
    question: "Recebo acesso imediatamente?",
    answer:
      "Após a confirmação do pagamento, o acesso é liberado pela plataforma responsável pela entrega do treinamento.",
  },
  {
    question: "Posso assistir pelo celular?",
    answer:
      "O treinamento é disponibilizado em plataforma online compatível com dispositivos modernos.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Sim. A oferta possui período de garantia de 7 dias conforme as condições da plataforma.",
  },
  {
    question: "Quanto tempo terei acesso ao curso?",
    answer:
      "Adicionar aqui a informação confirmada pela Fer sobre o período de acesso.",
    pending: true,
  },
  {
    question: "O curso oferece certificado?",
    answer:
      "Adicionar aqui a informação confirmada pela Fer sobre certificado.",
    pending: true,
  },
];