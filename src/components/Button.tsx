import React, { Component } from 'react';

interface props {
  text: string;
}

interface state {
  count: number;
}

class Button extends Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>🍎: {this.state.count}</h1>
        <button type='button' onClick={this.handleClick}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

/*
const Button = (props: props) => {
  const { text } = props;
  return (
    <div>
      <button type='button'>{props.text}</button>
      <button type='button'>{text}</button>
    </div>
  );
};*/

export default Button;
