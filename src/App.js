import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    error: false,
  }

  incrementCounter = () => {
    this.setState(prevState => {
      return { 
        counter: prevState.counter + 1,
        error: false,
      }
    })
  }

  decrementCounter = () => {
    if (this.state.counter > 0) {
      this.setState(prevState => {
        return { counter: prevState.counter - 1 }
      })
    } else {
      this.setState({ error: true });
    }
    
  }

  render() {
    const count = this.state.counter;
    let error = null;

    if (this.state.error) error = 'Cannot go below zero.';

    return (
      <div data-test='component-app' className="App">
        <h1 data-test='counter-display'>Count is currently {count}</h1>
        <p>{error}</p>
        <button data-test='increment-button' onClick={this.incrementCounter}>Increment</button>
        <button data-test='decrement-button' onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}

export default App;
