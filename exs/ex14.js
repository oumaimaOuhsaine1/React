import React, { Component } from 'react';

class Ex14 extends Component{
    constructor (){
        super();
        this.state = {
            buts : [
                {id :1 , val :'Clique moi'},
                {id :2 , val :'Clique moi'},
                {id :3 , val :'Clique moi'}
            ]
        };
    }
    clickMoi(id){
        let data = this.state.buts;
        data.map((el)=>{
            if(el.id == id){
                if (el.val == 'Clique moi'){
                    el.val = `Paragraphe ${id} clique`;
                }else{
                    el.val = 'Clique moi';
                }   
            }
        });
        this.setState({ buts : data});
    }
    render(){
        return (
            <div className='container'>
                <h2>Cours React</h2>
                <div>{
                   this.state.buts.map((el)=><p key={el.id} onClick={()=>this.clickMoi(el.id)}>{el.val}</p>)
                }</div>
            </div>
        )
    }
}

export default Ex14;
