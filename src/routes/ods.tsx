import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ods")({
  head: () => ({
    meta: [
      { title: "Contribuição para o ODS 9 — IA & Dev Web" },
      { name: "description", content: "Como a IA aplicada ao desenvolvimento web contribui para o Objetivo de Desenvolvimento Sustentável 9: indústria, inovação e infraestrutura." },
      { property: "og:title", content: "IA, Desenvolvimento Web e o ODS 9" },
      { property: "og:description", content: "Inovação digital sustentável para uma sociedade conectada." },
    ],
  }),
  component: OdsPage,
});

const contributions = [
  { title: "Automação de processos", desc: "Sistemas inteligentes tornam empresas mais produtivas e eficientes.", ex: "Chatbots automatizam atendimento ao cliente 24 horas por dia." },
  { title: "Inclusão digital", desc: "Aplicações inteligentes facilitam o acesso à informação e a serviços.", ex: "Sites com IA fazem leitura automática para pessoas com deficiência visual." },
  { title: "Segurança tecnológica", desc: "A IA ajuda a detectar fraudes e ataques cibernéticos.", ex: "Bancos identificam transações suspeitas em tempo real." },
  { title: "Desenvolvimento econômico", desc: "A inovação digital gera empregos e fortalece empresas tecnológicas.", ex: "Startups de IA movimentam a economia digital brasileira." },
  { title: "Infraestrutura inteligente", desc: "A IA melhora sistemas urbanos e industriais.", ex: "Cidades inteligentes usam IA para controle de trânsito e monitoramento." },
];

const examples = [
  { co: "Google", text: "IA para buscas, acessibilidade e tradução automática." },
  { co: "Netflix", text: "Algoritmos inteligentes para personalização de conteúdo." },
  { co: "Nubank", text: "IA na análise de crédito e segurança financeira." },
  { co: "iFood", text: "Otimização de entregas e atendimento automatizado." },
  { co: "Amazon", text: "IA em logística, recomendações e automação." },
];

function OdsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-center gap-4">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FD6925] font-display text-2xl font-bold text-white">9</span>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Objetivo de Desenvolvimento Sustentável</p>
          <h1 className="text-3xl font-bold md:text-4xl">Indústria, Inovação e Infraestrutura</h1>
        </div>
      </div>

      <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
        O ODS 9 da ONU busca promover inovação, industrialização sustentável,
        infraestrutura resiliente e avanço tecnológico. A IA aplicada ao
        desenvolvimento web contribui diretamente para esses objetivos.
      </p>

      <section className="mt-16 space-y-5">
        {contributions.map((c, i) => (
          <article key={c.title} className="grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-[auto_1fr] md:p-8">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-hero)] font-display text-lg font-bold text-primary-foreground">{i + 1}</div>
            <div>
              <h3 className="font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.desc}</p>
              <p className="mt-3 rounded-lg border-l-2 border-primary bg-secondary/40 px-4 py-2 text-sm">
                <span className="font-medium text-primary">Exemplo:</span> {c.ex}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">Exemplos reais</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((e) => (
            <div key={e.co} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-lg font-semibold text-gradient">{e.co}</p>
              <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-border bg-card p-10">
        <h2 className="text-2xl font-bold md:text-3xl">Impactos positivos</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            "Maior velocidade no desenvolvimento de sistemas",
            "Melhor experiência do usuário",
            "Personalização de conteúdos",
            "Redução de custos operacionais",
            "Automação de tarefas repetitivas",
            "Aumento da eficiência empresarial",
            "Crescimento da inovação digital",
          ].map((i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FD6925]" />
              {i}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
