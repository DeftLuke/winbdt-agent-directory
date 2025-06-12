import type React from 'react';
import type { Agent } from '../types/agent';
import AgentCard from './AgentCard';

interface AgentTableProps {
  agents: Agent[];
  title?: string;
}

const AgentTable: React.FC<AgentTableProps> = ({ agents, title }) => {
  if (agents.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-amber-200/70">No agents found in this category</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-semibold text-amber-100 mb-4">
          {title}
        </h3>
      )}

      <div className="overflow-x-auto rounded-lg border border-amber-200/20">
        <table className="w-full bg-slate-800/50 backdrop-blur-sm">
          <thead>
            <tr className="bg-amber-600/20 border-b border-amber-200/20">
              <th className="px-4 py-3 text-left text-amber-100 font-semibold">
                Agent Name
              </th>
              <th className="px-4 py-3 text-left text-amber-100 font-semibold">
                Agent ID
              </th>
              <th className="px-4 py-3 text-left text-amber-100 font-semibold">
                Mobile Number
              </th>
              <th className="px-4 py-3 text-left text-amber-100 font-semibold">
                Inquiry
              </th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentTable;
