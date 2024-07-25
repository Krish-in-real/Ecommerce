import React from 'react';
import './main.css';

import imag1 from '../../Assets/imag1.png'

const Main = () => {
  return (
    <div className="main-body">
        <div className="imageDiv">
            <img src={imag1} alt="Example"/>
        </div>
    </div>
  );
}

export default Main;
