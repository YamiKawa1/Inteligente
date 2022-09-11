import React from 'react'
import '../layouts.css'
import { Picture } from '../../common/styledComponents'
import P1 from '../../../assets/img/P1.jpg'
import P2 from '../../../assets/img/P2.jpg'
import P3 from '../../../assets/img/P3.jpg'
import P4 from '../../../assets/img/P4.jpg'
import P5 from '../../../assets/img/P5.jpg'
import P6 from '../../../assets/img/P6.jpg'
import P7 from '../../../assets/img/P7.jpg'
import P8 from '../../../assets/img/P8.jpg'
import P9 from '../../../assets/img/P9.jpg'

export default function LatestPhotos() {
  return (
    <div className='Menu'>
        <h1>Latest Photos</h1>
        <div className='PhotoGroup'>
          <Picture image={P1} width='2.5em' height='2.5em'/>
          <Picture image={P2} width='2.5em' height='2.5em'/>
          <Picture image={P3} width='2.5em' height='2.5em'/>
          <Picture image={P4} width='2.5em' height='2.5em'/>
          <Picture image={P5} width='2.5em' height='2.5em'/>
          <Picture image={P6} width='2.5em' height='2.5em'/>
          <Picture image={P7} width='2.5em' height='2.5em'/>
          <Picture image={P8} width='2.5em' height='2.5em'/>
          <Picture image={P9} width='2.5em' height='2.5em'/>
        </div>
    </div>
  )
}
