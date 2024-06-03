import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 9
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action)=>{
            state.value += action.payload
        },
        dec: (state, action)=> {
            state.value -= action.payload
        },
        reset: (state)=>{
            state.value = 0
        }
    }
})

export const {increment, dec} = counterSlice.actions
export default counterSlice.reducer