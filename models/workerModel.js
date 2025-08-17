import mongoose from 'mongoose';

const WorkerSchema = new mongoose.Schema({
    caseId: {
        type: String,
        required: true
    },
    posterId:{
        type:String,
        required:true,
        
    },

  
 
   

    workerId:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    },


  
    
   
       
});

const WorkerModel = mongoose.model('WorkerChats', WorkerSchema);

export default WorkerModel;