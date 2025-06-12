import type React from 'react';
import type { Agent } from '../types/agent';
import SocialButton from './SocialButton';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <tr className="border-b border-amber-200/20 hover:bg-amber-100/5 transition-colors">
      <td className="px-4 py-3 text-amber-100 font-medium">
        {agent.name}
      </td>
      <td className="px-4 py-3 text-amber-200/90">
        {agent.agentId}
      </td>
      <td className="px-4 py-3 text-amber-200/90">
        {agent.mobile}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-2">
          <SocialButton
            type="facebook"
            url={agent.facebookUrl}
            size="sm"
          />
          <SocialButton
            type="whatsapp"
            url={agent.whatsappUrl}
            size="sm"
          />
        </div>
      </td>
    </tr>
  );
};

export default AgentCard;
