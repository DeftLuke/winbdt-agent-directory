export interface Agent {
  id: string;
  name: string;
  agentId: string;
  mobile: string;
  facebookUrl?: string;
  whatsappUrl?: string;
  type: AgentType;
}

export type AgentType = 'SMA' | 'MA' | 'AG' | 'ADMIN';

export interface AgentCategory {
  id: AgentType;
  name: string;
  displayName: string;
}

export const AGENT_CATEGORIES: AgentCategory[] = [
  { id: 'SMA', name: 'sma', displayName: 'SMA Agent' },
  { id: 'MA', name: 'ma', displayName: 'MA Agent' },
  { id: 'AG', name: 'ag', displayName: 'AG Agent' },
  { id: 'ADMIN', name: 'admin', displayName: 'Official Admin' }
];
