import React, { Component } from 'react';


class Ex1 extends React.Component {
  constructor(props){
    super(props);
    this.elms=  ['Element1', 'Element2', 'Element3', 'Element4', 'Element5'];
    this.st_ul = {listStyaleType : 'none', colore:'red'};
  }
  render () {
    return (
    <div className='container'>
      <h1>Hello Word !</h1>
      <ul id='list1' style = {this.st_ul}>
        {this.elms.map((el, ind)=> <li key={ind}>{el}</li>)}
      </ul>
    </div>
    );
  }
}

export default Ex1;
