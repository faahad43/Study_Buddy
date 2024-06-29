import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../zustand/useConversation'
import { useAuthContext } from '../context/AuthContext'

const messageContainer = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();

  useEffect(() => {
    //clean function (unmount)
    return ()=> setSelectedConversation(null)
  },[setSelectedConversation])

  return (
    <div className='md:min-w-[550px] flex flex-col'>
      {!selectedConversation ? <NoChatSelected/> :(
          <>
          {/* Header */}
            <div className='bg-secondary px-4 py-2 mb-2'>
              <span className="label-text text-text">To:</span>
              <span className="text-blue5 font-bold">{selectedConversation.firstname}</span>
            </div>
    
            <Messages/>
            <MessageInput/>
          </>
      )}
      
    </div>
  )
}

export default messageContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const firstName = capitalizeFirstLetter(authUser.firstname.toLowerCase());
  const lastName = capitalizeFirstLetter(authUser.lastname.toLowerCase());

  const fullName = `${firstName} ${lastName}`;
  return (
    <div className='flex items-center justify-center h-full'>
      <div className="px-4 text-center sm:text-lg md:text-xl text-primary font-semibold flex flex-col items-center gap-2">
        <p>Welcome 🖐 {fullName}</p>
        <p className='text-text text-lg'>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center"/>
      </div>
      
    </div>
  )
}