import React from 'react'
import '../layouts.css'
import PhotoGroup from '../../common/PhotoGroup'
import { useState } from 'react'

export default function Polls() {
  const [crissPercentage, setCrissPercentage] = useState('0%');
  const [downeyPercentage, setDowneyPercentage] = useState('0%');

  const [crissVotes, setCrissVote] = useState(0);
  const [downeyVotes, setCDowneyVote] = useState(0);
  
  const transforPercentage =(votes, totalVotes) => {
    let newValue
    if (votes === 0){
      newValue = '0'
    } else {
      newValue = parseInt(votes/totalVotes * 100)
    }
    newValue = newValue +'%'
    return newValue
  }

  function check(e){
    let Member = e.target.value;
    if (Member === 'Criss') {
      setCrissVote(crissVotes + 1)
    } else if (Member === 'Downey') {
      setCDowneyVote(downeyVotes + 1)
    }
    
    let totalVotes = downeyVotes + crissVotes;
    setCrissPercentage(transforPercentage(crissVotes, totalVotes))   
    setDowneyPercentage(transforPercentage(downeyVotes, totalVotes)) 
  }

  return (
    <div className='Menu'>
        <h1>Polls</h1>

        <p>Who is the best actor in Marvel Cinematic Universe?</p>

        
        <input type="radio" id="Criss" name="drone" value="Criss" onClick={check}/><label>Criss Hemsworth</label>
        <span  className = "progress-bar-text"> {crissPercentage} </span> 

        <div className='progress'>
          <div className = "progress-bar" style={{width: crissPercentage}}> 
          </div > 
        </div>

        <PhotoGroup/>
        <br />

        <input type="radio" id="Downey" name="drone" value='Downey' onClick={check}/><label>Robert Downey Junior</label>
        <span  className = "progress-bar-text"> {downeyPercentage} </span> 

        <div className='progress'>
          <div className = "progress-bar" style={{width: downeyPercentage}}> 
          </div > 
        </div>

        <PhotoGroup/>
        <br />
    </div>
  )
}
