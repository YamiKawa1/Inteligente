import React from 'react'
import { Picture } from './styledComponents'
import './common.css'

export default function ProfilePicture(props) {
  return (
    <div className='d-flex'>
      <div className='HeaderProfile'>
        <Picture image={props.img} shape={props.shape} width={props.width} height={props.height} />
      </div>
      
      <div className='NameTextProfile'>
        <h6><b>Kelly Jenners</b></h6>
        <p>UI/UX Designer</p>
      </div>
    </div>
    
  )
}
