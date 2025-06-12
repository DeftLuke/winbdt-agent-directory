import type React from 'react';
import type { AgentType } from '../types/agent';
import { AGENT_CATEGORIES } from '../types/agent';

interface HeaderProps {
  activeTab: AgentType;
  onTabChange: (tab: AgentType) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="w-full">
      {/* Logo Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-amber-100 mb-2">
          WinBDT Agent List
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded" />
      </div>

      {/* Navigation Tabs */}
      <nav className="w-full">
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {AGENT_CATEGORIES.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onTabChange(category.id)}
                className={`
                  px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-200
                  ${activeTab === category.id
                    ? 'bg-amber-600 text-white shadow-lg scale-105'
                    : 'bg-slate-700/50 text-amber-200 hover:bg-amber-600/20 hover:text-amber-100'
                  }
                `}
              >
                {category.displayName}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
