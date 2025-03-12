import React from 'react'
import Logo from '../assets/Logo.png'

function Loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-neutral-600'>
      <img src={Logo} alt='Logo' className='w-40 h-40' />
    </div>
  )
}

export default Loading
