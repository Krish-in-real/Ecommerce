import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import Main from './components/Main/main';
import Product from './components/Product/product';
import Card from './components/Card/card'


function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Home />
        <Contact />
        <Navbar />
      </div>
      <div className='non-nav'>
      <Sidebar />
      <Main />
      </div>
      <div className="product">
        <Product />
      </div>
      <div className="card">
      <Card />
      </div>
    </div>
  );
}

export default App;