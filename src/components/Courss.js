import React from 'react'
import tuwaiqLogo from "../images/tuwaiq-logo.jpg"

function Courss({img, txt}) {
  
  return (
    <div className='card'>
      <div className="head">
        <img src={tuwaiqLogo} />
        <div className="twitte">
          <p className='name'>Tuwaiq Academy</p>
          <p className='text'>{txt.split(" ").map(el => el.startsWith("#") || el.startsWith("http") ? <span className='hash'> {el} </span>: ` ${el} `)}</p>
        </div>
      </div>
        <img src={img} className="img-course"/>
    </div>
  )
}

export default Courss