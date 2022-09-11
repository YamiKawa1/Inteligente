import React from 'react'
import ProfilePicture from '../../common/ProfilePicture'
import NavBar from '../NavBar/NavBar'
import HeaderImg from '../../common/HeaderImg'
import  '../layouts.css';
import P1 from '../../../assets/img/P1.jpg'

export default function Header() {
  return (
      <div className='HeaderContainer'>
        <HeaderImg/>
        <ProfilePicture img={P1} width='5em' height='5.5em'/>
        <div className='d-flex'>
          <NavBar/>
        </div>
      </div>
  )
}