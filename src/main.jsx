import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Checkout from './Checkout.jsx'
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
