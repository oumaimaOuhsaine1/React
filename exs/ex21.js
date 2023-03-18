import React, { Component } from 'react';

class Ex21 extends Component{
    constructor (props){
        super(props);
        this.state = {
            nom : '',
            prenom : '',
            age : 0,
            sexe : '',
            nationnalite : '',
            pays : 'Maroc',
            interet : [],
            info : ''
        };
    }
    handleChangeNom(e){
        let nom = e.target.value;
        let nomS = this.state.nom;
        nomS = nom;
        this.setState({nom : nomS});
    }
    handleChangePrenom(e){        
        let prenom = e.target.value;
        let prenomS = this.state.prenom;
        prenomS = prenom;
        this.setState({prenom : prenomS});
    }
    handleChangeAge(e){     
        let age = parseInt(e.target.value);
        let ageS = this.state.age;
        ageS = age;
        this.setState({age : ageS});
    }
    handleChangeSexe(e){
        let sexe = e.target.value;
        let sexeS = this.state.sexe;
        sexeS = sexe;
        this.setState({sexe : sexeS});
    }
    handleChangeNationnalite(e){
        let nationnalite = e.target.value;
        let nationnaliteS = this.state.nationnalite;
        nationnaliteS = nationnalite;
        this.setState({nationnalite : nationnaliteS});
    }
    handleChangePays(e){
        let pays = e.target.value;
        let paysS = this.state.pays;
        paysS = pays;
        this.setState({pays : paysS});
    }
    handleChangeInteret(e){
        let  interet = e.target.value;
        let interetS = this.state.interet;
        interetS.push(interet);
        this.setState({interet : interetS});
    }
    handleSubmit(e){
        let info = this.state.info;
        info = `${this.state.nom} ${this.state.prenom}, est un ${this.state.sexe},Age ${this.state.age} ans, Il est ${this.state.nationnalite}, Son pays d orgigine est ${this.state.pays}, Ses interet sont : ${this.state.interet.map((el)=>{ return el })}.`;
        this.setState({info});
        e.preventDefault();
    }
    render(){
        return (
            <div className='container'>
                <form action='' method='' onSubmit={(ev)=>this.handleSubmit(ev)}>
                    <h1>Inscription</h1>
                    <div>
                        <label>Nom :</label>
                        <input type='text' name='nom' id='nom'  onChange={(ev)=>this.handleChangeNom(ev)}/>
                    </div>
                    <div>
                        <label>Prenom :</label>
                        <input type='text' name='prenom' id='prenom'  onChange={(ev)=>this.handleChangePrenom(ev)}/>
                    </div>
                    <div>
                        <label>Age :</label>
                        <input type='text' name='age' id='age'  onChange={(ev)=>this.handleChangeAge(ev)}/>
                    </div>
                    <div>
                        <label>Sexe :</label>
                        <div>
                            <input type='radio' name='sexe' value='Homme'  onChange={(ev)=>this.handleChangeSexe(ev)}/>
                            <label htmlFor='sexe'>Homme</label>
                            <input type='radio' name='sexe' value='Femme'  onChange={(ev)=>this.handleChangeSexe(ev)}/>
                            <label htmlFor='sexe'>Femme</label>
                        </div>
                    </div>
                    <div>
                        <label>Nationnalite :</label>
                        <div>
                            <input type='radio' name='nationnalite' value='Marocaine' onChange={(ev)=>this.handleChangeNationnalite(ev)}/>
                            <label htmlFor='nationnalite'>Marocaine</label>
                            <input type='radio' name='nationnalite' value='Etranege'  onChange={(ev)=>this.handleChangeNationnalite(ev)}/>
                            <label htmlFor='nationnalite'>Etranege</label>
                        </div>
                    </div>
                    <div>
                        <label>Pays :</label>
                        <select  onChange={(ev)=>this.handleChangePays(ev)}>
                            <option value={'Maroc'}>Maroc</option>
                            <option value={'France'}>France</option>
                            <option value={'Spain'}>Spain</option>
                            <option value={'Senegale'}>Senegale</option>
                            <option value={'Camirone'}>Camirone</option>
                            <option value={'Algerie'}>Algerie</option>
                            <option value={'Egypte'}>Egypte</option>
                            <option value={'Tunisie'}>Tunisie</option>
                        </select>
                    </div>
                    <div>
                        <label>Interet :</label>
                        <div>
                            <input type='checkbox' value='lecteur' onChange={(ev)=>this.handleChangeInteret(ev)}/>
                            <label>Lecteur</label>
                            <input type='checkbox' value='cinema' onChange={(ev)=>this.handleChangeInteret(ev)}/>
                            <label>Cinema</label>
                            <input type='checkbox' value='sport' onChange={(ev)=>this.handleChangeInteret(ev)}/>
                            <label>Sport</label>
                            <input type='checkbox' value='theatre' onChange={(ev)=>this.handleChangeInteret(ev)}/>
                            <label>Theatre</label>
                            <input type='checkbox' value='voyage' onChange={(ev)=>this.handleChangeInteret(ev)}/>
                            <label>Voyage</label>
                            <input type='checkbox' value='sciences' onChange={(ev)=>this.handleChangeInteret(ev)}/>
                            <label>Sciences</label>
                        </div>
                    </div>
                    <div>
                        <input type='submit' value='Afficher'/>
                    </div>
                </form>
                <p>{this.state.info}</p> 
            </div>
        )
    }
}

export default Ex21;
