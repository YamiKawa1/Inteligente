import React from 'react'
import { Picture } from './styledComponents'
import { HeaderProfile } from './styledComponents'
import {NameTextProfile} from './styledComponents'

export default function ProfilePicture(props) {
  return (
    <div className='d-flex'>
      <HeaderProfile>
        <Picture image={props.img} shape={props.shape} width={props.width} height={props.height} />
      </HeaderProfile>
      
      <NameTextProfile>
        <h6><b>Kelly Jenners</b></h6>
        <p>UI/UX Designer</p>
      </NameTextProfile>
    </div>
    
  )
}
