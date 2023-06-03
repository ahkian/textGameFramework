import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './pages/Start';
import Layout from './pages/Layout';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return(
    <Provider store={store}>
        <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Start />}/>
            </Route>
          </Routes>
        </PersistGate>
        </BrowserRouter>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
