export interface WorkItem {
  id: number;
  title: string;
  subtitle: string;
  placeholder: string;
}

export interface Principle {
  number: string;
  label: string;
  title: string;
  highlight: string;
  highlightFirst: boolean;
  description: string;
}

export interface AIUseCase {
  number: string;
  title: string;
  description: string;
}
