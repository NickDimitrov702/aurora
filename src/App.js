import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import InforBar from './components/infoBar/InfoBar.js'
import NavBar from './components/navBar/NavBar';
import { BrowserRouter, ScrollRestoration, RestoredScroll } from "react-router-dom";
import Hero from './components/Content/hero/Hero.js'
import ProductPage from './components/Content/productPage/ProductPage.js'
import About from './components/Content/links/about/About.js'
import Contacts from './components/Content/links/contacts/Contacts.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <InforBar></InforBar>
        <NavBar></NavBar>
        <Hero></Hero>
        <ProductPage></ProductPage>
        <About></About>
        <Contacts></Contacts>
      </BrowserRouter>
    </div>
  );
}

export default App;
