import React from 'react'
import './HeroSection.css';
import BannerImage from '../assets/images/bannerImage.png'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
const HeroSection = () => {

  return (
    <div className='hero-container'>
        <div className="hero-content">
            <h2>The Luxury <br/>Fashion</h2>
            <h3>Mens Wear Collection</h3>
            <div className='hero-para'>
           
            <p>
                From the hottest designer collection to the budget friendly
                finds.<br/>We understand fashion is a individual expression
                of style ,<br/>So we strive to provide every a diverse range
                of options to suit every taste and budget.
            </p>
            <Link to='/collections/' style={{textDecoration:"none"}}>
              <div className='shop-button'>
                  Shop
              </div>
            </Link>
            </div>
        </div>
        <div className='hero-img'>
            <img src={BannerImage} alt=""></img>
        </div>
    </div>
  )
}

export default HeroSection