import React, { Component } from 'react';

class Ex16 extends Component{
    constructor (props){
        super(props);
        this.state = {
            dataS : {
                isGoing : true,
                numbreOfGuests : 2
            }
        };
    }
    
    handleChanage(e) {
        let data = this.state.dataS;
        let tar = e.target;
        let valueTa = tar.type == 'checkbox'? tar.checked:tar.value;
        let nameTar =tar.name;
        data.nameTar = valueTa; 
        this.setState({dataS : data});
    }
    render(){
        return (
            <div className='container'>
                <form method='' action=''>
                    <h1>Welcom</h1>
                    <div>
                        <label>Participe :</label>
                        <input type='checkbox' name='isGoing' id='isGoing' checked={this.state.dataS.isGoing} onChange={(ev)=>this.handleChanage(ev)}/>
                    </div>
                    <div>
                        <label>Nombre d invites :</label>
                        <input type='numbre' name='numbreOfGuests' id='numbreOfGuests' value={this.state.dataS.numbreOfGuests} onChange={(ev)=>this.handleChanage(ev)}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Ex16;
