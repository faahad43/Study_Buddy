import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors"; // Import cors

import messageRoute from "./routes/message.route.js";
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import noteRoute from "./routes/notes.routes.js";
import goalRoute from "./routes/goals.routes.js";
import studyTimeRoute from "./routes/studytime.routes.js";
import sessiontimeRoute from "./routes/sessiontime.routes.js";

import connectTODb from "./db/connectToDb.js";

import { app, server } from "./socket/socket.js";

const PORT = 3000;

// app.use(cors({
//     origin: "http://localhost:5173", // Allow requests from this origin
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
//   }));

app.get("/", (req, res) => {
  res.send("Hello Mllo");
});
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);
app.use("/api/notes", noteRoute);
app.use("/api/goals", goalRoute);
app.use("/api/study-time", studyTimeRoute);
app.use("/api/sessiontime", sessiontimeRoute);

server.listen(PORT, () => {
  connectTODb();
  console.log(`Server is running on ${PORT}`);
});
