import React from 'react'
import ProfilePicture from '../../common/ProfilePicture'
import NavBar from '../NavBar/NavBar'
import HeaderImg from '../../common/HeaderImg'
import { HeaderContainer } from '../styledComponents';

export default function Header() {
  return (
    <div className='container-fluid'>
      <HeaderContainer>
        <HeaderImg/>
        <ProfilePicture/>
        <NavBar/>
      </HeaderContainer>
      
    </div>
  )
}