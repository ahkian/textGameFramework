import { createSlice } from "@reduxjs/toolkit";

export const plotSlice = createSlice({
    name: "Plot",
    initialState : {
       "FirstChoice": false,
       "SecondChoice": true
    },
    reducers: {
        setPlotPoint: (state, action) => {state[action.payload.stat] = action.payload.value}
    }
})

export const { setPlotPoint } = plotSlice.actions;
export default plotSlice.reducer