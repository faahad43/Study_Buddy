import express from "express";
import route from "./routes/routes.js";
import connectTODb from "./db/connectToDb.js";


const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello Mllo");
})
app.use(express.json());
app.use('/api/auth',route);

app.listen(PORT,()=>{
    connectTODb();
    console.log(`Server is running on ${PORT}`);
})
