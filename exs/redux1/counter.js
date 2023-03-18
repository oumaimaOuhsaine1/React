import React from "react";
import { useState } from "react";

import {useDispatch, useSelector} from "react-redux";
import { incrementAction, decrementAction, incrementByValueAction, restAction } from "./counterAction";

function Counter(){
    const {count} = useSelector(state => state);
    const dispatch = useDispatch();

    
    const [countVal, setInputValue] = useState('');

    const handleIncrement = () => {{dispatch(incrementAction())}};
    const handleDecrement = () => {{dispatch(decrementAction())}};
    const handleIncrementByValue = () => {
        {dispatch(incrementByValueAction(countVal))}
    };
    const handleRest = () => {
        {dispatch(restAction())};
        setInputValue('');  
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="row">
            <p className="col-12 text-center">{count}</p>
            <button type="botton" className="btn btn-success col-4" onClick={handleIncrement}>Increment</button>
            <div></div>
            <button type="botton" className="btn btn-danger col-4" onClick={handleDecrement}>Decrement</button>
            <div></div>
            <div className="col-4">
            <input type="text" value={countVal} onChange={(e)=>handleChange(e)}></input>
            </div>
            <div></div> 
            <button type="botton" className="btn btn-success col-4" onClick={()=>handleIncrementByValue(countVal)}>Increment By Value</button>
            <div></div>
            <button type="botton" className="btn btn-warning col-4" onClick={handleRest}>Rest</button>
        </div>
    );
}

export default Counter;