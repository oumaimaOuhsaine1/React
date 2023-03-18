import React, { Component } from 'react';

class Ex11 extends Component{
    render(){
        const shoot = () => alert('Great Shot');
        return (<button onClick={shoot}>Take the Shot</button>);
    }
}

export default Ex11;
