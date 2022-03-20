import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InforBar from './components/infoBar/InfoBar.js'
import NavBar from './components/navBar/NavBar';
import { BrowserRouter } from "react-router-dom";
import Hero from './components/Content/hero/Hero.js'
import ProductPage from './components/Content/productPage/ProductPage.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <InforBar></InforBar>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProductPage></ProductPage>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
