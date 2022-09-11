import React from 'react'
import  PictureTextButton from '../../common/PictureTextButton'
import '../layouts.css'
import P1 from '../../../assets/img/P1.jpg'
import P2 from '../../../assets/img/P2.jpg'
import P3 from '../../../assets/img/P3.jpg'
import P4 from '../../../assets/img/P4.jpg'
import P5 from '../../../assets/img/P5.jpg'
import P6 from '../../../assets/img/P6.jpg'
import P7 from '../../../assets/img/P7.jpg'
import P8 from '../../../assets/img/P8.jpg'
import P9 from '../../../assets/img/P9.jpg'

export default function Suggestions() {
  return (
    <div>
        <div className='Menu'>
          <h1>Suggestions</h1>
          <PictureTextButton image={P1} shape='circle' width='1em' height='1em'/>
        </div>
    </div>
  )
}
