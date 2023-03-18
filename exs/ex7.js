import React, { Component } from 'react';

class Ex7 extends Component{
  constructor(props){
    super(props);
    this.elms =  [
      {url : './images/R.png', name:'HP-13', prix:'3000 Dh'},
      {url : './images/R.png', name:'HP-14', prix:'3500 Dh'},
      {url : './images/OIP.png', name:'HP-15', prix:'4000 Dh'},
      {url :  './images/OIP.png', name:'HP-16', prix:'5000 Dh'}
    ];
  }
  render () {
    return(
      <div className='container'>
        <h1>Ordinateur</h1>
        <div className='pc'>
        {
          this.elms.map((el, index)=>{
            return(
              <div className='card' key={index}>
                <div className='img'>
                  <img src={el.url}/>
                </div>
                <div className='name'>{el.name}</div>
                <div className='prix'>{el.prix}</div>
                <div className='bt_ajt'>Ajouter au panier</div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}


export default Ex7;
