export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  image: string;
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
