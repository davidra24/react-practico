import React, { Component } from 'react';
import { stateful } from './InterfaceStateful';
import Stateless from './Stateless';
import Presentational from './Presentational';

class Stateful extends Component<{}, stateful> {
  constructor(props: any) {
    super(props);
    this.state = {
      hello: 'Hola Mundo',
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.hello}</h1>
        <Stateless />
        <Presentational />
      </div>
    );
  }
}

export default Stateful;
