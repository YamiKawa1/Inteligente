import React from 'react'
import '../layouts.css'
import PictureTextButton from '../../common/PictureTextButton'
import P1 from '../../../assets/img/P1.jpg'

export default function TwitterFeeds() {
  return (
    <div className='Menu'>
        <h1>Twitter Feeds</h1>
        <PictureTextButton image={P1} shape='circle' width='1.3em' height='1.3em' name='Lorenzo Nostrade' subtitle='@Cataluna' isButton active/>
        <p>I dotn know what to put in this twitter because i am not so cr5eative</p>
        <p className='Hashtag'>#idk #Hello #NeverMind #ThisIsCrazy</p> 
        
        <PictureTextButton image={P1} shape='circle' width='1.3em' height='1.3em' name='Lorenzo Nostrade' subtitle='@Cataluna' isButton/>
        <p>I dotn know what to put in this twitter because i am not so cr5eative</p>
        <p className='Hashtag'>#idk #Hello #NeverMind #ThisIsCrazy</p> 
    </div>
  )
}
