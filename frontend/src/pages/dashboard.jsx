import React, { useState,useEffect } from 'react'
import backgroundVideo1 from '../assets/dashboard/bg1.mp4';
import backgroundVideo2 from '../assets/dashboard/bg2.mp4';
// import backgroundVideo3 from '../assets/dashboard/bg3.mp4';
import Timer from '../components/timer.jsx';
import Todo from '../components/todo.jsx';
import BgSelect from '../components/bgSelect.jsx';
import Sidebar from '../components/Sidebar.jsx';

const dashboard = () => {

const [background,setBackground] = useState(1);
const bgVideo = (id) => {
    setBackground(id);
}


const bgChange = ()=>{
  console.log(background,'bgchange');
  let path=background==1?backgroundVideo1:backgroundVideo2;
  console.log(path);
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
            
        </div>
    </div>

  </div>
  
    </div>
    
  )
}

export default dashboard