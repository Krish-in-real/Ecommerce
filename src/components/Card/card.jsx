import React from 'react'
import './card.css'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from "react-icons/ai";



function Card({id,imgSrc,title,price,discount}) {
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
}

export default Card;