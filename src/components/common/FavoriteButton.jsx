import React from 'react'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

export default function FavoriteButton(props) {
  return (
    <i>
        {
        props.active === true ? 
        <Button className='NotButton' onClick={changeColor(props.active)}><span className='Smallsvg Star'><StarRateRoundedIcon/></span></Button>  
        : 
        <Button className='NotButton' onClick={changeColor(props.active)}><span className='Smallsvg'><StarBorderRoundedIcon/></span></Button>
        }
    </i>
  )
}

function Button({onClick, children}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function changeColor(active) {
 
}