import React, { Component } from 'react';

class Ex23 extends Component{
    constructor(props){
        super(props);
        this.state = {
            nom : '',
            age : '',
            paye : 'Maroc',
            nat : '',
            inter : [],
            info:''
        }
    }
    handleChamgeNom(e){
        let val = e.target.value;
        let nom = this.state.nom;
        nom = val;
        this.setState({nom});
    }
    handleChamgeAge(e){
        let val = e.target.value;
        let age = this.state.age;
        age = val;
        this.setState({age});
    }
    handleChamgePaye(e){
        let val = e.target.value;
        let paye = this.state.paye;
        paye = val;
        this.setState({paye});
    }
    handleChamgeNationalite(e){
        let val = e.target.value;
        let nat = this.state.nat;
        nat = val;
        this.setState({nat});
    }
    handleChamgeInterts(e){
        let val = e.target.value;
        let inter = this.state.inter;
        inter.push(val);
        this.setState({val});
    }
    handleSubmit(e){
        let info = this.state.info;
        let nom = this.state.nom;
        let age = this.state.age;
        let nat = this.state.nat;
        let paye = this.state.paye;
        let inter = this.state.inter;
        info = `Votre nom est : ${nom} et votre age est : ${age} et votre nationalite est : ${nat} et votre paye est : ${paye} et votre interets sont : ${inter.map((el)=>{ return el})}`;
        this.setState({info});
        e.preventDefault();
    }
    render(){
        return (
            <div className='container'>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <label>Nom *:</label><br></br>
                    <input type='text' onChange={(e)=>this.handleChamgeNom(e)}></input><br></br>
                    <label>Age *:</label><br></br>
                    <input type='text' onChange={(e)=>this.handleChamgeAge(e)}></input><br></br>
                    <h1>Nationalite *:</h1>
                    <input type='radio' name='nationalite'  value='Marocaine' onChange={(e)=>this.handleChamgeNationalite(e)}></input>
                    <label>Marocaine</label><br></br>
                    <input type='radio' name='nationalite' value='Etranege' onChange={(e)=>this.handleChamgeNationalite(e)}></input>
                    <label>Etranege</label><br></br>
                    <h1>Paye *:</h1>
                    <select onChange={(e)=>this.handleChamgePaye(e)}>
                        <option value='Maroc'>Maroc</option>
                        <option value='Egypt'>Egypt</option>
                        <option value='France'>France</option>
                    </select><br></br>
                    <h1>Interts :</h1>
                    <input type='checkbox' value='Cinma' name='cinma' onChange={(e)=>this.handleChamgeInterts(e)}></input>
                    <label>Cinma</label><br></br>
                    <input type='checkbox' value='Ecriteur' name='ecriteur' onChange={(e)=>this.handleChamgeInterts(e)}></input>
                    <label>Ecriteur</label><br></br>
                    <input type='checkbox' value='Cinma' name='Licteur' onChange={(e)=>this.handleChamgeInterts(e)}></input>
                    <label>Licteur</label><br></br>
                    <input type='submit' value='Envoyer'></input>
                </form>
                <p>{this.state.info}</p>
            </div>
        );
    }
}

export default Ex23;
