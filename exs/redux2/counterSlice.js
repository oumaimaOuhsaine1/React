import {createSlice} from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        count : 0,
    },
    reducers : {
        increment : (state)=>{
            state.count++;
            return state;
        },
        decrement : (state)=>{
            state.count--;
            return state;
        },
        rest : (state)=>{
            state.count = 0;
        },
        incrementByValue : (state, action)=>{
            state.count += parseInt(action.payload);
        },
    }
})

export const {increment , decrement, rest, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;