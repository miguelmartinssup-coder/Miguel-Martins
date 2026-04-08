export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  caseStudy: {
    problem: string;
    solution: string;
    result: string;
  };
  image: string;
  imagePosition?: string;
  year: string;
  status: string;
  link: string;
  metrics: {
    impact: string;
    users: string;
    tech: string[];
  };
}

export type OperationType = 'create' | 'update' | 'delete' | 'list' | 'get' | 'write';
