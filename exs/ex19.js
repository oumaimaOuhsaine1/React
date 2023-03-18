import React, { Component } from 'react';

class Ex19 extends Component{
    constructor (props){
        super(props);
        this.state = {
            prenom : '',
            optionSel : '',
            options : ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']  
        };
    }
    
    handleChangePrenom(e) {
        let ValueTarg = e.target.value;
        let prenom = this.state.prenom;
        prenom = ValueTarg;
        this.setState({prenom});
    }
    handleChangeOption(e){
        let ValueTarg = e.target.value;
        let optionSel = this.state.optionSel;
        optionSel = ValueTarg;
        this.setState({optionSel});
    }
    render(){
        return (
            <div className='container'>
                <h1>Manipulation du DOM</h1>
                <div>
                    <label>Entrer un Prenom :</label>
                    <input type='text' name='prenom' id='prenom' value={this.state.prenom} onChange={(ev)=>this.handleChangePrenom(ev)}/>
                </div>
                <p id='pPrenom'>{this.state.prenom}</p>
                <div>
                    <label>Choisez un option :</label>
                    <select onChange={(ev)=>this.handleChangeOption(ev)}>{
                        this.state.options.map((el, index)=><option key={index} value={el}>{el}</option>)
                    }</select>
                </div>  
                <p id='pOption'>{this.state.optionSel}</p>
            </div>
        )
    }
}

export default Ex19;
