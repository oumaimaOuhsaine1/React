import React, { Component } from 'react';


class Ex4 extends Component {
  constructor(props){
    super(props);
    this.style_t = {textAlign:'center', textTransform:'uppercase', color: 'green'};
    this.style_p = {padding:'10px 20px', letterSpacing: '1.5px', fontSize:'20px', color:'#777'};
  }
  render (){
    return (
      <div className='container'>
        <h1 style={this.style_t}>Les formatage du texte</h1>
        <p style={this.style_p}>
          Ce text est de style avec certaines des proprietes de mise en forme de texte. 
          Le titre utilise le text-align, text-transform et le proprietes de couleur.
          Le pragraphe est en retait, alignes, et l espace entre les caracters est specifiee.
        </p>
      </div>
    )
  }
}


export default Ex4;
