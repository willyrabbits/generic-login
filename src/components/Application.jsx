import React, { Component } from 'react';

import Authentication from './Authentication';

class Application extends Component {

  render() {
    return (
      <main className="app">
        <h1>Generic Login</h1>
        <Authentication />
      </main>
    );
  }
}

export default Application;
