import React from 'react'
import { GeneralButton } from './styledComponents'

export default function Button(props) {
  return (
    <GeneralButton active={props.active} height={props.height}>{props.text}</GeneralButton>
  )
}
