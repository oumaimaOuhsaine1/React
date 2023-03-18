import { INCREMENT , DECREMENT, INCREMENTBYVALUE, REST } from "./type";

export const incrementAction = () =>{
    return {
        type : INCREMENT
    }
}

export const decrementAction = () =>{
    return {
        type : DECREMENT
    }
}

export const incrementByValueAction = (val) =>{
    return {
        type : INCREMENTBYVALUE,
        payload : val
    }
}

export const restAction = () =>{
    return {
        type : REST
    }
}