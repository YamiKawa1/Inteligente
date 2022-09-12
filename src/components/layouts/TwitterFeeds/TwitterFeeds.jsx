import React from 'react'
import '../layouts.css'
import PictureTextButton from '../../common/PictureTextButton'
import P1 from '../../../assets/img/P1.jpg'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { TWITTERFEEDS } from '../../../data/data';


export default function TwitterFeeds() {
  

  
  return (
    <div className='Menu'>
        <h1>Twitter Feeds</h1>
        {
          TWITTERFEEDS.map(twitt => {
            console.log(twitt.Name, twitt.Username, twitt.Twitt);
            return (
              <div key={twitt.Name}>
                  <PictureTextButton image={P1} shape='circle' width='1.3em' height='1.3em' name={twitt.Name} subtitle={twitt.Username} isButton active={twitt.Favorite} iconActive={<StarRoundedIcon/>} iconInactive={<StarOutlineRoundedIcon/>} color='#FFAA00'/>
                  <p>{twitt.Twitt}</p>
                  <p className='Hashtag'>{twitt.Hashtags.map(Hashtag=> '#' + Hashtag+ ' ')}</p> 
              </div>
            )
          })
        }
    </div>
  )
}
