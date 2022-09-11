import React from 'react'
import  '../layouts.css'
import Button from '../../common/Button'

export default function NavBar() {
  return (
    <div className='mt-2 mb-2 NavBarContainer'>
      <div className='d-flex'>
          <Button active={true} text='Feed'/>
          <Button active={false} text='About'/>
          <Button active={false} text='Photos'/>
          <Button active={false} text='Friends'/>
          <div className='ms-auto me-2'>
            <Button active={true} text='Edit'/>
          </div>
      </div>
    </div>
  )
}
