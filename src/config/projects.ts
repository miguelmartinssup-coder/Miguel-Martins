import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "quote-v2",
    title: "Sistema Martins",
    category: "Sistema Administrativo",
    tags: ["Database", "Automação Avançada", "API"],
    description: "Engenharia de dados e automação para otimização de cotações corporativas de alta performance.",
    caseStudy: {
      problem: "Processos manuais de cotação geravam gargalos operacionais e falta de visibilidade analítica.",
      solution: "Arquitetura orientada a dados com Supabase e dashboard em tempo real para gestão centralizada.",
      result: "Redução de 65% no tempo de resposta e 100% de integridade dos dados históricos."
    },
    image: "https://i.ibb.co/LhrqKbJP/image.png",
    imagePosition: "center 10%",
    year: "2024",
    status: "Em produção",
    link: "https://martins-server-rs.vercel.app",
    metrics: {
      impact: "65% mais rápido",
      users: "Uso diário",
      tech: ["React", "Supabase", "Automation"],
    }
  },
  {
    id: "quote-v1",
    title: "SF Orçamentos",
    category: "Automação Financeira",
    tags: ["MVP", "Automação", "Cotações", "Processos"],
    description: "MVP estratégico para validação de automação de processos financeiros e eliminação de retrabalho.",
    caseStudy: {
      problem: "Alto volume de retrabalho e erros humanos em planilhas de cotação descentralizadas.",
      solution: "Desenvolvimento de um sistema centralizado em React com persistência de dados via Firebase.",
      result: "Validação técnica do modelo de automação e base para a escalabilidade da versão v2."
    },
    image: "https://i.ibb.co/zhndhs81/image.png",
    imagePosition: "center 5%",
    year: "2023",
    status: "Legado (substituído pela v2)",
    link: "https://quote-evolution-pro.lovable.app",
    metrics: {
      impact: "MVP em produção",
      users: "Projeto piloto",
      tech: ["React", "Firebase", "Lovable"],
    }
  },
];
