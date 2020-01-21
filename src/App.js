import React from 'react';
import './App.css';

function App() {
  return (
    <div data-test='component-app' className="App">
      <h1 data-test='counter-display'>Counter Display</h1>
      <button data-test='increment-button'>Increment</button>
    </div>
  );
}

export default App;
