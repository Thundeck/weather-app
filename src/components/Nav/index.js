import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import r from '../../Routes'
import { useDispatch } from 'react-redux'
import { addCity } from '../../redux/actions'

const Nav = () => {

  const [search, setSearch] = useState("")

  const dispatch = useDispatch()

  const handleClick = () =>{
    dispatch(async() => await addCity(search.trim().toLocaleLowerCase())).then((r) =>  (r === "todo ok")&&setSearch(""))
  }

  return (
    <div className='flex gap-11 items-center px-5 justify-between flex-row w-screen h-16 bg-white shadow-md shadow-slate-500 '>
    <Link to={r.main} className='font-bold duration-200 text-2xl hover:text-gray-200' >Weather</Link>
    <Link className='
    flex justify-center lg:w-72
    items-center h-full w-full duration-200
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