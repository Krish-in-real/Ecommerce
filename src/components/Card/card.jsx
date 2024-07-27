import React, { useState } from 'react'
import './card.css'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from "react-icons/ai";



function Card({id,imgSrc,title,price,discount}) {
  const [hidden,sethidden] = useState(true);
          return (
            <div className="down">
            <div key={id} 
            className="e-card"
            onMouseEnter={() => sethidden (false)}
            onMouseLeave={() => sethidden (true)}
            >
              <div className="image">
                <img className="card-image" src={imgSrc} alt="" />
              </div>
              
              <div className="add-to-cart">{
                hidden?null:<button className="abs">Add To Cart</button>
              }
                
             </div>
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
}

export default Card;