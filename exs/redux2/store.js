import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counterSlice";


const store2 = configureStore({
    reducer : {
        counter2 : counterSlice,
    }
});

export default store2;