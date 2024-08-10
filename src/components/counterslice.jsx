import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
         reset: false
                },
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload
        },
        resetValue:(state)=>{
            state.value = 0
        },
    },
})

export const{increment,decrement,incrementByAmount, resetValue, toggleReset} = counterSlice.actions

export const incrementSync =(amount)=>(dispatch)=>{
    setTimeout(()=>{
        dispatch(incrementByAmount(amount))
    },500)
}

export const selectCount =(state)=>state.counter.value

export const selectReset =(state)=>state.counter.reset

export default counterSlice.reducer
