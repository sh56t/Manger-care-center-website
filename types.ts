export interface Program {
  id: string;
  title: string;
  description: string;
  beneficiaries: string;
  impact: string;
  iconName: string;
  category: 'social' | 'skills' | 'enterprise';
}

export interface Value {
  title: string;
  description: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  path?: string;
  subItems?: NavItem[];
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}