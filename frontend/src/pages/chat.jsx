import React from 'react'
import background from '../assets/chatIcons/background.jpg';
import MessageSideBar from '../components/messageSideBar';
import MessageContainer from '../components/messageContainer';
import Sidebar from '../components/Sidebar.jsx';

const chat = () => {
  return (
    <div className='flex'>
      <div className="w-[5%] h-screen bg-primary">
          <Sidebar />
        </div>
      <div
      className='bg-cover bg-center h-screen w-[95%] flex items-center justify-center p-4' style={{backgroundImage: `url(${background})`,}}>
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <MessageSideBar/>
      <MessageContainer/>
      </div>
     
      </div>
    </div>
    
  )
}

export default chat