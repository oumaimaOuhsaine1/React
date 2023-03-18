import React from "react";
import { useState } from "react";

import {useDispatch, useSelector} from "react-redux";
import {increment , decrement, rest , incrementByValue} from "./counterSlice";

function Counter2(){
    const count = useSelector((state) => state.counter2.count);
    const dispatch = useDispatch();
    

    
    const [countVal, setInputValue] = useState('');


    const handleRest = () => {
        {dispatch(rest())};
        setInputValue('');  
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="row">
            <p className="col-12 text-center">{count}</p>
            <button type="botton" className="btn btn-success col-4" onClick={()=>dispatch(increment())}>Increment</button>
            <div></div>
            <button type="botton" className="btn btn-danger col-4" onClick={()=>dispatch(decrement())}>Decrement</button>
            <div></div>
            <div className="col-4">
            <input type="text" value={countVal} onChange={(e)=>handleChange(e)}></input>
            </div>
            <div></div> 
            <button type="botton" className="btn btn-success col-4" onClick={()=>dispatch(incrementByValue(countVal))}>Increment By Value</button>
            <div></div>
            <button type="botton" className="btn btn-warning col-4" onClick={handleRest}>Rest</button>
        </div>
    );
}

export default Counter2;