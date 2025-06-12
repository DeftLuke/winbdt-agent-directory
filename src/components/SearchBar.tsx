import type React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  placeholder = "Search agents..."
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-amber-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="
          w-full pl-10 pr-4 py-3
          bg-slate-700/50 backdrop-blur-sm
          border border-amber-200/20
          rounded-lg text-amber-100
          placeholder-amber-200/50
          focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50
          transition-all duration-200
        "
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
