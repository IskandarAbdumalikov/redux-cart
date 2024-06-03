import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: "text",
    initialState: {
        value: "hello world"
    },
    reducers: {
        changeText: (state, action)=>{
            state.value = action.payload
        }
    }
})

export const {changeText} = textSlice.actions
export default textSlice.reducer