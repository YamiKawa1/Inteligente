import React from 'react'
import '../layouts.css'
import  PictureTextButton from '../../common/PictureTextButton'
import P1 from '../../../assets/img/P1.jpg'
import P2 from '../../../assets/img/P2.jpg'
import P3 from '../../../assets/img/P3.jpg'
import P4 from '../../../assets/img/P4.jpg'
import P5 from '../../../assets/img/P5.jpg'
import P6 from '../../../assets/img/P6.jpg'
import P9 from '../../../assets/img/P9.jpg'


export default function SuggestedPages() {
  return (
    <div>
        <div className='Menu'>
          <h1>Suggested Pages</h1>
          <PictureTextButton image={P1} shape='circle' width='1.5em' height='1.5em' name='Lorenzo Nostrade' subtitle='Company' isButton active={true}/>
          <PictureTextButton image={P2} shape='circle' width='1.5em' height='1.5em' name='Paola Nostrade' subtitle='Store' isButton active={true}/>
          <PictureTextButton image={P3} shape='circle' width='1.5em' height='1.5em' name='Juan De las nieves' subtitle='Company' isButton active={true}/>
          <PictureTextButton image={P4} shape='circle' width='1.5em' height='1.5em' name='Nerd Stark' subtitle='Local' isButton active={true}/>
          <PictureTextButton image={P5} shape='circle' width='1.5em' height='1.5em' name='Snoob Patrol' subtitle='Company' isButton active={true}/>
          <PictureTextButton image={P6} shape='circle' width='1.5em' height='1.5em' name='Nombre Random' subtitle='Company' isButton active={true}/>
          <PictureTextButton image={P9} shape='circle' width='1.5em' height='1.5em' name='Michael Jackson' subtitle='Company' isButton active={true}/>
        </div>
    </div>
  )
}

