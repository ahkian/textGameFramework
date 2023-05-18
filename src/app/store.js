import {configureStore } from '@reduxjs/toolkit';
import statsReducer from '../features/stats/statsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, )

export default configureStore({
    reducer: {
        stats: statsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
})