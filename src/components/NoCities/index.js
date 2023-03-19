import React from 'react'

const NoCities = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8' >
        <p className=' text-4xl md:text-5xl font-extrabold'>No cities?</p>
        <p className='text-gray-400 text-9xl '>
        <i class="fa-solid fa-tornado"></i>
        </p>
        <p className='text-4xl text-center font-extrabold' >
        Please, search for a city to know your weather!
        </p>
        </div>
  )
}

export default NoCities