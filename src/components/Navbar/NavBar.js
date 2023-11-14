import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import './Navbar.css'
import { Link } from 'react-router-dom';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const NavBar = () => {
  return (
  <div>
    <div className='nav-container'>
        <div className='logo'>
           Oversized.
        </div>
        <div className='nav-links'>
          <ul>
            <Link to='/' style={{textDecoration:"none"}}>
              <li>Home</li>
            </Link>
            <Link to='/collections/' style={{textDecoration:"none"}}>
              <li>Collections</li>
            </Link>
            <Link to='/brands/' style={{textDecoration:"none"}}>
              <li>Brands</li>
            </Link>
            <li>Sell</li>
          </ul>
        </div>
      <div className='button-container'>
        Profile
      </div>
    </div>
    <hr></hr>
  </div>

  
  )
}

export default NavBar