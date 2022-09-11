import React from 'react'
import Header from '../layouts/Header/Header'
import CenterWall from '../layouts/CenterWall/CenterWall'
import LeftWall from '../layouts/LeftWall/LeftWall'
import RigthWall from '../layouts/RigthWall/RigthWall'

export default function Main() {
  return (
    <div>
        <Header/>
        <div className='container-fluid'>
            <div className='d-flex justify-content-between'>
                <div>
                    <LeftWall/>
                </div>
                <div>
                    <CenterWall/>
                </div>
                <div>
                    <RigthWall/>    
                </div>
            </div>
        </div>
    </div>
  )
}
