import React from 'react'
import { Picture } from './styledComponents'
import './common.css'
// import P1 from '../../assets/img/P1.jpg'
// import P2 from '../../assets/img/P2.jpg'
// import P3 from '../../assets/img/P3.jpg'
// import P4 from '../../assets/img/P4.jpg'
// import P5 from '../../assets/img/P5.jpg'
// import P6 from '../../assets/img/P6.jpg'
// import P7 from '../../assets/img/P7.jpg'
// import P8 from '../../assets/img/P8.jpg'
// import P9 from '../../assets/img/P9.jpg'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FavoriteButton from './FavoriteButton';

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
          {props.button === true ?  <button className='AddFriendBtn Smallsvg'><PersonAddIcon/></button> : <FavoriteButton active={props.active}/>}  
          </div>
        :
          null
      }
      
    </div>
  )
}
