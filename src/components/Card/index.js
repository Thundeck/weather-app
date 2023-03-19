import React from 'react'
import s from './Card.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {deleteCity} from '../../redux/actions'

const Card = ({city}) => {

  const dispatch = useDispatch()

  const cities = useSelector(state => state.cities)

  const handleClick = () => {
    dispatch(deleteCity(city.sys.id, cities))
  }

  return (
    <div className={` ${s[city.weather[0].description.split(" ").join("_")]} flex relative flex-col shadow-lg shadow-gray-500 items-center pr-4 w-screen md:w-60 md:h-80`}>
      <button onClick={handleClick} className='absolute top-0 pb-1 right-0 w-12 h-12 bg-black text-white text-2xl font-bold hover:bg-white hover:text-black duration-200' >x</button>
      <div className='flex pl-4 items-center w-full font-semibold text-lg text-white bg-black h-12' >
        {city.name}
      </div>
      <div className='flex justify-center items-center md:flex-col flex-row'>
      <div className='flex mt-4 flex-col justify-center items-center' >
        <div className='flex flex-col justify-center items-center h-32 '>
        <p className='font-bold text-lg text-white' >{city.weather[0].main}</p>
        <img className=' animate-pulse' alt={`${city.weather[0].main}`} src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} />
        </div >
      </div>

      <div className='flex flex-col items-center gap-4 justify-center'>
          <p className='text-white text-lg  md:py-1 md:px-4 py-2 px-4 font-semibold rounded-md bg-gray-900 bg-opacity-50 ' >Min Temp : {city.main.temp_min}</p>
          <p className='text-white text-lg  md:py-1 md:px-4 py-2 px-4 font-semibold rounded-md bg-gray-900 bg-opacity-50' >Max Temp : {city.main.temp_max}</p>
      </div>
      </div>
    </div>
  )
}

export default Card