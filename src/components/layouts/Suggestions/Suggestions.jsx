import React from 'react'
import  PictureTextButton from '../../common/PictureTextButton'
import '../layouts.css'
import { SUGGESTIONS } from '../../../data/data'


export default function Suggestions() {
  return (
    <div>
        <div className='Menu'>
          <h1>Suggestions</h1>
          {
            SUGGESTIONS.map(sugestion => {
              return <PictureTextButton 
              image={sugestion.ProfilePicture} 
              shape='circle' 
              width='1.5em' 
              height='1.5em' 
              name={sugestion.Name} 
              mutualFriends={sugestion.MutualFriends} 
              isButton={true}
              button={true}/>
            })
          }
        </div>
    </div>
  )
}
