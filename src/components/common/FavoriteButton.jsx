import React from 'react'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

export default function FavoriteButton(props) {
  return (
    <i>
        {props.active === true ?  <span className='Smallsvg Star'><StarRateRoundedIcon/></span> : <span className='Smallsvg'><StarBorderRoundedIcon/></span>}
    </i>
  )
}
