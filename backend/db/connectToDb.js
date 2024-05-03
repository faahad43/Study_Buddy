import mongoose from "mongoose"

const MONGODB_URL = `mongodb+srv://fahadshah1060:lHhjQkJQG2XkgswT@cluster0.zc6kyke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectTODb = async () =>{
    try{
       await mongoose.connect(MONGODB_URL);
       console.log("Connect to Mongo");
    }catch(error){
        console.log("Error connecting with Database",error)
    }

};

export default connectTODb;