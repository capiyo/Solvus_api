import mongoose, { Mongoose } from "mongoose";

const LikesSchema= new mongoose.Schema({
  likes:{
    type:String,
    
  },
  jobId:{
    type:String,
    
  }


})
const Likes=mongoose.model("Likes",LikesSchema)

export default Likes