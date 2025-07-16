import mongoose from 'mongoose';

const CaseSchema = new mongoose.Schema({
    caseId: {
        type: String,
        required: true
    },
    posterId:{
        type:String,
        required:true,
        
    },
    caseTitle: {
        type: String,
        required: true
    },
    posterName: {
        type: String,
        required: true
    },
    posterEmail: {
        type: String,
        required: true,
        
    },
    workerName: {
        type: String,
        required: true,
        
    },
    workerEmail: {
        type: String,
        required: true
    },

    workerId:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    },

    status:{
        type:String,
        required:true
    }
  
    
   
       
});

const Case = mongoose.model('Case', CaseSchema);

export default Case;