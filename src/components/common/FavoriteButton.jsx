import React, { useState } from 'react'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import './common.css'

export default function FavoriteButton(props) {
  const[isFavorite, setIsFavorite] = useState(props.active)
  console.log(props.active);

  function handleFavorite() {
    setIsFavorite(!isFavorite) 
  }
  
  return (
    <div>
        {
        isFavorite === true ? 
        <button className='NotButton' onClick={handleFavorite}><span className='Smallsvg Star'><StarRateRoundedIcon/></span></button>  
        : 
        <button className='NotButton' onClick={handleFavorite}><span className='Smallsvg'><StarBorderRoundedIcon/></span></button>
        }
    </div>
  )}
