import React from 'react'
import './CollectionCard.css'
import { useState,useEffect } from 'react'
const CollectionCard = ({key,name,description,rate,image}) => {

const [img,setImg]=useState('')

useEffect(() => {
    setImg(image)
}, [img])

  return (
    <div className='main-container'>
        <div className='img-container'>
            <img src={image} alt=""></img>
        </div>
        <div className='content-container'>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className='lower-container'>
           
            <div className='price-container'>
              <h2>Price :</h2>
              <h3>{rate}</h3>
            </div>

            <div className='button-container'>
                     buy
            </div>
            </div>
        </div>
       
    </div>
  )
}

export default CollectionCard