import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../hooks/useLogout'
import { CiLogout } from "react-icons/ci";

const logoutButton = () => {
  const {loading,logout} = useLogout();
  return (
    <div className='mt-auto mb-10'>
        {!loading ? (
          // <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>
          <CiLogout className='w-6 h-6 cursor-pointer mt-2' onClick={logout} />
        ): (
          <span className='loading loading-spinner'></span>
        )
        }
    </div>
  )
}

export default logoutButton