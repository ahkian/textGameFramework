import { createSlice } from "@reduxjs/toolkit";

export const statsSlice = createSlice({
    name: "Stats",
    initialState: {
       "Health": 100,
       "AliveTF": true
    },
    reducers: {
        increment: (state, action) => {state[action.payload.stat] + action.payload.value <= 100 ? state[action.payload.stat] += action.payload.value : state[action.payload.stat] = state[action.payload.stat]},
        decrement: (state, action) => {state[action.payload.stat] - action.payload.value >= 0 ? state[action.payload.stat] -= action.payload.value : state[action.payload.stat] = state[action.payload.stat]},
        setTF: (state, action) => {action.payload.stat.includes("TF") ? state[action.payload.stat] = !state[action.payload.stat]: state[action.payload.stat] = state[action.payload.stat]}
    }
})

export const { increment, decrement, setTF } = statsSlice.actions;
export default statsSlice.reducer