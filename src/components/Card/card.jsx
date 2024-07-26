import React from 'react'
import './card.css'
import imag3 from '../../Assets/imag3.png'
import imag4 from '../../Assets/imag4.png'
import imag5 from '../../Assets/imag5.png'
import imag6 from '../../Assets/imag6.png'

//import icons
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from "react-icons/ai";

const Data = [
    {
        id: 1, 
        imgSrc: imag3,
        title: "HAVIT HV-G92 Gamepad", 
        price: 120, 
        discount: 40, 
    },

    {
      id: 2,
      imgSrc: imag4,
      title: "AK-900 Wired Keyboard",
      price: 960,
      discount: 35,
    },

      {
        id: 3, 
        imgSrc: imag5,
        title: 'IPS LCD ', 
        price: 960, 
        discount: 35,
      },

      {
        id: 4, 
        imgSrc: imag6,
        title: 'AK-900 Wired Keyboard', 
        price: 960, 
        discount: 35,
      },
]

function Card() {
  return (
    <div className="mainContainer">
      {
        Data.map( ({id,imgSrc,title,price,discount}) =>{
          return (
            <div key={id} className="e-card">
              <div className="image">
                <img className="card-image" src={imgSrc} alt="" />
              </div>
              <div className="desc">
                <h4>{title}</h4>
                <span>${price}</span>
              </div>
              <div className="star">
                 <AiFillStar className="icon"/>
                 <AiFillStar className="icon"/>
                 <AiFillStar className="icon"/>
                 <AiOutlineStar className="icon" />
                 <AiOutlineStar className="icon" />
              </div>
            </div>
          )
        })
      }
    </div>
    
  )
}

export default Card;