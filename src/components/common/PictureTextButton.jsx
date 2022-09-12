import React from 'react'
import { Picture } from './styledComponents'
import './common.css'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import  IconButton from './icon/IconButton';

export default function PictureTextButton(props) {
  return (
    <div className='flexbox'>
      
      <Picture image={props.image} shape={props.shape} width={props.width} height={props.height} />

      <div className='NameSubtitle'>
        <h3><b>{props.name}</b></h3>
        <p>{props.subtitle}</p>
      </div>

      { 
        props.isButton === true ?
          <div className='ms-auto'> 
          {
          props.button === true ?  <button className='AddFriendBtn Smallsvg'><PersonAddIcon/></button> 
          : 
          <IconButton active={props.active} iconActive={props.iconActive} iconInactive={props.iconInactive}/>
          }  
          </div>
        :
          null
      }
      
    </div>
  )
}
