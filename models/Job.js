import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    jobID: {
        type: String,
        required: true
    },
    posterId:{
        type:String,
        required:true,
        
    },
    bossPhone:{
        type:String,
        required:true

    },
        agentId:{
        type:String,
       // required:true

    },
        adminId:{
        type:String,
        required:false

    },
    jobTitle: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    datePosted: {
        type: String,
        required: true,
        default:"3:37:17 PM"
    },
    timePosted: {
        type: String,
        required: true,
        default:"5/31/2025"
    },
    posterName: {
        type: String,
        required: true
    },
    status:{
        type:String,
        required:true,

    },

    deadline:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },

    budget:{
        type:String,
        required:true
    }
  
    
   
       
});


const Job = mongoose.model('Job', JobSchema);

export default Job;