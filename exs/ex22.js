import React, { Component } from 'react';

class Ex22 extends Component {
    constructor(props){
        super(props);
        this.state = {
            contenet : '',
            contenetUpdate : '',
            update : false,
            id:0,
            data : [],
        };
    }
    handleCangeToDo(e){
        let val = e.target.value;
        let contenet = this.state.contenet;
        let contenetUpdate = this.state.contenetUpdate;
        contenet = val;
        contenetUpdate = val;
        this.setState({contenet, contenetUpdate});
    }
    handleDelete(id){
        let data = this.state.data;
        data = data.filter((el)=>{ return el.id != id});
        this.setState({data});
    }
    handleUpDate(idEl){
        let data = this.state.data;
        let update = this.state.update;
        let id = this.state.id;
        let contenetUpdate = this.state.contenetUpdate;
        let val = '';

        data.map((el)=> el.id == idEl? val= el.contenet:'');
        contenetUpdate = val;
        id = idEl;
        update = true;
        this.setState({update, id, contenetUpdate});
    }
    handleSubmit(e){
        if (this.state.update == false){
            let data = this.state.data;
            let contenet = this.state.contenet;
            if(data.length == 0){
                data.push({id : 1, contenet: contenet});
            }else{
                let IdlasteEl = parseInt(data[(data.length-1)].id);
                data.push({id : (IdlasteEl+1), contenet: contenet});
            }
            this.setState({data});
        }else{
            let data = this.state.data;
            let contenet = this.state.contenet;
            let update = this.state.update;
            let id = this.state.id;
            
    
            data.map((el)=>el.id == id? el.contenet = contenet : el.contenet);
            
            update = false;
            id = 0;
            this.setState({data, update, id});
        }
        e.preventDefault();
    }
    render(){
        return (
            <div className='container'>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input type='text' name='todo' value={this.state.contenetUpdate} onChange={(e)=>this.handleCangeToDo(e)}></input>
                    <input type='submit' value='Ajouter'></input>
                </form>
                <ul>{
                    this.state.data.map((el)=><li key={el.id}>{el.contenet} <button onClick={()=>this.handleDelete(el.id)}>Supremmer</button> <button onClick={()=>this.handleUpDate(el.id)}>Modifier</button></li>)   
                }</ul>
            </div>
        );
    }
}

export default Ex22;
