import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-ai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IA aplicada ao Desenvolvimento Web — Inovação Digital" },
      { name: "description", content: "Site sobre Inteligência Artificial aplicada ao Desenvolvimento Web: carreira, tendências, certificações e contribuição para o ODS 9." },
      { property: "og:title", content: "IA aplicada ao Desenvolvimento Web" },
      { property: "og:description", content: "Carreira, tendências e impacto da IA no Desenvolvimento Web." },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { k: "+40%", v: "crescimento anual da demanda por profissionais de IA" },
  { k: "R$ 30k+", v: "salários para especialistas sêniores em IA" },
  { k: "ODS 9", v: "inovação, infraestrutura e indústria sustentável" },
];

const pillars = [
  { title: "Automação Inteligente", desc: "Chatbots, agentes e fluxos que aprendem com dados em tempo real." },
  { title: "Personalização", desc: "Sistemas de recomendação que adaptam a experiência a cada usuário." },
  { title: "Segurança Digital", desc: "Modelos que detectam fraudes e protegem dados sensíveis." },
  { title: "Acessibilidade", desc: "Leitura automática, tradução e interfaces inclusivas com IA." },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Inteligência Artificial · Desenvolvimento Web
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              O futuro da web é <span className="text-gradient">inteligente</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Explore como algoritmos, aprendizado de máquina e automação estão
              redesenhando sites, sistemas e a forma como a humanidade interage
              com a tecnologia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/profissao" className="rounded-lg bg-[var(--gradient-hero)] px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02] glow">
                Conheça a profissão
              </Link>
              <Link to="/tendencias" className="rounded-lg border border-border bg-secondary/50 px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary">
                Ver tendências
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-hero)] opacity-30 blur-3xl" />
            <img src={heroImg} alt="Visualização abstrata de inteligência artificial e desenvolvimento web" width={1600} height={1000} className="relative rounded-2xl border border-border shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 rounded-2xl border border-border bg-card/60 p-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.k} className="px-4 py-3">
              <p className="font-display text-3xl font-bold text-gradient">{h.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{h.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">A revolução já começou</h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          A Inteligência Artificial aplicada ao Desenvolvimento Web combina
          algoritmos inteligentes, aprendizado de máquina, automação e análise
          de dados para criar aplicações mais rápidas, eficientes, personalizadas
          e seguras. Empresas de todos os setores adotaram IA para melhorar a
          experiência do usuário, automatizar processos e aumentar a produtividade.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-3xl font-bold md:text-4xl">Pilares dessa transformação</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-[var(--gradient-hero)] font-display text-sm font-bold text-primary-foreground">
                0{i + 1}
              </div>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Como essa carreira contribui para um mundo mais sustentável?
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Conheça a relação direta entre IA, inovação digital e o Objetivo
              de Desenvolvimento Sustentável 9 da ONU.
            </p>
            <Link to="/ods" className="mt-8 inline-block rounded-lg bg-[var(--gradient-hero)] px-6 py-3 font-medium text-primary-foreground glow">
              Ver contribuição para o ODS 9
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
