import React from 'react'
import '../layouts.css'
import Post from '../Post/Post'
import Button from '../../common/Button'

export default function CenterWall() {
  return (
    <div>
      <Post/>
      <br />
      <div className='LoadMore'>
        <Button active height='2em' text='Load More'/>
      </div>
    </div>
  )
}
