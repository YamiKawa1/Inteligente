import React from 'react'
import '../layouts.css'
import LatestPhotos from '../LatestPhotos/LatestPhotos'
import Suggestions from '../Suggestions/Suggestions'
import Polls from '../Polls/Polls'


export default function RigthWall() {
  return (
    <div className='Rigth'>
      <LatestPhotos/>
      <Suggestions/>
      <Polls/>
    </div>
  )
}
