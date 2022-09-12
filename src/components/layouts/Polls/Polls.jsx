import React from 'react'
import '../layouts.css'
import PhotoGroup from '../../common/PhotoGroup'

export default function Polls() {
  return (
    <div className='Menu'>
        <h1>Polls</h1>
        <p>Who is the best actor in Marvel Cinematic Universe?</p>
        <input type="radio" /><label>Criss Hemsworth</label>
        <PhotoGroup/>
        <br />
        <input type="radio" /><label>Robert Downey Junior</label>
        <PhotoGroup/>
        <br />

    </div>
  )
}
