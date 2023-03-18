import React, { Component } from 'react';


  class Ex6 extends Component{
    constructor(props){
      super(props);
      this.listEl = [
        'oumaima zina', 
        'Mona Bruti', 
        'Theo Blige', 
        'Jean Bon', 
        'Justine Goute', 
        'Abobaker', 
        'Ahemad', 
        'Moohcin', 
        'Mustafa', 
        'Anoir', 
        'Ali', 
        'Yassin',
        'Mohamaed',
        'Ossama',
        'Aziz',
        'Abdelfatah',
        'Abdeelah',
        'Abdessamad',
        'Abderahim',
        'Issmail',
        'Ayoub',
        'Zakaria'
      ];
    }
    render () {
      return(
        <div className='container'>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>TOP 5 DES JOUERS!</th>
              </tr>
            </thead>
            <tbody>{
              this.listEl.map((el, index)=> <tr key={index}><td>{index+1}</td><td>{el}</td></tr>)
            }</tbody>
          </table>
        </div>
      )
    }
  }


export default Ex6;
