import React from 'react'
import '../layouts.css'
import { PERFIL } from '../../../data/data'

export default function About() {
  return (
    <div className='Menu'>
        <h1>About</h1>
        <p>{PERFIL[0].About}</p>
        <h1>Joined</h1>
        <p>{PERFIL[0].Joined}</p>
        <h1>Lives</h1>
        <p>{PERFIL[0].Lives}</p>
        <h1>Email</h1>
        <p>{PERFIL[0].Email}</p>
        <h1>Website</h1>
        <p>{PERFIL[0].Website}</p>
    </div>
  )
}
