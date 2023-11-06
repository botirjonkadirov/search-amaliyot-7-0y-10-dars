import React from 'react'
import { signUpLoginWithGoogle } from '../firebase/FireBase' 
function Login() {
  return (
   <>
    <div className='container flex  align-items-center -center justify-center gap-10 mt-10 text-3xl'>
        <h1>Login with Google account</h1>
        <button onClick={signUpLoginWithGoogle} className='btn btn-secondary '>Sign in </button>
    </div>
   </>
  )
}

export default Login