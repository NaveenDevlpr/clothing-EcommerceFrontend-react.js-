import React from 'react'
import './Brands.css'
import brandItems from '../../utils/brandUtils'
import BrandCard from './BrandCard'
const Brands = () => {
  return (
    <div className='brand-container'>
        {
            brandItems.map((i)=>{
                return(
                    <BrandCard
                    name={i.brandName}
                    image={i.imageURL}
                    key={i.id}

                    />
                )
            })
        }
    </div>
  )
}

export default Brands