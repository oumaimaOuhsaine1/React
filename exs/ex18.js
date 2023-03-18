import React, { Component } from 'react';

class Ex18 extends Component{
    constructor (props){
        super(props);
        this.state = {
            info : {nom : '', prenom : ''}
        };
    }
    
    handleChanage(e) {
        let data = this.state.info;
        e.target.name == 'nom' ? data.nom =  e.target.value : data.prenom =  e.target.value;
        this.setState({info : data});
    }
    calculCarre(e){
        let data = `Votre Nom est : ${this.state.info.nom} et votre Prenom est : ${this.state.info.prenom}.` ;
        alert(data);
        e.preventDefault();
    }
    render(){
        return (
            <div className='container'>
                <form method='' action='' onSubmit={(ev)=>this.calculCarre(ev)}>
                    <h1>Welcom</h1>
                    <div>
                        <label>Nom :</label>
                        <input type='text' name='nom' id='nom' value={this.state.info.nom} onChange={(ev)=>this.handleChanage(ev)}/>
                    </div>
                    <div>
                        <label>Prenom :</label>
                        <input type='text' name='prenom' id='prenom' value={this.state.info.prenom} onChange={(ev)=>this.handleChanage(ev)}/>
                    </div>
                    <input type='submit' value='Envoyer'/>
                </form>
            </div>
        )
    }
}

export default Ex18;
