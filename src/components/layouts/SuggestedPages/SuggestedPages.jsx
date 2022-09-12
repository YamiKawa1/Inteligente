import React from 'react'
import '../layouts.css'
import  PictureTextButton from '../../common/PictureTextButton'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { SUGGESTEDPAGES } from '../../../data/data'

export default function SuggestedPages() {
  return (
    <div>
        <div className='Menu'>
          <h1>Suggested Pages</h1>
          {
          SUGGESTEDPAGES.map(page => {
            return <PictureTextButton 
            image={page.ProfilePicture} 
            shape='circle' 
            width='1.5em' 
            height='1.5em' 
            name={page.Name}
            category={page.Category} 
            isButton={true}
            active={page.Favorite} 
            iconActive={<StarRoundedIcon/>} 
            iconInactive={<StarOutlineRoundedIcon/>} 
            color='#FFAA00'
            />
          })
          }
        </div>
    </div>
  )
}

