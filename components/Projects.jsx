import React from 'react';
import Image  from 'next/image';
import wallet from '../public/assets/projects/wallet.png'
import exp from '../public/assets/projects/exp.png'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">Projects</p>
            <h2 className="py-2">What i've built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex justify-center items-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image src={exp} alt='12'></Image>
                </div>
                <div className='relative flex justify-center items-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                    <Image src={wallet} alt='/'></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects