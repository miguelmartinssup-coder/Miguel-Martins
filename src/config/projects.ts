import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "sistema-martins",
    title: "Sistema Martins",
    category: "Eficiência Operacional",
    tags: ["React", "Supabase", "Node.js"],
    description: "Plataforma centralizada de gestão que eliminou o caos administrativo em uma operação de alta escala.",
    caseStudy: {
      problem: "A empresa perdia 15 horas semanais em processos manuais de cotação, resultando em erros de precificação e perda de oportunidades de negócio.",
      solution: "Desenvolvimento de um ecossistema de dados em tempo real com automação de cálculos e integração direta com fornecedores.",
      result: "Redução de 65% no tempo de resposta operacional e eliminação total de erros humanos em cotações críticas."
    },
    image: "https://i.ibb.co/LhrqKbJP/image.png",
    imagePosition: "center 10%",
    year: "2024",
    status: "Em produção",
    link: "https://martins-server-rs.vercel.app",
    metrics: {
      impact: "65% mais rápido",
      users: "Uso corporativo",
      tech: ["React", "Supabase", "Automation"],
    }
  },
  {
    id: "sf-orcamentos",
    title: "SF Orçamentos",
    category: "Automação Financeira",
    tags: ["React", "Firebase", "Cloud Functions"],
    description: "Sistema de orçamentação inteligente focado em precisão e velocidade para o setor financeiro.",
    caseStudy: {
      problem: "Falta de padronização nos orçamentos gerava inconsistência financeira e dificuldade na aprovação de novos contratos.",
      solution: "Implementação de um motor de regras financeiras automatizado com geração instantânea de documentos e rastreabilidade total.",
      result: "Aumento de 40% na taxa de conversão de orçamentos devido à velocidade de entrega e clareza dos dados apresentados."
    },
    image: "https://i.ibb.co/zhndhs81/image.png",
    imagePosition: "center 5%",
    year: "2023",
    status: "Legado (v1)",
    link: "https://quote-evolution-pro.lovable.app",
    metrics: {
      impact: "40% mais conversão",
      users: "Time financeiro",
      tech: ["React", "Firebase", "Lovable"],
    }
  },
];
