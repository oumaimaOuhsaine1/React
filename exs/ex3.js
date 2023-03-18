import React, { Component } from 'react';

class App extends React.Component {
  constructor (props){
    super(props);

    this.color = '#777';
  }
  render () {
    return (
      <li style={{color: this.color}}>{this.props.elm}</li>
    );
  }
}

export default App;