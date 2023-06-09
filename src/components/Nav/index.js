import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import r from '../../Routes'
import { useDispatch } from 'react-redux'
import { addCity } from '../../redux/actions'

const Nav = () => {

  const [search, setSearch] = useState("")

  const dispatch = useDispatch()

  const handleClick = () =>{
    dispatch(addCity(search.trim().toLocaleLowerCase()))
  }

  return (
    <div className='flex md:pt-0 pt-4 pb-4 max-h-52 md:pb-0 md:h-16 gap-4 md:gap-11 items-center px-5 justify-between flex-col md:flex-row w-screen bg-white shadow-md shadow-slate-500 '>
    <Link to={r.main} className='font-bold duration-200 text-2xl hover:text-gray-200' >Weather</Link>
    <Link className='
    flex justify-center lg:w-72
    items-center h-52 lg:h-full w-screen duration-200
    font-bold text-lg text-black hover:bg-black hover:text-white
    ' to={r.about} >About</Link>
      <div className='flex flex-row items-center justify-center'>
        <input
        value={search}
        placeholder='City...'
        className='h-11 lg:w-60 pl-4 bg-gray-200'
        type='text'
        onChange={e => setSearch(e.target.value)}
        />
        <button onClick={handleClick} className='bg-black lg:w-40 text-base font-semibold h-11 text-white px-4 hover:bg-gray-200 hover:text-black duration-200 '>Search</button>
      </div>
    </div>
  )
}

export default Nav