import React, { Component } from 'react';

class Ex15 extends Component{
    constructor (props){
        super(props);
        this.state = {
            val : ''
        };
    }
    
    handleChanage(e) {
        let data = this.state.val;
        data = e.target.value;
        this.setState({val : data});
    }
    handleSubmit(e) {
        alert('You have submit this input succesefully : '+ this.state.val);
        e.preventDefault();
    }
    render(){
        return (
            <div className='container'>
                <form method='' action='' onSubmit={(ev)=>this.handleSubmit(ev)}>
                    <h1>Exemple composer controle</h1>
                    <div>
                        <label>Name :</label>
                        <input type='text' name='name' id='name' value={this.state.val} onChange={(ev)=>this.handleChanage(ev)}/>
                    </div>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}


export default Ex15;
