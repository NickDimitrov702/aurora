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
// https://nickdimitrov702.github.io/aurora/
// When the page reloads onec one of the links is pushed, the broswer responds with page not found, need to fix that.
// I can fix it by removing the "Link" in NavBar, since ther is no component to reffer to, and Im using scrowwintoview instead. 

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
