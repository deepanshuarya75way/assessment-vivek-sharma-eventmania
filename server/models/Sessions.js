const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({

    userId :{
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true
    },
    sessionToken :{
      type : String,
      required : true
    },
    activeUser : {
      type :boolean,
      required : true
    }

},{timeStamps : true});
module.exports = mongoose.model('Session',sessionSchema);