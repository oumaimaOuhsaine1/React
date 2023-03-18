import React, { Component } from 'react';

class Ex17 extends Component{
    constructor (props){
        super(props);
        this.state = {
            num : 0
        };
    }
    
    handleChanage(e) {
        let data = this.state.num;
        data = e.target.value;
        this.setState({num : data});
    }
    calculCarre(e){
        let valInsert = parseInt(this.state.num);
        let res = !isNaN(valInsert)? valInsert**2:'La valeur qui vous avez enter n est pas un nombre ';
        alert(res);
        e.preventDefault();
    }
    render(){
        return (
            <div className='container'>
                <form method='' action='' onSubmit={(ev)=>this.calculCarre(ev)}>
                    <h1>Welcom</h1>
                    <div>
                        <label>Enter un nombre :</label>
                        <input type='text' name='nombre' id='nombre' value={this.state.num} onChange={(ev)=>this.handleChanage(ev)}/>
                    </div>
                    <input type='submit' value='Carre'/>
                </form>
            </div>
        )
    }
}
export default Ex17;
