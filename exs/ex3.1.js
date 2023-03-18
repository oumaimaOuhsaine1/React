import React, { Component } from 'react';


class Ex3_1 extends React.Component {
  constructor (props){
    super(props);
    this.elems = ['Element1', 'Element2', 'Element3', 'Element4', 'Element5'];
    this.color = 'red';
  }
  render () {
    return (<div className='container'>
      <h1>Welcom</h1>
      <ul>
        {
          this.elems.map((el, ind)=>{
            return <h1 key={ind} color={this.color}>{el}</h1>
          })
        }
      </ul>
    </div>);
  }
}


export default Ex3_1;