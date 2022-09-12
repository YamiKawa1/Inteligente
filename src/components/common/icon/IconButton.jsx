import React, { useState } from 'react'
import '../common.css'

export default function IconButton(props) {
  const[isFavorite, setIsFavorite] = useState(props.active)
  console.log(props.active);

  function handleFavorite() {
    setIsFavorite(!isFavorite) 
  }
  
  return (
    <div>
        {
        isFavorite === true ? 
        <button className='NotButton' onClick={handleFavorite}><span className='Smallsvg' style={{color: props.color}}>{props.iconActive}</span></button>  
        : 
        <button className='NotButton' onClick={handleFavorite}><span className='Smallsvg'>{props.iconInactive}</span></button>
        }
    </div>
  )}
