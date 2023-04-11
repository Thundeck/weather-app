import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import NoCities from '../NoCities'

const CardContainer = () => {

  const cities = useSelector(state => state.cities)

  return (
    <div className='mt-4 p-4 h-full w-full'>
      <p className='text-4xl pl-4 border-black border-b-2 font-extrabold text-black'>Cities</p>
      <div className='flex mt-4 gap-10 h-full justify-center items-center flex-row flex-wrap'>
        {
          cities.length ? cities.map(e => (
            <Card key={e.sys.id} city={e}/>)) : <NoCities/>
        }
      </div>
    </div>
  )
}

export default CardContainer