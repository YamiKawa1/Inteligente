import React from 'react'
import PictureTextButton from '../../common/PictureTextButton'
import {PostImage} from '../styledComponents'
import P1 from '../../../assets/img/P1.jpg'
import POST1 from '../../../assets/img/POST1.jpg'
import '../layouts.css'

export default function Post() {
  return (
    <div className='Post'>
      <PictureTextButton image={P1} shape='circle' width='2em' height='2em' name='Lorenzo Nostrade' subtitle='13 Dec 2022 at 1:16 AM'/>
      <p></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ea dolorem rerum asperiores commodi nulla tenetur ipsa quod fuga. Id dolore odio nostrum tenetur, quisquam officiis molestias et rerum rem.</p>
      <PostImage image={POST1}/>
    </div>

  )
}
