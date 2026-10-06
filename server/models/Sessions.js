const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({

    userId :{
      type : mongoose.Schema.Types.ObjectId,
      ref : "Session",
      required : true
    },
    sessionToken :{
      type : String,
      required : true
    },
    activeUser : {
      type :boolean,
      default : false
    }

},{timeStamps : true});
module.exports = mongoose.model('Session',sessionSchema);