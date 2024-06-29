import React from 'react'
import background from '../assets/chatIcons/background.jpg';
import MessageSideBar from '../components/messageSideBar';
import MessageContainer from '../components/messageContainer';
import Sidebar from '../components/Sidebar.jsx';
import './loginRegistration.css';

const chat = () => {
  return (
    <div className='flex'>
      <div className="w-16 h-screen bg-primary">
          <Sidebar />
        </div>
        {/* style={{backgroundImage: `url(${background})`,}} */}
      <div
      className='bg-cover bg-center h-screen flex-1 flex items-center justify-center p-4 bg-cover' >
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 border-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
      <MessageSideBar/>
      <MessageContainer/>
      </div>
     
      </div>
    </div>
    
  )
}

export default chat