import React from 'react'
import { Picture } from './styledComponents'
import './common.css'
import Button from './Button'
// import P1 from '../../assets/img/P1.jpg'
import P2 from '../../assets/img/P2.jpg'
// import P3 from '../../assets/img/P3.jpg'
// import P4 from '../../assets/img/P4.jpg'
// import P5 from '../../assets/img/P5.jpg'
// import P6 from '../../assets/img/P6.jpg'
// import P7 from '../../assets/img/P7.jpg'
// import P8 from '../../assets/img/P8.jpg'
// import P9 from '../../assets/img/P9.jpg'

export default function PictureTextButton(props) {
  return (
    <div className='flexbox'>
        <Picture image={props.image} shape={props.shape} width={props.width} height={props.height} />
        <div className='NameSubtitle'>
          <h3>Name</h3>
          <p>Subtitle</p>
        </div>
        <div>
          <Button active={true} height='1px' text={P2}></Button>
        </div>
    </div>
  )
}
