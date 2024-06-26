import React from 'react'
import {CodeBracketIcon, EyeIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({imageURL, title, description, gitURL, previewURL}) => {
  return (
    <div>
        <div 
            className='h-52 md:h-72 rounded-t-xl relative group' 
            style={{background: `url(${imageURL})`, backgroundSize:'cover'}}
        >
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl">
                <Link href={gitURL} className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#DBBBF5] hover:border-white group/link'>
                    <CodeBracketIcon className='h-10 w-10 text-[#DBBBF5] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
                </Link>
                <Link href={previewURL} className='h-14 w-14 ml-2 border-2 relative rounded-full border-[#DBBBF5] hover:border-white group/link'>
                    <EyeIcon className='h-10 w-10 text-[#DBBBF5] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
                </Link>
            </div>
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
            <h5 className='font-semibold text-xl mb-2'>{title}</h5>
            <p className='text-[#DBBBF5]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard