import React from 'react'
import '../layouts.css'
import PhotoGroup from '../../common/PhotoGroup'

export default function Polls() {
  return (
    <div className='Menu'>
        <h1>Polls</h1>
        <p>Who is the best actor in Marvel Cinematic Universe?</p>
        <input type="radio" id="huey" name="drone" value="criss" checked/><label>Criss Hemsworth</label>
        <div className='Percentage'></div>
        <PhotoGroup/>
        <br />
        <input type="radio" id="dewey" name="drone" value="dewey"/><label>Robert Downey Junior</label>
        <div className='Percentage'></div>
        <PhotoGroup/>
        <br />
    </div>
  )
}
