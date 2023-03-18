import React, { Component } from 'react';

class Ex13 extends Component{
    constructor (){
        super();
        this.state = {varInc : 0};
    }
    incr(){
        var s = this.state.varInc+1;
        this.setState({varInc : s});
    }
    render(){
        return (
            <div className='container'>
                <button onClick={()=>this.incr()}>{this.state.varInc}</button>
            </div>
        )
    }
}

export default Ex13;
