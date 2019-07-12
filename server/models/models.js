const mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
  _id:  { type: String },
  title:  { type: String }, 
  description: { type: String, default:""}, 
  completed:  { type: Boolean, default:false }, 
  created_at:  { type: Date, default: "" }, 
  updated_at:  { type: Date, default: "" }, 

}, {timestamps: true})


mongoose.model('User', UserSchema); 