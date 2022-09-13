import React from 'react'
import PictureTextButton from '../../common/PictureTextButton'
import IconNumber from '../../common/IconNumber'
import PhotoGroup from '../../common/PhotoGroup'
import {PostImage} from '../styledComponents'
import Button from '../../common/Button'
import '../layouts.css'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { PUBLICATIONS } from '../../../data/data'

export default function Post() {
  return (
    <div>
    {
      PUBLICATIONS.map(post => {
        return <div className='Post'>
     
        <PictureTextButton image={post.ProfilePicture} shape='circle' width='2em' height='2em' name={post.Name} time={post.Time}/>
  
        <p></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ea dolorem rerum asperiores commodi nulla tenetur ipsa quod fuga. Id dolore odio nostrum tenetur, quisquam officiis molestias et rerum rem.</p>
        
        <PostImage image={post.Photo}/>
  
          <div className='d-flex'>
          <IconNumber active={post.IsLiked} iconActive={<FavoriteRoundedIcon/>} iconInactive={<FavoriteBorderRoundedIcon/>} color='red' number={post.Likes}/>
          <PhotoGroup/>
          <div className='ms-auto d-flex'>
            <IconNumber active={false} iconInactive={<ChatBubbleOutlineRoundedIcon/>} color='#692FB3' number={post.CommentsNumber}/>
            <IconNumber active={post.IsShared} iconActive={<ShareRoundedIcon/>} iconInactive={<ShareRoundedIcon/>} color='#692FB3' number={post.SharesNumber}/>
          </div>
  
        </div>
        {
          post.Comments.map(comment => {
            return <div className='Comment'>
              <PictureTextButton image={comment.ProfilePicture} shape='circle' width='1.8em' height='1.8em' name={comment.Name}/>
              <p>{comment.PostText}</p>
            </div>
          })
        }
        <div className='MakeComment'>
          <div className="input-group">
            <textarea className="form-control" aria-label="With textarea" placeholder="Add Comment..."></textarea>
          </div>
        </div>
        
        <Button active={true} height='2em' text='Post Comment'/>
      </div>
      })
    }
    </div>
    
  )
}
 