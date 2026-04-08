import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "quote-v2",
    title: "Quote Evolution Pro v2",
    category: "Sistema Administrativo",
    tags: ["Database", "Automação Avançada", "API"],
    description: "Versão aprimorada com integração de banco de dados, automações avançadas e dashboard analítico em tempo real para gestão de cotações corporativas.",
    longDescription: "Evolução do MVP original, com arquitetura orientada a dados e integrações com sistemas ERP. Reduziu o tempo de geração de cotações em 65%.",
    image: "/projects/quote-v2.webp",
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
    title: "Quote Evolution Pro v1",
    category: "Automação Financeira",
    tags: ["MVP", "Automação", "Cotações", "Processos"],
    description: "Sistema original focado em eficiência de processos e automação de cotações, eliminando planilhas manuais e retrabalho operacional.",
    longDescription: "MVP desenvolvido para resolver um problema real de alto volume de cotações manuais. Provou a viabilidade da automação no setor e serviu como base para a v2.",
    image: "/projects/quote-v1.webp",
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
