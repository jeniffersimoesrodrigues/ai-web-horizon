import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profissao")({
  head: () => ({
    meta: [
      { title: "Sobre a Profissão — IA & Dev Web" },
      { name: "description", content: "O que faz um profissional de IA aplicada ao Desenvolvimento Web: atividades, tecnologias, salários e formação." },
      { property: "og:title", content: "Sobre a Profissão de IA & Dev Web" },
      { property: "og:description", content: "Atividades, tecnologias, salários e formação na área." },
    ],
  }),
  component: ProfissaoPage,
});

const activities = [
  "Criar chatbots e assistentes virtuais",
  "Implementar algoritmos de Machine Learning",
  "Desenvolver sistemas de recomendação personalizados",
  "Automatizar tarefas utilizando IA",
  "Melhorar a experiência do usuário com análise de dados",
  "Trabalhar com análise de comportamento dos usuários",
  "Reconhecimento de imagens e voz",
  "Segurança digital baseada em IA",
  "Integrar APIs de IA em aplicações web",
];

const tech = {
  Linguagens: ["Python", "JavaScript", "TypeScript", "SQL"],
  "Web Frameworks": ["React", "Angular", "Vue.js", "Node.js", "Django", "Flask"],
  "IA & ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI API", "Hugging Face"],
  Ferramentas: ["Git/GitHub", "Docker", "VS Code", "Firebase", "AWS · Azure · GCP", "MongoDB", "PostgreSQL"],
};

const salaries = [
  { level: "Júnior", range: "R$ 3.500 – R$ 6.000" },
  { level: "Pleno", range: "R$ 7.000 – R$ 12.000" },
  { level: "Sênior", range: "R$ 15.000 – R$ 30.000+" },
];

function ProfissaoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <span className="text-sm font-medium uppercase tracking-widest text-primary">Sobre a profissão</span>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">
        O profissional de <span className="text-gradient">IA aplicada à Web</span>
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        Atua na criação de soluções inteligentes para sistemas e aplicações
        online, integrando recursos de IA em sites, plataformas e softwares
        web. Combina engenharia, ciência de dados e design de experiência.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">Principais atividades</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <li key={a} className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_12px_var(--ring)]" />
              <span className="text-sm">{a}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-2xl font-bold md:text-3xl">Exemplos práticos</h2>
        <p className="mt-4 text-muted-foreground">
          Netflix e Spotify recomendam conteúdos personalizados; lojas virtuais
          sugerem produtos; bancos detectam fraudes; empresas usam chatbots no
          atendimento; sites personalizam anúncios e conteúdo.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">Tecnologias e ferramentas</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {Object.entries(tech).map(([cat, items]) => (
            <div key={cat} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-primary">{cat}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((it) => (
                  <span key={it} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">Média salarial no Brasil</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {salaries.map((s) => (
            <div key={s.level} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">{s.level}</p>
              <p className="mt-3 font-display text-2xl font-bold text-gradient">{s.range}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Especialistas em IA generativa e Machine Learning podem alcançar
          remunerações ainda maiores.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-2xl font-bold">Formação acadêmica</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Ciência da Computação</li>
            <li>• Sistemas de Informação</li>
            <li>• Engenharia de Software</li>
            <li>• Análise e Desenvolvimento de Sistemas</li>
            <li>• Cursos especializados em IA e Machine Learning</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-2xl font-bold">Desafios da profissão</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Atualização tecnológica constante</li>
            <li>• Ética no uso da IA</li>
            <li>• Segurança e proteção de dados</li>
            <li>• Alta concorrência por vagas qualificadas</li>
            <li>• Complexidade técnica de modelos avançados</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
