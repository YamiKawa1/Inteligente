import React from 'react'
import Header from '../layouts/Header/Header'
import CenterWall from '../layouts/CenterWall/CenterWall'
import LeftWall from '../layouts/LeftWall/LeftWall'
import RigthWall from '../layouts/RigthWall/RigthWall'
import './Main.css'

export default function Main() {
  return (
    <div className='container-fluid'>
        <Header/>
            <div className='flexbox'>
                <div className='Left me-auto'>
                    <LeftWall/>
                </div>
                <div className='Center me-auto'>
                    <CenterWall/>
                </div>
                <div className='Rigth ms-auto'>
                    <RigthWall/>    
                </div>
            </div>
    </div>
  )
}
