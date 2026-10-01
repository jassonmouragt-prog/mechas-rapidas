# Mechas Rápidas — Fer Gomes

Landing page do treinamento online Mechas Rápidas, desenvolvida com Next.js (App Router), TypeScript e Tailwind CSS.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Abra http://localhost:3000.

## Validação

Execute sequencialmente:

```bash
npm run typecheck
npm run lint
npm run build
```

## Conteúdo e imagens

- `src/lib/site.ts`: checkout, oferta, textos e informações pendentes.
- `public/images/`: imagens utilizadas na página.
- `src/components/`: componentes e seções da landing page.

O link de compra é centralizado em `checkoutUrl`, atualmente `"#"`. Depoimentos, resultados, período de acesso, certificado, formas de pagamento e links legais ainda possuem informações provisórias que devem ser confirmadas antes da divulgação comercial.

## Publicação

A Vercel utiliza o repositório GitHub para publicar a branch `main` em produção e gerar previews das demais branches.

A URL de SEO usa `NEXT_PUBLIC_SITE_URL`, quando definida, ou o domínio de produção informado pela Vercel. Para configurar um domínio próprio, defina `NEXT_PUBLIC_SITE_URL` com a URL completa (ex.: `https://seu-dominio.com.br`) e publique novamente.
