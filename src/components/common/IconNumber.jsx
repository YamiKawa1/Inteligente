import React from 'react'
import './common.css'
import IconButton from './icon/IconButton'

export default function IconNumber(props) {
  return (
    <div className='d-flex'>
        <IconButton active={props.active} iconActive={props.iconActive} iconInactive={props.iconInactive} color={props.color}/>
        <p className='NumberAfterIcon'>{props.text}{props.number}</p>
    </div>
  )
}
