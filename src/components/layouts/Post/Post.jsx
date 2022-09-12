import React from 'react'
import PictureTextButton from '../../common/PictureTextButton'
import IconNumber from '../../common/IconNumber'
import PhotoGroup from '../../common/PhotoGroup'
import {PostImage} from '../styledComponents'
import Button from '../../common/Button'
import P1 from '../../../assets/img/P1.jpg'
import P2 from '../../../assets/img/P2.jpg'
import POST1 from '../../../assets/img/POST1.jpg'
import '../layouts.css'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

export default function Post() {
  return (
    <div className='Post'>
      <PictureTextButton image={P1} shape='circle' width='2em' height='2em' name='Lorenzo Nostrade' subtitle='13 Dec 2022 at 1:16 AM'/>

      <p></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ea dolorem rerum asperiores commodi nulla tenetur ipsa quod fuga. Id dolore odio nostrum tenetur, quisquam officiis molestias et rerum rem.</p>
      
      <PostImage image={POST1}/>

        <div className='d-flex'>
        <IconNumber icon={<FavoriteBorderRoundedIcon/>} text='+' number={1000}/>
        <PhotoGroup/>
        <div className='ms-auto d-flex'>
          <IconNumber icon={<ChatBubbleOutlineRoundedIcon/>} text='+' number={1000}/>
          <IconNumber icon={<ShareRoundedIcon/>} text='+' number={1000}/>
        </div>

      </div>

      <div className='Comment'>
        <PictureTextButton image={P1} shape='circle' width='1.8em' height='1.8em' name='Lorenzo Nostrade'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quam odio atque ratione porro minus voluptate, eos, est optio?</p>
      </div>
      <div className='Comment'>
        <PictureTextButton image={P2} shape='circle' width='1.8em' height='1.8em' name='Lorenzo Nostrade'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. eos, est optio?</p>
      </div>

      <div className='MakeComment'>
        <div className="input-group">
          <textarea className="form-control" aria-label="With textarea" placeholder="Add Comment..."></textarea>
        </div>
      </div>
      
      <Button active={true} height='2em' text='Post Comment'/>
    </div>
  )
}
