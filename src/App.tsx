import React from 'react';
import AgentDirectory from './components/AgentDirectory';
import { sampleAgents } from './data/sampleAgents';

function App() {
  return (
    <div className="App">
      <AgentDirectory agents={sampleAgents} />
    </div>
  );
}

export default App;
