import React from 'react'
import { Picture } from './styledComponents'
import { HeaderProfile } from './styledComponents'

export default function ProfilePicture(props) {
  return (
    <HeaderProfile>
      <Picture image={props.img} shape={props.shape} width={props.width} height={props.height} />
    </HeaderProfile>
  )
}
