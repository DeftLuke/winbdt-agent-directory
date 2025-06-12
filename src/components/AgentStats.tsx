import type React from 'react';
import type { Agent, AgentType } from '../types/agent';

interface AgentStatsProps {
  agents: Agent[];
  activeTab?: AgentType;
}

const AgentStats: React.FC<AgentStatsProps> = ({ agents, activeTab }) => {
  // Calculate statistics
  const stats = {
    SMA: agents.filter(agent => agent.type === 'SMA').length,
    MA: agents.filter(agent => agent.type === 'MA').length,
    AG: agents.filter(agent => agent.type === 'AG').length,
    ADMIN: agents.filter(agent => agent.type === 'ADMIN').length,
    total: agents.length
  };

  const statItems = [
    { label: 'SMA Agents', count: stats.SMA, type: 'SMA' as AgentType },
    { label: 'MA Agents', count: stats.MA, type: 'MA' as AgentType },
    { label: 'AG Agents', count: stats.AG, type: 'AG' as AgentType },
    { label: 'Admin Users', count: stats.ADMIN, type: 'ADMIN' as AgentType }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
      {/* Total Stats */}
      <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg p-4 text-center shadow-lg">
        <div className="text-2xl font-bold text-white">{stats.total}</div>
        <div className="text-amber-100 text-sm font-medium">Total Agents</div>
      </div>

      {/* Individual Category Stats */}
      {statItems.map((item) => (
        <div
          key={item.type}
          className={`
            rounded-lg p-4 text-center shadow-lg transition-all duration-200
            ${activeTab === item.type
              ? 'bg-gradient-to-br from-slate-600 to-slate-700 ring-2 ring-amber-500/50'
              : 'bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700'
            }
          `}
        >
          <div className="text-2xl font-bold text-amber-100">{item.count}</div>
          <div className="text-amber-200/80 text-sm font-medium">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AgentStats;
