import React from 'react'
import './browsecard.css'

function Browsecard({id,imgSrc,title}) {
  return (
    <div className="efc">
        <div key={id} className="mno">
        <div>
            <img className="rfvc" src={imgSrc} alt="" />
            <h5>{title}</h5>
        </div>
        </div>
    
</div>
  )
}

export default Browsecard;