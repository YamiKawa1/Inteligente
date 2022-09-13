import React from 'react'
import { Picture } from './styledComponents'
import './common.css'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import  IconButton from './IconButton';

export default function PictureTextButton(props) {
  return (
    <div className='flexbox'>
      
      <Picture image={props.image} shape={props.shape} width={props.width} height={props.height} />

      <div className='NameSubtitle'>
        <h3><b>{props.name}</b></h3>
        
        {props.mutualFriends? <p>{props.mutualFriends} Mutual Friends</p>: null}
        {props.category ? <p>{props.category}</p> : null}
        {props.time ? <p>{props.time}</p> : null}
      </div>

      { 
        props.isButton === true ?
          <div className='ms-auto'> 
          {
          props.button === true ?  <button className='AddFriendBtn Smallsvg'><PersonAddIcon/></button> 
          : 
          <IconButton active={props.active} iconActive={props.iconActive} iconInactive={props.iconInactive} color={props.color}/>
          }  
          </div>
        :
          null
      }
      
    </div>
  )
}
