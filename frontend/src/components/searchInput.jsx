import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const searchInput = () => {
  return (
    <form className="flex items-center gap-3">
        <input type="text" placeholder='search' className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-secondary2 text-text'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
       
    </form>
  )
}

export default searchInput