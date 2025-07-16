import mongoose from "mongoose"

const ApplicantionSchema=mongoose.Schema({
  jobId:{
    type:String,
    require:true
  },
  workerName:{
    type:String,


  },
  workerEmail:{
    type:String

  },
  workerId:{
    type:String,

  }
});
const Applications = mongoose.model('Applications', ApplicantionSchema);

export default Applications;