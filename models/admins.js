import mongoose from "mongoose"

const AdminsSchema=mongoose.Schema({
  jobId:{
    type:String,
    require:true
  },
  adminId:{
    type:String,


  },

});
const Admins = mongoose.model('Admins', AdminsSchema);

export default Admins;