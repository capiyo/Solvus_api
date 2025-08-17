import mongoose from 'mongoose';

const ChatsSchema = new mongoose.Schema({

    caseId:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    },

    posterId:{
        type:String,
        required:true
    }
  
    
   
       
});

const Chat = mongoose.model('Chats', ChatsSchema);

export default Chat;