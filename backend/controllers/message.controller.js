import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
      const { message } = req.body;
      const { id: receiverId } = req.params;
      const senderId = req.user._id;
  
      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });
  
      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }
  
      const newMessage = new Message({
        senderId,
        receiverId,
        message,
      });
  
      if (newMessage) {
        conversation.messages.push(newMessage._id); // Update conversation with new message ID
      }
  
      await Promise.all([conversation.save(), newMessage.save()]);
  
      // Socket functionality to send real-time message
      const receiverSocketId = getReceiverSocketId(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("newMessage", newMessage);
      }
  
      res.status(201).json( {newMessage} );
    } catch (error) {
      console.log("Error in the send message controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

export const getMessage = async (req, res) => {
    try{

        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants : {$all :[senderId, userToChatId]}
        }).populate("messages"); //NoT reference but message itself

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;
        res.status(200).json(messages);

    }catch(error){
        console.log("Error in the get message controller",error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}