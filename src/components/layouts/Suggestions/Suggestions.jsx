import React from 'react'
import  PictureTextButton from '../../common/PictureTextButton'
import '../layouts.css'
import P1 from '../../../assets/img/P1.jpg'
import P2 from '../../../assets/img/P2.jpg'
import P3 from '../../../assets/img/P3.jpg'
import P4 from '../../../assets/img/P4.jpg'
import P5 from '../../../assets/img/P5.jpg'
import P6 from '../../../assets/img/P6.jpg'
import P9 from '../../../assets/img/P9.jpg'


export default function Suggestions() {
  return (
    <div>
        <div className='Menu'>
          <h1>Suggestions</h1>
          <PictureTextButton image={P1} shape='circle' width='1.5em' height='1.5em' name='Lorenzo Nostrade' subtitle='1 Mutual Friend' isButton button/>
          <PictureTextButton image={P2} shape='circle' width='1.5em' height='1.5em' name='Paola Nostrade' subtitle='1 Mutual Friend' isButton button/>
          <PictureTextButton image={P3} shape='circle' width='1.5em' height='1.5em' name='Juan De las nieves' subtitle='1 Mutual Friend' isButton button/>
          <PictureTextButton image={P4} shape='circle' width='1.5em' height='1.5em' name='Nerd Stark' subtitle='1 Mutual Friend' isButton button/>
          <PictureTextButton image={P5} shape='circle' width='1.5em' height='1.5em' name='Snoob Patrol' subtitle='1 Mutual Friend' isButton button/>
          <PictureTextButton image={P6} shape='circle' width='1.5em' height='1.5em' name='Nombre Random' subtitle='1 Mutual Friend' isButton button/>
          <PictureTextButton image={P9} shape='circle' width='1.5em' height='1.5em' name='Michael Jackson' subtitle='1 Mutual Friend' isButton button/>
        </div>
    </div>
  )
}
