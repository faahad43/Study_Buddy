import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import cors

import messageRoute from "./routes/message.route.js";
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";

import connectTODb from "./db/connectToDb.js";

import { app, server } from "./socket/socket.js";

const PORT = 3000;

// app.use(cors({
//     origin: "http://localhost:5173", // Allow requests from this origin
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
//   }));

app.get("/",(req,res)=>{
    res.send("Hello Mllo");
})
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

server.listen(PORT, () => {
  connectTODb();
  console.log(`Server is running on ${PORT}`);
});
