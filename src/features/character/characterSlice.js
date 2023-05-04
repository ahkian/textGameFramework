import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: "Character",
    initialState : {
        "Name": ""
    },
    reducers: {
        setAttr: (state, action) => {state[action.payload.stat] = action.payload.value}
    }
})

export const { setAttr } = characterSlice.actions;
export default characterSlice.reducer