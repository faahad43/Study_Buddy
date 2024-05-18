import React from 'react'

const conversation = () => {
  return (
   <>
   <div className='flex gap-2 items-center hover:bg-secondary2 rounded p-2 py-1 cursor-pointer '>
    <div className="avatar online">
          <div className='w-12 rounded-full'>
            <img src="https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user avater" />
          </div>
    </div>

    <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-text'>
                    John Doe
            </p>
            <span className='text-xl'>🎃</span>
        </div>
    </div>
   </div>
   <div className='divider my-0 py-0 h-1'/>
   </>
  )
}

export default conversation