import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/tendencias")({
  head: () => ({
    meta: [
      { title: "Tendências e Certificações — IA & Dev Web" },
      { name: "description", content: "Mercado, certificações valorizadas, tecnologias emergentes e oportunidades em IA aplicada ao Desenvolvimento Web." },
      { property: "og:title", content: "Tendências, Certificações e Mercado" },
      { property: "og:description", content: "Onde a área está indo e como se preparar." },
    ],
  }),
  component: TendenciasPage,
});

const certs = [
  { provider: "Google", items: ["Google AI Essentials", "TensorFlow Developer Certificate"] },
  { provider: "Microsoft", items: ["Azure AI Engineer Associate"] },
  { provider: "Amazon AWS", items: ["AWS Certified Machine Learning"] },
  { provider: "IBM", items: ["IBM AI Engineering Professional Certificate"] },
  { provider: "Meta", items: ["Meta Front-End Developer"] },
];

const companies = {
  Internacionais: ["Google", "Microsoft", "Amazon", "Meta", "OpenAI", "IBM", "Netflix", "Spotify"],
  Brasileiras: ["Nubank", "iFood", "Mercado Livre", "Magazine Luiza", "Globo", "TOTVS", "Stone", "VTEX"],
};

const trends = [
  { t: "IA Generativa", d: "Modelos como LLMs criando texto, imagem, áudio e código sob demanda." },
  { t: "Agentes Autônomos", d: "Sistemas que executam tarefas complexas com pouca supervisão humana." },
  { t: "Edge AI", d: "Inferência rodando direto no navegador e em dispositivos do usuário." },
  { t: "RAG & Buscas Inteligentes", d: "IA combinada com bases de conhecimento para respostas confiáveis." },
  { t: "Personalização em Tempo Real", d: "Conteúdo, preço e UX adaptados a cada visita." },
  { t: "AI-First UX", d: "Interfaces conversacionais substituindo formulários e menus tradicionais." },
];

const opportunities = [
  "Mercado em crescimento acelerado",
  "Trabalho remoto e oportunidades globais",
  "Salários entre os mais altos da tecnologia",
  "Espaço para inovação e empreendedorismo",
  "Possibilidade de criar startups e produtos próprios",
];

function TendenciasPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <span className="text-sm font-medium uppercase tracking-widest text-primary">Mercado & Futuro</span>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">
        Dicas e <span className="text-gradient">tendências</span>
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        A área de IA aplicada à Web cresce em ritmo acelerado, impulsionada pela
        transformação digital, automação, e-commerce, IA generativa e
        personalização de serviços. Veja onde investir seu aprendizado.
      </p>

      {/* Tendências */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">Tecnologias emergentes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trends.map((tr) => (
            <div
              key={tr.t}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-accent/20 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="relative font-display text-lg font-semibold">{tr.t}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{tr.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificações */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">Certificações valorizadas</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <div key={c.provider} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm uppercase tracking-widest text-primary">{c.provider}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Empresas */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">Quem contrata</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {Object.entries(companies).map(([cat, list]) => (
            <div key={cat} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-lg font-semibold text-primary">{cat}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {list.map((co) => (
                  <span
                    key={co}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm"
                  >
                    {co}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Oportunidades */}
      <section className="mt-16 rounded-3xl border border-border bg-card p-10">
        <h2 className="text-2xl font-bold md:text-3xl">Oportunidades da carreira</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {opportunities.map((o) => (
            <li key={o} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
              <span className="text-muted-foreground">{o}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
