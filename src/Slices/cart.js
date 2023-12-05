import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state , action){
            state.push(action.payload);
        }
        ,
        remove(state , action){
            // due to toolkit we can mutate the state
            return state.filter((product) => product.id !== action.payload);
            console.log(action.payload , state)
        }
    }
})

export const{ add , remove}  = cartSlice.actions;

export default cartSlice.reducer;
