import React from 'react'
import PictureTextButton from '../../common/PictureTextButton'
import P1 from '../../../assets/img/P1.jpg'

export default function Post() {
  return (
    <div className='Post'>
      <PictureTextButton image={P1} shape='circle' width='1.3em' height='1.3em' name='Lorenzo Nostrade' subtitle='Company'/>
    </div>
  )
}
