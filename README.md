# WinBDT Agent Directory Components

A beautiful, responsive agent directory clone built with React, TypeScript, and Tailwind CSS. This project replicates the design and functionality of the WinBDT agent listing website as reusable components.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark theme with golden accents matching the original
- **Tab Navigation**: Switch between SMA, MA, AG, and Admin agent categories
- **Search Functionality**: Search agents by name, ID, or mobile number
- **Social Integration**: Direct links to Facebook and WhatsApp
- **Reusable Components**: Modular design for easy integration into existing projects
- **TypeScript Support**: Full type safety and IntelliSense support
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🎨 Design

The design closely replicates the original WinBDT website with:
- Dark gradient background with subtle patterns
- Golden/amber accent colors (#fbbf24, #f59e0b)
- Professional table layout with borders and hover effects
- Social media icons with hover states
- Smooth transitions and animations

## 📦 Components

### `AgentDirectory`
Main container component that orchestrates the entire directory.

```tsx
<AgentDirectory agents={agentData} />
```

**Props:**
- `agents: Agent[]` - Array of agent data
- `className?: string` - Optional additional CSS classes

### `Header`
Navigation header with logo and category tabs.

```tsx
<Header activeTab={activeTab} onTabChange={setActiveTab} />
```

**Props:**
- `activeTab: AgentType` - Currently active agent category
- `onTabChange: (tab: AgentType) => void` - Callback for tab changes

### `SearchBar`
Search input component for filtering agents.

```tsx
<SearchBar
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  placeholder="Search agents..."
/>
```

**Props:**
- `searchTerm: string` - Current search term
- `onSearchChange: (term: string) => void` - Search change callback
- `placeholder?: string` - Input placeholder text

### `AgentTable`
Table component displaying agent data.

```tsx
<AgentTable agents={filteredAgents} title="SMA Agents" />
```

**Props:**
- `agents: Agent[]` - Array of agents to display
- `title?: string` - Optional table title

### `AgentCard`
Individual table row component for agent data.

```tsx
<AgentCard agent={agentData} />
```

**Props:**
- `agent: Agent` - Single agent data object

### `SocialButton`
Social media link button component.

```tsx
<SocialButton type="facebook" url="https://facebook.com/..." size="md" />
```

**Props:**
- `type: 'facebook' | 'whatsapp'` - Social media platform
- `url?: string` - Social media profile URL
- `size?: 'sm' | 'md' | 'lg'` - Button size

## 🔧 Usage

### 1. Basic Usage

```tsx
import { AgentDirectory } from './components/AgentDirectory';
import { sampleAgents } from './data/sampleAgents';

function App() {
  return (
    <div>
      <AgentDirectory agents={sampleAgents} />
    </div>
  );
}
```

### 2. Custom Integration

You can use individual components in your existing application:

```tsx
import { Header, AgentTable, SearchBar } from './components';

function MyAgentPage() {
  const [activeTab, setActiveTab] = useState<AgentType>('SMA');
  const [searchTerm, setSearchTerm] = useState('');

  // Your filtering logic here
  const filteredAgents = useMemo(() => {
    // Filter logic
  }, [agents, activeTab, searchTerm]);

  return (
    <div className="bg-slate-900">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <AgentTable agents={filteredAgents} />
    </div>
  );
}
```

## 📋 Data Structure

### Agent Interface

```typescript
interface Agent {
  id: string;           // Unique identifier
  name: string;         // Agent name
  agentId: string;      // Agent ID (e.g., "0100", "ADMIN")
  mobile: string;       // Mobile number
  facebookUrl?: string; // Facebook profile URL (optional)
  whatsappUrl?: string; // WhatsApp contact URL (optional)
  type: AgentType;      // Agent category
}

type AgentType = 'SMA' | 'MA' | 'AG' | 'ADMIN';
```

### Sample Data

```typescript
const sampleAgent: Agent = {
  id: '1',
  name: 'YASH RAJ',
  agentId: '0100',
  mobile: '+85*****7575',
  facebookUrl: 'https://www.facebook.com/russell.pasha',
  whatsappUrl: 'https://wa.link/wlyuzq',
  type: 'SMA'
};
```

## 🎨 Styling

The components use Tailwind CSS classes with a custom dark theme. Key color scheme:

- **Background**: Slate shades (slate-900, slate-800)
- **Accent**: Amber shades (amber-100, amber-500, amber-600)
- **Text**: Light colors for contrast
- **Borders**: Subtle amber with opacity

### Custom CSS Variables

```css
/* Background gradients */
bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900

/* Accent colors */
text-amber-100    /* Primary text */
text-amber-200/90 /* Secondary text */
border-amber-200/20 /* Borders */
bg-amber-600      /* Active states */
```

## 🔍 Search Features

The search functionality supports:
- **Name search**: Case-insensitive name matching
- **Agent ID search**: Exact or partial ID matching
- **Mobile search**: Phone number matching
- **Real-time filtering**: Updates as you type

## 📱 Responsive Design

- **Mobile**: Stacked layout, collapsible navigation
- **Tablet**: Optimized spacing and touch targets
- **Desktop**: Full table layout with hover effects

## 🚀 Development

### Running the Project

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### Project Structure

```
src/
├── components/
│   ├── AgentDirectory.tsx    # Main container
│   ├── Header.tsx           # Navigation header
│   ├── AgentTable.tsx       # Data table
│   ├── AgentCard.tsx        # Table rows
│   ├── SocialButton.tsx     # Social links
│   └── SearchBar.tsx        # Search input
├── types/
│   └── agent.ts             # TypeScript interfaces
├── data/
│   └── sampleAgents.ts      # Sample data
└── App.tsx                  # Main app component
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
