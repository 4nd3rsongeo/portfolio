instructions.md

Contexto do Sistema:
Você é um desenvolvedor Frontend Sênior especializado em Next.js 14/15, TypeScript e Tailwind CSS. Estou construindo meu portfólio profissional que une duas áreas fortes: Geologia de Recursos e Desenvolvimento de Software.

Fontes de Dados Obrigatórias:

Projetos (prompt.md): Use o objeto portfolio fornecido para criar a seção de projetos. Note que ele já possui suporte a i18n (PT/EN).

Perfil e Skills (PDF): Analise o arquivo ANDERSON_Resource_Geologist_26042026_t.pdf na raiz do projeto. Extraia:

Links para GitHub e LinkedIn.

Minha Stack técnica de Geologia (Ex: Leapfrog, Datamine, QA/QC).

Habilidades de Desenvolvimento (Python, TypeScript, SQL).

Resumo profissional para a seção "About".

Requisitos Técnicos:

Tecnologias: Next.js (App Router), Tailwind CSS, Lucide React (ícones), Shadcn/UI (cards, botões, switches).

Animações: Use Framer Motion para criar entradas suaves (fade-in, stagger children) e hover effects interativos nos cards de projetos.

Tipagem: O código deve ser 100% Type-Safe. Use a interface Portfolio definida no prompt.md.

Internacionalização: Crie um estado para controlar o idioma (PT/EN) que alterne todo o conteúdo do site, incluindo o que foi extraído do PDF.

Instruções de Design (Apresente 3 variantes):

Dark Geologist: Paleta de cores inspirada em minerais (grafite, cobre e verde esmeralda). Uso de texturas sutis que lembram mapas topográficos.

Modern Developer: Estilo ultra-minimalista, focado em tipografia (Inter ou Geist Sans), com muito espaço negativo e botões com efeito de vidro (glassmorphism).

Data-Driven (Bento Grid): Layout de grade organizada onde cada skill ou projeto é um card interativo com tamanhos diferentes.

O que você deve gerar:

O arquivo page.tsx principal estruturando as seções (Hero, About, Skills, Projects, Contact).

Um componente ProjectCard.tsx que use as propriedades do objeto do prompt.md.

A lógica de extração e mapeamento das skills do currículo para badges visuais.

O componente de Toggle de Idioma integrado ao objeto Record<'pt' | 'en', Portfolio>.