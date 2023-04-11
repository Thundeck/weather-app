import React from 'react'
import { Link } from 'react-router-dom'
import r from '../../Routes'

const Footer = () => {
  return (
    <div className=' absolute bottom-0 w-full bg-black h-20 p-4 flex flex-row gap-5 justify-center items-center  '>
        <div>
            <p className='text-white font-bold text-lg'>Contact</p>
        </div>
        <div>
            <Link to={r.about} className='text-white font-bold text-lg'>About</Link>
        </div>
    </div>
  )
}

export default Footer