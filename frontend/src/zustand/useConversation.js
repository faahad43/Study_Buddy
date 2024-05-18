import {create} from 'zustand';

const useConversation = create((set) =>({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    message:[],
    setMessages:(messages) => set({messages}),

}))

export default useConversation;