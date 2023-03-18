import React, { Component } from 'react';

class Ex20 extends Component{
    constructor (props){
        super(props);
        this.state = {
            id: '',modeTransfent:'', distance:'', poids:'', total:''
        };
    }
    handleIdColis(e){
        let ValueTarg = e.target.value;
        let id = this.state.id;
        id = ValueTarg;
        this.setState({id});
    }
    handleChangemodeTransfent(e){
        let ValueTarg = e.target.value;
        let modeTransfent = this.state.modeTransfent;
        modeTransfent = ValueTarg;
        this.setState({modeTransfent});
    }
    handleChangeDistance(e){
        let ValueTarg = e.target.value;
        let distance = this.state.distance;
        distance = ValueTarg;
        this.setState({distance});
    }
    handleChangePoids(e){
        let ValueTarg = e.target.value;
        let poids = this.state.poids;
        poids = ValueTarg;
        this.setState({poids});
    }
    calculePrixTotal(){
        let modeTransfent = this.state.modeTransfent;
        let distance = parseInt(this.state.distance);
        let poids = parseInt(this.state.poids);
        let prixTotal = parseInt(this.state.total);
        if (poids<10){
            prixTotal = distance*(1/2);
        } 
        if (poids>10){
            prixTotal = distance*(poids/10)*(0.3);
        } 
        if (modeTransfent == 'Express'){
            prixTotal = prixTotal*1.2;
        } 
        this.setState({total : prixTotal});
    }
    handleSubmit(e){
        this.calculePrixTotal();
        e.preventDefault();
    }
    render(){
        return (
            <div className='container'>
                <form action='' method='' onSubmit={(ev)=>this.handleSubmit(ev)}>
                    <fieldset>
                        <legend>Calcul frais transfent de colis</legend>   
                        <div>
                            <label>N de colis :</label>
                            <input type='text' name='colis' id='colis'  value={this.state.id}  onChange={(ev)=>this.handleIdColis(ev)}/>
                        </div>
                        <div>
                            <label>Mode de transfent :</label>
                            <input type='radio' value='Express' name='mode' onChange={(ev)=>this.handleChangemodeTransfent(ev)}/>
                            <label>Express</label>
                            <input type='radio' value='Normal' checked={true}  name='mode' onChange={(ev)=>this.handleChangemodeTransfent(ev)}/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <label>Distance :</label>
                            <input type='text' name='detance' id='destance' value={this.state.distance} onChange={(ev)=>this.handleChangeDistance(ev)}/>
                        </div>
                        <div>
                            <label>Poids :</label>
                            <input type='text' name='poids' id='poids' value={this.state.poids} onChange={(ev)=>this.handleChangePoids(ev)}/>
                        </div>
                        <div>
                            <label>Total :</label>
                            <input type='text' disabled={true} name='total' id='total' value={this.state.total}/>
                        </div>
                        <div>
                            <input type='submit' value='Caculer'/>
                            <input type='reset' value='Effacer'/>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default Ex20;
