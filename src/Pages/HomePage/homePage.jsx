import React from 'react';
import './homePage.css';
import Home from '../../components/Home/home';
import Navbar from '../../components/Navbar/navbar';
import Sidebar from '../../components/Sidebar/sidebar';
import Main from '../../components/Main/main';
import Product from '../../components/Product/product';
import Card from '../../components/Card/card';


function HomePage() {
  return (
    <div className="HomePage">
      <div className="main-content">
        <Home />
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
      <Card />
      </div>
    </div>
  );
}

export default HomePage;