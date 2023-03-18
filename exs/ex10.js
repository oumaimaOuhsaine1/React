import React, { Component } from 'react';
class Ex10 extends React.Component{
    constructor (){
      super(); 
      this.state = {
        client : [
        {id : '1', nom : 'Ali'},
        {id : '2', nom : 'Anoir'},
        {id : '3', nom : 'Mohemad'}
      ]
      };
      this.add = this.add.bind(this); 
      this.delete = this.delete.bind(this); 
    }
    add(){
      let id = new Date().getTime();
      let val = document.querySelector('input').value;
      let obj = {id : id,nom : val};
      let clients = this.state.client.slice();
      clients.push(obj);
      this.setState({client : clients});
    }
    delete(id){
      let clients = this.state.client.slice();
      let ind = clients.findIndex(el => el.id===id);
      clients.splice(ind, 1);
      this.setState({client : clients});
    }
    render (){
      return (
        <div className='container'>
          <h1>Welcom</h1>
          <form>
            <label>Entrer Votre Nom :</label>
            <input type='text'></input>
            <input type='button' value='Ajouter' onClick={this.add}></input>
          </form>
          <ul>
            {
              this.state.client.map((el, index)=><li key={index}>{el.nom}   <button onClick={()=>this.delete(el.id)}>X</button></li>)
            }
          </ul>
        </div>
      )
    }
  }

export default Ex10;