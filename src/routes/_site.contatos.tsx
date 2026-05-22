import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/contatos")({
  head: () => ({
    meta: [
      { title: "Redes e Contatos — IA & Dev Web" },
      { name: "description", content: "Perfis profissionais do grupo de pesquisa sobre Inteligência Artificial aplicada ao Desenvolvimento Web." },
      { property: "og:title", content: "Redes e Contatos do Grupo" },
      { property: "og:description", content: "Conheça os integrantes e suas redes profissionais." },
    ],
  }),
  component: ContatosPage,
});

const members = [
  { name: "Integrante 1", role: "Pesquisa & Conteúdo", links: { LinkedIn: "#", GitHub: "#", Email: "mailto:contato@exemplo.com" } },
  { name: "Integrante 2", role: "Design & UX", links: { LinkedIn: "#", GitHub: "#", Email: "mailto:contato@exemplo.com" } },
  { name: "Integrante 3", role: "Desenvolvimento Web", links: { LinkedIn: "#", GitHub: "#", Email: "mailto:contato@exemplo.com" } },
  { name: "Integrante 4", role: "IA & Dados", links: { LinkedIn: "#", GitHub: "#", Email: "mailto:contato@exemplo.com" } },
];

function ContatosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <span className="text-sm font-medium uppercase tracking-widest text-primary">Equipe</span>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">
        Redes e <span className="text-gradient">contatos</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Conheça os integrantes do grupo e acesse seus perfis profissionais.
        Sinta-se à vontade para entrar em contato e trocar ideias sobre IA e
        desenvolvimento web.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {members.map((m) => (
          <article
            key={m.name}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[var(--gradient-hero)] font-display text-lg font-bold text-primary-foreground">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold">{m.name}</h2>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {Object.entries(m.links).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-border bg-card p-10 text-center">
        <h2 className="text-2xl font-bold">Quer falar com o grupo?</h2>
        <p className="mt-3 text-muted-foreground">Envie um email coletivo e responderemos em breve.</p>
        <a
          href="mailto:contato@exemplo.com"
          className="mt-6 inline-block rounded-lg bg-[var(--gradient-hero)] px-6 py-3 font-medium text-primary-foreground glow"
        >
          contato@exemplo.com
        </a>
      </section>
    </div>
  );
}
