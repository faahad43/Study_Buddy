import React, { useState, useEffect } from 'react';
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
import QuoteGenerator from '../components/QuoteGenerator.jsx'; // Import the new component

const Dashboard = () => {
  const [background, setBackground] = useState(1);
  const [showTimer, setShowTimer] = useState(true);
  const [showTodo, setShowTodo] = useState(true);
  const [showBgSelect, setShowBgSelect] = useState(false);
  const [showAudioWidget, setShowAudioWidget] = useState(true);
  const [showNotesWidget, setShowNotesWidget] = useState(true);
  const [showQuoteGenerator, setShowQuoteGenerator] = useState(false); // New state for QuoteGenerator

  const bgVideo = (id) => {
    setBackground(id);
  };

  const bgChange = () => {
    console.log(background, 'bgchange');
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
          <source src={path} type="video/mp4" />
        </video>
      </div>
    );
  };

  useEffect(() => {
    bgChange();
  }, [background]);

  const handleButtonClick = (component) => {
    switch (component) {
      case 'timer':
        setShowTimer((prev) => !prev);
        break;
      case 'todo':
        setShowTodo((prev) => !prev);
        break;
      case 'bgSelect':
        setShowBgSelect((prev) => {
          if (!prev) setShowAudioWidget(false);
          return !prev;
        });
        break;
      case 'audioWidget':
        setShowAudioWidget((prev) => {
          if (!prev) setShowBgSelect(false);
          return !prev;
        });
        break;
      case 'notesWidget':
        setShowNotesWidget((prev) => !prev);
        break;
      case 'quoteGenerator': // New case for QuoteGenerator
        setShowQuoteGenerator((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <div className='flex'>
      <div className="w-[5%] h-screen bg-primary">
        <Sidebar />
      </div>
      <div className="relative h-screen w-[95%]">
        {bgChange()}
        <div className="relative z-10 flex flex-col h-screen w-[100%]">
          {/* Header with buttons */}
          <div className='lg:h-[10%] 2xl:h-[15%] flex justify-center gap-4 items-center'>
            <button className='p-2 bg-dark rounded opacity-80 hover:scale-110 hover:opacity-100' onClick={() => handleButtonClick('timer')}>⏱️</button>
            <button className='p-2 bg-dark rounded opacity-80 hover:scale-110 hover:opacity-100' onClick={() => handleButtonClick('todo')}>📈</button>
            <button className='p-2 bg-dark rounded opacity-80 hover:scale-110 hover:opacity-100' onClick={() => handleButtonClick('bgSelect')}>🌆</button>
            <button className='p-2 bg-dark rounded opacity-80 hover:scale-110 hover:opacity-100' onClick={() => handleButtonClick('audioWidget')}>🎙️</button>
            <button className='p-2 bg-dark rounded opacity-80 hover:scale-110 hover:opacity-100' onClick={() => handleButtonClick('notesWidget')}>📝</button>
            <button className='p-2 bg-dark rounded opacity-80 hover:scale-110 hover:opacity-100' onClick={() => handleButtonClick('quoteGenerator')}>💬</button>
          </div>
          {/* Main content */}
          <div className='lg:h-[90%]  2xl:h-[85%] flex justify-between mx-5'>
            <div className='flex flex-col gap-7 lg:mt-0 2xl:mt-4'>
              <div className='h-[40%]'>
                <Timer display={!showTimer ? 'hidden' : ''} />
              </div>
              <Todo display={!showTodo ? 'hidden' : ''} />
            </div>
            <div className='w-[40%] 2xl:mb-[10%]'>
                <QuoteGenerator display={!showQuoteGenerator ? 'hidden' : ''} />
            </div>
            <div className='flex flex-col gap-3'>
              <div className='h-[47%] 2xl:h-[51%]'>
                <AudioWidget display={!showAudioWidget ? 'hidden' : ''} />
                <BgSelect clickButton={bgVideo} display={!showBgSelect ? 'hidden' : ''} />
              </div>
              <NotesWidget display={!showNotesWidget ? 'hidden' : ''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
