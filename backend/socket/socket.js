import {Server} from 'socket.io';
import http from "http";
import express from "express";


const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:['http://localhost:5713'],
        origin:["GET","POST"]
    }
})
<<<<<<< HEAD
=======

io.on('connection',(socket)=>{
    console.log("a user connected", socket.id);
})

// socket.on("disconnect",()=>{
//     console.log("user disconnected",socket.id)
// })

>>>>>>> 102ba8b295d1c3b630c2e9208e808454b292a9f5
export {app,io,server}