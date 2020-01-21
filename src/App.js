import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
  }

  incrementCounter = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 }
    })
  }

  render() {
    const count = this.state.counter;

    return (
      <div data-test='component-app' className="App">
        <h1 data-test='counter-display'>Count is currently {count}</h1>
        <button data-test='increment-button' onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default App;
