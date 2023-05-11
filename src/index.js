import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
// import { configureStore } from '@reduxjs/toolkit';
import {store} from "./redux/reducers/store.js"
import 'react-toastify/dist/ReactToastify.css';

// const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
