import React from 'react'
import './BrandCard.css'
const BrandCard = ({key,name,image}) => {
  return (

    <div className='g-container'>
        <div className='img-con '>
            <img src={image} alt=""></img>
        </div>
        <div className='text-container'>
            <h2>
                {name}
            </h2>
        </div>
    </div>
  )
}

export default BrandCard

