const mongoose = require("mongoose");
const user = new mongoose.Schema({
  
    userName : {
      type : String
    },
    age : {
      type : Number
    },
    DOB : {
      type : String
    },
    Location : {
      type : String
    },
    
    
  
  })
  
  const userDB = mongoose.model('kalaiarasi',user)

  module.exports=userDB;