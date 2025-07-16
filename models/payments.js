import mongoose from "mongoose";

const PaymentSchema=mongoose.Schema({
 amount:{
  type:String,
  required:true
 },

 phonenumber:{
  type:String,
  required:true,
 }


})

const Payments=mongoose.model("Payemnts",PaymentSchema)

export default Payments