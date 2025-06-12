import type React from 'react';
import { useState, useMemo } from 'react';
import type { Agent, AgentType } from '../types/agent';
import Header from './Header';
import AgentTable from './AgentTable';
import SearchBar from './SearchBar';
import AgentStats from './AgentStats';

interface AgentDirectoryProps {
  agents: Agent[];
  className?: string;
}

const AgentDirectory: React.FC<AgentDirectoryProps> = ({
  agents,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<AgentType>('SMA');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter agents based on active tab and search term
  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      const matchesTab = agent.type === activeTab;
      const matchesSearch = searchTerm === '' ||
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.agentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.mobile.includes(searchTerm);
      return matchesTab && matchesSearch;
    });
  }, [agents, activeTab, searchTerm]);

  // Get display name for current tab
  const getTabDisplayName = (type: AgentType): string => {
    const tabNames = {
      'SMA': 'SMA Agents',
      'MA': 'MA Agents',
      'AG': 'AG Agents',
      'ADMIN': 'Official Admins'
    };
    return tabNames[type];
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${className}`}>
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <AgentStats
          agents={agents}
          activeTab={activeTab}
        />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder={`Search ${getTabDisplayName(activeTab).toLowerCase()}...`}
        />

        <main className="w-full">
          <AgentTable
            agents={filteredAgents}
            title={getTabDisplayName(activeTab)}
          />
        </main>
      </div>
    </div>
  );
};

export default AgentDirectory;
