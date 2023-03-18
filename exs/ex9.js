import React, { Component } from 'react';
class Ex9 extends React.Component{
    constructor (){
      super();
      this.state = {displayTxt : false};
      this.toggleDisplayTxt = this.toggleDisplayTxt.bind(this);  
    }
    toggleDisplayTxt(){
      this.setState({displayTxt : !this.state.displayTxt});
    }
    render (){
      return (
        <div className='container'>
          <h1>Welcome</h1>
          {
            this.state.displayTxt ? (
              <div>
                <h4>AJX vous permet d ecrire des strocture.</h4>
                <button onClick={this.toggleDisplayTxt}>Afficher moins</button>
              </div>
            ) : (
              <div>
                <button onClick={this.toggleDisplayTxt}>Lire plus</button>
              </div>
              
            )
          }
        </div>
      )
    }
  }

export default Ex9;