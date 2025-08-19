import mongoose from 'mongoose';

const Chatlist= new mongoose.Schema({

    jobId:{
        type:String,
        required:true,
    },
    jobTitle:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true
    },
    budget:{
        type:String,
        required:true
    },
  
        status:{
        type:String,
        required:true
    }
  
    
   
       
});

const Chat = mongoose.model('Chatlist', Chatlist);

export default Chat;