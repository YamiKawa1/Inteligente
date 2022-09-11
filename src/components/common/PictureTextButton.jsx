import React from 'react'
import { Picture } from './styledComponents'
import './common.css'
import Button from './Button'
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

export default function PictureTextButton(props) {
  return (
    <div className='flexbox align-items-start'>
      <span><i class="bi bi-person-plus"></i></span>
      <Picture image={props.image} shape={props.shape} width={props.width} height={props.height} />
      <div className='NameSubtitle'>
        <h3>{props.name}</h3>
        <p>{props.subtitle}</p>
      </div>
      <div className='ms-auto '>
        <button className='AddFriendBtn'><PersonAddIcon/></button>
      </div>
    </div>
  )
}
