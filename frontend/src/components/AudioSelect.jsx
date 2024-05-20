import React, { useState, useRef } from 'react';

// Import your audio file
import rainSound from '../assets/sound/rain.wav';
import waterSound from '../assets/sound/waterfall.wav';
import piano from '../assets/sound/piano.wav';
import forest from '../assets/sound/forest.wav';
import fire from '../assets/sound/fire.wav';
import jazz from '../assets/sound/jazz.mp3';

// Define audio tracks
const audioTracks = [
  { id: 1, name: 'Rain sounds', src: rainSound },
  { id: 2, name: 'Piano music', src: piano },
  { id: 3, name: 'Fireplace sounds', src: fire },
  { id: 4, name: 'Jazz music', src: jazz },
  { id: 5, name: 'WaterFall sounds', src: waterSound },
  { id: 6, name: 'Forest sounds', src: forest },
];

const AudioWidget = ({display}) => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const audioRefs = useRef(audioTracks.map(() => React.createRef()));

  // Handle button click to play or stop audio
  const handleButtonClick = (id) => {
    if (selectedTrack === id) {
      // Stop currently playing track
      audioRefs.current[id - 1].current.pause();
      audioRefs.current[id - 1].current.currentTime = 0;
      setSelectedTrack(null);
    } else {
      // Stop all tracks first
      audioRefs.current.forEach((audioRef) => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      });
      // Play the selected track
      audioRefs.current[id - 1].current.play();
      setSelectedTrack(id);
    }
  };

  return (
    <div className={`p-4 bg-lightdark rounded-lg opacity-90 w-[300px] 2xl:h-[400px]  h-[300px] ${display}`}>
      <h2 className="text-xl font-semibold mb-2 text-text text-center">Select Music</h2>
      <div className="flex flex-col space-y-1 2xl:space-y-2">
        {audioTracks.map((track, index) => (
          <div key={track.id} className="flex items-center gap-2 p-1 2xl:p-2 bg-dark rounded-full">
            <button
              onClick={() => handleButtonClick(track.id)}
              className="ml-2 pt-1 focus:outline-none"
            >
              {selectedTrack === track.id ? (
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0-4.418-3.582-8-8-8S2 5.582 2 10s3.582 8 8 8 8-3.582 8-8zM8 6a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-light" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.018 14L14.41 8 4.018 2z" />
                </svg>
              )}
            </button>
            <audio ref={audioRefs.current[index]} loop>
              <source src={track.src} type="audio/mp3" />
            </audio>
            <span className="text-light">{track.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioWidget;
