import React from 'react'
import './product.css'

function Product({redText,blackText}) {
  return (
    <div className="logo1">
    <div className="today">
    <div className="abd"></div>
    <h3>{redText}</h3>
    </div>
       <h1>{blackText}</h1>
    </div>
  )
}

export default Product