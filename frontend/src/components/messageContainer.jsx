import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'

const messageContainer = () => {
  const noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChatSelected ? <NoChatSelected/> :(
          <>
          {/* Header */}
            <div className='bg-secondary px-4 py-2 mb-2'>
              <span className="label-text text-text">To:</span>
              <span className="text-blue5 font-bold">John Doe</span>
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
  return (
    <div className='flex items-center justify-center h-full'>
      <div className="px-4 text-center sm:text-lg md:text-xl text-primary font-semibold flex flex-col items-center gap-2">
        <p>Welcome 🖐 John Doe</p>
        <p className='text-text text-lg'>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center"/>
      </div>
      
    </div>
  )
}