export interface Portfolio {
  projects: {
    type: string;
    name: string;
    description: string;
    techStack?: string[];
    link?: string;
  }[];
}

export const portfolio: Record<'pt' | 'en', Portfolio> = {
  pt: {
    projects: [
      {
        type: "Landing Page",
        name: "PetShop",
        description: "Landing page genérica para pet shops",
        techStack: ["React", "Shadcn", "Tailwind", "Next"],
        link: "https://petshop-self-three.vercel.app/"
      },
      {
        type: "Landing Page/Dashboard Kanban",
        name: "Controle de estoque",
        description: "Controle de estoque utilizando local storage",
        techStack: ["React", "Local Storage", "Vite"],
        link: "https://react-proj-final.vercel.app/"
      },
      {
        type: "Aplicação para loja local",
        name: "Loja Escoteira",
        description: "Aplicação para loja física dos escoteiros de Belo Horizonte (trabalho voluntário). Conta com banco de dados na nuvem, bucket de fotos na cloudflare, cadastro de usuários, gestão de estoques e relatórios mensais da loja;",
        techStack: ["Typescript", "PostgreSQL", "Prisma ORM", "API REST", "Next"],
        link: "https://lojaescoteira21.vercel.app/"
      },
      {
        type: "Aplicação de streaming",
        name: "Onebitflix",
        description: "Aplicação modular em 2 projetos: 1 backend com API REST, gestão de conteúdos e usuários, autenticação JWT. 1 front end conectado ao backend, responsivo e integrado ao streaming.",
        techStack: ["Node", "Express", "CSS", "PostgreSQL", "Sequelize", "ReactStrap"],
        link: "https://onebitflix-frontend-roan.vercel.app/"
      },
      {
        type: "Landing Page",
        name: "Inovart",
        description: "Landing page para serviços de pintura e acabamento para construção civil.",
        techStack: ["React", "Shadcn", "Tailwind", "Next"],
        link: "https://inovart-flax.vercel.app/"
      },
      {
        type: "Curriculum",
        name: "Curriculum",
        description: "Curriculum Vitae com switch de idiomas e recursos react.",
        techStack: ["React", "Shadcn", "Tailwind", "Next"],
        link: "https://curriculum-pearl-mu.vercel.app/"
      }
    ]
  },
  en: {
    projects: [
      {
        type: "Landing Page",
        name: "PetShop",
        description: "Generic landing page for pet shops",
        techStack: ["React", "Shadcn", "Tailwind", "Next"],
        link: "https://petshop-self-three.vercel.app/"
      },
      {
        type: "Landing Page/Kanban Dashboard",
        name: "Stock Control",
        description: "Inventory management application using local storage",
        techStack: ["React", "Local Storage", "Vite"],
        link: "https://react-proj-final.vercel.app/"
      },
      {
        type: "Local Store Application",
        name: "Scout Store",
        description: "Application for a physical scout store in Belo Horizonte (volunteer work). Features cloud database, Cloudflare image bucket, user registration, inventory management, and monthly reports;",
        techStack: ["Typescript", "PostgreSQL", "Prisma ORM", "REST API", "Next"],
        link: "https://lojaescoteira21.vercel.app/"
      },
      {
        type: "Streaming Application",
        name: "Onebitflix",
        description: "Modular application in 2 projects: 1 backend with REST API, content/user management, and JWT authentication. 1 responsive frontend integrated with streaming.",
        techStack: ["Node", "Express", "CSS", "PostgreSQL", "Sequelize", "ReactStrap"],
        link: "https://onebitflix-frontend-roan.vercel.app/"
      },
      {
        type: "Landing Page",
        name: "Inovart",
        description: "Landing page for painting and finishing services in the construction industry.",
        techStack: ["React", "Shadcn", "Tailwind", "Next"],
        link: "https://inovart-flax.vercel.app/"
      },
      {
        type: "Curriculum",
        name: "Resume",
        description: "Curriculum Vitae featuring language switching and React resources.",
        techStack: ["React", "Shadcn", "Tailwind", "Next"],
        link: "https://curriculum-pearl-mu.vercel.app/"
      }
    ]
  }
};