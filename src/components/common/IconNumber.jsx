import React from 'react'
import './common.css'

export default function IconNumber(props) {
  return (
    <div className='d-flex'>
        <span className='Smallsvg'>{props.icon}</span>
        <p className='NumberAfterIcon'>{props.text}{props.number}</p>
    </div>
  )
}
