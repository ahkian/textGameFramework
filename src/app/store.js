import {configureStore } from '@reduxjs/toolkit';
import statsReducer from '../features/stats/statsSlice';
import characterReducer from '../features/character/characterSlice';
import plotReducer from '../features/plot/plotSlice';

export default configureStore({
    reducer: {
        stats: statsReducer,
        character: characterReducer,
        plot: plotReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
})