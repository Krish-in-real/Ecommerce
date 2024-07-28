import React from 'react';
import './homePage.css';
import Home from '../../components/Home/home';
import Navbar from '../../components/Navbar/navbar';
import Sidebar from '../../components/Sidebar/sidebar';
import Main from '../../components/Main/main';
import Product from '../../components/Product/product';
import Card from '../../components/Card/card';
import Data from '../../Data/carddata';
import Browsecard from '../../components/Browsecard/browsecard';
import Category from '../../Data/cardcategory';

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
        <Product 
          redText="Today's"
          blackText="Flash Sales"
        />
      </div>
      <div className="card">
      {
        Data.map( ({id, imgSrc, title, price, discount})=>{
          return (<Card
            id = {id}
            imgSrc={imgSrc}
            title={title}
            price={price}
            discount={discount}
          />)
        }
      )}
      </div>
      <div className="medium">
        <button className="bds">View All Products</button>
      </div>
      <div className="product">
        <Product 
          redText="Categories"
          blackText="Browse By Category"
        />
      </div>
      <div className="browse">
      {
        Category.map( ({id, imgSrc, title})=>{
          return (<Browsecard
            id = {id}
            imgSrc={imgSrc}
            title={title}
          />)
        }
      )}
      </div>
    </div>
  );
}

export default HomePage;