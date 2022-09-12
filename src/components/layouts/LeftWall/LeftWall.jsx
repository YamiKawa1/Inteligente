import React from 'react'
import About from '../About/About'
import SuggestedPages from '../SuggestedPages/SuggestedPages'
import TwitterFeeds from '../TwitterFeeds/TwitterFeeds'

export default function LeftWall() {
  return (
    <div className='Left'>
      <About/>
      <SuggestedPages/>
      <TwitterFeeds/>
    </div>
  )
}
