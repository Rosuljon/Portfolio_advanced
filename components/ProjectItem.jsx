import React from 'react'
import Image  from 'next/image';
import Link from "next/link";

const ProjectItem = (props) => {
  return (
    <div className='relative flex justify-center items-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image width={800} height={800} className='rounded-xl group-hover:opacity-10'  src={props.project.photo} alt={props.project.name}></Image>
    <div className='hidden absolute group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{props.project.name}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{props.project.framework}</p>
        <Link target='_blank' href={props.project.link}>
        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectItem