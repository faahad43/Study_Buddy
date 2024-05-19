import React, { useState,useEffect } from 'react'
import backgroundVideo1 from '../assets/dashboard/bg1.mp4';
import backgroundVideo2 from '../assets/dashboard/bg2.mp4';
import backgroundVideo3 from '../assets/dashboard/bg3.mp4';
import backgroundVideo4 from '../assets/dashboard/bg4.mp4';
import backgroundVideo5 from '../assets/dashboard/bg5.mp4';
import backgroundVideo6 from '../assets/dashboard/bg6.mp4';
import backgroundVideo7 from '../assets/dashboard/bg7.mp4';
import backgroundVideo8 from '../assets/dashboard/bg8.mp4';
import backgroundVideo9 from '../assets/dashboard/bg9.mp4';
import Timer from '../components/timer.jsx';
import Todo from '../components/todo.jsx';
import BgSelect from '../components/bgSelect.jsx';
import Sidebar from '../components/Sidebar.jsx';
import AudioWidget from '../components/AudioSelect.jsx';
import NotesWidget from '../components/NotesWidget.jsx';

const dashboard = () => {

const [background,setBackground] = useState(1);
const bgVideo = (id) => {
    setBackground(id);
}


const bgChange = ()=>{
  console.log(background,'bgchange');
  let path;
  switch (background) {
    case 1:
      path = backgroundVideo1;
      break;
    case 2:
      path = backgroundVideo2;
      break;
    case 3:
      path = backgroundVideo3;
      break;
    case 4:
      path = backgroundVideo4;
      break;
    case 5:
      path = backgroundVideo5;
      break;
    case 6:
      path = backgroundVideo6;
      break;
    case 7:
      path = backgroundVideo7;
      break;
    case 8:
      path = backgroundVideo8;
      break;
    case 9:
      path = backgroundVideo9;
      break;
    default:
      path = backgroundVideo1;
  }
  return (
    <div>
        <video key={background} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={path} type="video/mp4"/>
        </video>
    </div>
  )
      
}
useEffect(()=>{
  bgChange();
},[background])

  return (
    <div className='flex'>
    <div className="w-[5%] h-screen bg-primary">
          <Sidebar />
      </div>
    <div className="relative h-screen w-[95%]">
    {bgChange()}
    {/* The widgets are styled here */}
    <div className="relative z-10 flex">
        {/* I HAVE  divided the whole page vertically this is timer and goals area */}
        <div className='flex-1'>
            <Timer display={"hiddenhu"}/>
            <BgSelect clickButton={bgVideo}/>
            <Todo/>
        </div>
        {/* this is area of video audio background */}
        <div className='flex-1'>
            <AudioWidget/>
            <NotesWidget/>
        </div>
    </div>

  </div>
  
    </div>
    
  )
}

export default dashboard