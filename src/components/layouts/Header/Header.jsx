import React from 'react'
import ProfilePicture from '../../common/ProfilePicture'
import NavBar from '../NavBar/NavBar'
import {HeaderImage} from '../../common/styledComponents'
import  '../layouts.css';
import {PROFILE} from '../../../data/data'

export default function Header() {
  return (
      <div className='HeaderContainer'>
        <HeaderImage image={PROFILE[0].HeaderImage}/>
        <ProfilePicture img={PROFILE[0].ProfilePicture} width='5em' height='5.5em'/>
        <div className='d-flex'>
          <NavBar/>
        </div>
      </div>
  )
}