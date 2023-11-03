import React from 'react'
import Headers from '../src/components/Headers'
import { Outlet } from 'react-router-dom'

function Mainlayout() {
  return (
    <div className=''>
        <Headers/>
        <Outlet/>
    </div>
  )
}

export default Mainlayout