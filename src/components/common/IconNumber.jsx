import React from 'react'
import './common.css'

export default function IconNumber(props) {
  return (
    <div className='d-flex'>
        <button className='NotButton'><span className='Smallsvg'>{props.icon}</span></button>
        <p className='NumberAfterIcon'>{props.text}{props.number}</p>
    </div>
  )
}
