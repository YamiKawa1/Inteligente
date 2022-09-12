import React from 'react'
import { Picture } from './styledComponents'
import P2 from '../../assets/img/P2.jpg'
import P3 from '../../assets/img/P3.jpg'
import P4 from '../../assets/img/P4.jpg'
import P5 from '../../assets/img/P5.jpg'
import P6 from '../../assets/img/P6.jpg'
import './common.css'

export default function PhotoGroup(props) {
  return (
    <div className='GroupPhotos'>
      <div className='Group1'><Picture shape='circle' image={P2} width='1.3em' height='1.3em'/></div>
      <div className='Group2'><Picture shape='circle' image={P3} width='1.3em' height='1.3em'/></div>
      <div className='Group3'><Picture shape='circle' image={P4} width='1.3em' height='1.3em'/></div>
      <div className='Group4'><Picture shape='circle' image={P5} width='1.3em' height='1.3em'/></div>
      <div className='Group5'><Picture shape='circle' image={P6} width='1.3em' height='1.3em'/></div>
    </div>
  )
}
