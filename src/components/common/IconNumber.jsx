import React from 'react'
import './common.css'
import IconButton from './IconButton'

export default function IconNumber(props) {
  return (
    <div className='d-flex'>
        <IconButton active={props.active} iconActive={props.iconActive} iconInactive={props.iconInactive} color={props.color}/>
        <p className='NumberAfterIcon'>{props.number >= 1000 ? (parseInt(props.number / 1000)) + 'k' : props.number}</p>
    </div>
  )
}
