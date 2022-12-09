import React from 'react'
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className='fixed w-full h-20 shadow-lg z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Image src="/assets/r_dev.png" alt="logo" width='90' height='50'></Image>
      </div>
    </div>
  )
}

export default NavBar