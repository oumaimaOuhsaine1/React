import { INCREMENT, DECREMENT, INCREMENTBYVALUE, REST } from "./type";

const counterReducer = (state = {count : 0}, action) =>{
    switch(action.type){
        case INCREMENT:
            return {...state, count:state.count+1}
        case DECREMENT:
            return {...state, count:state.count-1}
        case INCREMENTBYVALUE:
            return {...state, count:state.count+parseInt(action.payload)}
        case REST:
            return {...state, count: 0}
        default:
            return state
    }
}

export default counterReducer;