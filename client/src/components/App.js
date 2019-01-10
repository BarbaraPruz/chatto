import React, { Component } from 'react';

import LoginForm from 'components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Chatto - Let's talk</h1>
        <LoginForm />
      </div>
    );
  }
}

export default App;
