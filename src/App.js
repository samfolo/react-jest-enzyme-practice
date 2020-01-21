import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
  }

  render() {
    return (
      <div data-test='component-app' className="App">
        <h1 data-test='counter-display'>Counter Display</h1>
        <button data-test='increment-button'>Increment</button>
      </div>
    );
  }
}

export default App;
