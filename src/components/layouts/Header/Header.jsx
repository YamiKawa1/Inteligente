import React from 'react'
import ProfilePicture from '../../common/ProfilePicture'
import NavBar from '../NavBar/NavBar'
import HeaderImg from '../../common/HeaderImg'
import { HeaderContainer } from '../styledComponents';
import P1 from '../../../assets/img/P1.jpg'

export default function Header() {
  return (
    <div className='container-fluid'>
      <HeaderContainer>
        <HeaderImg/>
        <div className='d-flex'>
        <ProfilePicture img={P1} width='5em' height='5.5em'/>
        </div>
        <div className='d-flex'>
        <NavBar/>
        </div>
      </HeaderContainer>
      
    </div>
  )
}