import React from 'react'
import '../layouts.css'

export default function Polls() {
  return (
    <div className='Menu'>
        <h1>Polls</h1>
        <p>Who is the best actor in Marvel Cinematic Universe?</p>
        <input type="radio" /><label>Criss Hemsworth</label>
        <br />
        <input type="radio" /><label>Robert Downey Junior</label>
    </div>
  )
}
