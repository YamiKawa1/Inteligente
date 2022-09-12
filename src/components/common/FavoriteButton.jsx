import React from 'react'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import './common.css'

export default function FavoriteButton(props) {
  return (
    <i>
        {
        props.active === true ? 
        <button className='NotButton'><span className='Smallsvg Star'><StarRateRoundedIcon/></span></button>  
        : 
        <button className='NotButton'><span className='Smallsvg '><StarBorderRoundedIcon/></span></button>
        }
    </i>
  )
}
