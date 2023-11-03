import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaSun, FaMoon} from 'react-icons/fa6'
function Headers() {
    function getThemeType (){
        return localStorage.getItem('themetype')||'light'
    }
const [mode, setMode]= useState(getThemeType)
useEffect(()=>{
  document.documentElement.dataset.theme=mode
  localStorage.setItem('themetype', mode)
},[mode])

function changeTypeMode (){
    setMode((p)=>{
        return p=='light'?'dark':'light'
    })
}

  return (
    <div className='container flex w-100 justify-between bg-slate-500 text-3xl py-4'>
               <h1 className='flex gap-5'>Unsplash <span onClick={changeTypeMode}>{mode=='light'?<FaMoon/>:<FaSun/>}</span></h1>

       <div className='flex justify-between gap-3'>

        <Link to={'/'}>Home</Link>
        <Link to={'about'}>About</Link>
        <Link to={'contact'}>Contact</Link>
       </div>

    </div>
  )
}

export default Headers