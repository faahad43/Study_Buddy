import React from 'react';
import Conversation from './Conversation.jsx';
import useGetConversations from '../hooks/useGetConversations.js';
import { getRandomEmoji } from '../utils/emojis.js';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  
  // Debugging: Check what is returned from useGetConversations
  console.log("CONVERSATIONS type:", typeof conversations);
  console.log("CONVERSATIONS:", conversations);

  if (!Array.isArray(conversations)) {
    // Ensure conversations is an array before calling map
    console.error('Conversations is not an array', conversations);
    return null;
  }

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default Conversations;
