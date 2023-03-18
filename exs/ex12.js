import React, { Component } from 'react';

class Ex12 extends Component{
    render(){
        const shoot = (a) => alert(a);
        return (<button onClick={()=>shoot('Hello')}>Take the Shot</button>);
    }
}

export default Ex12;
