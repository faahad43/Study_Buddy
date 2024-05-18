import React, { useState, useEffect } from 'react';
import image1 from '../assets/bgselect/download.jpeg';
import image2 from '../assets/bgselect/download.jpeg';
import image3 from '../assets/bgselect/download.jpeg';
import image4 from '../assets/bgselect/download.jpeg';
import image5 from '../assets/bgselect/download.jpeg';
import image6 from '../assets/bgselect/download.jpeg';
import image7 from '../assets/bgselect/download.jpeg';
import image8 from '../assets/bgselect/download.jpeg';
import image9 from '../assets/bgselect/download.jpeg';

const buttonImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const GridWidget = ({ display,clickButton }) => {
  const [selectedButton, setSelectedButton] = useState(1);

  // Function to handle button click
  const handleButtonClick = (id) => {
    clickButton(id);
    setSelectedButton(id);
  };

  const renderButtons = () => {
    return buttonImages.map((image, index) => (
      <button
        key={index}
        className="relative rounded-md overflow-hidden m-1 focus:outline-none"
        onClick={() => handleButtonClick(index + 1)}
        style={{ width: 'calc(39.333% - 1.6rem)' }} // Set width with margin
      >
        <img
          src={image}
          alt={`Image ${index + 1}`}
          className="w-full h-full object-cover" // Ensure image covers button
          style={{ objectFit: 'cover' }} // Ensure image covers button
        />
        <div className={`absolute inset-0 bg-black ${selectedButton === index + 1 ? 'bg-opacity-40' : 'bg-opacity-0'} transition-opacity duration-200 opacity-100 hover:opacity-30`}></div>
        <div className={`absolute inset-0 flex justify-center items-center transition-opacity duration-200 ${selectedButton === index + 1 ? 'opacity-100' : 'opacity-0'} hover:opacity-100`}>
          <svg className="w-6 h-6 text-green-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 4.293a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 12.086l8.293-8.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </button>
    ));
  };

  useEffect(() => {
    renderButtons();
  }, [selectedButton]);

  return (
        
    <div className={`flex flex-wrap justify-center items-center w-[300px] p-4 text-light bg-lightdark rounded-lg opacity-90 ${display}`}>
      <h2 className="text-xl font-semibold mb-2">Set Background</h2>
      <div className='flex flex-wrap justify-center items-center'>
      {renderButtons()}
      </div>
    </div>
  
    
  );
};

export default GridWidget;
